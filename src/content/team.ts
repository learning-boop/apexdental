// Doctor and staff bios, rewritten from the clinic's previous website.
// TODO(client): confirm the team is current and send professional headshots.

export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  image: string | null;
  imagePosition?: string;
  summary: string;
  bio: string[];
  education: string[];
  training: string[];
  memberships: string[];
  personal: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-sunil-kumar-reddy",
    name: "Dr. Sunil Kumar Reddy",
    credentials: "DMD, BDS",
    role: "General & Implant Dentist",
    image: null,
    summary:
      "Implant training through the AAID and cosmetic smile design, with years of experience caring for children, anxious patients and elderly patients in long-term care.",
    bio: [
      "Dr. Reddy began his career in India, practising general and cosmetic dentistry for three and a half years before moving to the United States, where he earned his Doctor of Dental Medicine at Rutgers.",
      "He has trained in surgical implant placement and restoration with the American Academy of Implant Dentistry, and in cosmetic dentistry, smile design and occlusal rehabilitation with renowned cosmetic dentist Dr. Stephen Phelan of Ontario, Canada.",
      "Having worked in several pediatric dental clinics, he is experienced with very young and dental-phobic patients and uses gentle anxiety-relief techniques. His work in skilled nursing and long-term care facilities gave him a special commitment to compassionate care for elderly and medically complex patients.",
    ],
    education: [
      "Doctor of Dental Medicine (DMD), Rutgers School of Dental Medicine, Newark, NJ — 2011",
      "MS in Environmental Health, University of Findlay, Ohio",
      "Bachelor of Dental Surgery (BDS), Government Dental College & Hospital, Hyderabad — 2003, plus a one-year General Practice Residency",
    ],
    training: [
      "Surgical implant placement and restoration — American Academy of Implant Dentistry",
      "Cosmetic dentistry, smile design and occlusal rehabilitation — Dr. Stephen Phelan",
      "Ongoing continuing education in the latest dental technology",
    ],
    memberships: [
      "American Academy of Implant Dentistry (AAID)",
      "American Academy of Cosmetic Dentistry (AACD)",
      "American Dental Association (ADA)",
      "Mission of Mercy volunteer",
    ],
    personal: "Outside the clinic he enjoys time with his family, travelling, playing pool and tennis.",
  },
  {
    slug: "dr-suneel-namburi",
    name: "Dr. Suneel Namburi",
    credentials: "DMD, MDS, MFDS",
    role: "General & Restorative Dentist",
    image: "/images/team/dr-suneel-namburi-portrait.jpg",
    imagePosition: "50% 30%",
    summary:
      "Specialist training in prosthodontics and more than a decade in general, cosmetic and advanced restorative dentistry. A commissioned officer in the U.S. Army.",
    bio: [
      "Dr. Namburi completed a three-year specialist residency in prosthodontics—the replacement and restoration of teeth—before practising privately and as a visiting specialist prosthodontist in Abu Dhabi, UAE.",
      "He passed the Membership exam of the Royal College of Physicians and Surgeons of Glasgow in 2006, then earned his DMD at Boston University’s Goldman School of Dental Medicine. He keeps up with continuing education so patients receive comprehensive, up-to-date care.",
      "He takes pride in providing the highest quality general, cosmetic and advanced restorative dentistry, and serves as a commissioned officer in the U.S. Army with the 491st Medical Company.",
    ],
    education: [
      "Doctor of Dental Medicine (DMD), Boston University Goldman School of Dental Medicine — 2011",
      "MFDS, Royal College of Physicians and Surgeons of Glasgow, Scotland — 2006",
      "MDS in Prosthodontics (3-year residency), Manipal University",
      "Bachelor of Dental Surgery (BDS), Government Dental College & Hospital, Vijayawada, plus a General Practice Residency",
    ],
    training: [
      "Specialist training in prosthodontics (crowns, bridges, dentures and implant restorations)",
      "Visiting specialist prosthodontist, Abu Dhabi, UAE",
      "Ongoing continuing education",
    ],
    memberships: ["American Dental Association (ADA)", "American Academy of Implant Dentistry (AAID)"],
    personal: "In his spare time he enjoys being with family and friends.",
  },
];

export type StaffMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  bio: string;
};

export const staff: StaffMember[] = [
  {
    name: "Erica Castillo",
    role: "Patient Coordinator",
    image: "/images/team/staff-erica-castillo.jpg",
    imagePosition: "50% 25%",
    bio: "Erica began in dentistry in 2009 at a pediatric office and has since managed three dental practices. She holds an associate degree in business administration and loves helping patients understand why a healthy smile matters. Outside work she’s a movie fan who enjoys hiking and reading.",
  },
  {
    name: "Marylynn",
    role: "Dental Assistant",
    image: "/images/team/staff-marylynn.jpg",
    imagePosition: "50% 18%",
    bio: "Marylynn trained at the New Mexico Institute of Dental Assisting and holds a state radiology license. Caring and compassionate, she makes a point of making every patient feel welcome and comfortable. She enjoys reading, crafts and time with family.",
  },
  {
    name: "Desiree Martinez",
    role: "Dental Assistant",
    image: "/images/team/staff-desiree-martinez.jpg",
    imagePosition: "50% 20%",
    bio: "Originally from Taos, Desiree spent six years in a dental lab making crowns and bridges before training as a dental assistant. She loves helping people smile and feel comfortable—and spends her time off hiking, rafting and skiing.",
  },
  {
    name: "Sophia Wilson",
    role: "Patient Coordinator",
    image: "/images/team/staff-sophia-wilson.jpg",
    imagePosition: "50% 20%",
    bio: "Raised in a small Massachusetts town where everyone treats each other with kindness and respect, Sophia’s goal every day is for each patient to leave fully looked after—and smiling.",
  },
];
