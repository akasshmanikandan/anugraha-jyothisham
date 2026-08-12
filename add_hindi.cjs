const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

code = code.replace('import ml from "@/locales/ml.json";', 'import ml from "@/locales/ml.json";\nimport hi from "@/locales/hi.json";');
code = code.replace('const TRANSLATIONS = { en, ta, ml };', 'const TRANSLATIONS = { en, ta, ml, hi };');
code = code.replace('type Language = "en" | "ta" | "ml";', 'type Language = "en" | "ta" | "ml" | "hi";');
code = code.replace('if (saved === "en" || saved === "ta" || saved === "ml") {', 'if (saved === "en" || saved === "ta" || saved === "ml" || saved === "hi") {');

const mlButtonStr = `<button
                        onClick={() => handleLangChange("ml")}`;
const hiButtonStr = `<button
                        onClick={() => handleLangChange("hi")}
                        className={\`px-4 py-2 text-[10px] tracking-widest uppercase transition-colors duration-500 \${
                          lang === "hi" ? "text-[#D4AF37]" : "text-[#C9C3B0]/60 hover:text-[#C9C3B0]"
                        }\`}
                      >
                        HI
                      </button>
                      <button
                        onClick={() => handleLangChange("ml")}`;

code = code.replace(mlButtonStr, hiButtonStr);
fs.writeFileSync('src/routes/index.tsx', code);
console.log('Fixed index.tsx for hindi');
