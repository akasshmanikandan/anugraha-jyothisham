const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

const regex = /function Field\(\{\s*label,\s*placeholder,\s*type\s*=\s*"text",\s*\}\s*:\s*\{\s*label:\s*string;\s*placeholder\?:\s*string;\s*type\?:\s*string;\s*\}\)\s*\{\s*return\s*\(\s*<div>\s*<label[^>]*>\s*\{label\}\s*<\/label>\s*<input\s*type=\{type\}\s*placeholder=\{placeholder\}\s*className="field\sw-full\spx-4\spy-3\stext-\[14px\]"\s*\/>\s*<\/div>\s*\);\s*\}/s;

const replacement = `function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="field w-full px-4 py-3 text-[14px]"
      />
    </div>
  );
}`;

if (regex.test(code)) {
  code = code.replace(regex, replacement);
  fs.writeFileSync('src/routes/index.tsx', code);
  console.log("Successfully replaced Field component.");
} else {
  console.log("Regex did not match.");
}
