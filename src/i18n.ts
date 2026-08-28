import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ta from "./locales/ta.json";
import ml from "./locales/ml.json";
import hi from "./locales/hi.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta },
      ml: { translation: ml },
      hi: { translation: hi },
    },
    supportedLngs: ["en", "ta", "ml", "hi"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
