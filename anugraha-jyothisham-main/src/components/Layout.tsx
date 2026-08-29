import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage, Language } from "../contexts/LanguageContext";
import godPhoto3 from "@/assets/god-photo-3.jpeg";
import deityVinayagar from "@/assets/vinayagar.png";
import templePhoto from "@/assets/photo.png";

export function TempleSilhouette({ lang = "en" }: { lang?: Language }) {
  const deityNames = {
    en: ["Bhadrakali", "Vinayagar", "Vishnumaya"],
    ta: ["பத்ரகாளி", "விநாயகர்", "விഷ്ணுமாயா"],
    ml: ["ഭദ്രകാളി", "ഗണപതി", "വിഷ്ണുമായ"],
    hi: ["भद्रकाली", "विनायक", "विष्णुमाया"],
  };

  const names = deityNames[lang] || deityNames.en;

  const temples = [
    { id: "t1", img: godPhoto3, name: names[0] },
    { id: "t2", img: deityVinayagar, name: names[1] },
    { id: "t3", img: templePhoto, name: names[2] },
  ];

  const archClip =
    "polygon(50% 0%, 56% 3%, 62% 7%, 68% 12%, 74% 19%, 80% 28%, 85% 39%, 89% 51%, 92% 65%, 94% 80%, 96% 100%, 4% 100%, 6% 80%, 8% 65%, 11% 51%, 15% 39%, 20% 28%, 26% 19%, 32% 12%, 38% 7%, 44% 3%)";
  const archPoints =
    "50,0 56,3 62,7 68,12 74,19 80,28 85,39 89,51 92,65 94,80 96,100 4,100 6,80 8,65 11,51 15,39 20,28 26,19 32,12 38,7 44,3";

  return (
    <div style={{ display: "flex", gap: "6px", width: "100%", alignItems: "flex-end" }}>
      {temples.map(({ id, img, name }) => (
        <div key={id} style={{ flex: 1, position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              src={img}
              alt={name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                objectPosition: "center 20%",
                display: "block",
                clipPath: archClip,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(5,15,34,0.7) 100%)",
                clipPath: archClip,
                pointerEvents: "none",
              }}
            />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
                pointerEvents: "none",
              }}
            >
              <polygon
                points={archPoints}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                background: "#D4AF37",
                boxShadow: "0 0 8px rgba(212,175,55,0.7)",
              }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#D4AF37",
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              marginTop: "10px",
              paddingBottom: "4px",
            }}
          >
            {name.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div
        className="border-b"
        style={{
          borderColor: "rgba(212,175,55,0.15)",
          background: "rgba(8,26,52,0.55)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-[15px] tracking-[0.24em] text-ivory">
            ANUGRAHA JYOTHISHALAYA
          </Link>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} items-center gap-9 text-[12px] uppercase tracking-[0.22em] md:flex absolute md:relative top-full left-0 w-full md:w-auto flex-col md:flex-row bg-[#081A34] md:bg-transparent py-4 md:py-0 border-b md:border-none border-gold/20`} style={{ color: "#C9C3B0" }}>
            <Link to="/about" className="hover:text-ivory transition-colors">{t.nav.about}</Link>
            <Link to="/services" className="hover:text-ivory transition-colors">{t.nav.services}</Link>
            <Link to="/rituals" className="hover:text-ivory transition-colors">{t.nav.rituals}</Link>
            <a href="/#process" className="hover:text-ivory transition-colors">{t.nav.process}</a>
            <a href="/#testimonials" className="hover:text-ivory transition-colors">{t.nav.voices}</a>
            <Link to="/faq" className="hover:text-ivory transition-colors">{t.nav.faq}</Link>
            <Link to="/contact" className="hover:text-ivory transition-colors">{t.nav.book}</Link>
          </nav>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border px-2.5 py-1 rounded" style={{ borderColor: "rgba(212,175,55,0.25)", background: "rgba(5,15,34,0.4)" }}>
              {(["en", "ta", "ml", "hi"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-1.5 py-0.5 rounded text-[10px] uppercase font-semibold transition-all"
                  style={{
                    background: lang === l ? "#D4AF37" : "transparent",
                    color: lang === l ? "#050F22" : "#C9C3B0",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-8 h-8 text-ivory border border-gold/40 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <Link
              to="/contact"
              className="hidden text-[12px] uppercase tracking-[0.22em] md:inline-block"
              style={{ color: "#D4AF37" }}
            >
              {t.nav.book}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="relative overflow-hidden pt-16" style={{ background: "#050F22" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-[15px] tracking-[0.28em] text-ivory">
              ANUGRAHA JYOTHISHALAYA
            </div>
            <p className="mt-5 max-w-md font-serif-italic text-lg" style={{ color: "#C9C3B0" }}>
              {t.footer.description}
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#D4AF37" }}>
              {t.footer.headers.consultation}
            </div>
            <ul className="mt-4 space-y-2 text-[14px]" style={{ color: "#C9C3B0" }}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">{t.nav.services}</Link></li>
              <li><Link to="/rituals">{t.nav.rituals}</Link></li>
              <li><Link to="/faq">{t.nav.faq}</Link></li>
              <li><Link to="/contact">{t.nav.book}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#D4AF37" }}>
              {t.footer.headers.contact}
            </div>
            <ul className="mt-4 space-y-2 text-[14px]" style={{ color: "#C9C3B0" }}>
              <li>+91 917 609 6471 | +91 877 823 6182</li>
              <li>anugrahajyothishalaya@gmail.com</li>
              <li>perambur,chennai</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 -mb-2">
          <TempleSilhouette lang={lang} />
        </div>
        <div
          className="flex items-center justify-between border-t py-6 text-[11px] uppercase tracking-[0.22em]"
          style={{ borderColor: "rgba(212,175,55,0.2)", color: "#C9C3B0" }}
        >
          <span>{t.footer.copyright}</span>
          <span className="font-serif-italic normal-case tracking-normal text-[13px]" style={{ color: "#D4AF37" }}>
            {t.footer.shanti}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-ivory" style={{ background: "#081A34", color: "#F7F4EA" }}>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
