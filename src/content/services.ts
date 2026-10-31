// Every treatment page is built from this file. The order of fields follows the
// homepage story: what hurts (pain) -> what it stops you doing (signs) ->
// what waiting costs (impact) -> how Apex helps -> treatment -> aftercare -> FAQs.
// Content is rewritten from the clinic's previous website.

export type HelpKey =
  | "same-day"
  | "saturday"
  | "sedation"
  | "insurance"
  | "technology"
  | "gentle"
  | "experience"
  | "consult"
  | "family"
  | "location";

type Item = { name: string; body: string };

export type Service = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  title: string;
  titleAccent: string;
  intro: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  pain: string;
  signs: string[];
  impact: string;
  goodForHeading: string;
  goodFor: string[];
  notFor?: string[];
  help: HelpKey[];
  firstAid?: Item[];
  details?: { heading: string; intro?: string; items: Item[] }[];
  steps: { title: string; body: string }[];
  aftercareHeading?: string;
  aftercare: string[];
  callUsIf?: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  urgent?: boolean;
};

export const services: Service[] = [
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    image: "/images/sections/14-toothache-card-all-devices.jpg",
    imageAlt: "Woman at home holding her cheek with a toothache",
    title: "In pain right now?",
    titleAccent: "We can often see you today.",
    intro:
      "Severe toothache, a broken or knocked-out tooth, swelling or a lost filling—call us first. Fast treatment can stop a small problem becoming a bigger one.",
    badge: "Same-day emergency appointments",
    metaTitle: "Emergency Dentist in West Albuquerque | Same-Day Appointments",
    metaDescription:
      "Toothache, broken or knocked-out tooth, abscess or lost filling? Apex Dental offers same-day emergency dental appointments on Albuquerque’s west side. Call 505-585-5157.",
    summary: "Same-day help for severe pain, broken or knocked-out teeth, swelling and lost fillings.",
    pain:
      "Dental pain usually has a specific cause: a deep cavity reaching the nerve, a crack in the tooth, or an infection (abscess) around the root or gums. The cause decides the treatment, so the first step is always a careful emergency exam.",
    signs: [
      "Pain that’s constant and doesn’t stop after you finish chewing",
      "A broken, chipped or cracked tooth",
      "A tooth that has been knocked out",
      "Swelling, redness or fever with tooth pain",
      "A lost filling or crown, and the tooth hurts with cold",
      "Severe pain from braces or around a wisdom tooth",
    ],
    impact:
      "Infections spread, and broken teeth let bacteria in. Waiting can turn a filling into a root canal, or a root canal into an extraction. Fast treatment gives the best chance of saving the tooth.",
    goodForHeading: "Emergencies we treat",
    goodFor: [
      "Severe tooth pain or sensitivity",
      "Broken, chipped or cracked teeth",
      "Knocked-out teeth",
      "Infected teeth and abscesses",
      "Broken or loose crowns and bridges",
      "Lost fillings",
      "Severe discomfort with braces",
      "Infection around wisdom teeth",
      "Emergency root canals",
    ],
    help: ["same-day", "saturday", "sedation", "insurance"],
    firstAid: [
      {
        name: "Severe toothache",
        body: "Rinse with warm salt water (half a teaspoon of salt in a cup of warm water). Gently floss out any trapped food. An over-the-counter pain reliever can help until you see us. Avoid chewing on that side.",
      },
      {
        name: "Broken or chipped tooth",
        body: "Avoid very hot or cold food and drinks and chew on the other side. Keep any broken pieces and call us—the sooner it’s sealed, the lower the risk of infection.",
      },
      {
        name: "Knocked-out adult tooth",
        body: "Pick it up by the crown, never the root. Rinse it briefly in milk if it’s dirty. Put it back in the socket if you can, or keep it in milk or inside your cheek, and come in straight away. Never put a baby tooth back in.",
      },
      {
        name: "Swelling or abscess",
        body: "Swelling, fever or a bitter taste can mean infection—call us the same day. If swelling affects your breathing or swallowing, go to the ER or call 911.",
      },
    ],
    steps: [
      { title: "Call us", body: "Tell us what’s happening and we’ll find the earliest time—often the same day." },
      { title: "Emergency exam and x-ray", body: "We find the cause and check the teeth and gums around it." },
      { title: "Relief first", body: "We treat the pain and any infection, then explain your options and costs." },
      { title: "Fix it properly", body: "A filling, crown, root canal or extraction, with any follow-up planned." },
    ],
    aftercare: [
      "Take any medicine exactly as prescribed",
      "Keep brushing twice a day and flossing gently",
      "Avoid chewing on the treated side until it feels comfortable",
      "Keep your follow-up appointment so the repair lasts",
    ],
    callUsIf: [
      "Pain gets worse instead of better",
      "Swelling spreads or you develop a fever",
      "Bleeding won’t stop with gentle pressure",
      "Swelling affects breathing or swallowing—go to the ER or call 911",
    ],
    faqs: [
      {
        q: "Do you really see emergencies the same day?",
        a: "We keep time for emergencies and do our best to see you the same day. Call us as early as you can on 505-585-5157 so we can fit you in.",
      },
      {
        q: "What counts as a dental emergency?",
        a: "Severe or constant pain, a knocked-out or broken tooth, swelling, an abscess, a lost filling or crown with pain, or bleeding that won’t stop. If you’re unsure, call us and we’ll help you decide.",
      },
      {
        q: "Should I go to the ER for a toothache?",
        a: "Most hospital ERs can manage pain and infection but can’t repair the tooth, so call us first. Go straight to the ER if swelling affects your breathing or swallowing, or after a serious injury.",
      },
      {
        q: "Can a knocked-out tooth be saved?",
        a: "Often, if it’s an adult tooth and you get here quickly. Keep it moist in milk or saliva, handle it by the crown and come in immediately.",
      },
    ],
    related: ["root-canal-treatment", "tooth-extractions", "crowns-and-bridges"],
    urgent: true,
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    image: "/images/sections/21-pain-throbbing-toothache.jpg",
    imageAlt: "Woman sitting on her bed at night with a throbbing toothache",
    title: "Toothache that won’t go away?",
    titleAccent: "A root canal can save the tooth.",
    intro:
      "When infection reaches the soft centre of a tooth, root canal treatment removes it, relieves the pain and lets you keep your natural tooth.",
    badge: "Saves your natural tooth",
    metaTitle: "Root Canal Treatment in West Albuquerque | Apex Dental",
    metaDescription:
      "Lingering pain, sensitivity or swelling? Root canal treatment at Apex Dental removes infection and saves your natural tooth. Gentle care and sedation options. Call 505-585-5157.",
    summary: "Removes infection from inside the tooth, stops the pain and saves your natural tooth.",
    pain:
      "Inside every tooth is the pulp—nerves, blood vessels and connective tissue that run down through the roots. An untreated cavity, a crack or heavy past dental work can let bacteria reach it. Once the pulp is infected, antibiotics alone can’t fix it, because the inflammation cuts off the tooth’s own blood supply.",
    signs: [
      "Pain when you bite, touch or press on the tooth",
      "Sensitivity to hot or cold that lingers for more than a few seconds",
      "Swelling near the tooth",
      "A tooth that has darkened, with or without pain",
      "A broken tooth",
    ],
    impact:
      "An infection can be painless at first, then flare up. Left untreated, it can form an abscess, spread to the bone and nearby teeth, and the tooth may have to be removed.",
    goodForHeading: "When you may need one",
    goodFor: [
      "Infected or permanently damaged pulp",
      "Deep decay that has reached the nerve",
      "A tooth injured in an accident",
      "A tooth with an abscess",
      "A tooth weakened by extensive dental work",
    ],
    help: ["same-day", "sedation", "technology", "gentle"],
    steps: [
      { title: "Numb the area", body: "We make sure the tooth is completely numb before we begin." },
      {
        title: "Clean out the infection",
        body: "Through a small opening we remove the infected pulp, measure the canals with x-rays or an apex locator, and clean them with an antiseptic solution.",
      },
      {
        title: "Fill and seal",
        body: "The canals are filled down to the root tips with an inert material and the opening is sealed.",
      },
      {
        title: "Protect it with a crown",
        body: "A root-treated tooth is more brittle, so we recommend a crown as soon as is convenient for you.",
      },
    ],
    aftercare: [
      "Avoid chewing on the treated side until your final filling or crown is in",
      "Take any pain relief or antibiotics as prescribed",
      "Some tenderness for a few days is normal",
      "Book your crown promptly to protect the tooth",
    ],
    callUsIf: [
      "Swelling appears or gets worse",
      "Pain is severe or keeps increasing",
      "The temporary filling comes out",
    ],
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "Treatment is done under local anesthetic, so most people feel pressure rather than pain—and it usually relieves the toothache you came in with. Mild soreness afterwards typically settles within a few days.",
      },
      {
        q: "How many visits will I need?",
        a: "Often one, sometimes more. Teeth with curved or hard-to-find canals take longer. We’ll tell you before we start.",
      },
      {
        q: "Why do I need a crown afterwards?",
        a: "Root-treated teeth become more brittle. A crown protects the tooth from cracking so the treatment lasts.",
      },
      {
        q: "Can’t antibiotics fix it?",
        a: "Not on their own. The inflammation cuts off the tooth’s blood supply, so antibiotics can’t reach the infection inside. Cleaning out the canal is what removes it.",
      },
    ],
    related: ["emergency-dental-care", "crowns-and-bridges", "sedation-dentistry"],
    urgent: true,
  },
  {
    slug: "tooth-extractions",
    name: "Tooth Extractions & Wisdom Teeth",
    image: "/images/sections/23-pain-swollen-face.jpg",
    imageAlt: "Woman checking a swollen jaw in the bathroom mirror",
    imagePosition: "35% 40%",
    title: "When a tooth can’t be saved,",
    titleAccent: "we remove it gently.",
    intro:
      "Simple and surgical extractions, including impacted wisdom teeth—with numbing, sedation options and a clear plan for what comes next.",
    badge: "Wisdom teeth & surgical extractions",
    metaTitle: "Tooth Extractions & Wisdom Teeth Removal | West Albuquerque",
    metaDescription:
      "Gentle tooth extractions and wisdom teeth removal at Apex Dental, west Albuquerque. Local anesthetic and sedation options, with clear aftercare. Call 505-585-5157.",
    summary: "Gentle simple and surgical extractions, including impacted wisdom teeth.",
    pain:
      "A tooth may need to come out when it’s damaged beyond repair or badly infected. Wisdom teeth—the last molars, usually arriving between 17 and 24—often don’t have room. When they get stuck under the gum (impacted), they can cause pain and infection and damage the teeth next to them.",
    signs: [
      "Pain and swelling at the back of the mouth",
      "Swollen or tender gums around a wisdom tooth",
      "A stiff, sore jaw",
      "A bad taste or bad breath that won’t go away",
      "Decay or infection in the tooth next to a wisdom tooth",
    ],
    impact:
      "Impacted teeth can lead to repeated infections, cysts and decay in neighbouring teeth. Antibiotics may calm things for a while, but in most cases the tooth needs to come out.",
    goodForHeading: "When we recommend removal",
    goodFor: [
      "Teeth damaged beyond repair",
      "Severe infection",
      "Impacted wisdom teeth causing pain or infection",
      "Cysts or decay around an impacted tooth",
      "Gum disease around a wisdom tooth",
    ],
    help: ["sedation", "same-day", "technology", "gentle"],
    details: [
      {
        heading: "Two types of extraction",
        items: [
          {
            name: "Simple extraction",
            body: "For a tooth that’s visible above the gum. We gently loosen it with an instrument called an elevator and lift it out.",
          },
          {
            name: "Surgical extraction",
            body: "For a tooth broken at the gum line or an impacted wisdom tooth. We make a small opening in the gum, remove a little bone if needed, and place stitches to help it heal.",
          },
        ],
      },
    ],
    steps: [
      { title: "Exam and x-rays", body: "We check the tooth, its roots and the nerves and sinuses nearby." },
      {
        title: "Numbing, and sedation if you like",
        body: "Most extractions use local anesthetic. Laughing gas or oral sedation can help if you’re nervous.",
      },
      {
        title: "Remove the tooth",
        body: "For wisdom teeth: a small cut in the gum, a little bone removed if needed, the tooth lifted out and stitches placed.",
      },
      { title: "Your recovery plan", body: "You go home with written aftercare—and options to replace the tooth if needed." },
    ],
    aftercareHeading: "What’s normal afterwards",
    aftercare: [
      "Some oozing of blood for up to 12 hours",
      "Facial swelling and a stiff jaw for several days",
      "Feeling a little unwell from the anesthetic",
      "If you had sedation, someone should take you home and stay with you for 24 hours",
    ],
    callUsIf: [
      "Bleeding doesn’t stop with firm pressure, or lasts more than half an hour",
      "Facial swelling lasts more than 3 days, or there’s a foul smell or discharge",
      "You develop a fever",
      "Painkillers don’t relieve severe pain",
      "You have difficulty breathing or swallowing—call 911",
    ],
    faqs: [
      {
        q: "Do all wisdom teeth need to come out?",
        a: "No. Many people’s wisdom teeth come through without problems. We recommend removal when they’re impacted and causing pain, infection, decay or damage.",
      },
      {
        q: "Will I be awake?",
        a: "Most extractions are done under local anesthetic, so you’re awake but numb. If you’re anxious, ask about laughing gas or oral sedation.",
      },
      {
        q: "How long is recovery?",
        a: "Most people feel better within a few days. Swelling and jaw stiffness ease over several days, and dissolving stitches go on their own.",
      },
      {
        q: "Can I replace the tooth afterwards?",
        a: "Yes—with an implant, a bridge or a partial denture. We’ll talk through the options before the extraction.",
      },
    ],
    related: ["dental-implants", "sedation-dentistry", "emergency-dental-care"],
    urgent: true,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    image: "/images/sections/15-restored-smile-card-all-devices.jpg",
    imageAlt: "Man in his sixties laughing with a full, natural smile",
    title: "Missing a tooth?",
    titleAccent: "Implants look, feel and work like your own.",
    intro:
      "A titanium root that fuses with your jaw, topped with a natural-looking crown—for one tooth, several, or to hold a denture firmly in place.",
    badge: "Free implant consultation",
    metaTitle: "Dental Implants in West Albuquerque | Single, Bridges & All-on-4",
    metaDescription:
      "Replace missing teeth with dental implants at Apex Dental—single implants, implant bridges and implant-supported dentures (All-on-4, All-on-6). Free consultation. Call 505-585-5157.",
    summary: "Permanent replacements for one tooth, several, or a whole arch.",
    pain:
      "When a tooth is lost—to gum disease, injury or decay—the gap does more than change your smile. Neighbouring teeth can drift, your bite changes, and the jawbone in that area slowly shrinks without a root to support it.",
    signs: [
      "One or more missing teeth",
      "Dentures that slip, rub or click when you talk",
      "Avoiding certain foods because chewing is hard",
      "Hiding your smile in photos",
      "A failing tooth that may need to come out",
    ],
    impact:
      "Over time the bone shrinks and nearby teeth shift, which can make replacement harder later. Replacing a tooth sooner keeps your bite stable.",
    goodForHeading: "Good candidates usually",
    goodFor: [
      "Have enough healthy jawbone (or can have a graft)",
      "Are in good general health",
      "Don’t smoke, or are willing to quit",
      "Will keep up brushing, flossing and check-ups",
    ],
    help: ["experience", "technology", "consult", "insurance"],
    details: [
      {
        heading: "Your implant options",
        items: [
          {
            name: "Single implant",
            body: "One implant and one crown replace one missing tooth—without filing down the healthy teeth next to it, as a bridge would.",
          },
          {
            name: "Implant-supported bridge",
            body: "Two or more implants hold a bridge to replace several teeth in a row. Each implant holds one crown; at least two are needed for a short bridge.",
          },
          {
            name: "All-on-4 (lower jaw)",
            body: "Four implants support a full lower denture that clicks firmly into place.",
          },
          {
            name: "All-on-6 (upper jaw)",
            body: "Six implants support a full upper denture for stable chewing and clear speech.",
          },
        ],
      },
    ],
    steps: [
      {
        title: "Consultation and 3D x-rays",
        body: "We check your bone and health and plan exactly where each implant will go.",
      },
      {
        title: "Implant placement",
        body: "Under anesthetic, the titanium implant is placed in the jawbone. You shouldn’t feel pain during the procedure.",
      },
      {
        title: "Healing",
        body: "Over the following weeks the implant fuses with your bone (osseointegration) to become a strong, permanent root.",
      },
      {
        title: "Your new tooth",
        body: "We take impressions and fit a custom crown, bridge or denture, screwed or cemented in place.",
      },
    ],
    aftercare: [
      "Expect mild soreness for a day or two—over-the-counter pain relief usually helps",
      "Use a cold compress and keep your head raised when lying down to reduce swelling",
      "Minor bleeding is normal; stitches dissolve within about a week",
      "Brush, floss and use the antibacterial mouthwash we recommend",
      "Keep up your regular check-ups",
    ],
    callUsIf: [
      "Stitches come loose within the first week",
      "Swelling hasn’t gone down after a week",
      "Pain gets worse or you develop a fever",
    ],
    faqs: [
      {
        q: "Does implant surgery hurt?",
        a: "You’ll be numb during the procedure. Afterwards most people have some discomfort for a day or two, which over-the-counter pain relief usually manages.",
      },
      {
        q: "How long do implants last?",
        a: "With good oral hygiene and regular check-ups, implants can last many years—often a lifetime. The crown on top may need replacing over time.",
      },
      {
        q: "How much do dental implants cost?",
        a: "It depends on how many implants you need and whether you need extra steps like a bone graft. You’ll get a full, itemised plan at your consultation. Insurance may cover part of it, and CareCredit financing is available.",
      },
      {
        q: "Can one implant replace several teeth?",
        a: "No—each implant holds one crown. Two or more implants can hold a bridge, and four to six can hold a full denture.",
      },
      {
        q: "Are there any risks?",
        a: "Implants are a common, well-established treatment, but like any surgery there are small risks such as infection, nerve irritation or, in the upper jaw, sinus problems. We plan with 3D x-rays to keep these low.",
      },
    ],
    related: ["crowns-and-bridges", "dentures-and-partials", "tooth-extractions"],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    image: "/images/sections/22-pain-bite.jpg",
    imageAlt: "Man wincing as he bites into an apple",
    title: "Cracked, worn or missing teeth?",
    titleAccent: "Crowns and bridges restore them.",
    intro:
      "A crown covers and protects a damaged tooth; a bridge fills the gap where teeth are missing—so you can chew, speak and smile with confidence again.",
    badge: "Natural-looking porcelain",
    metaTitle: "Dental Crowns & Bridges in West Albuquerque | Apex Dental",
    metaDescription:
      "Protect cracked or root-treated teeth with a crown, or replace missing teeth with a bridge. Natural-looking porcelain options at Apex Dental, Albuquerque. Call 505-585-5157.",
    summary: "Protect weak teeth with a crown, or fill a gap with a fixed bridge.",
    pain:
      "Teeth weaken over time—from large fillings, root canal treatment, cracks or years of wear. A crown is a custom cap that covers the whole tooth above the gum. When teeth are missing, a bridge uses crowns on the teeth either side to hold a false tooth in the gap.",
    signs: [
      "A tooth that’s cracked, broken or heavily filled",
      "A tooth that has had a root canal",
      "Teeth that look worn, discoloured or misshapen",
      "A gap from a missing tooth",
      "Difficulty chewing on one side",
    ],
    impact:
      "A weakened tooth can crack further and be lost. A gap lets neighbouring teeth drift, changes your bite and can alter the shape of your face over time.",
    goodForHeading: "Teeth that need a crown",
    goodFor: [
      "Teeth that have had a root canal",
      "Teeth that are more than half filling",
      "Decay spreading around the gum line",
      "Teeth that look worn or discoloured",
      "Fractured teeth",
    ],
    help: ["experience", "technology", "gentle", "insurance"],
    details: [
      {
        heading: "Crown materials",
        items: [
          {
            name: "Porcelain / ceramic",
            body: "Looks most like a natural tooth and resists staining—ideal for front teeth.",
          },
          {
            name: "Porcelain fused to metal",
            body: "Strong with a natural look, though a thin dark line can sometimes show at the gum.",
          },
          {
            name: "Gold",
            body: "Very durable and gentle on opposing teeth; best for back teeth where colour matters less.",
          },
        ],
      },
      {
        heading: "Types of bridge",
        items: [
          {
            name: "Traditional bridge",
            body: "Crowns on the teeth either side hold a false tooth (a pontic) in the gap. The most common type.",
          },
          { name: "Cantilever bridge", body: "Supported on one side only, used where biting forces are lower." },
          {
            name: "Maryland bonded bridge",
            body: "Wings bond to the back of the neighbouring teeth, so they need very little preparation.",
          },
          { name: "Implant-supported bridge", body: "Implants, rather than natural teeth, hold the bridge in place." },
        ],
      },
    ],
    steps: [
      {
        title: "Prepare the tooth",
        body: "We shape the tooth—or the teeth either side of a gap—so the restoration fits.",
      },
      { title: "Impressions", body: "We take precise impressions for the dental lab." },
      { title: "Temporary", body: "You wear a temporary crown or bridge to protect the teeth in the meantime." },
      { title: "Fit the final restoration", body: "We fit and adjust your permanent crown or bridge until your bite feels right." },
    ],
    aftercare: [
      "Stick to softer food cut into small pieces until you’re used to it",
      "Brush twice a day and floss daily",
      "Clean under a bridge with a water flosser or interdental brush",
      "Keep up your regular cleanings",
    ],
    callUsIf: [
      "Your bite feels high or uneven",
      "A crown or bridge feels loose or comes off",
      "Sensitivity or pain doesn’t settle",
    ],
    faqs: [
      {
        q: "How long do crowns and bridges last?",
        a: "Bridges typically last five to seven years, and often more than ten with good care. Brushing, flossing and regular cleanings make the biggest difference.",
      },
      {
        q: "Will a crown look natural?",
        a: "Yes. Porcelain crowns are matched to the shade of your other teeth, so people shouldn’t be able to tell.",
      },
      {
        q: "Is a bridge or an implant better?",
        a: "A bridge is quicker and doesn’t need surgery, but it relies on the teeth either side. An implant stands on its own and helps protect the jawbone. We’ll compare both for your situation.",
      },
    ],
    related: ["dental-implants", "root-canal-treatment", "dentures-and-partials"],
  },
  {
    slug: "dentures-and-partials",
    name: "Dentures & Partials",
    image: "/images/sections/11-senior-smile-all-devices.jpg",
    imageAlt: "Smiling senior woman admiring her new smile in a hand mirror",
    imagePosition: "50% 30%",
    title: "Missing several teeth?",
    titleAccent: "Dentures restore your smile and your bite.",
    intro:
      "Complete and partial dentures made to fit comfortably—plus implant-supported options that click firmly into place.",
    badge: "Complete, partial & implant-supported",
    metaTitle: "Dentures & Partial Dentures in West Albuquerque | Apex Dental",
    metaDescription:
      "Complete, immediate, partial and implant-supported dentures at Apex Dental, Albuquerque. Comfortable fit and a natural look. Call 505-585-5157.",
    summary: "Complete, partial and implant-supported dentures that fit comfortably.",
    pain:
      "Losing teeth—through decay, gum disease, injury or age—affects more than chewing. The facial muscles sink in around the gaps, which can make you look older than you are.",
    signs: [
      "Several or all of your teeth are missing",
      "Difficulty chewing or speaking clearly",
      "Old dentures that slip, click or rub",
      "Sore spots from a denture that no longer fits",
      "Feeling self-conscious about your smile",
    ],
    impact:
      "Gaps let remaining teeth drift and the jawbone shrink. A poorly fitting denture can cause sores and make eating harder over time.",
    goodForHeading: "Options include",
    goodFor: [
      "Complete dentures when all teeth in an arch are missing",
      "Immediate dentures fitted the day teeth are removed",
      "Partial dentures that fill gaps between your own teeth",
      "Implant-supported dentures that don’t slip",
    ],
    help: ["experience", "family", "insurance", "gentle"],
    details: [
      {
        heading: "Types of dentures",
        items: [
          {
            name: "Conventional complete denture",
            body: "Made once the gums have healed after extractions—usually 8 to 12 weeks—for the best fit.",
          },
          {
            name: "Immediate denture",
            body: "Placed the same day your teeth are removed, so you’re never without teeth. It may need relining as the gums shrink.",
          },
          {
            name: "Partial denture",
            body: "A gum-coloured base on a light framework fills gaps and stops your remaining teeth from drifting.",
          },
          {
            name: "Implant-supported denture",
            body: "Four to six implants hold the denture firmly—no slipping and no adhesive needed.",
          },
        ],
      },
    ],
    steps: [
      { title: "Impressions and measurements", body: "We record your jaw and how your teeth meet." },
      { title: "Try-in", body: "A wax model lets us check fit, colour and shape in your mouth before it’s finished." },
      { title: "Fitting", body: "Your final denture is made and adjusted until it’s comfortable." },
      { title: "Follow-up", body: "We fine-tune any sore spots and check the fit as your mouth settles." },
    ],
    aftercareHeading: "Caring for your dentures",
    aftercare: [
      "Every day: brush, soak in an effervescent denture cleaner, then brush again",
      "Use a soft brush—never household cleaning products",
      "Clean them over a soft towel so they won’t break if dropped",
      "Start with soft food cut small; avoid sticky, very hot or hard food at first",
      "Once you’re used to them, take them out at night",
      "Never adjust a denture yourself—bring it to us",
    ],
    callUsIf: [
      "Sore spots don’t settle",
      "The denture clicks, slips often or feels loose",
      "It chips or cracks, or a tooth breaks off",
    ],
    faqs: [
      {
        q: "Is it normal for new dentures to feel strange?",
        a: "Yes. For the first few weeks most people notice extra saliva, minor sore spots and the feeling of something in the mouth. This settles as you adjust.",
      },
      {
        q: "Will dentures change how I speak?",
        a: "Some words may feel tricky at first—reading aloud helps. If clicking continues after a few weeks, let us adjust the fit.",
      },
      {
        q: "Should I use denture adhesive?",
        a: "A little is fine for extra confidence, but it shouldn’t replace a good fit. If you need lots of adhesive, it’s time for an adjustment or reline.",
      },
      {
        q: "How long do dentures last?",
        a: "Typically five to eight years with good care. Your mouth changes shape over time, so they eventually need replacing for a proper fit.",
      },
    ],
    related: ["dental-implants", "crowns-and-bridges", "tooth-extractions"],
  },
  {
    slug: "gum-disease-treatment",
    name: "Gum Disease Treatment",
    image: "/images/sections/16-gum-care-card-all-devices.jpg",
    imageAlt: "Woman looking at her toothbrush with concern",
    title: "Bleeding gums?",
    titleAccent: "It’s an early warning worth listening to.",
    intro:
      "Gum disease starts quietly. Caught early, it can be stopped—protecting your teeth, your breath and your overall health.",
    badge: "Deep cleaning & gum care",
    metaTitle: "Gum Disease Treatment in West Albuquerque | Apex Dental",
    metaDescription:
      "Bleeding gums, bad breath or receding gums? Apex Dental treats gum disease with scaling and root planing and a personal care plan. Call 505-585-5157.",
    summary: "Stop bleeding gums and gum disease before they cost you teeth.",
    pain:
      "Gum disease (periodontitis) starts when plaque bacteria multiply in the spaces between teeth and gums. The gums pull away to form pockets, and over time the bone and tissue that hold your teeth in place break down.",
    signs: [
      "Gums that bleed when you brush or floss",
      "Bad breath or a bad taste that won’t go away",
      "Receding gums that make teeth look longer",
      "Pus between your gums and teeth",
      "Teeth that feel loose or are moving apart",
      "A change in how your teeth fit together",
    ],
    impact:
      "Advanced gum disease can’t be fully reversed—lost bone doesn’t grow back on its own, and teeth can loosen and fall out. Gum disease is also linked with diabetes and heart disease.",
    goodForHeading: "You’re at higher risk if you",
    goodFor: [
      "Smoke",
      "Have diabetes, or a heart or lung condition",
      "Are pregnant or going through menopause",
      "Have a family history of gum disease",
      "Grind or clench your teeth",
    ],
    help: ["technology", "gentle", "insurance", "saturday"],
    details: [
      {
        heading: "How we treat it",
        items: [
          {
            name: "Scaling and root planing",
            body: "A deep clean that removes plaque and tartar below the gum line and smooths the root surfaces so the gums can heal.",
          },
          { name: "Medication", body: "Antibiotic or antimicrobial gels and rinses to control bacteria where needed." },
          {
            name: "Gum and bone grafts",
            body: "Adding tissue or bone to rebuild support, carried out by a specialist when needed.",
          },
          { name: "Gum recontouring", body: "Reshaping uneven or receded gums for an even, healthy-looking smile." },
        ],
      },
    ],
    steps: [
      { title: "Gum check", body: "We measure the pockets around each tooth with a fine probe and take x-rays." },
      { title: "Deep cleaning", body: "Scaling and root planing, with numbing for comfort." },
      { title: "Your home-care plan", body: "Brushing and flossing tips and products that suit your gums." },
      { title: "Maintenance visits", body: "Regular cleanings stop the disease coming back." },
    ],
    aftercare: [
      "Brush twice a day with a soft brush, reaching along the gum line",
      "Floss or use interdental brushes every day",
      "Gums may feel tender for a few days after a deep clean",
      "Stopping smoking makes a big difference to healing",
      "A balanced diet with calcium and vitamin D supports healthy bone",
    ],
    callUsIf: ["Bleeding or swelling gets worse", "A tooth becomes loose", "You notice pus or a gum boil"],
    faqs: [
      {
        q: "Can gum disease be cured?",
        a: "Early gum disease (gingivitis) can be reversed with a professional clean and good home care. Advanced periodontitis can be controlled and stopped, but lost bone doesn’t grow back on its own.",
      },
      {
        q: "Why do my gums bleed when I floss?",
        a: "Bleeding is often the first sign of gum inflammation. It usually improves within a couple of weeks of a clean and daily flossing. If it doesn’t, come and see us.",
      },
      {
        q: "Is a deep cleaning painful?",
        a: "We numb the area, so most people feel only pressure. Gums can be a little tender for a few days afterwards.",
      },
    ],
    related: ["general-dentistry", "dental-implants", "crowns-and-bridges"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    image: "/images/sections/17-bright-smile-card-all-devices.jpg",
    imageAlt: "Young woman laughing with a bright, white smile",
    title: "Smile lost its sparkle?",
    titleAccent: "Professional whitening brings it back.",
    intro:
      "Safe in-office and take-home whitening that lifts stains from coffee, tea, wine and time—without removing any of the tooth surface.",
    badge: "In-office & take-home",
    metaTitle: "Teeth Whitening in West Albuquerque | Apex Dental",
    metaDescription:
      "Brighten stained or yellowed teeth with professional in-office or take-home whitening at Apex Dental, Albuquerque. Safe and dentist-supervised. Call 505-585-5157.",
    summary: "Lift years of stains safely with in-office or take-home whitening.",
    pain:
      "Teeth darken for lots of reasons. Coffee, tea and red wine leave colour pigments on the enamel, and tobacco stains stubbornly. With age, enamel thins and the yellower layer underneath shows through. Injuries and some medicines can darken teeth too.",
    signs: [
      "Teeth look more yellow than they used to",
      "Stains from coffee, tea, wine or smoking",
      "Hiding your smile in photos",
      "A big event coming up—a wedding, an interview, a reunion",
    ],
    impact:
      "Stains build up so gradually that many people don’t notice until they see a photo. Whitening works best on healthy teeth after a professional clean.",
    goodForHeading: "Whitening works best on",
    goodFor: [
      "Yellow-toned teeth (brown teeth respond less; grey may not lighten)",
      "Natural teeth—not crowns, veneers or fillings",
      "Stains from food, drink and tobacco",
      "Mouths free of untreated cavities and gum disease",
    ],
    help: ["gentle", "saturday", "experience", "consult"],
    details: [
      {
        heading: "Your whitening options",
        items: [
          {
            name: "In-office whitening",
            body: "Usually one visit. We protect your gums, apply a professional-strength gel and may use a special light to boost the result.",
          },
          {
            name: "Take-home whitening",
            body: "Custom trays and a lower-strength gel you wear at home for gradual results.",
          },
          {
            name: "Whitening toothpaste",
            body: "Helps remove surface stains between treatments. Look for the ADA Seal of Acceptance.",
          },
        ],
      },
    ],
    steps: [
      { title: "Check-up and shade", body: "We make sure your teeth and gums are healthy and record your starting shade." },
      { title: "Choose your option", body: "In-office for speed, take-home for convenience—or both." },
      { title: "Whiten", body: "We protect your gums and apply the whitening gel." },
      { title: "Keep it bright", body: "Tips to make your results last, and top-ups when you need them." },
    ],
    aftercare: [
      "Some sensitivity is common and usually temporary",
      "Go easy on coffee, tea and red wine for the first day or two",
      "Follow the instructions exactly—overuse can harm enamel and gums",
      "Keep up regular cleanings to remove new surface stains",
    ],
    faqs: [
      {
        q: "Does whitening damage teeth?",
        a: "Professional whitening is safe when used as directed. Overusing whitening products can damage enamel and gums, which is why we supervise your treatment.",
      },
      {
        q: "Will whitening work on my crowns or veneers?",
        a: "No. Whitening only lightens natural teeth. If you have crowns or veneers on your front teeth, we’ll plan so everything matches.",
      },
      {
        q: "Why are my teeth sensitive after whitening?",
        a: "The whitening gel can reach the inner layer of the tooth and irritate the nerve. It’s usually temporary—pausing treatment and trying again later helps.",
      },
      {
        q: "Does whitening work on all stains?",
        a: "It works best on yellow tones. Brown stains respond less, and grey stains or discolouration from injury or medicine may not lighten. We’ll suggest other options, such as veneers.",
      },
    ],
    related: ["cosmetic-dentistry", "clear-aligners", "general-dentistry"],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    image: "/images/sections/08-smile-confidence-laptop.jpg",
    imageAlt: "Friends laughing together outdoors at golden hour",
    title: "Want a smile you love?",
    titleAccent: "Let’s design it together.",
    intro:
      "Veneers, bonding, whitening and more—planned around your face and your goals by dentists trained in cosmetic smile design.",
    badge: "Smile design planning",
    metaTitle: "Cosmetic Dentistry in West Albuquerque | Veneers & Bonding",
    metaDescription:
      "Porcelain veneers, composite bonding, whitening and smile design at Apex Dental, Albuquerque. Natural-looking results planned around you. Call 505-585-5157.",
    summary: "Veneers, bonding and smile design for a natural, confident smile.",
    pain:
      "Small things can make you self-conscious: a chipped edge, gaps, uneven or stained teeth, or teeth of different sizes. Cosmetic dentistry improves how your teeth look while keeping them healthy.",
    signs: [
      "Chipped, worn or uneven teeth",
      "Gaps between teeth",
      "Stains that whitening can’t shift",
      "Teeth that are different sizes or shapes",
      "A smile you hide in photos",
    ],
    impact:
      "Feeling self-conscious about your smile can hold you back at work and socially—and some problems, like chips, get worse over time.",
    goodForHeading: "Treatments we offer",
    goodFor: [
      "Porcelain veneers",
      "Composite bonding",
      "Teeth whitening",
      "Clear aligners",
      "Crowns",
      "Gum recontouring",
    ],
    help: ["experience", "consult", "gentle", "insurance"],
    details: [
      {
        heading: "Popular cosmetic treatments",
        items: [
          {
            name: "Porcelain veneers",
            body: "Thin porcelain shells bonded to the front of the teeth to change their colour, shape and size.",
          },
          {
            name: "Composite bonding",
            body: "Tooth-coloured resin sculpted onto a tooth to repair chips, close small gaps or reshape edges—often in one visit.",
          },
          { name: "Teeth whitening", body: "In-office or take-home whitening to brighten natural teeth." },
          {
            name: "Clear aligners",
            body: "Straighten crooked or crowded teeth with nearly invisible, removable trays.",
          },
        ],
      },
    ],
    steps: [
      {
        title: "Smile consultation",
        body: "Tell us what you’d like to change. We check your teeth and gums and take photos.",
      },
      { title: "Your smile plan", body: "We recommend the gentlest options that meet your goals, with clear costs." },
      { title: "Treatment", body: "Veneers, bonding, whitening or aligners, carried out step by step." },
      { title: "Review", body: "We check the result and your bite, and show you how to look after it." },
    ],
    aftercare: [
      "Brush twice a day and floss—veneers and bonding need the same care as natural teeth",
      "Avoid biting hard objects like ice or pens",
      "Limit staining food and drink to keep bonding bright",
      "Wear a night guard if you grind your teeth",
    ],
    faqs: [
      {
        q: "Are veneers permanent?",
        a: "Porcelain veneers usually need a thin layer of enamel removed, so they’re considered permanent. With good care they last many years.",
      },
      {
        q: "Bonding or veneers—which is better?",
        a: "Bonding is quicker and less expensive and suits small repairs. Veneers last longer and resist staining, so they suit bigger changes. We’ll show you both.",
      },
      {
        q: "Is cosmetic dentistry covered by insurance?",
        a: "Purely cosmetic treatment usually isn’t, though some restorative parts may be. CareCredit financing can help spread the cost.",
      },
    ],
    related: ["teeth-whitening", "clear-aligners", "crowns-and-bridges"],
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    image: "/images/sections/27-clear-aligners.jpg",
    imageAlt: "Smiling woman holding a clear aligner tray at home",
    title: "Crooked or crowded teeth?",
    titleAccent: "Straighten them almost invisibly.",
    intro:
      "Custom clear aligners gently move your teeth into place—removable for eating and brushing, with no brackets or wires.",
    badge: "Nearly invisible & removable",
    metaTitle: "Clear Aligners in West Albuquerque | Invisible Braces | Apex Dental",
    metaDescription:
      "Straighten crooked or crowded teeth with nearly invisible, removable clear aligners at Apex Dental, Albuquerque. Insurance may cover them like braces. Call 505-585-5157.",
    summary: "Nearly invisible, removable trays that straighten teeth gradually.",
    pain:
      "Crowded, gapped or crooked teeth are harder to clean, which raises the risk of decay and gum disease—and many adults avoid smiling because of them. Aligners are custom trays made from clear thermoplastic that gradually shift each tooth into place.",
    signs: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Teeth that have shifted over the years",
      "Teeth that are hard to clean",
      "Wanting straighter teeth without metal braces",
    ],
    impact:
      "Crowding traps plaque and can make teeth wear unevenly. Teeth also keep shifting slowly with age.",
    goodForHeading: "Why patients choose aligners",
    goodFor: [
      "Virtually invisible",
      "Removable to eat, drink, brush and floss",
      "No metal brackets or wires to irritate your mouth",
      "Fewer, quicker check-ups",
    ],
    help: ["technology", "consult", "insurance", "saturday"],
    steps: [
      { title: "Consultation", body: "We check your teeth and gums and confirm aligners are right for you." },
      { title: "Your treatment map", body: "Your dentist plans each small movement in advance." },
      {
        title: "Wear your aligners",
        body: "Wear each set about 22 hours a day, moving to the next set about every two weeks.",
      },
      { title: "Keep your new smile", body: "A retainer holds your teeth in their new position." },
    ],
    aftercare: [
      "Wear aligners about 22 hours a day for the best results",
      "Take them out to eat or drink anything other than water",
      "Brush before putting them back in",
      "Clean them as instructed and keep them in their case",
    ],
    faqs: [
      {
        q: "What are aligners made of?",
        a: "A clear thermoplastic, custom made for your teeth. They look similar to whitening trays.",
      },
      {
        q: "How do aligners straighten teeth?",
        a: "Each set makes small, planned adjustments. After about two weeks you move to the next set, and your teeth gradually shift into place.",
      },
      {
        q: "Will my insurance cover aligners?",
        a: "Plans vary, so check your coverage. In general, if your plan includes orthodontics, aligners are covered to the same extent as braces.",
      },
      {
        q: "Can I eat with aligners in?",
        a: "Take them out to eat or drink anything other than water, then brush before putting them back.",
      },
    ],
    related: ["cosmetic-dentistry", "teeth-whitening", "general-dentistry"],
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    image: "/images/sections/18-dental-checkup-card-all-devices.jpg",
    imageAlt: "Relaxed patient looking at his dental x-ray with a hygienist",
    title: "Haven’t been in a while?",
    titleAccent: "Let’s start with a gentle check-up.",
    intro:
      "Exams, cleanings, sealants and fillings that catch small problems early—before they turn into pain or bigger bills.",
    badge: "Exams, cleanings & fillings",
    metaTitle: "General & Family Dentist in West Albuquerque | Cleanings & Fillings",
    metaDescription:
      "Dental exams, x-rays, cleanings, sealants, fillings, inlays and onlays for the whole family at Apex Dental, west Albuquerque. Open Saturdays. Call 505-585-5157.",
    summary: "Exams, cleanings, sealants and fillings for the whole family.",
    pain:
      "Most dental problems start small and painless—a little plaque, an early cavity, gums that bleed now and then. Regular check-ups find them early, when they’re quick and simple to fix.",
    signs: [
      "It’s been more than six months since your last check-up",
      "Sensitivity to sweets, hot or cold",
      "A rough edge, crack or hole in a tooth",
      "An old filling that’s cracked or worn",
      "Gums that bleed when you brush",
    ],
    impact:
      "Untreated decay keeps growing: a small filling today can become a root canal or crown later. Grinding, clenching and brushing too hard can also thin enamel and cause sensitivity.",
    goodForHeading: "What’s included",
    goodFor: [
      "Dental exams and x-rays",
      "Professional cleaning and polishing",
      "Sealants to protect against cavities",
      "Tooth-coloured fillings",
      "Inlays and onlays",
    ],
    help: ["family", "saturday", "insurance", "technology"],
    details: [
      {
        heading: "Filling materials",
        intro: "We’ll talk you through the best option for your tooth.",
        items: [
          {
            name: "Composite resin",
            body: "Tooth-coloured and bonded to the tooth, which strengthens it. Natural-looking and usually done in one visit.",
          },
          { name: "Porcelain", body: "Tooth-coloured and stain-resistant; used for inlays, onlays and crowns." },
          {
            name: "Gold",
            body: "Extremely long-lasting—often more than 20 years—but costs more and usually needs two visits.",
          },
          {
            name: "Silver (amalgam)",
            body: "Durable and inexpensive for back teeth, though more of the tooth has to be removed to hold it.",
          },
        ],
      },
      {
        heading: "Inlays and onlays",
        items: [
          { name: "Inlay", body: "Repairs the centre of a tooth’s biting surface when a filling isn’t enough." },
          {
            name: "Onlay",
            body: "Covers the whole biting surface, restoring a larger area while saving more tooth than a crown.",
          },
        ],
      },
    ],
    steps: [
      { title: "Exam and x-rays", body: "We check your teeth, gums and bite." },
      { title: "Cleaning", body: "Plaque and tartar removed, then a floss and polish." },
      { title: "We explain what we find", body: "Anything that needs treatment, with options and costs, before we start." },
      { title: "Treat and protect", body: "Fillings, sealants or a plan for next steps—and your next check-up booked." },
    ],
    aftercare: [
      "Some fillings set instantly, others take up to 48 hours—avoid sticky food on that side meanwhile",
      "Mild sensitivity after a filling can last a few weeks",
      "Brush twice a day and floss daily",
      "Come in for a check-up at least twice a year",
    ],
    callUsIf: [
      "A new filling feels high when you bite",
      "Pain feels like a toothache rather than sensitivity",
      "Sensitivity lasts longer than a few weeks",
    ],
    faqs: [
      {
        q: "How often should I have a check-up?",
        a: "At least twice a year for most people. We’ll suggest a schedule that suits your teeth and gums.",
      },
      {
        q: "What happens at a check-up?",
        a: "We examine your teeth and gums, take x-rays when needed, remove plaque and tartar, then floss and polish.",
      },
      {
        q: "How much does a filling cost?",
        a: "It depends on the material and the size of the cavity. We’ll tell you the cost before we start and check what your insurance covers.",
      },
      {
        q: "Are sealants just for children?",
        a: "They’re most common on children’s back teeth, but adults at high risk of cavities can benefit too.",
      },
    ],
    related: ["childrens-dentistry", "gum-disease-treatment", "teeth-whitening"],
  },
  {
    slug: "childrens-dentistry",
    name: "Children’s Dentistry",
    image: "/images/sections/19-child-smile-card-all-devices.jpg",
    imageAlt: "Young boy giving a thumbs-up in the dental chair",
    title: "Healthy smiles start early.",
    titleAccent: "Gentle dental care for kids.",
    intro:
      "Friendly first visits, cleanings and protection for growing teeth—plus help with habits like thumb-sucking—from dentists experienced with young and nervous patients.",
    badge: "Friendly first visits",
    metaTitle: "Children’s Dentist in West Albuquerque | Kids’ Dental Care",
    metaDescription:
      "Gentle dental care for children at Apex Dental, Albuquerque—first visits, cleanings, sealants, fluoride advice and help with thumb-sucking. Call 505-585-5157.",
    summary: "Gentle first visits, cleanings and protection for growing teeth.",
    pain:
      "Baby teeth matter. They hold space for adult teeth and help children chew and speak. Decay can start as soon as the first tooth appears—often from sugary drinks or a bottle at bedtime.",
    signs: [
      "Your child’s first tooth has come through",
      "White, brown or dark spots on the teeth",
      "Your child complains of tooth pain",
      "A chipped or knocked tooth after a fall",
      "Thumb or pacifier sucking that continues",
    ],
    impact:
      "Losing baby teeth too early can close the space adult teeth need, leading to crooked teeth later. Long-term thumb sucking can push the front teeth forward.",
    goodForHeading: "Tips for parents",
    goodFor: [
      "Clean gums and first teeth with a soft, wet cloth",
      "From age one to three, use just a tiny smear of fluoride toothpaste—and don’t let them swallow it",
      "Don’t put your baby to bed with milk, formula or sugary drinks",
      "Start flossing when teeth begin to touch",
      "Don’t share spoons—it passes on cavity-causing bacteria",
      "Keep children away from cigarette smoke",
    ],
    help: ["family", "gentle", "sedation", "saturday"],
    details: [
      {
        heading: "How teeth develop",
        items: [
          { name: "Around 6 months", body: "The first baby (primary) teeth come through." },
          { name: "By age 3", body: "All 20 baby teeth have usually arrived." },
          { name: "Around age 6", body: "The first permanent molars appear behind the baby teeth." },
          {
            name: "Ages 6 to 11",
            body: "Baby teeth fall out as adult teeth come in. The last molars arrive between 12 and 21.",
          },
        ],
      },
    ],
    steps: [
      { title: "A gentle welcome", body: "Time to look around, sit in the chair and meet the team—no rush." },
      { title: "Count and check", body: "A quick look at teeth and gums, with x-rays only when needed." },
      { title: "Clean and protect", body: "A gentle clean, fluoride advice and sealants for back teeth when needed." },
      { title: "Tips for home", body: "Brushing, diet and habit advice for parents, with the next visit booked." },
    ],
    aftercareHeading: "Healthy habits at home",
    aftercare: [
      "Brush twice a day—by age 4 children can start brushing themselves, with help",
      "Choose whole grains, vegetables and fruit over sugary snacks",
      "Children 6 and older can use a fluoride mouthwash if they don’t swallow it; avoid alcohol-based ones",
      "Disclosing tablets now and then show any plaque left after brushing",
    ],
    callUsIf: [
      "A tooth is knocked out or broken",
      "Your child has tooth pain or facial swelling",
      "You notice spots or holes on the teeth",
    ],
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "Around the time the first tooth appears, and by their first birthday. Early visits build trust and catch problems early.",
      },
      {
        q: "Does my child need fluoride?",
        a: "Fluoride helps protect teeth. Ask us whether your child needs a supplement—especially if you drink well water, which should be tested for fluoride.",
      },
      {
        q: "My child is scared of the dentist. Can you help?",
        a: "Yes. Our dentists are experienced with young and anxious patients. We go at your child’s pace, and gentle relaxation options are available when needed.",
      },
      {
        q: "Should a knocked-out baby tooth be put back?",
        a: "No—never put a baby tooth back in. Call us so we can check the area and the adult tooth underneath.",
      },
    ],
    related: ["general-dentistry", "emergency-dental-care", "sedation-dentistry"],
  },
  {
    slug: "sedation-dentistry",
    name: "Sedation Dentistry",
    image: "/images/sections/12-calm-dental-visit-all-devices.jpg",
    imageAlt: "Woman relaxing calmly in a dental chair with headphones on",
    imagePosition: "50% 35%",
    title: "Nervous about the dentist?",
    titleAccent: "You can relax here.",
    intro:
      "Gentle, judgement-free care with sedation options, so you can get the treatment you need—calmly and comfortably.",
    badge: "Laughing gas & oral sedation",
    metaTitle: "Sedation Dentistry in West Albuquerque | Anxious Patients Welcome",
    metaDescription:
      "Nervous about dental treatment? Apex Dental offers laughing gas and oral sedation for anxious patients in Albuquerque. Gentle, judgement-free care. Call 505-585-5157.",
    summary: "Laughing gas or oral sedation so anxious patients can relax.",
    pain:
      "Dental fear is common. It might come from a bad experience in the past, or from no clear reason at all. Either way it’s real—and it often keeps people away until a small problem becomes painful.",
    signs: [
      "Putting off appointments for months or years",
      "Feeling anxious just thinking about the dentist",
      "A strong gag reflex",
      "Needing a lot of work done",
      "Wisdom teeth or implant surgery coming up",
    ],
    impact:
      "Avoiding the dentist lets problems grow quietly, so the treatment, when it happens, is bigger. Sedation can let you have several treatments in one comfortable visit.",
    goodForHeading: "Sedation can help",
    goodFor: [
      "Very nervous or anxious patients",
      "Young patients",
      "Wisdom teeth and multiple extractions",
      "Implant surgery",
      "Patients who need a lot of work in one visit",
    ],
    notFor: [
      "Some patients with complex medical conditions—we’ll assess this carefully and refer you to the right specialist if needed",
    ],
    help: ["gentle", "experience", "consult", "insurance"],
    details: [
      {
        heading: "Sedation options we offer",
        items: [
          {
            name: "Laughing gas (nitrous oxide)",
            body: "You breathe nitrous oxide and oxygen through a small mask and feel relaxed but awake. It wears off quickly once we switch to pure oxygen—the only option where you may be able to drive yourself home after a short rest.",
          },
          {
            name: "Oral sedation",
            body: "A low-dose sedative pill makes you drowsy and relaxed for the treatment. You’ll need someone to bring you and take you home.",
          },
        ],
      },
      {
        heading: "Levels of sedation explained",
        items: [
          { name: "Minimal", body: "Awake but relaxed—the level we offer in our office." },
          { name: "Moderate", body: "Drowsy; you may slur your words and remember little." },
          { name: "Deep", body: "On the edge of consciousness, but you can still be woken." },
          {
            name: "General anesthesia",
            body: "Completely unconscious—provided by specialists in a hospital or surgical setting.",
          },
        ],
      },
    ],
    steps: [
      {
        title: "Consultation",
        body: "A careful, painless exam. We explain any treatment and give you a full plan and prices.",
      },
      {
        title: "Plan your visit",
        body: "We go through your medical history and give you simple instructions before the day.",
      },
      {
        title: "Relaxed treatment",
        body: "You relax with laughing gas or oral sedation while we numb the area and complete your care.",
      },
      { title: "Recovery", body: "We make sure you’re comfortable before you leave with your escort." },
    ],
    aftercareHeading: "On the day",
    aftercare: [
      "For oral sedation, bring someone to stay with you during and after your visit",
      "Don’t drive after oral sedation",
      "If we ask you not to eat beforehand, please follow that exactly",
      "Plan to rest for the rest of the day",
    ],
    faqs: [
      {
        q: "Will I remember anything?",
        a: "With laughing gas you’re awake but relaxed. Oral sedation can make you drowsy enough that you remember little of the treatment.",
      },
      {
        q: "Can I drive home?",
        a: "After laughing gas, often yes after a short recovery. After oral sedation, no—please bring someone to drive you and stay with you.",
      },
      {
        q: "Is sedation expensive?",
        a: "It’s often more affordable than people expect, especially when it lets you have several treatments in one visit. We’ll give you the cost upfront.",
      },
      {
        q: "Is sedation safe for everyone?",
        a: "Not for everyone. Our dentists review your medical history, and if sedation isn’t suitable we’ll refer you to the right specialist.",
      },
    ],
    related: ["tooth-extractions", "dental-implants", "childrens-dentistry"],
  },
];

export const serviceGroups = [
  {
    id: "pain",
    label: "I’m in pain or it’s urgent",
    image: "/images/sections/14-toothache-card-all-devices.jpg",
    alt: "Woman holding her cheek with tooth pain",
    slugs: ["emergency-dental-care", "root-canal-treatment", "tooth-extractions"],
  },
  {
    id: "missing",
    label: "I’m missing teeth",
    image: "/images/sections/15-restored-smile-card-all-devices.jpg",
    alt: "Man smiling with a confident restored smile",
    slugs: ["dental-implants", "crowns-and-bridges", "dentures-and-partials"],
  },
  {
    id: "gums",
    label: "My gums bleed",
    image: "/images/sections/16-gum-care-card-all-devices.jpg",
    alt: "Woman looking at her toothbrush with concern",
    slugs: ["gum-disease-treatment"],
  },
  {
    id: "smile",
    label: "I want a better smile",
    image: "/images/sections/17-bright-smile-card-all-devices.jpg",
    alt: "Young woman laughing with a bright smile",
    slugs: ["teeth-whitening", "cosmetic-dentistry", "clear-aligners"],
  },
  {
    id: "checkup",
    label: "I need a check-up",
    image: "/images/sections/18-dental-checkup-card-all-devices.jpg",
    alt: "Patient viewing his dental x-ray with a hygienist",
    slugs: ["general-dentistry"],
  },
  {
    id: "child",
    label: "It’s for my child",
    image: "/images/sections/19-child-smile-card-all-devices.jpg",
    alt: "Young boy giving a thumbs-up in the dental chair",
    slugs: ["childrens-dentistry"],
  },
  {
    id: "nervous",
    label: "I’m nervous",
    image: "/images/sections/20-relaxed-waiting-card-all-devices.jpg",
    alt: "Woman relaxing with a cup of tea in a calm waiting area",
    slugs: ["sedation-dentistry"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
