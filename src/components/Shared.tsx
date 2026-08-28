import React, { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
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

export function StatBlock({ end, suffix, label }: { end: number; suffix: string; label: string }) {
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

export function SectionHeading({
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

export function Field({
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
}

export function CtaButton({
  children,
  variant = "ghost",
  href,
  to,
  onClick,
  type,
}: {
  children: React.ReactNode;
  variant?: "ghost" | "maroon";
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls =
    variant === "maroon"
      ? "bg-maroon text-ivory hover:bg-maroon-deep"
      : "bg-transparent text-ivory";
  
  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`cta-btn group inline-flex items-center gap-3 px-7 py-4 text-[13px] uppercase tracking-[0.22em] font-medium border border-gold/40 transition-colors duration-300 ${cls}`}
        style={{ borderColor: "rgba(212,175,55,0.4)" }}
      >
        <svg className="cta-trace" preserveAspectRatio="none" viewBox="0 0 200 60">
          <rect x="0.5" y="0.5" width="199" height="59" />
        </svg>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

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

export function SectionDivider() {
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

const stroke = {
  fill: "none",
  stroke: "#D4AF37",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAstrology() {
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
export function IconTantrikam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <polygon points="24,6 42,38 6,38" {...stroke} />
      <polygon points="24,42 6,10 42,10" {...stroke} />
    </svg>
  );
}
export function IconMantrikam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M24 6 C 14 14, 14 34, 24 42 C 34 34, 34 14, 24 6 Z" {...stroke} />
      <circle cx="24" cy="24" r="3" {...stroke} />
    </svg>
  );
}
export function IconVaithiyam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M18 8 L18 22 C 12 26, 12 38, 24 42 C 36 38, 36 26, 30 22 L30 8" {...stroke} />
      <line x1="18" y1="14" x2="30" y2="14" {...stroke} />
    </svg>
  );
}
export function IconThambulam() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M24 42 C 8 30, 8 12, 24 8 C 40 12, 40 30, 24 42 Z" {...stroke} />
      <path d="M24 8 C 24 20, 24 30, 24 42" {...stroke} />
    </svg>
  );
}
export function IconFaceReading() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <ellipse cx="24" cy="24" rx="12" ry="16" {...stroke} />
      <circle cx="19" cy="21" r="1" {...stroke} />
      <circle cx="29" cy="21" r="1" {...stroke} />
      <path d="M19 30 Q 24 33, 29 30" {...stroke} />
    </svg>
  );
}
export function IconNadi() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <path d="M6 24 Q 12 12, 18 24 T 30 24 T 42 24" {...stroke} />
      <line x1="6" y1="34" x2="42" y2="34" {...stroke} />
      <line x1="6" y1="14" x2="42" y2="14" {...stroke} />
    </svg>
  );
}
export function IconVaasthu() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <polyline points="8,22 24,8 40,22 40,40 8,40 8,22" {...stroke} />
      <line x1="24" y1="8" x2="24" y2="40" {...stroke} />
      <line x1="8" y1="22" x2="40" y2="22" {...stroke} />
    </svg>
  );
}
export function IconNumerology() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" className="icon-stroke">
      <circle cx="24" cy="24" r="18" {...stroke} />
      <polyline points="20,14 20,34" {...stroke} />
      <polyline points="14,20 20,14 26,20" {...stroke} />
      <polyline points="30,30 30,18 34,22" {...stroke} />
    </svg>
  );
}

export const SERVICE_ICONS = [
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
