import { Layout } from "@/components/Layout";

type SeoSection = {
  title: string;
  body: string;
  bullets?: string[];
};

type SeoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  canonical: string;
  intro: string;
  sections: SeoSection[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function SeoPage({
  eyebrow,
  title,
  description,
  canonical,
  intro,
  sections,
  ctaHref = "/contact",
  ctaLabel = "Book an appointment",
}: SeoPageProps) {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.28em] text-copper">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ivory md:text-6xl">{title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300">{description}</p>
          <p className="max-w-3xl text-base leading-8 text-stone-200">{intro}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full border border-copper/40 bg-copper px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-copper-light"
            >
              {ctaLabel}
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-white/8"
            >
              View services
            </a>
          </div>
        </div>

        <div className="mt-14 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-semibold text-ivory">{section.title}</h2>
              <p className="text-base leading-8 text-stone-300">{section.body}</p>
              {section.bullets?.length ? (
                <ul className="grid gap-3 text-stone-200 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-copper">Canonical URL</p>
          <p className="mt-2 break-all text-sm text-stone-300">{canonical}</p>
        </div>
      </div>
    </Layout>
  );
}
