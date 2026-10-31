import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  devIndicators: false,

  // Old apexdentalnm.com pages -> new pages (permanent, so search rankings carry over).
  async redirects() {
    const map: [string, string][] = [
      ["/index.html", "/"],
      ["/about.html", "/about"],
      ["/doctors.html", "/our-team/doctors"],
      ["/doctor.html", "/our-team/staff"],
      ["/emergencydental.html", "/services/emergency-dental-care"],
      ["/oralsurgery.html", "/services/tooth-extractions"],
      ["/oralSurgery.html", "/services/tooth-extractions"],
      ["/rootcanals.html", "/services/root-canal-treatment"],
      ["/dentalimplants.html", "/services/dental-implants"],
      ["/crownsbridges.html", "/services/crowns-and-bridges"],
      ["/dentures.html", "/services/dentures-and-partials"],
      ["/gum.html", "/services/gum-disease-treatment"],
      ["/toothwhitening.html", "/services/teeth-whitening"],
      ["/cosmeticdentistry.html", "/services/cosmetic-dentistry"],
      ["/orthodontics.html", "/services/clear-aligners"],
      ["/clearaligners.html", "/services/clear-aligners"],
      ["/generaldentistry.html", "/services/general-dentistry"],
      ["/childrendentistry.html", "/services/childrens-dentistry"],
      ["/sedation.html", "/services/sedation-dentistry"],
      ["/insurance.html", "/new-patients/insurance-and-financing"],
      ["/blog1.html", "/new-patients/registration-forms"],
      ["/blog2.html", "/new-patients/post-op-instructions"],
      ["/special-offers.html", "/offers"],
      ["/contacts.html", "/contact"],
      ["/our-team", "/our-team/doctors"],
      ["/new-patients", "/new-patients/your-first-visit"],
    ];
    return map.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
