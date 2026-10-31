// One place for the clinic's contact details, so every page stays in sync.
// TODO(client): confirm the main phone number and hours. The old site also listed 505-433-5411.
export const site = {
  name: "Apex Dental NM",
  shortName: "Apex Dental",
  url: "https://www.apexdentalnm.com",
  phone: "505-585-5157",
  phoneHref: "tel:5055855157",
  email: "apexdentalnm@gmail.com",
  address: {
    street: "6330 Riverside Plaza Lane NW, Suite 165",
    city: "Albuquerque",
    region: "NM",
    postalCode: "87120",
    country: "US",
  },
  mapsUrl: "https://maps.google.com/?q=6330+Riverside+Plaza+Ln+NW+Suite+165+Albuquerque+NM+87120",
  mapsEmbed:
    "https://www.google.com/maps?q=6330+Riverside+Plaza+Ln+NW+Suite+165,+Albuquerque,+NM+87120&output=embed",
  facebook: "https://www.facebook.com/Apex-Dental-189166335022732/",
  parking: "Plenty of parking behind the building",
  hours: [
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "19:00" },
    { day: "Sunday", open: null, close: null },
  ] as { day: string; open: string | null; close: string | null }[],
};

export function formatHour(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${suffix}` : `${hour} ${suffix}`;
}

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
