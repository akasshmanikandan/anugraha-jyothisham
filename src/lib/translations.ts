export type Language = "en" | "ta" | "ml";

type TranslationSet = {
  nav: {
    services: string;
    about: string;
    process: string;
    voices: string;
    faq: string;
    book: string;
  };
  hero: {
    tagline: string;
    headline: string[];
    description: string;
    bookBtn: string;
    whatsappBtn: string;
    yearsPractice: string;
    clientsGuided: string;
    sacredDisciplines: string;
    chooseLang: string;
  };
  services: {
    eyebrow: string;
    title: string;
    quote: string;
    items: Array<{ title: string; sub: string; body: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    sub: string;
    bullets: string[];
    parihara: string;
    bannerText: string;
    languagesText: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    quote: string;
    items: Array<{ t: string; d: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    quote: string;
    steps: Array<{ n: string; t: string; d: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    quote: string;
    items: Array<{ q: string; n: string; r: string }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    quote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    quote: string;
    items: Array<{ q: string; a: string }>;
  };
  book: {
    eyebrow: string;
    title: string;
    quote: string;
    hoursLabel: string;
    hoursVal: string;
    addressLabel: string;
    addressVal: string;
    contactLabel: string;
    contactVal: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      dob: string;
      tob: string;
      pob: string;
      pobPlaceholder: string;
      nature: string;
      natureOptions: string[];
      question: string;
      questionPlaceholder: string;
      submit: string;
      replyNote: string;
    };
  };
  footer: {
    description: string;
    headers: { consultation: string; contact: string };
    copyright: string;
    shanti: string;
  };
};

const shared: TranslationSet = {
  nav: {
    services: "Services",
    about: "About",
    process: "Process",
    voices: "Voices",
    faq: "FAQ",
    book: "Book ->",
  },
  hero: {
    tagline: "Since 2009 | Rooted in Sastra",
    headline: ["Guiding", "Lives", "Through", "Ancient", "Wisdom"],
    description:
      "A private consultancy in Vedic astrology, sacred ritual and the quiet arts of remedy, carried forward from a lineage of temple astrologers.",
    bookBtn: "Book Consultation",
    whatsappBtn: "WhatsApp",
    yearsPractice: "Years of Practice",
    clientsGuided: "Clients Guided",
    sacredDisciplines: "Sacred Disciplines",
    chooseLang: "Choose Language",
  },
  services: {
    eyebrow: "The Nine Disciplines",
    title: "Sacred Consultations",
    quote: "Each art a lamp; together, they illumine the whole of one life.",
    items: [
      { title: "Jyotisha", sub: "Astrology", body: "Vedic birth-chart analysis, dasha periods, and planetary remedies from the sidereal Sastras." },
      { title: "Tantrikam", sub: "Sacred Rituals", body: "Traditional yantra installation and homa ceremonies for protection, prosperity and clarity." },
      { title: "Mantrikam", sub: "Mantra Sadhana", body: "Personalized bija and moola mantras with proper vidhi for chanting, initiation and japa." },
      { title: "Vaithiyam", sub: "Ayurvedic Guidance", body: "Prakriti-based counsel for restoring balance across dosha, diet and daily discipline." },
      { title: "Thambulam", sub: "Betel Leaf Divination", body: "Ancient south Indian oracle reading for time-sensitive questions and turning points." },
      { title: "Samudrika", sub: "Face Reading", body: "Reading the temperament and destiny inscribed in the features of the face." },
      { title: "Nadi", sub: "Palm-Leaf Reading", body: "Consultation of the Nadi granthas, recorded lives inscribed centuries before your birth." },
      { title: "Vaasthu", sub: "Sacred Geometry", body: "Aligning homes, workplaces and temples with the directions, elements and mandala grid." },
      { title: "Numerology", sub: "Science of Numbers", body: "Names, dates and vibrational numbers harmonized for personal and family wellbeing." },
    ],
  },
  about: {
    eyebrow: "The Astrologer",
    title: "Govindan Namboodiri VG",
    sub: "Vedic Astrologer",
    bullets: [
      "Basic Horoscope, Predictions",
      "Total Horoscope, Predictions",
      "Birthday Annual Forecast",
      "Marriage Matching",
      "Muhurtha Date and Time",
      "Numerology Predictions",
      "Suitable & Lucky Name",
      "Lucky Rasi Gems",
      "Tantrika",
      "Pradhista",
      "Kumbabishekam",
    ],
    parihara: "All kinds of parihara related religious rituals and Homam are performed.",
    bannerText: "WE PROVIDE ASTROLOGICAL SERVICES ANYWHERE IN THE WORLD",
    languagesText: "Tamil | English | Hindi | Malayalam",
  },
  whyChooseUs: {
    eyebrow: "Why Anugraha",
    title: "Tradition, Held Whole",
    quote: "What is old must not be antique, it must be alive.",
    items: [
      { t: "Unbroken Lineage", d: "Five generations of temple astrologers, taught in the classical guru-shishya tradition." },
      { t: "Shastric Fidelity", d: "Every reading grounded in Parashara, Jaimini and Nadi literature, never intuition alone." },
      { t: "Discreet Practice", d: "Consultations by appointment only, held with the confidentiality of a physician." },
      { t: "Practical Remedies", d: "Prescriptions calibrated to your life, never asking what you cannot faithfully do." },
    ],
  },
  process: {
    eyebrow: "Consultation Path",
    title: "Five Steps, Held with Care",
    quote: "The right path is walked slowly, one lamp at a time.",
    steps: [
      { n: "01", t: "Book", d: "Reserve a private slot at a time of your choosing." },
      { n: "02", t: "Birth Details", d: "Share date, time and place of birth in confidence." },
      { n: "03", t: "Consultation", d: "A one-on-one reading held in person or by call." },
      { n: "04", t: "Remedies", d: "Receive personalized mantras, yantras and rituals." },
      { n: "05", t: "Follow-up", d: "Periodic guidance as the dasha and planets shift." },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    title: "Words Left Behind",
    quote: "Gratitude is the only offering that outlasts the ritual.",
    items: [
      {
        q: "The remedies suggested were precise and deeply rooted in scripture. My family found peace after years of turbulence.",
        n: "Lakshmi Narayanan",
        r: "Chennai",
      },
      {
        q: "A rare astrologer who does not sensationalize. Every reading carried the weight of tradition and calm authority.",
        n: "Ananya Iyer",
        r: "Bengaluru",
      },
      {
        q: "Consulted for my son's marriage compatibility. The clarity we received made the decision effortless.",
        n: "Rajesh Menon",
        r: "Kochi",
      },
      {
        q: "Vaasthu recommendations for our new home changed the entire atmosphere. Quiet, dignified guidance.",
        n: "Priya Subramanian",
        r: "Coimbatore",
      },
      {
        q: "The Nadi reading was uncanny. Nothing embellished, nothing withheld, an honest window into karma.",
        n: "Vikram Bhatt",
        r: "Mumbai",
      },
      {
        q: "After a year of practising the mantra given to me, I feel a stillness I did not know was possible.",
        n: "Meera Krishnan",
        r: "Trivandrum",
      },
    ],
  },
  gallery: {
    eyebrow: "Pooja Photos",
    title: "Temple Rituals",
    quote: "Moments from the living practice.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Before You Begin",
    quote: "Ask freely, clarity is itself a first remedy.",
    items: [
      {
        q: "How is a traditional consultation different from an online report?",
        a: "A shastric reading examines the interplay of chart, dasha, transits and lineage. Every remedy prescribed considers your capacity to practise it.",
      },
      {
        q: "What information do I need to share before booking?",
        a: "Your date of birth, exact time of birth as close as possible, and place of birth. If unknown, we can perform a rectification session first.",
      },
      {
        q: "Are the remedies difficult to follow?",
        a: "Remedies are always calibrated to your life. Some are as simple as a mantra at dawn; others involve pooja on specific tithis.",
      },
      {
        q: "Is my consultation confidential?",
        a: "Absolutely. Every reading, chart and personal detail remains strictly between you and the astrologer.",
      },
      {
        q: "Do you offer follow-up consultations?",
        a: "Yes. Most clients return once or twice a year, and during significant dasha transitions or life events.",
      },
    ],
  },
  book: {
    eyebrow: "Reserve a Sitting",
    title: "A private hour with the Sastra.",
    quote: "Consultations by appointment. In person at our study in Chennai, or by secure video call.",
    hoursLabel: "Hours",
    hoursVal: "Mon-Sat | 08:00 - 17:00 IST",
    addressLabel: "Address",
    addressVal: "Flat No. 6, Saravana Villa, Meenakshi Street, Perambur, Chennai 600011",
    contactLabel: "Contact",
    contactVal: "+91 917 609 6471 | +91 877 823 6182 | WhatsApp available",
    form: {
      name: "Full Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "+91 ...",
      dob: "Date of Birth",
      tob: "Time of Birth",
      pob: "Place of Birth",
      pobPlaceholder: "Town, State",
      nature: "Nature of Consultation",
      natureOptions: [
        "Jyotisha - Birth chart reading",
        "Nadi - Palm-leaf consultation",
        "Vaasthu - Home / workplace",
        "Marriage compatibility",
        "Other",
      ],
      question: "Your Question",
      questionPlaceholder: "Briefly describe the concern you wish to bring...",
      submit: "Request Appointment",
      replyNote: "We reply within one working day.",
    },
  },
  footer: {
    description: "A private consultancy in traditional Vedic astrology and spiritual practice.",
    headers: {
      consultation: "Consultation",
      contact: "Contact",
    },
    copyright: "© 2026 Anugraha Jyothishalaya. All rights reserved.",
    shanti: "Om shanti shanti shanti",
  },
};

const ta: TranslationSet = {
  ...shared,
  nav: {
    services: "சேவைகள்",
    about: "எங்களைப் பற்றி",
    process: "முறை",
    voices: "அனுபவங்கள்",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    book: "பதிவு செய்க ->",
  },
  hero: {
    ...shared.hero,
    tagline: "2009 முதல் | சாஸ்திரத்தில் வேரூன்றியது",
    headline: ["வாழ்வை", "வழிநடத்தும்", "பழமையான", "ஞானம்"],
    description:
      "வேத ஜோதிடம், புனித சடங்குகள், மற்றும் பரிகாரக் கலைகளில் பாரம்பரிய மரபைத் தொடர்ந்து வழங்கப்படும் தனிப்பட்ட ஆலோசனை.",
    bookBtn: "ஆலோசனைப் பதிவு",
    whatsappBtn: "வாட்ஸ்அப்",
    chooseLang: "மொழியைத் தேர்ந்தெடுக்கவும்",
  },
  about: {
    ...shared.about,
    eyebrow: "ஜோதிடர்",
    title: "கோவிந்தன் நம்பூதிரி VG",
    sub: "வேத ஜோதிடர்",
    bullets: [
      "அடிப்படை ஜாதகம், பலன்கள்",
      "முழு ஜாதகம், பலன்கள்",
      "பிறந்தநாள் ஆண்டு கணிப்பு",
      "திருமண பொருத்தம்",
      "முஹூர்த்த தேதி மற்றும் நேரம்",
      "எண் கணித பலன்கள்",
      "உகந்த & நற்பெயர் பெயர்",
      "நற்பயன் ராசி ரத்தினங்கள்",
      "தாந்திரிகம்",
      "பிரதிஷ்டை",
      "கும்பாபிஷேகம்",
    ],
    parihara: "அனைத்து வகையான பரிகார சடங்குகள் மற்றும் ஹோமங்கள் செய்யப்படுகிறது.",
    bannerText: "உலகின் எந்த இடத்திலும் ஜோதிட சேவைகள் வழங்கப்படுகின்றன",
    languagesText: "தமிழ் | ஆங்கிலம் | ஹிந்தி | மலையாளம்",
  },
  book: {
    ...shared.book,
    eyebrow: "பதிவு செய்யுங்கள்",
    title: "சாஸ்திரத்துடன் ஒரு தனிப்பட்ட நேரம்.",
    quote: "முன்பதிவு மூலம் ஆலோசனை. சென்னையில் நேரில் அல்லது பாதுகாப்பான வீடியோ அழைப்பில்.",
    hoursLabel: "நேரம்",
    addressLabel: "முகவரி",
    contactLabel: "தொடர்பு",
    form: {
      ...shared.book.form,
      name: "முழுப்பெயர்",
      namePlaceholder: "உங்கள் பெயர்",
      phone: "தொலைபேசி",
      phonePlaceholder: "+91 ...",
      dob: "பிறந்த தேதி",
      tob: "பிறந்த நேரம்",
      pob: "பிறந்த இடம்",
      pobPlaceholder: "நகரம், மாநிலம்",
      nature: "ஆலோசனை வகை",
      natureOptions: [
        "ஜோதிடம் - ஜாதகக் கணிப்பு",
        "நாடி - ஓலைச் சுவடி ஆலோசனை",
        "வாஸ்து - வீடு / வேலை இடம்",
        "திருமண பொருத்தம்",
        "மற்றவை",
      ],
      question: "உங்கள் கேள்வி",
      questionPlaceholder: "நீங்கள் கொண்டு வர விரும்பும் விஷயத்தை சுருக்கமாக எழுதுங்கள்...",
      submit: "நேரம் கோரவும்",
      replyNote: "ஒரு வேலை நாளுக்குள் பதில் அளிக்கிறோம்.",
    },
    hoursVal: "திங்கள்-சனி | 08:00 - 17:00 IST",
    addressVal: "பிளாட் எண். 6, சரவணா வில்லா, மீனாட்சி தெரு, பெரம்பூர், சென்னை 600011",
    contactVal: "+91 917 609 6471 | +91 877 823 6182 | வாட்ஸ்அப் கிடைக்கும்",
  },
  footer: {
    ...shared.footer,
    description: "பாரம்பரிய வேத ஜோதிடம் மற்றும் ஆன்மிகச் சேவைகளுக்கான தனிப்பட்ட ஆலோசனை மையம்.",
    headers: {
      consultation: "ஆலோசனை",
      contact: "தொடர்பு",
    },
    copyright: "© 2026 அனுக்ரஹ ஜோதிஷாலயா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    shanti: "ஓம் சாந்தி சாந்தி சாந்தி",
  },
};

const ml: TranslationSet = {
  ...shared,
  nav: {
    services: "സേവനങ്ങൾ",
    about: "ഞങ്ങളെ കുറിച്ച്",
    process: "പ്രക്രിയ",
    voices: "അനുഭവങ്ങൾ",
    faq: "പതിവ് ചോദ്യങ്ങൾ",
    book: "ബുക്ക് ചെയ്യുക ->",
  },
  hero: {
    ...shared.hero,
    tagline: "2009 മുതൽ | ശാസ്ത്രത്തിൽ വേരൂന്നിയ",
    headline: ["ജീവിതത്തെ", "നയിക്കുന്ന", "പുരാതന", "ജ്ഞാനം"],
    description:
      "വേദ ജ്യോതിഷം, പവിത്രമായ അനുഷ്ഠാനങ്ങൾ, പരിഹാര കലയുകൾ എന്നിവയിൽ പരമ്പരാഗത പാരമ്പര്യത്തിൽ നിന്നുള്ള സ്വകാര്യ ஆலോചന.",
    bookBtn: "അപ്പോയിന്റ്മെന്റ് ബുക്ക്",
    whatsappBtn: "വാട്സ്ആപ്പ്",
    chooseLang: "ഭാഷ തിരഞ്ഞെടുക്കുക",
  },
  about: {
    ...shared.about,
    eyebrow: "ജ്യോതിഷൻ",
    title: "ഗോവിന്ദൻ നമ്പൂതിരി VG",
    sub: "വേദ ജ്യോതിഷൻ",
    bullets: [
      "പ്രാഥമിക ജാതകം, പ്രവചനങ്ങൾ",
      "പൂർണ്ണ ജാതകം, പ്രവചനങ്ങൾ",
      "ജന്മദിന വാർഷിക പ്രവചനം",
      "വിവാഹ പൊരുത്തം",
      "മുഹൂർത്ത തീയതിയും സമയവും",
      "സംഖ്യാശാസ്ത്ര പ്രവചനങ്ങൾ",
      "യോഗ്യവും ഭാഗ്യവുമുള്ള പേര്",
      "ഭാഗ്യ രാശി രത്നങ്ങൾ",
      "താന്ത്രികം",
      "പ്രതിഷ്ഠ",
      "കുംഭാഭിഷേകം",
    ],
    parihara: "എല്ലാ തരത്തിലുള്ള പരിഹാര ചടങ്ങുകളും ഹോമങ്ങളും നടത്തപ്പെടുന്നു.",
    bannerText: "ലോകത്തിന്റെ ഏത് ഭാഗത്തും ജ്യോതിഷ സേവനങ്ങൾ നൽകുന്നു",
    languagesText: "തമിഴ് | ഇംഗ്ലീഷ് | ഹിന്ദി | മലയാളം",
  },
  book: {
    ...shared.book,
    eyebrow: "ബുക്കിംഗ്",
    title: "ശാസ്ത്രത്തോടൊപ്പം ഒരു സ്വകാര്യ സമയം.",
    quote: "അപ്പോയിന്റ്മെന്റിലൂടെ ஆலോചന. ചെന്നൈയിലെ സ്റ്റുഡിയോയിൽ നേരിലോ സുരക്ഷിത വീഡിയോ കോളിലോ.",
    hoursLabel: "സമയം",
    addressLabel: "വിലാസം",
    contactLabel: "ബന്ധപ്പെടുക",
    form: {
      ...shared.book.form,
      name: "പൂർണ്ണ പേര്",
      namePlaceholder: "നിങ്ങളുടെ പേര്",
      phone: "ഫോൺ",
      phonePlaceholder: "+91 ...",
      dob: "ജനന തീയതി",
      tob: "ജനന സമയം",
      pob: "ജനന സ്ഥലം",
      pobPlaceholder: "നഗരം, സംസ്ഥാനം",
      nature: "ആലോചനയുടെ സ്വഭാവം",
      natureOptions: [
        "ജ്യോതിഷം - ജനനചാർട്ട് വായന",
        "നാടി - പനലീവ് ஆலോചന",
        "വാസ്തു - വീട് / ജോലി സ്ഥലം",
        "വിവാഹ പൊരുത്തം",
        "മറ്റുള്ളവ",
      ],
      question: "നിങ്ങളുടെ ചോദ്യം",
      questionPlaceholder: "നിങ്ങൾ ഉന്നയിക്കാനാഗ്രഹിക്കുന്ന കാര്യം ചുരുക്കമായി എഴുതുക...",
      submit: "അപ്പോയിന്റ്മെന്റ് അഭ്യർത്ഥിക്കുക",
      replyNote: "ഒരു ജോലി ദിവസത്തിനുള്ളിൽ ഞങ്ങൾ മറുപടി നൽകും.",
    },
    hoursVal: "തിങ്കൾ-ശനി | 08:00 - 17:00 IST",
    addressVal: "ഫ്ലാറ്റ് നമ്പർ 6, സരവണ വില്ല, മീനാക്ഷി സ്ട്രീറ്റ്, പെരമ്പൂർ, ചെന്നൈ 600011",
    contactVal: "+91 917 609 6471 | +91 877 823 6182 | വാട്സ്ആപ്പ് ലഭ്യമാണ്",
  },
  footer: {
    ...shared.footer,
    description: "പരമ്പരാഗത വേദ ജ്യോതിഷവും ആത്മീയ അഭ്യാസവും സംബന്ധിച്ച സ്വകാര്യ ஆலോചന കേന്ദ്രം.",
    headers: {
      consultation: "ஆலோചന",
      contact: "ബന്ധപ്പെടുക",
    },
    copyright: "© 2026 അനുഗ്രഹ ജ്യോതിഷാലയ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",
    shanti: "ഓം ശാന്തി ശാന്തി ശാന്തി",
  },
};

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  en: shared,
  ta,
  ml,
};
