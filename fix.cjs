const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

code = code.replace(/const { i18n } = useTranslation\(\);[\s\S]*?useEffect\(\(\) => \{ if \(i18n\.language !== lang\) i18n\.changeLanguage\(lang\); \}, \[lang, i18n\]\);/, 'const t: any = TRANSLATIONS[lang] || TRANSLATIONS.en;');

fs.writeFileSync('src/routes/index.tsx', code);
console.log('Fixed index.tsx');
