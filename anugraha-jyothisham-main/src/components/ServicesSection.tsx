import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeading, SERVICE_ICONS } from "./Shared";

export function ServicesSection({ limit }: { limit?: number }) {
  const { t } = useLanguage();
  
  let items = t.services.items;
  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "rgba(212,175,55,0.15)" }}>
      {items.map((s: any, idx: number) => {
        const Icon = SERVICE_ICONS[idx];
        return (
          <article
            key={idx}
            data-d3="card"
            className="service-card group relative overflow-hidden p-8 md:p-10"
            style={{ background: "#081A34" }}
          >
            <div className="mb-6">
              {Icon && <Icon />}
            </div>
            <div
              className="mb-1 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              {s.sub}
            </div>
            <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: "#C9C3B0" }}>
              {s.body}
            </p>
          </article>
        );
      })}
    </div>
  );
}
