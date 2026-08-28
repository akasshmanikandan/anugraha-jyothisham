import React, { useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeading } from "./Shared";

export function FAQSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 md:px-10">
      <SectionHeading
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        quote={t.faq.quote}
      />
      <div className="mt-14 divide-y" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
        {t.faq.items.map((f: any, i: number) => {
          const open = openFaq === i;
          return (
            <div key={i} className="py-6" style={{ borderTop: i === 0 ? "1px solid rgba(212,175,55,0.2)" : undefined, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
              <button
                onClick={() => setOpenFaq(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-lg text-ivory md:text-xl">{f.q}</span>
                <span
                  className="inline-block h-6 w-6 shrink-0 border transition-transform duration-500"
                  style={{
                    borderColor: "rgba(212,175,55,0.6)",
                    transform: open ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <span
                    className="relative block h-full w-full"
                    style={{ color: "#D4AF37" }}
                  >
                    <span
                      className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2"
                      style={{ background: "#D4AF37" }}
                    />
                    <span
                      className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2"
                      style={{ background: "#D4AF37" }}
                    />
                  </span>
                </span>
              </button>
              <div className={`faq-panel ${open ? "open" : ""} mt-0`}>
                <div>
                  <p
                    className="pt-5 pr-10 text-[15px] leading-relaxed"
                    style={{ color: "#C9C3B0" }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
