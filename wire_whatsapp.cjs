const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Update Field component to accept and pass name
code = code.replace(
  'function Field({ label, type = "text", placeholder = "" }: any) {',
  'function Field({ label, name, type = "text", placeholder = "" }: any) {'
);
code = code.replace(
  '<input\n        type={type}\n        placeholder={placeholder}\n        className="field w-full px-4 py-3 text-[14px]"\n      />',
  '<input\n        name={name}\n        type={type}\n        placeholder={placeholder}\n        className="field w-full px-4 py-3 text-[14px]"\n      />'
);

// Update form submission logic
const oldFormHeader = `<form
            className="glass-card p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >`;
const newFormHeader = `<form
            className="glass-card p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") || "";
              const phone = formData.get("phone") || "";
              const dob = formData.get("dob") || "";
              const tob = formData.get("tob") || "";
              const pob = formData.get("pob") || "";
              const nature = formData.get("nature") || "";
              const question = formData.get("question") || "";

              const text = \`*New Consultation Request*\\n\\n*Name:* \${name}\\n*Phone:* \${phone}\\n*Date of Birth:* \${dob}\\n*Time of Birth:* \${tob}\\n*Place of Birth:* \${pob}\\n*Nature:* \${nature}\\n*Question:* \${question}\`;
              const encodedText = encodeURIComponent(text);
              window.open(\`https://wa.me/918778236182?text=\${encodedText}\`, "_blank");
            }}
          >`;
code = code.replace(oldFormHeader, newFormHeader);

// Update Fields in the form to have name attributes
code = code.replace('<Field label={t.book.form.name} placeholder={t.book.form.namePlaceholder} />', '<Field name="name" label={t.book.form.name} placeholder={t.book.form.namePlaceholder} />');
code = code.replace('<Field label={t.book.form.phone} placeholder={t.book.form.phonePlaceholder} />', '<Field name="phone" label={t.book.form.phone} placeholder={t.book.form.phonePlaceholder} />');
code = code.replace('<Field label={t.book.form.dob} type="date" />', '<Field name="dob" label={t.book.form.dob} type="date" />');
code = code.replace('<Field label={t.book.form.tob} type="time" />', '<Field name="tob" label={t.book.form.tob} type="time" />');
code = code.replace('<Field label={t.book.form.pob} placeholder={t.book.form.pobPlaceholder} />', '<Field name="pob" label={t.book.form.pob} placeholder={t.book.form.pobPlaceholder} />');
code = code.replace('<select className="field w-full px-4 py-3 text-[14px]">', '<select name="nature" className="field w-full px-4 py-3 text-[14px]">');
code = code.replace('<textarea\n                  rows={4}\n                  className="field w-full px-4 py-3 text-[14px]"\n                  placeholder={t.book.form.questionPlaceholder}\n                />', '<textarea\n                  name="question"\n                  rows={4}\n                  className="field w-full px-4 py-3 text-[14px]"\n                  placeholder={t.book.form.questionPlaceholder}\n                />');

fs.writeFileSync('src/routes/index.tsx', code);
console.log('Fixed index.tsx for WhatsApp redirect');
