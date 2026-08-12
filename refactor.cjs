const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

code = code.replace(
  'import { TRANSLATIONS, type Language } from "@/lib/translations";',
  'import { useTranslation } from "react-i18next";\ntype Language = "en" | "ta" | "ml";'
);

code = code.replace(
  'const t = TRANSLATIONS[lang];',
  'const { i18n } = useTranslation();\n  const t: any = i18n.getResourceBundle(lang, "translation") || i18n.getResourceBundle("en", "translation");\n  if (i18n.language !== lang) i18n.changeLanguage(lang);'
);

fs.writeFileSync('src/routes/index.tsx', code);
console.log('Modified src/routes/index.tsx');
