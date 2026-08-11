export type Language = "en" | "ta" | "ml";

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      process: "Process",
      voices: "Voices",
      faq: "FAQ",
      book: "Book →",
    },
    hero: {
      tagline: "Since 2009 · Rooted in Śāstra",
      headline: ["Guiding", "Lives", "Through", "Ancient", "Wisdom"],
      description:
        "A private consultancy in Vedic astrology, sacred ritual and the quiet arts of remedy — carried forward from a lineage of temple astrologers.",
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
        {
          title: "Jyotisha",
          sub: "Astrology",
          body: "Vedic birth-chart analysis, dasha periods, and planetary remedies read from the sidereal śāstras.",
        },
        {
          title: "Tantrikam",
          sub: "Sacred Rituals",
          body: "Traditional yantra installation and homa ceremonies for protection, prosperity and clarity.",
        },
        {
          title: "Mantrikam",
          sub: "Mantra Sādhana",
          body: "Personalised bīja and moola mantras with proper vidhi for chanting, initiation and japa.",
        },
        {
          title: "Vaithiyam",
          sub: "Ayurvedic Guidance",
          body: "Prakṛti-based counsel for restoring balance across dosha, diet and daily discipline.",
        },
        {
          title: "Thambulam",
          sub: "Betel Leaf Divination",
          body: "Ancient south-Indian oracle reading for time-sensitive questions and turning points.",
        },
        {
          title: "Sāmudrika",
          sub: "Face Reading",
          body: "Reading the temperament and destiny inscribed in the features of the face.",
        },
        {
          title: "Nadi",
          sub: "Palm-Leaf Reading",
          body: "Consultation of the Nadi granthas — recorded lives inscribed centuries before your birth.",
        },
        {
          title: "Vaasthu",
          sub: "Sacred Geometry",
          body: "Aligning homes, workplaces and temples with the directions, elements and mandala grid.",
        },
        {
          title: "Numerology",
          sub: "Science of Numbers",
          body: "Names, dates and vibrational numbers harmonised for personal and family wellbeing.",
        },
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
      bannerText: "WE PROVIDE ASTROLOGICAL SERVICES “ANYWHERE IN THE WORLD”",
      languagesText: "Tamil · English · Hindi · Malayalam",
    },
    whyChooseUs: {
      eyebrow: "Why Anugraha",
      title: "Tradition, Held Whole",
      quote: "What is old must not be antique — it must be alive.",
      items: [
        {
          t: "Unbroken Lineage",
          d: "Five generations of temple astrologers, taught in the classical guru-śiṣya tradition.",
        },
        {
          t: "Śāstric Fidelity",
          d: "Every reading grounded in Parāśara, Jaimini and Nadi literature — never intuition alone.",
        },
        {
          t: "Discreet Practice",
          d: "Consultations by appointment only, held with the confidentiality of a physician.",
        },
        {
          t: "Practical Remedies",
          d: "Prescriptions calibrated to your life — never asking what you cannot faithfully do.",
        },
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
        { n: "04", t: "Remedies", d: "Receive personalised mantras, yantras and rituals." },
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
          q: "A rare astrologer who does not sensationalise. Every reading carried the weight of tradition and calm authority.",
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
          q: "The Nadi reading was uncanny. Nothing embellished, nothing withheld — an honest window into karma.",
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
      quote: "Ask freely — clarity is itself a first remedy.",
      items: [
        {
          q: "How is a traditional consultation different from an online report?",
          a: "A śāstric reading examines the interplay of chart, dasha, transits and lineage — nuances a template cannot see. Every remedy prescribed considers your capacity to practise it.",
        },
        {
          q: "What information do I need to share before booking?",
          a: "Your date of birth, exact time of birth (as close as possible), and place of birth. If unknown, we can perform a rectification session first.",
        },
        {
          q: "Are the remedies difficult to follow?",
          a: "Remedies are always calibrated to your life. Some are as simple as a mantra at dawn; others involve pooja on specific tithis. Nothing is asked of you that cannot be honoured.",
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
      title: "A private hour with the śāstra.",
      quote: "Consultations by appointment. In person at our study in Chennai, or by secure video call.",
      hoursLabel: "Hours",
      hoursVal: "Mon–Sat · 08:00 – 17:00 IST",
      addressLabel: "Address",
      addressVal: "Flat No. 6, Saravana Villa, Meenakshi Street, Perambur, Chennai 600011",
      contactLabel: "Contact",
      contactVal: "+91 917 609 6471 · +91 877 823 6182 · WhatsApp available",
      form: {
        name: "Full Name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "+91 …",
        dob: "Date of Birth",
        tob: "Time of Birth",
        pob: "Place of Birth",
        pobPlaceholder: "Town, State",
        nature: "Nature of Consultation",
        natureOptions: [
          "Jyotisha — Birth chart reading",
          "Nadi — Palm-leaf consultation",
          "Vaasthu — Home / workplace",
          "Marriage compatibility",
          "Other",
        ],
        question: "Your Question",
        questionPlaceholder: "Briefly describe the concern you wish to bring…",
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
      shanti: "Ōm śānti śānti śānti",
    },
  },
  ta: {
    nav: {
      services: "சேவைகள்",
      about: "எம்மைப் பற்றி",
      process: "வழிமுறை",
      voices: "கருத்துக்கள்",
      faq: "கேள்வி-பதில்",
      book: "முன்பதிவு →",
    },
    hero: {
      tagline: "2009 முதல் · சாஸ்திர மரபு",
      headline: ["பண்டைய", "ஞானத்தால்", "வாழ்வை", "நெறிப்படுத்துதல்"],
      description:
        "வேதாந்த ஜோதிடம், புனித சடங்குகள் மற்றும் எளிய பரிகாரங்களின் தனிப்பட்ட ஆலோசனை நிலையம் — ஐந்து தலைமுறையாக தொடரும் கோவில் ஜோതിடர்களின் பாரம்பரிய வழிமுறை.",
      bookBtn: "ஆலோசனை முன்பதிவு",
      whatsappBtn: "வாட்ஸ்அப்",
      yearsPractice: "ஆண்டுகால அனுபவம்",
      clientsGuided: "வழிகாட்டப்பட்டவர்கள்",
      sacredDisciplines: "புனித சாஸ்திரங்கள்",
      chooseLang: "மொழியைத் தேர்ந்தெடுக்கவும்",
    },
    services: {
      eyebrow: "ஒன்பது சாஸ்திரங்கள்",
      title: "புனித ஆলোசனைகள்",
      quote: "ஒவ்வொரு கலையும் ஒரு விளக்கு; அவை அனைத்தும் இணைந்து ஒரு முழு வாழ்வையும் ஒளிரச்செய்கிறது.",
      items: [
        {
          title: "ஜோதிடம்",
          sub: "ஜாதக கணிப்பு",
          body: "வேத பிறப்பு ஜாதக பகுப்பாய்வு, தசா காலங்கள் மற்றும் பாரம்பரிய சாஸ்திரங்களின் அடிப்படையிலான கிரக பரிகாரங்கள்.",
        },
        {
          title: "தாந்திரீகம்",
          sub: "புனித சடங்குகள்",
          body: "பாதுகாப்பு, செழிப்பு மற்றும் தெளிவிற்கான பாரம்பரிய யந்திர ஸ்தாபனம் மற்றும் ஹோமங்கள்.",
        },
        {
          title: "மாந்திரீகம்",
          sub: "மந்திர சாதனை",
          body: "முறையான விதிப்படி உச்சரிப்பதற்கான தனிப்பயனாக்கப்பட்ட பீஜ மற்றும் மூல மந்திரங்கள்.",
        },
        {
          title: "வைத்தியம்",
          sub: "ஆயுர்വേத வழிகாட்டுதல்",
          body: "உடலமைப்பு (பிரகிருதி) சார்ந்த ஆலோசனைகள், உணவு முறை மற்றும் தினசரி ஒழுக்கங்கள்.",
        },
        {
          title: "தாம்பூலம்",
          sub: "வெற்றிலை ஜோதிடம்",
          body: "முக்கியமான கேள்விகள் மற்றும் வாழ்வின் திருப்பங்களுக்கான பண்டைய தென்னிந்திய வெற்றிலை கணிப்பு.",
        },
        {
          title: "சாமுத்ரிகா",
          sub: "முக லட்சணம்",
          body: "முகத்தின் அமைப்பைக் கொண்டு ஒருவரின் குணநலன்களையும் விதியையும் அறிதல்.",
        },
        {
          title: "நாடி",
          sub: "ஓலைச்சுவடி ஜோதிடம்",
          body: "உங்கள் பிறப்பிற்கு பல நூற்றாண்டுகளுக்கு முன்பே எழுதப்பட்ட நாடி ஓலைச்சுவடிகளின் வழிகாட்டுதல்.",
        },
        {
          title: "வாஸ்து",
          sub: "திசை சாஸ்திரம்",
          body: "திசைகள், பஞ்சபூதங்கள் மற்றும் மண்டல அமைப்போடு வீடுகள் மற்றும் கோவில்களை ஒத்திசைத்தல்.",
        },
        {
          title: "எண்கணிதம்",
          sub: "எண்களின் அறிவியல்",
          body: "தனிப்பட்ட மற்றும் குடும்ப நலனுக்காக பெயர்கள் மற்றும் பிறந்த எண்களை ஒத்திசைத்தல்.",
        },
      ],
    },
    about: {
      eyebrow: "ஜோதிடர்",
      title: "ஸ்ரீ வி. கோவிந்தன் நம்பூதிரி",
      sub: "வேத ஜோதிடர்",
      bullets: [
        "அடிப்படை ஜாதகம், கணிப்புகள்",
        "முழுமையான ஜாதகம், கணிப்புகள்",
        "வருடாந்திர பிறந்தநாள் கணிப்பு",
        "திருமணப் பொருத்தம்",
        "சுப முகூர்த்த நேரம்",
        "எண்கணித கணிப்புகள்",
        "பொருத்தமான மற்றும் அதிர்ஷ்ட பெயர்",
        "ராசிக்கல் ஆலோசனைகள்",
      ],
      parihara: "அனைத்து விதமான பரிகார பூசைகளும் ஹோமங்களும் முறையாக செய்து தரப்படும்.",
      bannerText: "உலகில் எங்கிருந்தாலும் எங்களுடைய ஜோதிட சேவைகளைப் பெறலாம்",
      languagesText: "தமிழ் · ஆங்கிலம் · இந்தி · மலையாளம்",
    },
    whyChooseUs: {
      eyebrow: "ஏன் அனுகிரஹா",
      title: "வாழும் பாரம்பரியம்",
      quote: "பழமையான பாரம்பரியம் வெறும் பழமையாக மட்டும் இருக்கக்கூடாது — அது உயிர்ப்போடு இருக்க வேண்டும்.",
      items: [
        {
          t: "தொடர்ச்சியான பாரம்பரியம்",
          d: "ஐந்து தலைமுறையாக பாரம்பரிய குரு-சீட முறையில் பயின்ற கோவில் ஜோதிடர்கள்.",
        },
        {
          t: "சாஸ்திர உண்மை",
          d: "ஒவ்வொரு கணிப்பும் பராசரர், ஜைமினி மற்றும் நாடி நூல்களின் அடிப்படையிலானது — வெறும் உள்ளுணர்வு அல்ல.",
        },
        {
          t: "இரகசியக் காப்பு",
          d: "முன்பதிவின் மூலம் மட்டுமே ஆலோசனை வழங்கப்படுகிறது, ஒரு மருத்துவர் போன்ற இரகசியத் தன்மை காக்கப்படும்.",
        },
        {
          t: "எளிய பரிகாரங்கள்",
          d: "உங்கள் வாழ்க்கைக்கு ஏற்ற பரிகாரங்கள் — உங்களால் செய்ய இயலாதவற்றை நாங்கள் ஒருபோதும் பரிந்துரைப்பதில்லை.",
        },
      ],
    },
    process: {
      eyebrow: "ஆலோசனைப் படிநிலைகள்",
      title: "முறையான ஐந்து படிகள்",
      quote: "சரியான வழி மெதுவாக, ஒரு நேரத்தில் ஒரு விளக்காகத்தான் ஒளிரும்.",
      steps: [
        { n: "01", t: "முன்பதிவு", d: "உங்களுக்கு வசதியான நேரத்தில் ஒரு தனிப்பட்ட ஆலோசனையை முன்பதிவு செய்யுங்கள்." },
        { n: "02", t: "பிறப்பு விபரங்கள்", d: "பிறந்த தேதி, நேரம் மற்றும் இடத்தை இரகசியமாகப் பகிர்ந்து கொள்ளுங்கள்." },
        { n: "03", t: "ஆலோசனை", d: "நேரடியாகவோ அல்லது தொலைபேசி அழைப்பின் மூலமாகவோ ஒரு நபர் சார்ந்த விரிவான ஆலோசனை." },
        { n: "04", t: "பரிகாரங்கள்", d: "தனிப்பயனாக்கப்பட்ட மந்திரங்கள், யந்திரங்கள் மற்றும் சடங்குகளின் விபரங்களைப் பெறுங்கள்." },
        { n: "05", t: "தொடர் வழிகாட்டல்", d: "கிரக நிலைகள் மற்றும் தசா மாற்றங்களுக்கு ஏற்ப அவ்வப்போதைய வழிகாட்டல்." },
      ],
    },
    testimonials: {
      eyebrow: "வாடிக்கையாளர் கருத்துக்கள்",
      title: "நம்பிக்கை வார்த்தைகள்",
      quote: "முறையாகச் செய்த சடங்கை விட, எஞ்சி நிற்கும் நன்றியே சிறந்த அர்ப்பணிப்பு.",
      items: [
        {
          q: "பரிந்துரைக்கப்பட்ட பரிகாரங்கள் மிகத் துல்லியமானவை. பல வருடப் போராட்டங்களுக்குப் பின் என் குடும்பத்திற்கு அமைதி கிடைத்தது.",
          n: "லட்சுமி நாராயணன்",
          r: "சென்னை",
        },
        {
          q: "விளம்பரப்படுத்தாத ஒரு சிறந்த ஜோதிடர். ஒவ்வொரு ஆலோசனையிலும் பாரம்பரியத்தின் ஆழமும் அமைதியும் தெரிந்தது.",
          n: "அனன்யா ஐயர்",
          r: "பெங்களூரு",
        },
        {
          q: "என் மகனின் திருமணப் பொருத்தத்திற்காக அணுகினேன். நாங்கள் பெற்ற தெளிவு முடிவை எளிதாக்கியது.",
          n: "ராஜேஷ் மேனன்",
          r: "கொச்சி",
        },
        {
          q: "எங்கள் புதிய வீட்டிற்கான வாஸ்து ஆலோசனைகள் வீட்டின் சூழலையே மாற்றியது. அமைதியான, கண்ணியமான வழிகாட்டுதல்.",
          n: "பிரியா சுப்பிரமணியன்",
          r: "கோயம்புத்தூர்",
        },
        {
          q: "நாடி கணிப்பு மிகவும் வியக்கத்தக்கது. எதுவும் கூட்டிக் குறைக்கப்படாமல் — கர்மாவின் உண்மையான வடிவம் தெரிந்தது.",
          n: "விக்ரம் பட்",
          r: "மும்பை",
        },
        {
          q: "வழங்கப்பட்ட மந்திரத்தை ஒரு வருடமாகப் பயிற்சி செய்த பிறகு, மனதிற்குள் ஒரு பேரமைதியை உணர்கிறேன்.",
          n: "மீரா கிருஷ்ணன்",
          r: "திருவனந்தபுரம்",
        },
      ],
    },
    gallery: {
      eyebrow: "எங்கள் சேவை",
      title: "சாதனங்கள் மற்றும் சடங்குகள்",
      quote: "கருவிகள் பழமையானவை; ஆனால் கேள்விகள் எப்போதும் புதியவை.",
    },
    faq: {
      eyebrow: "கேள்விகள்",
      title: "நீங்கள் தொடங்கும் முன்",
      quote: "தயக்கமின்றி கேளுங்கள் — தெளிவே சிறந்த முதல் பரிகாரம்.",
      items: [
        {
          q: "பாரம்பரிய ஆலோசனை இணையவழி அறிக்கையிலிருந்து எவ்வாறு வேறுபடுகிறது?",
          a: "சாஸ்திர முறைப்படியான ஆலோசனை என்பது ஜாதகம், தசா, கோச்சாரம் மற்றும் பரம்பரை வழிகளை ஆராய்கிறது. பரிந்துரைக்கப்படும் பரிகாரங்கள் உங்களால் செய்யக்கூடியதாகவே இருக்கும்.",
        },
        {
          q: "முன்பதிவு செய்வதற்கு முன் நான் என்ன தகவல்களைப் பகிர வேண்டும்?",
          a: "உங்கள் பிறந்த தேதி, துல்லியமான பிறந்த நேரம் (முடிந்தவரை) மற்றும் பிறந்த இடம். தெரியாவிட்டால், நேரக் கணிப்பு முறை மூலம் கண்டறியலாம்.",
        },
        {
          q: "பரிகாரங்களை பின்பற்றுவது கடினமா?",
          a: "பரிகாரங்கள் எப்போதும் உங்கள் வாழ்க்கைக்கு ஏற்றவாறு மாற்றியமைக்கப்படும். சில விடியற்காலையில் சொல்லும் மந்திரம் போல எளிதானவை. உங்களால் முடியாதது எதுவும் கேட்கப்படாது.",
        },
        {
          q: "எனது ஆலோசனை இரகசியமாக வைக்கப்படுமா?",
          a: "நிச்சயமாக. ஒவ்வொரு ஆலோசனையும், ஜாதகமும் மற்றும் தனிப்பட்ட விபரங்களும் ஜோதிடருக்கும் உங்களுக்கும் இடையே மட்டுமே இருக்கும்.",
        },
        {
          q: "தொடர் ஆலோசனைகளை வழங்குகிறீர்களா?",
          a: "ஆம். பெரும்பாலான வாடிக்கையாளர்கள் வருடத்திற்கு ஒன்று அல்லது இரண்டு முறை, தசா மாற்றங்கள் மற்றும் முக்கிய நிகழ்வுகளின் போது மீண்டும் வருகிறார்கள்.",
        },
      ],
    },
    book: {
      eyebrow: "முன்பதிவு செய்ய",
      title: "சாஸ்திரத்தோடு ஒரு தனிப்பட்ட நேரம்.",
      quote: "முன்பதிவுகள் மட்டுமே. சென்னையில் உள்ள எங்கள் ஆலோசனை மையத்திலோ அல்லது பாதுகாப்பான வீடியோ அழைப்பு மூலமாகவோ.",
      hoursLabel: "நேரம்",
      hoursVal: "திங்கள்-சனி · 07:00 – 19:00 IST",
      addressLabel: "முகவரி",
      addressVal: "எண். 7, கச்சேரி சாலை, மயிலாப்பூர், சென்னை 600004",
      contactLabel: "தொடர்புக்கு",
      contactVal: "+91 917 609 6471 · +91 877 823 6182 · WhatsApp available",
      form: {
        name: "முழு பெயர்",
        namePlaceholder: "உங்கள் பெயர்",
        phone: "தொலைபேசி எண்",
        phonePlaceholder: "+91 …",
        dob: "பிறந்த தேதி",
        tob: "பிறந்த நேரம்",
        pob: "பிறந்த இடம்",
        pobPlaceholder: "நகரம், மாநிலம்",
        nature: "ஆலோசனையின் வகை",
        natureOptions: [
          "ஜோதிடம் — பிறப்பு ஜாதக கணிப்பு",
          "நாடி — ஓலைச்சுவடி ஜோதிடம்",
          "வாஸ்து — வீடு / பணியிடம்",
          "திருமணப் பொருத்தம்",
          "இதர",
        ],
        question: "உங்கள் கேள்வி",
        questionPlaceholder: "உங்களுக்கு உள்ள கேள்வியை சுருக்கமாக விவரிக்கவும்…",
        submit: "முன்பதிவு விண்ணப்பிக்கவும்",
        replyNote: "ஒரு வேலை நாளுக்குள் நாங்கள் பதிலளிப்போம்.",
      },
    },
    footer: {
      description: "பாரம்பரிய வேத ஜோதிடம் மற்றும் ஆன்மீக சடங்குகளுக்கான தனிப்பட்ட ஆலோசனை நிலையம்.",
      headers: {
        consultation: "ஆலோசனை",
        contact: "தொடர்பு",
      },
      copyright: "© 2026 அனுகிரஹா ஜாதகாலயம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      shanti: "ஓம் சாந்தி சாந்தி சாந்தி",
    },
  },
  ml: {
    nav: {
      services: "സേവനങ്ങൾ",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      process: "വഴിക്രമം",
      voices: "അഭിപ്രായങ്ങൾ",
      faq: "ചോദ്യോത്തരം",
      book: "ബുക്കിംഗ് →",
    },
    hero: {
      tagline: "2009 മുതൽ · ശാസ്ത്ര വിധിപ്രകാരം",
      headline: ["പുരാതന", "ജ്ഞാനത്തിലൂടെ", "ജീവിതത്തിന്", "വഴികാട്ടുന്നു"],
      description:
        "വേദ ജ്യോതിഷം, പുണ്യ കർമ്മങ്ങൾ, പരിഹാര ക്രിയകൾ എന്നിവയ്ക്കുള്ള ഒരു സ്വകാര്യ കൺസൾട്ടൻസി — തലമുറകളായി കൈമാറിവന്ന ക്ഷേത്ര ജ്യോതിഷ പാരമ്പര്യം.",
      bookBtn: "കൂടിക്കാഴ്ചയ്ക്ക് ബുക്ക് ചെയ്യുക",
      whatsappBtn: "വാട്സാപ്പ്",
      yearsPractice: "വർഷത്തെ പരിചയം",
      clientsGuided: "വഴികാട്ടിയ വ്യക്തികൾ",
      sacredDisciplines: "ശാസ്ത്ര ശാഖകൾ",
      chooseLang: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    },
    services: {
      eyebrow: "ഒൻപത് ശാസ്ത്രങ്ങൾ",
      title: "പരിശുദ്ധ കൺസൾട്ടേഷനുകൾ",
      quote: "ഓരോ കലയും ഒരു വിളക്കാണ്; അവ ഒരുമിച്ച് ഒരു ജീവിതത്തെ മുഴുവൻ പ്രകാശിപ്പിക്കുന്നു.",
      items: [
        {
          title: "ജ്യോതിഷം",
          sub: "ജാതക നിരൂപണം",
          body: "വേദ ജാതക വിശകലനം, ദശാകാലങ്ങൾ, ശാസ്ത്രവിധി പ്രപ്രകാരമുള്ള ഗ്രഹപരിഹാരങ്ങൾ എന്നിവ.",
        },
        {
          title: "താന്ത്രികം",
          sub: "വിശുദ്ധ കർമ്മങ്ങൾ",
          body: "രക്ഷയ്ക്കും ഐശ്വര്യത്തിനും മനസ്സിന് വ്യക്തതയ്ക്കുമായി പരമ്പരാഗത യന്ത്രസ്ഥാപനവും ഹോമങ്ങളും.",
        },
        {
          title: "മാന്ത്രികം",
          sub: "മന്ത്ര സാധന",
          body: "ശരിയായ വിധിപ്രകാരം ജപിക്കുന്നതിനായി വ്യക്തിഗത ബീജ, മൂല മന്ത്രങ്ങൾ നൽകുന്നു.",
        },
        {
          title: "വൈദ്യം",
          sub: "ആയുർവേദ മാർഗ്ഗനിർദ്ദേശം",
          body: "ശരീരപ്രകൃതിക്ക് അനുസൃതമായി ദോഷം, ആഹാരം, ദിനചര്യ എന്നിവ ക്രമീകരിക്കുന്നതിനുള്ള നിർദ്ദേശങ്ങൾ.",
        },
        {
          title: "താംബൂലം",
          sub: "വെറ്റില ജ്യോതിഷം",
          body: "ജീവിതത്തിലെ പ്രധാന തീരുമാനങ്ങൾക്കും സംശയങ്ങൾക്കുമായി പണ്ടുകാലം മുതലുള്ള വെറ്റില പ്രശ്നം.",
        },
        {
          title: "സാമുദ്രികം",
          sub: "മുഖലക്ഷണം",
          body: "മുഖഭാവങ്ങളും ഘടനയും വിശകലനം ചെയ്ത് സ്വഭാവവും വിധിയും മനസ്സിലാക്കുന്നു.",
        },
        {
          title: "നാഡി",
          sub: "ഓലഗ്രന്ഥ വായന",
          body: "നിങ്ങളുടെ ജനനത്തിന് നൂറ്റാണ്ടുകൾക്ക് മുമ്പ് എഴുതി വെക്കപ്പെട്ട നാഡി ഗ്രന്ഥങ്ങളിലൂടെയുള്ള വായന.",
        },
        {
          title: "വാസ്തു",
          sub: "ദിശാ ശാസ്ത്രം",
          body: "വീടുകളും അമ്പലങ്ങളും പ്രകൃതിയിലെ ഊർജ്ജപ്രവാഹത്തിന് അനുസൃതമായി ക്രമീകരിക്കുന്നു.",
        },
        {
          title: "സംഖ്യാശാസ്ത്രം",
          sub: "സംഖ്യകളുടെ ശാസ്ത്രം",
          body: "പേരുകളും പ്രധാനപ്പെട്ട തീയതികളും സംഖ്യാശാസ്ത്രപരമായി ഒത്തുനോക്കി ഭാഗ്യം വർദ്ധിപ്പിക്കുന്നു.",
        },
      ],
    },
    about: {
      eyebrow: "ജ്യോതിഷൻ",
      title: "ശ്രീ വി. ഗോവിന്ദൻ നമ്പൂതിരി",
      sub: "വേദ ജ്യോതിഷൻ",
      bullets: [
        "അടിസ്ഥാന ജാതകം, ഫലങ്ങൾ",
        "സമ്പൂർണ്ണ ജാതകം, പ്രവചനങ്ങൾ",
        "വർഷഫലം",
        "വിവാഹ പൊരുത്തം",
        "ശുഭ മുഹൂർത്തം",
        "സംഖ്യാശാസ്ത്ര പ്രവചനങ്ങൾ",
        "അനുയോജ്യമായ പേര് നിർദ്ദേശിക്കൽ",
        "രാശിരത്ന നിർദ്ദേശം",
      ],
      parihara: "എല്ലാവിധ പരിഹാര പൂജകളും ഹോമങ്ങളും ശാസ്ത്രീയമായി ചെയ്തുതരുന്നതാണ്.",
      bannerText: "ലോകത്ത് എവിടെയുമുള്ള ആളുകൾക്ക് ഞങ്ങളുടെ ജ്യോതിഷ സേവനങ്ങൾ ലഭ്യമാണ്",
      languagesText: "തമിഴ് · ഇംഗ്ലീഷ് · ഹിന്ദി · മലയാളം",
    },
    whyChooseUs: {
      eyebrow: "എന്തുകൊണ്ട് അനുഗ്രഹ",
      title: "സമ്പൂർണ്ണ പാരമ്പര്യം",
      quote: "പഴമ വെറുമൊരു ചരിത്രമല്ല — അത് ജീവസ്സുറ്റതായി നിലനിൽക്കേണ്ടതാണ്.",
      items: [
        {
          t: "തുടർച്ചയായ പാരമ്പര്യം",
          d: "പരമ്പരാഗത ഗുരുശിഷ്യ ക്രമത്തിൽ അഞ്ചു തലമുറകളായി അഭ്യസിച്ചുവരുന്ന ക്ഷേത്ര ജ്യോതിഷികൾ.",
        },
        {
          t: "ശാസ്ത്രീയ കൃത്യത",
          d: "ഓരോ വിശകലനവും പരാശര, ജൈമിനി, നാഡി ശാസ്ത്രങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ് — വെറും ഊഹങ്ങളല്ല.",
        },
        {
          t: "രഹസ്യസ്വഭാവം",
          d: "മുൻകൂട്ടി ബുക്ക് ചെയ്യുന്നവർക്ക് മാത്രം കൺസൾട്ടേഷൻ. ഡോക്ടറെപ്പോലെ പൂർണ്ണ രഹസ്യസ്വഭാവം സൂക്ഷിക്കുന്നു.",
        },
        {
          t: "പ്രായോഗിക പരിഹാരങ്ങൾ",
          d: "നിങ്ങളുടെ ജീവിതചര്യയ്ക്ക് അനുയോജ്യമായ പരിഹാരങ്ങൾ — അപ്രായോഗികമായ കാര്യങ്ങൾ നിർദ്ദേശിക്കാറില്ല.",
        },
      ],
    },
    process: {
      eyebrow: "കൺസൾട്ടേഷൻ വഴിക്രമം",
      title: "അഞ്ച് ലളിതമായ പടികൾ",
      quote: "ശരിയായ പാത പതുക്കെയാണ് കടന്നുപോകുന്നത്, ഒരു സമയത്ത് ഒരു വിളക്കെന്ന വണ്ണം.",
      steps: [
        { n: "01", t: "ബുക്കിംഗ്", d: "നിങ്ങൾക്ക് സൗകര്യപ്രദമായ ഒരു സമയം മുൻകൂട്ടി ബുക്ക് ചെയ്യുക." },
        { n: "02", t: "ജനന വിവരങ്ങൾ", d: "ജനന തീയതി, സമയം, സ്ഥലം എന്നിവ രഹസ്യമായി പങ്കുവെക്കുക." },
        { n: "03", t: "കൺസൾട്ടേഷൻ", d: "നേരിട്ടോ അല്ലെങ്കിൽ വീഡിയോ കോൾ വഴിയോ ഉള്ള വ്യക്തിഗത കൂടിക്കാഴ്ച." },
        { n: "04", t: "പരിഹാരങ്ങൾ", d: "നിങ്ങൾക്കായി നിർദ്ദേശിക്കപ്പെട്ട മന്ത്രങ്ങളും പൂജാവിധികളും മനസ്സിലാക്കുക." },
        { n: "05", t: "തുടർ മാർഗ്ഗനിർദ്ദേശം", d: "ദശാകാല മാറ്റങ്ങൾക്കും ഗ്രഹനിലകൾക്കും അനുസൃതമായ തുടർ നിർദ്ദേശങ്ങൾ." },
      ],
    },
    testimonials: {
      eyebrow: "അഭിപ്രായങ്ങൾ",
      title: "സംതൃപ്തരായ വ്യക്തികൾ",
      quote: "ചെയ്ത കർമ്മങ്ങളേക്കാൾ ദീർഘകാലം നിലനിൽക്കുന്നത് മനസ്സ് നിറഞ്ഞ നന്ദിയാണ്.",
      items: [
        {
          q: "നിർദ്ദേശിച്ച പരിഹാരങ്ങൾ വളരെ കൃത്യതയുള്ളതായിരുന്നു. വർഷങ്ങൾ നീണ്ട അസ്വസ്ഥതകൾക്ക് ശേഷം ഞങ്ങൾക്ക് സമാധാനം ലഭിച്ചു.",
          n: "ലക്ഷ്മി നാരായണൻ",
          r: "ചെന്നൈ",
        },
        {
          q: "പരസ്യങ്ങൾ കൊടുക്കാത്ത ഒരു മികച്ച ജ്യോതിഷി. ഓരോ വായനയിലും പാരമ്പര്യത്തിന്റെ ഗാംഭീര്യവും ശാന്തതയും ഉണ്ടായിരുന്നു.",
          n: "അനന്യ അയ്യർ",
          r: "ബെംഗളൂരു",
        },
        {
          q: "മകന്റെ വിവാഹ പൊരുത്തത്തിനായി സമീപിച്ചു. ഞങ്ങൾക്ക് ലഭിച്ച വ്യക്തത തീരുമാനം വളരെ എളുപ്പമാക്കിത്തന്നു.",
          n: "രാജേഷ് മേനോൻ",
          r: "കൊച്ചി",
        },
        {
          q: "പുതിയ വീടിനായുള്ള വാസ്തു നിർദ്ദേശങ്ങൾ വീടിന്റെ അന്തരീക്ഷം ആകെ മാറ്റിമറിച്ചു. ശാന്തവും മാന്യവുമായ പെരുമാറ്റം.",
          n: "പ്രിയ സുബ്രഹ്മണ്യൻ",
          r: "കോയമ്പത്തൂർ",
        },
        {
          q: "നാഡി വായന അത്ഭുതപ്പെടുത്തുന്നതായിരുന്നു. ഒന്നും കൂട്ടിചേർക്കാതെ കർമ്മഫലങ്ങളെ അതേപടി കാണിച്ചുതന്നു.",
          n: "വിക്രം ഭട്ട്",
          r: "മുംബൈ",
        },
        {
          q: "തന്ന മന്ത്രം ഒരു വർഷമായി ജപിച്ചതിനുശേഷം, മനസ്സിൽ ഇതുവരെ അനുഭവിക്കാത്ത ഒരു ശാന്തത അനുഭവപ്പെടുന്നുണ്ട്.",
          n: "മീര കൃഷ്ണൻ",
          r: "തിരുവനന്തപുരം",
        },
      ],
    },
    gallery: {
      eyebrow: "ഞങ്ങളുടെ അനുഷ്ഠാനങ്ങൾ",
      title: "പൂജാ സാമഗ്രികളും കർമ്മങ്ങളും",
      quote: "ഉപകരണങ്ങൾ പുരാതനമാണ്; എന്നാൽ സംശയങ്ങൾ എപ്പോഴും പുതിയവയും.",
    },
    faq: {
      eyebrow: "ചോദ്യങ്ങൾ",
      title: "തുടങ്ങുന്നതിനു മുൻപ്",
      quote: "നിങ്ങളുടെ സംശയങ്ങൾ ധൈര്യമായി ചോദിക്കുക — വ്യക്തത തന്നെയാണ് ആദ്യത്തെ പരിഹാരം.",
      items: [
        {
          q: "ഇന്റർനെറ്റിൽ നിന്ന് ലഭിക്കുന്ന ജാതകത്തിൽ നിന്നും പരമ്പരാഗത വായന എങ്ങനെ വ്യത്യാസപ്പെട്ടിരിക്കുന്നു?",
          a: "ശാസ്‌ത്രീയ വായനയിൽ ജാതകം, ദശകൾ, ഗോചാരം, കുടുംബ പാരമ്പര്യം എന്നിവ വിലയിരുത്തുന്നു. ഓരോ പരിഹാരവും നിങ്ങൾക്ക് ചെയ്യാൻ സാധിക്കുന്നവ മാത്രമായിരിക്കും.",
        },
        {
          q: "ബുക്ക് ചെയ്യുന്നതിന് മുൻപ് ഞാൻ എന്തൊക്കെ വിവരങ്ങളാണ് നൽകേണ്ടത്?",
          a: "നിങ്ങളുടെ ജനന തീയതി, കൃത്യമായ സമയം (സാധ്യമാകുന്നത്ര), ജനന സ്ഥലം. സമയം കൃത്യമല്ലെങ്കിൽ സമയം ക്രമീകരിക്കുന്ന പ്രത്യേക സെഷൻ ആദ്യം ചെയ്യാം.",
        },
        {
          q: "പരിഹാരങ്ങൾ ചെയ്യാൻ ബുദ്ധിമുട്ടാണോ?",
          a: "പരിഹാരങ്ങൾ എപ്പോഴും നിങ്ങളുടെ ജീവിതശൈലിക്ക് അനുയോജ്യമായവയായിരിക്കും. പ്രഭാതത്തിലെ ചെറിയ മന്ത്രങ്ങൾ മുതൽ ചില പ്രത്യേക ദിവസങ്ങളിലെ പൂജകൾ വരെ ഇതിൽ പെടുന്നു.",
        },
        {
          q: "എന്റെ കൂടിക്കാഴ്ച രഹസ്യമായിരിക്കുമോ?",
          a: "തീർച്ചയായും. നിങ്ങളുടെ കൂടിക്കാഴ്ചയിലെ വിവരങ്ങളും ജാതകവും തികച്ചും രഹസ്യമായി സൂക്ഷിക്കുന്നതാണ്.",
        },
        {
          q: "തുടർ കൺസൾട്ടേഷനുകൾ ലഭ്യമാണോ?",
          a: "അതെ. മിക്ക കൺസൾട്ടന്റുകളും വർഷത്തിൽ ഒന്നോ രണ്ടോ തവണയും പ്രധാന ദശാകാല മാറ്റങ്ങളിലും വീണ്ടും ബന്ധപ്പെടാറുണ്ട്.",
        },
      ],
    },
    book: {
      eyebrow: "ബുക്കിംഗിനായി",
      title: "ശാസ്ത്രത്തിന്റെ സാന്നിധ്യത്തിൽ ഒരു മണിക്കൂർ.",
      quote: "കൺസൾട്ടേഷനുകൾ ബുക്കിംഗ് അനുസരിച്ച് മാത്രം. ചെന്നൈയിലെ കേന്ദ്രത്തിലോ വീഡിയോ കോൾ വഴിയോ സംസാരിക്കാം.",
      hoursLabel: "സമയം",
      hoursVal: "തിങ്കൾ-ശനി · 07:00 – 19:00 IST",
      addressLabel: "മേൽവിലാസം",
      addressVal: "നമ്പർ 7, കച്ചേരി റോഡ്, മൈലാപ്പൂർ, ചെന്നൈ 600004",
      contactLabel: "ബന്ധപ്പെടാൻ",
      contactVal: "+91 917 609 6471 · +91 877 823 6182 · WhatsApp available",
      form: {
        name: "മുഴുപേര്",
        namePlaceholder: "നിങ്ങളുടെ പേര്",
        phone: "ഫോൺ നമ്പർ",
        phonePlaceholder: "+91 …",
        dob: "ജനന തീയതി",
        tob: "ജനന സമയം",
        pob: "ജനന സ്ഥലം",
        pobPlaceholder: "നഗരം, സംസ്ഥാനം",
        nature: "കൺസൾട്ടേഷൻ്റെ വിഷയം",
        natureOptions: [
          "ജ്യോതിഷം — ജാതക നിരൂപണം",
          "നാഡി — ഓലഗ്രന്ഥ പ്രശ്നം",
          "വാസ്തു — വീട് / തൊഴിലിടം",
          "വിവാഹ പൊരുത്തം",
          "മറ്റുള്ളവ",
        ],
        question: "നിങ്ങളുടെ ചോദ്യം",
        questionPlaceholder: "നിങ്ങളുടെ വിഷയം ചുരുക്കത്തിൽ വിവരിക്കുക…",
        submit: "അപ്പോയിന്റ്മെന്റിനായി അപേക്ഷിക്കുക",
        replyNote: "ഒരു പ്രവൃത്തിദിനത്തിനുള്ളിൽ ഞങ്ങൾ മറുപടി നൽകും.",
      },
    },
    footer: {
      description: "പരമ്പരാഗത വേദ ജ്യോതിഷത്തിലും ആത്മീയ കർമ്മങ്ങളിലുമുള്ള ഒരു സ്വകാര്യ കൺസൾട്ടൻസി.",
      headers: {
        consultation: "കൂടിക്കാഴ്ചകൾ",
        contact: "ബന്ധപ്പെടുക",
      },
      copyright: "© 2026 അനുഗ്രഹ ജാതകാലയം. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
      shanti: "ഓം ശാന്തി ശാന്തി ശാന്തി",
    },
  },
};


