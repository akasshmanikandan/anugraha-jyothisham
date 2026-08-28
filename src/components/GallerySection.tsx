import React, { useRef, useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeading } from "./Shared";

import godPhoto1 from "@/assets/god-photo-1.jpeg";
import ritual1 from "@/assets/ritual-1.jpeg";
import ritual2 from "@/assets/ritual-2.jpeg";
import ritual3 from "@/assets/ritual-3.jpeg";
import ritual4 from "@/assets/ritual-4.jpeg";
import ritual5 from "@/assets/ritual-5.jpeg";
import ritual6 from "@/assets/ritual-6.jpeg";
import ritual8 from "@/assets/ritual-8.jpeg";

export function GallerySection() {
  const { t } = useLanguage();
  const galleryStripRef = useRef<HTMLDivElement>(null);

  const galleryPhotos = useMemo(
    () => [
      { src: godPhoto1, alt: "Temple deity adorned with flowers" },
      { src: ritual1, alt: "Ritual fire ceremony at night" },
      { src: ritual2, alt: "Ritual altar with lamps and floral arrangement" },
      { src: ritual3, alt: "Floor ritual with lamps and offerings" },
      { src: ritual4, alt: "Temple ritual with central fire and devotees" },
      { src: ritual5, alt: "Decorated shrine with multiple deity frames" },
      { src: ritual6, alt: "Pooja arrangement with lamps and flowers" },
      { src: ritual8, alt: "Sacred fire burning in a ritual pit" },
    ],
    []
  );

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        quote={t.gallery.quote}
      />
      <div className="mt-16">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C9C3B0" }}>
            {t.gallery.scrollArchive || "Scroll through the ritual archive"}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                galleryStripRef.current?.scrollBy({ left: -420, behavior: "smooth" });
              }}
              className="border px-3 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-[rgba(212,175,55,0.08)]"
              style={{ borderColor: "rgba(212,175,55,0.25)", color: "#D4AF37" }}
              aria-label="Scroll gallery left"
            >
              {t.gallery.prev || "Prev"}
            </button>
            <button
              type="button"
              onClick={() => {
                galleryStripRef.current?.scrollBy({ left: 420, behavior: "smooth" });
              }}
              className="border px-3 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-[rgba(212,175,55,0.08)]"
              style={{ borderColor: "rgba(212,175,55,0.25)", color: "#D4AF37" }}
              aria-label="Scroll gallery right"
            >
              {t.gallery.next || "Next"}
            </button>
          </div>
        </div>
        <div
          ref={galleryStripRef}
          className="flex gap-4 overflow-x-auto pb-4 pr-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(212,175,55,0.35) transparent" }}
        >
          {galleryPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              data-d3="deep"
              className="group relative shrink-0 overflow-hidden"
              style={{
                borderRadius: 12,
                border: "1px solid rgba(212,175,55,0.2)",
                width: "min(78vw, 320px)",
                aspectRatio: "3 / 4",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  display: "block",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 58%, rgba(5,15,34,0.75) 100%)",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
