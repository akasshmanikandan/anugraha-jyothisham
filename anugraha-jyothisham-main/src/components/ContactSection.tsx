import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Field, CtaButton } from "./Shared";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="book" className="relative py-24" style={{ background: "#050F22" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "#D4AF37" }}>
            {t.book.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory md:text-[44px]">
            {t.book.title}
          </h2>
          <p className="mt-6 font-serif-italic text-xl" style={{ color: "#C9C3B0" }}>
            {t.book.quote}
          </p>
          <div className="mt-10 space-y-4 text-[14px]" style={{ color: "#C9C3B0" }}>
            <div className="flex items-baseline gap-4">
              <span className="w-24 uppercase tracking-[0.22em] text-[11px]" style={{ color: "#D4AF37" }}>
                {t.book.hoursLabel}
              </span>
              <span>{t.book.hoursVal}</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-24 uppercase tracking-[0.22em] text-[11px]" style={{ color: "#D4AF37" }}>
                {t.book.addressLabel}
              </span>
              <span>{t.book.addressVal}</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-24 uppercase tracking-[0.22em] text-[11px]" style={{ color: "#D4AF37" }}>
                {t.book.contactLabel}
              </span>
              <span>{t.book.contactVal}</span>
            </div>
          </div>
        </div>

        <form
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

            const text = `*New Consultation Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date of Birth:* ${dob}\n*Time of Birth:* ${tob}\n*Place of Birth:* ${pob}\n*Nature:* ${nature}\n*Question:* ${question}`;
            const encodedText = encodeURIComponent(text);
            window.open(`https://wa.me/918778236182?text=${encodedText}`, "_blank");
          }}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field name="name" label={t.book.form.name} placeholder={t.book.form.namePlaceholder} />
            <Field name="phone" label={t.book.form.phone} placeholder={t.book.form.phonePlaceholder} />
            <Field name="dob" label={t.book.form.dob} type="date" />
            <Field name="tob" label={t.book.form.tob} type="time" />
            <div className="md:col-span-2">
              <Field name="pob" label={t.book.form.pob} placeholder={t.book.form.pobPlaceholder} />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
                {t.book.form.nature}
              </label>
              <select name="nature" className="field w-full px-4 py-3 text-[14px]">
                {t.book.form.natureOptions.map((opt: string) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
                {t.book.form.question}
              </label>
              <textarea
                name="question"
                rows={4}
                className="field w-full px-4 py-3 text-[14px]"
                placeholder={t.book.form.questionPlaceholder}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton type="submit">{t.book.form.submit}</CtaButton>
            <span className="font-serif-italic text-[13px]" style={{ color: "#C9C3B0" }}>
              {t.book.form.replyNote}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
