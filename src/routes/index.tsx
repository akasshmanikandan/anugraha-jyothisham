import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";

const VedicScene = lazy(() => import("@/components/VedicScene"));

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import sreeChakra from "@/assets/sree-chakra.png";
import deityVinayagar from "@/assets/deity-vinayagar.jpg";
import deityBhadrakali from "@/assets/deity-bhadrakali.jpg";
import deityMurugan from "@/assets/deity-murugan.jpg";
import deityAyyappan from "@/assets/deity-ayyappan.jpg";
import bgBhadrakali from "@/assets/bg-bhadrakali.png";
import bgVishnumaya from "@/assets/bg-vishnumaya.png";
import { TRANSLATIONS, type Language } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anugraha Jathakalaya — Vedic Astrology by Sri. V. Govindan Namboodiri" },
      {
        name: "description",
        content:
          "Anugraha Jathakalaya — Sri. V. Govindan Namboodiri, Vedic Astrologer. Horoscope, marriage matching, muhurtha, numerology, lucky name and rasi gems. Services anywhere in the world.",
      },
      { property: "og:title", content: "Anugraha Jathakalaya — Vedic Astrology" },

      {
        property: "og:description",
        content:
          "Personal consultations in Jyotisha, Nadi, Vaasthu and Numerology. Rooted in tradition, delivered with discretion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ---------------- Zodiac Wheel ---------------- */

const ZODIAC_GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function ZodiacWheel() {
  return (
    <div className="wheel relative aspect-square w-full max-w-[560px]">
      <svg viewBox="-300 -300 600 600" className="w-full h-full">
        <g className="wheel-rotator">
          {/* Outer ring */}
          <circle
            cx="0"
            cy="0"
            r="280"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.75"
            opacity="0.9"
            data-draw
            style={{ ["--dash" as string]: 1800, ["--delay" as string]: 0 }}
          />
          <circle
            cx="0"
            cy="0"
            r="275"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.35"
            opacity="0.6"
            data-draw
            style={{ ["--dash" as string]: 1800, ["--delay" as string]: 120 }}
          />
          {/* Second ring */}
          <circle
            cx="0"
            cy="0"
            r="235"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.75"
            data-draw
            style={{ ["--dash" as string]: 1500, ["--delay" as string]: 300 }}
          />
          {/* Glyph ring baseline */}
          <circle
            cx="0"
            cy="0"
            r="205"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.35"
            opacity="0.55"
            data-draw
            style={{ ["--dash" as string]: 1300, ["--delay" as string]: 450 }}
          />
          {/* 12 divisions */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const x1 = +(Math.cos(a) * 205).toFixed(3);
            const y1 = +(Math.sin(a) * 205).toFixed(3);
            const x2 = +(Math.cos(a) * 275).toFixed(3);
            const y2 = +(Math.sin(a) * 275).toFixed(3);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#D4AF37"
                strokeWidth="0.5"
                opacity="0.7"
                data-draw
                style={{ ["--dash" as string]: 100, ["--delay" as string]: 600 + i * 40 }}
              />
            );
          })}
          {/* Glyphs */}
          {ZODIAC_GLYPHS.map((g, i) => {
            const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
            const x = Math.cos(a) * 240;
            const y = Math.sin(a) * 240;
            return (
              <text
                key={g}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20"
                fill="#D4AF37"
                opacity="0.85"
                style={{
                  fontFamily: "Cinzel, serif",
                  animation: `drift-in 500ms ease-out ${1000 + i * 60}ms both`,
                }}
              >
                {g}
              </text>
            );
          })}
          {/* Inner rings */}
          <circle
            cx="0"
            cy="0"
            r="165"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.4"
            opacity="0.55"
            data-draw
            style={{ ["--dash" as string]: 1100, ["--delay" as string]: 700 }}
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.4"
            opacity="0.5"
            data-draw
            style={{ ["--dash" as string]: 800, ["--delay" as string]: 900 }}
          />
          {/* Inner 8-point rose */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={0}
                y1={0}
                x2={Math.cos(a) * 120}
                y2={Math.sin(a) * 120}
                stroke="#D4AF37"
                strokeWidth="0.3"
                opacity="0.45"
                data-draw
                style={{ ["--dash" as string]: 130, ["--delay" as string]: 1100 + i * 30 }}
              />
            );
          })}
          {/* Innermost lotus dot */}
          <circle
            cx="0"
            cy="0"
            r="60"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.4"
            opacity="0.6"
            data-draw
            style={{ ["--dash" as string]: 400, ["--delay" as string]: 1300 }}
          />
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="#D4AF37"
            style={{ animation: "drift-in 500ms ease-out 1600ms both" }}
          />
        </g>
      </svg>
      {/* soft central glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.10), transparent 55%)",
        }}
      />
    </div>
  );
}

/* ---------------- CTA Button ---------------- */

function CtaButton({
  children,
  variant = "ghost",
  href,
  onClick,
  type,
}: {
  children: React.ReactNode;
  variant?: "ghost" | "maroon";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls =
    variant === "maroon"
      ? "bg-maroon text-ivory hover:bg-maroon-deep"
      : "bg-transparent text-ivory";
  const Cmp: any = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      type={type}
      className={`cta-btn group inline-flex items-center gap-3 px-7 py-4 text-[13px] uppercase tracking-[0.22em] font-medium border border-gold/40 transition-colors duration-300 ${cls}`}
      style={{ borderColor: "rgba(212,175,55,0.4)" }}
    >
      <svg className="cta-trace" preserveAspectRatio="none" viewBox="0 0 200 60">
        <rect x="0.5" y="0.5" width="199" height="59" />
      </svg>
      <span className="relative z-10">{children}</span>
    </Cmp>
  );
}

/* ---------------- Section Divider ---------------- */

function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelector(".divider-diamond")?.classList.add("in-view");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex items-center justify-center gap-4 py-14">
      <div className="h-px w-24 md:w-48 gold-hairline" />
      <div
        className="divider-diamond h-2.5 w-2.5 border border-gold"
        style={{ borderColor: "#D4AF37" }}
      />
      <div className="h-px w-24 md:w-48 gold-hairline" />
    </div>
  );
}

/* ---------------- Counter ---------------- */

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const doneRef = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !doneRef.current) {
            doneRef.current = true;
            const dur = 1600;
            const start = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------------- Service Icons (thin gold stroke SVGs) ---------------- */

const stroke = {
  fill: "none",
  stroke: "#D4AF37",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconAstrology() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <circle cx="24" cy="24" r="18" {...stroke} />
      <circle cx="24" cy="24" r="12" {...stroke} />
      <circle cx="24" cy="24" r="6" {...stroke} />
      <line x1="24" y1="6" x2="24" y2="42" {...stroke} />
      <line x1="6" y1="24" x2="42" y2="24" {...stroke} />
    </svg>
  );
}
function IconTantrikam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <polygon points="24,6 42,38 6,38" {...stroke} />
      <polygon points="24,42 6,10 42,10" {...stroke} />
    </svg>
  );
}
function IconMantrikam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M24 6 C 14 14, 14 34, 24 42 C 34 34, 34 14, 24 6 Z" {...stroke} />
      <circle cx="24" cy="24" r="3" {...stroke} />
    </svg>
  );
}
function IconVaithiyam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M18 8 L18 22 C 12 26, 12 38, 24 42 C 36 38, 36 26, 30 22 L30 8" {...stroke} />
      <line x1="18" y1="14" x2="30" y2="14" {...stroke} />
    </svg>
  );
}
function IconThambulam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M24 42 C 8 30, 8 12, 24 8 C 40 12, 40 30, 24 42 Z" {...stroke} />
      <path d="M24 8 C 24 20, 24 30, 24 42" {...stroke} />
    </svg>
  );
}
function IconFaceReading() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <ellipse cx="24" cy="24" rx="12" ry="16" {...stroke} />
      <circle cx="19" cy="21" r="1" {...stroke} />
      <circle cx="29" cy="21" r="1" {...stroke} />
      <path d="M19 30 Q 24 33, 29 30" {...stroke} />
    </svg>
  );
}
function IconNadi() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M6 24 Q 12 12, 18 24 T 30 24 T 42 24" {...stroke} />
      <line x1="6" y1="34" x2="42" y2="34" {...stroke} />
      <line x1="6" y1="14" x2="42" y2="14" {...stroke} />
    </svg>
  );
}
function IconVaasthu() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <polyline points="8,22 24,8 40,22 40,40 8,40 8,22" {...stroke} />
      <line x1="24" y1="8" x2="24" y2="40" {...stroke} />
      <line x1="8" y1="22" x2="40" y2="22" {...stroke} />
    </svg>
  );
}
function IconNumerology() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <circle cx="24" cy="24" r="18" {...stroke} />
      <polyline points="20,14 20,34" {...stroke} />
      <polyline points="14,20 20,14 26,20" {...stroke} />
      <polyline points="30,30 30,18 34,22" {...stroke} />
    </svg>
  );
}

const SERVICE_ICONS = [
  IconAstrology,
  IconTantrikam,
  IconMantrikam,
  IconVaithiyam,
  IconThambulam,
  IconFaceReading,
  IconNadi,
  IconVaasthu,
  IconNumerology,
];

/* ---------------- Main page ---------------- */

function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [wick, setWick] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lang, setLang] = useState<Language>("en");

  /* Reflect 3D mode on <html> for CSS transforms */
  useEffect(() => {
    document.documentElement.dataset.fx = "on";
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("preferredLanguage");
    if (saved === "en" || saved === "ta" || saved === "ml") {
      setLang(saved as Language);
    }
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  const t = TRANSLATIONS[lang];


  /* Cursor embers — desktop hero only */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const hero = heroRef.current;
    if (!hero) return;

    const embers: HTMLDivElement[] = [];
    const N = 14;
    for (let i = 0; i < N; i++) {
      const e = document.createElement("div");
      e.className = "ember";
      e.style.opacity = "0";
      document.body.appendChild(e);
      embers.push(e);
    }

    const positions = Array.from({ length: N }, () => ({ x: 0, y: 0 }));
    let mouseX = -9999;
    let mouseY = -9999;
    let inside = false;

    const onMove = (ev: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      inside =
        ev.clientX >= rect.left &&
        ev.clientX <= rect.right &&
        ev.clientY >= rect.top &&
        ev.clientY <= rect.bottom;
      mouseX = ev.clientX;
      mouseY = ev.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      // Leader follows mouse with easing; each subsequent ember follows the previous.
      const targetX = inside ? mouseX : positions[0].x;
      const targetY = inside ? mouseY : positions[0].y;
      positions[0].x += (targetX - positions[0].x) * 0.28;
      positions[0].y += (targetY - positions[0].y) * 0.28;
      for (let i = 1; i < N; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.32;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.32;
      }
      for (let i = 0; i < N; i++) {
        const baseOpacity = inside ? 0.55 * (1 - i / N) : 0;
        const drift = inside ? (Math.random() - 0.5) * 1.4 : 0;
        embers[i].style.transform = `translate3d(${positions[i].x + drift - 3}px, ${
          positions[i].y + drift - 3
        }px, 0) scale(${1 - i / (N * 1.6)})`;
        // ease opacity smoothly
        const cur = parseFloat(embers[i].style.opacity || "0");
        const next = cur + (baseOpacity - cur) * 0.12;
        embers[i].style.opacity = String(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      embers.forEach((e) => e.remove());
    };
  }, []);

  /* Scroll-linked 3D depth: sets --p (-1..1) on every [data-d3] element */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const vh = window.innerHeight;
      const nodes = document.querySelectorAll<HTMLElement>("[data-d3]");
      nodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh * 0.4 || r.top > vh * 1.4) return;
        const center = r.top + r.height / 2;
        const p = Math.max(-1, Math.min(1, (center - vh / 2) / vh));
        el.style.setProperty("--p", p.toFixed(4));
      });
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Timeline wick fill on scroll */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = timelineRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // start filling when top passes 80% of viewport, end at 20%
      const total = rect.height + vh * 0.6;
      const passed = Math.min(total, Math.max(0, vh * 0.8 - rect.top));
      setWick(Math.min(100, (passed / total) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const headline = useMemo(
    () => t.hero.headline,
    [t]
  );

  return (
    <div className="min-h-screen text-ivory" style={{ background: "#081A34", color: "#F7F4EA" }}>
      {/* Navigation */}
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
            <a href="#top" className="font-display text-[15px] tracking-[0.24em] text-ivory">
              ANUGRAHA <span style={{ color: "#D4AF37" }}>·</span> JATHAKALAYA
            </a>
            <nav className="hidden items-center gap-9 text-[12px] uppercase tracking-[0.22em] md:flex" style={{ color: "#C9C3B0" }}>
              <a href="#services" className="hover:text-ivory transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-ivory transition-colors">{t.nav.about}</a>
              <a href="#process" className="hover:text-ivory transition-colors">{t.nav.process}</a>
              <a href="#testimonials" className="hover:text-ivory transition-colors">{t.nav.voices}</a>
              <a href="#faq" className="hover:text-ivory transition-colors">{t.nav.faq}</a>
            </nav>
            <div className="flex items-center gap-6">
              {/* Header language switcher */}
              <div className="flex items-center gap-2 border px-2.5 py-1 rounded" style={{ borderColor: "rgba(212,175,55,0.25)", background: "rgba(5,15,34,0.4)" }}>
                {(["en", "ta", "ml"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
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
              <a
                href="#book"
                className="hidden text-[12px] uppercase tracking-[0.22em] md:inline-block"
                style={{ color: "#D4AF37" }}
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative overflow-hidden pt-40 pb-24 md:pt-44 md:pb-32"
      >
        {/* Subtle vignette — not a pulsing orb */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.06), transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(109,31,45,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div
              className="hero-tagline mb-8 inline-flex items-center gap-3 border px-4 py-1.5 text-[10px] uppercase tracking-[0.32em]"
              style={{ borderColor: "rgba(212,175,55,0.35)", color: "#D4AF37" }}
            >
              <span className="h-1 w-1 rounded-full" style={{ background: "#D4AF37" }} />
              {t.hero.tagline}
            </div>

            <h1 className="font-display text-[42px] leading-[1.05] tracking-tight text-ivory sm:text-[54px] md:text-[64px] lg:text-[68px]">
              {headline.map((w: string, i: number) => (
                <span key={i}>
                  <span className="hero-word" style={{ ["--i" as string]: i }}>
                    {w}
                  </span>
                  {i < headline.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            <p
              className="hero-tagline mt-8 max-w-xl font-serif-italic text-xl md:text-[22px]"
              style={{ color: "#C9C3B0" }}
            >
              {t.hero.description}
            </p>

            {/* Language Selector in Hero */}
            <div className="mt-8 hero-tagline">
              <span className="block text-[10px] uppercase tracking-[0.24em] mb-3" style={{ color: "#D4AF37" }}>
                {t.hero.chooseLang}
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  { code: "en", label: "English" },
                  { code: "ta", label: "தமிழ்" },
                  { code: "ml", label: "മലയാളം" },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleLangChange(item.code as Language)}
                    className="px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] font-medium border transition-all duration-300"
                    style={{
                      background: lang === item.code ? "rgba(212,175,55,0.15)" : "rgba(8,26,52,0.35)",
                      borderColor: lang === item.code ? "#D4AF37" : "rgba(212,175,55,0.3)",
                      color: lang === item.code ? "#D4AF37" : "#C9C3B0",
                      boxShadow: lang === item.code ? "0 0 12px rgba(212,175,55,0.2)" : "none",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
              <CtaButton href="#book">{t.hero.bookBtn}</CtaButton>
              <CtaButton href="https://wa.me/919999999999" variant="maroon">
                {t.hero.whatsappBtn}
              </CtaButton>
            </div>

            <div className="hero-stats mt-16 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "rgba(212,175,55,0.18)" }}>
              <StatBlock end={16} suffix="+" label={t.hero.yearsPractice} />
              <StatBlock end={5000} suffix="+" label={t.hero.clientsGuided} />
              <StatBlock end={9} suffix="" label={t.hero.sacredDisciplines} />
            </div>
          </div>

          <div data-d3="near" className="relative mx-auto flex w-full items-center justify-center">
            <ClientOnly fallback={<ZodiacWheel />}>
              <Suspense fallback={<ZodiacWheel />}>
                <VedicScene />
              </Suspense>
            </ClientOnly>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          quote={t.services.quote}
        />
        <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "rgba(212,175,55,0.15)" }}>
          {t.services.items.map((s: any, idx: number) => {
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
      </section>

      <SectionDivider />

      {/* About */}
      <section id="about" className="relative py-24" style={{ background: "#050F22" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-16 px-6 md:px-10 lg:grid-cols-2">
          {/* Sri Chakra with Bhadrakali background */}
          <div data-d3="deep" className="relative flex items-center justify-center">
            <div
              className="relative w-full overflow-hidden flex items-center justify-center p-6 md:p-8"
              style={{
                borderRadius: 20,
                background: "#050F22",
                border: "1px solid rgba(212,175,55,0.35)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* Bhadrakali Background Image */}
              <img
                src={bgBhadrakali}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25 filter contrast-125"
                style={{ mixBlendMode: "luminosity" }}
              />
              <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(5,15,34,0.4) 0%, rgba(5,15,34,0.85) 100%)",
                }}
              />

              {/* Sree Chakra Image */}
              <img
                src={sreeChakra}
                alt="Sri Chakra (Sri Yantra) plaque in gold and maroon"
                width={512}
                height={512}
                loading="lazy"
                className="relative z-10 h-auto w-full max-w-[440px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 hidden h-24 w-24 border md:block pointer-events-none z-0"
              style={{ borderColor: "rgba(212,175,55,0.4)" }}
            />
          </div>

          {/* Astrologer Description with Vishnumaya background */}
          <div
            className="relative overflow-hidden p-8 md:p-10 flex flex-col justify-center"
            style={{
              borderRadius: 20,
              background: "#050F22",
              border: "1px solid rgba(212,175,55,0.35)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Vishnumaya Background Image */}
            <img
              src={bgVishnumaya}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top opacity-30"
            />
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(8,26,52,0.88) 0%, rgba(5,15,34,0.92) 100%)",
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Description Text Content */}
            <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "#D4AF37" }}>
                {t.about.eyebrow}
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-[44px] text-ivory leading-tight">
                {t.about.title}
              </h2>
              <p className="mt-3 text-[12px] uppercase tracking-[0.28em]" style={{ color: "#D4AF37" }}>
                {t.about.sub}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {t.about.bullets.map((item: string) => (
                  <div key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "#C9C3B0" }}>
                    <span style={{ color: "#D4AF37" }}>◆</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[15px] leading-relaxed" style={{ color: "#C9C3B0" }}>
                {t.about.parihara}
              </p>
              <div
                className="mt-8 border-l pl-5"
                style={{ borderColor: "rgba(212,175,55,0.35)" }}
              >
                <p className="font-display text-[15px] leading-relaxed tracking-[0.08em] text-ivory">
                  {t.about.bannerText}
                </p>
                <p className="mt-2 text-[13px] uppercase tracking-[0.24em]" style={{ color: "#D4AF37" }}>
                  {t.about.languagesText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose Us */}
      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t.whyChooseUs.eyebrow}
          title={t.whyChooseUs.title}
          quote={t.whyChooseUs.quote}
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.whyChooseUs.items.map((x: any, i: number) => (
            <div key={i} className="glass-card p-8">
              <div
                className="mb-5 font-display text-[13px] tracking-[0.3em]"
                style={{ color: "#D4AF37" }}
              >
                0{i + 1}
              </div>
              <h3 className="font-display text-xl text-ivory">{x.t}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: "#C9C3B0" }}>
                {x.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Process Timeline */}
      <section id="process" className="relative py-24" style={{ background: "#050F22" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            quote={t.process.quote}
          />

          <div ref={timelineRef} className="relative mt-20">
            <div className="wick-line" />
            <div className="wick-fill" style={{ ["--wick" as string]: `${wick}%` }} />

            <ol className="relative grid grid-cols-2 gap-y-14 md:grid-cols-5 md:gap-y-0">
              {t.process.steps.map((p: any, i: number) => {
                const active = wick > (i / (t.process.steps.length - 1)) * 100 - 5;
                return (
                  <li key={p.n} className="relative flex flex-col items-center px-3 text-center">
                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-500"
                      style={{
                        background: "#050F22",
                        border: `1px solid ${active ? "#D4AF37" : "rgba(212,175,55,0.3)"}`,
                        boxShadow: active
                          ? "0 0 24px rgba(212,175,55,0.35)"
                          : "none",
                      }}
                    >
                      <span
                        className="font-display text-[13px]"
                        style={{ color: active ? "#D4AF37" : "#C9C3B0" }}
                      >
                        {p.n}
                      </span>
                    </div>
                    <h4 className="mt-6 font-display text-lg text-ivory">{p.t}</h4>
                    <p className="mt-2 max-w-[180px] text-[13px]" style={{ color: "#C9C3B0" }}>
                      {p.d}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <section id="testimonials" className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            quote={t.testimonials.quote}
          />
        </div>
        <div className="marquee relative mt-16 overflow-hidden">
          {/* edge fades */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
            style={{ background: "linear-gradient(to right, #081A34, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
            style={{ background: "linear-gradient(to left, #081A34, transparent)" }}
          />
          <div className="marquee-track flex gap-6 w-max py-4">
            {[...t.testimonials.items, ...t.testimonials.items].map((tm: any, i: number) => (
              <figure key={i} className="glass-card w-[380px] shrink-0 p-8">
                <div className="font-display text-3xl leading-none" style={{ color: "#D4AF37" }}>
                  &ldquo;
                </div>
                <blockquote className="mt-3 font-serif-italic text-[17px] leading-relaxed text-ivory">
                  {tm.q}
                </blockquote>
                <figcaption className="mt-6 text-[12px] uppercase tracking-[0.22em]" style={{ color: "#C9C3B0" }}>
                  {tm.n} · <span style={{ color: "#D4AF37" }}>{tm.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          quote={t.gallery.quote}
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[gallery1, gallery2, gallery3, gallery4].map((g, i) => (
            <figure
              key={i}
              data-d3="deep"
              className="relative overflow-hidden"
              style={{
                borderRadius: 12,
                border: "1px solid rgba(212,175,55,0.2)",
                transitionDelay: `${i * 40}ms`,
              }}
            >

              <img
                src={g}
                alt=""
                width={1024}
                height={1280}
                loading="lazy"
                className="h-64 w-full object-cover md:h-80"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(5,15,34,0.7) 100%)",
                }}
              />
            </figure>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
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

      <SectionDivider />

      {/* Appointment Form */}
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
            }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label={t.book.form.name} placeholder={t.book.form.namePlaceholder} />
              <Field label={t.book.form.phone} placeholder={t.book.form.phonePlaceholder} />
              <Field label={t.book.form.dob} type="date" />
              <Field label={t.book.form.tob} type="time" />
              <div className="md:col-span-2">
                <Field label={t.book.form.pob} placeholder={t.book.form.pobPlaceholder} />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-[11px] uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
                  {t.book.form.nature}
                </label>
                <select className="field w-full px-4 py-3 text-[14px]">
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

      {/* Footer with temple silhouette */}
      <footer className="relative overflow-hidden pt-16" style={{ background: "#050F22" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-display text-[15px] tracking-[0.28em] text-ivory">
                ANUGRAHA <span style={{ color: "#D4AF37" }}>·</span> JATHAKALAYA
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
                <li><a href="#services">{t.nav.services}</a></li>
                <li><a href="#process">{t.nav.process}</a></li>
                <li><a href="#book">{t.nav.book}</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#D4AF37" }}>
                {t.footer.headers.contact}
              </div>
              <ul className="mt-4 space-y-2 text-[14px]" style={{ color: "#C9C3B0" }}>
                <li>+91 99999 99999</li>
                <li>office@anugrahajyotisham.in</li>
                <li>Mylapore, Chennai</li>
              </ul>
            </div>
          </div>

          {/* Temple silhouette */}
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
    </div>
  );
}

/* ---------------- Small components ---------------- */

function StatBlock({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl" style={{ color: "#D4AF37" }}>
        <Counter end={end} suffix={suffix} />
      </div>
      <div
        className="mt-2 text-[11px] uppercase tracking-[0.22em]"
        style={{ color: "#C9C3B0" }}
      >
        {label}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  quote,
}: {
  eyebrow: string;
  title: string;
  quote: string;
}) {
  return (
    <div data-d3="float" className="mx-auto max-w-3xl text-center">
      <div className="text-[10px] uppercase tracking-[0.36em]" style={{ color: "#D4AF37" }}>
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl leading-tight text-ivory md:text-[48px]">
        {title}
      </h2>
      <p className="mt-6 font-serif-italic text-xl" style={{ color: "#C9C3B0" }}>
        {quote}
      </p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="field w-full px-4 py-3 text-[14px]"
      />
    </div>
  );
}

function TempleSilhouette({ lang = "en" }: { lang?: Language }) {
  const deityNames = {
    en: ["Vinayagar", "Bhadrakali", "Murugan", "Ayyappan"],
    ta: ["விநாயகர்", "பத்ரகாளி", "முருகன்", "ஐயப்பன்"],
    ml: ["ഗണപതി", "ഭദ്രകാളി", "മുരുകൻ", "അയ്യപ്പൻ"],
  };

  const names = deityNames[lang] || deityNames.en;

  const temples = [
    { id: "t1", img: deityVinayagar,  name: names[0] },
    { id: "t2", img: deityBhadrakali, name: names[1] },
    { id: "t3", img: deityMurugan,    name: names[2] },
    { id: "t4", img: deityAyyappan,   name: names[3] },
  ];

  // Temple arch as a CSS polygon clip-path (percentage-based).
  // Wide stepped gopuram: narrow peak at very top, broad base — face always
  // sits in the wide middle section of the arch where plenty of width is visible.
  const archClip =
    "polygon(50% 0%, 56% 3%, 62% 7%, 68% 12%, 74% 19%, 80% 28%, 85% 39%, 89% 51%, 92% 65%, 94% 80%, 96% 100%, 4% 100%, 6% 80%, 8% 65%, 11% 51%, 15% 39%, 20% 28%, 26% 19%, 32% 12%, 38% 7%, 44% 3%)";

  // Same polygon in 0-100 coordinate space for the SVG border overlay
  const archPoints =
    "50,0 56,3 62,7 68,12 74,19 80,28 85,39 89,51 92,65 94,80 96,100 4,100 6,80 8,65 11,51 15,39 20,28 26,19 32,12 38,7 44,3";

  return (
    <div style={{ display: "flex", gap: "6px", width: "100%", alignItems: "flex-end" }}>
      {temples.map(({ id, img, name }) => (
        <div key={id} style={{ flex: 1, position: "relative" }}>
          <div style={{ position: "relative" }}>
            {/* Deity photo — objectPosition "center 20%" keeps face/head in view */}
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
            {/* Subtle bottom-fade so name label reads cleanly */}
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
            {/* Gold border drawn as an SVG polygon overlay */}
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
            {/* Kalasha — gold orb at the very tip */}
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
          {/* Deity name label */}
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



