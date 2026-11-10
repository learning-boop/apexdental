/**
 * Google reviews for Apex Dental, fetched live from the official
 * Google Places API (New). Server-side only — the API key never reaches
 * the browser.
 *
 * Env vars (.env.local locally, Project → Settings → Environment Variables on Vercel):
 *   GOOGLE_PLACES_API_KEY  required  Key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID        optional  e.g. ChIJ...  (looked up automatically if missing)
 */

export type GoogleReview = {
  id: string;
  authorName: string;
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
  reviewUrl?: string;
};

export type GooglePlaceReviews = {
  placeId: string;
  name: string;
  rating: number;
  totalReviews: number;
  mapsUrl: string;
  writeReviewUrl: string;
  reviews: GoogleReview[];
};

const API = "https://places.googleapis.com/v1";

/** How often Next.js refreshes the reviews (seconds). */
const REVALIDATE = 60 * 60 * 12; // twice a day

/** Used only when GOOGLE_PLACE_ID is not set. */
const PLACE_QUERY = "Apex Dental, Albuquerque, NM";
const PLACE_LOCATION = { latitude: 35.1571058, longitude: -106.6794415 };

const DETAILS_FIELDS = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

type PlacesReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  publishTime?: string;
  googleMapsUri?: string;
};

type PlaceDetails = {
  id: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

async function findPlaceId(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(`${API}/places:searchText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress",
      },
      body: JSON.stringify({
        textQuery: PLACE_QUERY,
        maxResultCount: 1,
        locationBias: { circle: { center: PLACE_LOCATION, radius: 1000 } },
      }),
      next: { revalidate: 60 * 60 * 24 * 30 },
    });
    if (!res.ok) {
      console.error(`[google-reviews] Place lookup failed (${res.status}): ${await res.text()}`);
      return null;
    }
    const data = (await res.json()) as {
      places?: { id: string; displayName?: { text?: string }; formattedAddress?: string }[];
    };
    const place = data.places?.[0];
    if (!place) {
      console.error(`[google-reviews] No place found for "${PLACE_QUERY}".`);
      return null;
    }
    console.info(
      `[google-reviews] Found "${place.displayName?.text}" (${place.formattedAddress}). ` +
        `Add GOOGLE_PLACE_ID=${place.id} to your env to skip this lookup.`,
    );
    return place.id;
  } catch (err) {
    console.error("[google-reviews] Place lookup error:", err);
    return null;
  }
}

/**
 * Returns the place's rating, total review count and up to 5 reviews
 * (Google's "most relevant"). Returns null on any failure so the page
 * still renders — the section simply hides itself.
 */
export async function getGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn("[google-reviews] GOOGLE_PLACES_API_KEY is not set; reviews section hidden.");
    return null;
  }

  const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(apiKey));
  if (!placeId) return null;

  try {
    const res = await fetch(`${API}/places/${encodeURIComponent(placeId)}?languageCode=en`, {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": DETAILS_FIELDS },
      next: { revalidate: REVALIDATE, tags: ["google-reviews"] },
    });
    if (!res.ok) {
      console.error(`[google-reviews] Places API error (${res.status}): ${await res.text()}`);
      return null;
    }

    const place = (await res.json()) as PlaceDetails;

    const reviews: GoogleReview[] = (place.reviews ?? []).map((r, i) => ({
      id: r.name ?? `review-${i}`,
      authorName: r.authorAttribution?.displayName ?? "Google user",
      authorUrl: r.authorAttribution?.uri,
      authorPhoto: r.authorAttribution?.photoUri,
      rating: r.rating ?? 0,
      text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
      relativeTime: r.relativePublishTimeDescription ?? "",
      publishTime: r.publishTime,
      reviewUrl: r.googleMapsUri,
    }));

    return {
      placeId: place.id,
      name: place.displayName?.text ?? "Apex Dental",
      rating: place.rating ?? 0,
      totalReviews: place.userRatingCount ?? 0,
      mapsUrl: place.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${place.id}`,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${place.id}`,
      reviews,
    };
  } catch (err) {
    console.error("[google-reviews] Fetch error:", err);
    return null;
  }
}
