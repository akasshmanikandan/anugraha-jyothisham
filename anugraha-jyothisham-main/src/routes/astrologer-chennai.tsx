import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/astrologer-chennai")({
  head: () => ({
    meta: [
      { title: "Astrologer in Chennai | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Find an astrologer in Chennai for Vedic astrology, Nadi consultation, marriage matching, numerology, and temple ritual guidance.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/astrologer-chennai/" }],
  }),
  component: ChennaiAstrologerPage,
});

function ChennaiAstrologerPage() {
  return (
    <SeoPage
      eyebrow="Chennai"
      title="Astrologer in Chennai"
      description="A Chennai-focused astrology page for people searching for local guidance, consultation support, and practical remedies."
      canonical="https://www.anugrahajyothishalaya.com/astrologer-chennai/"
      intro="This page is built for Chennai search intent and highlights the core consultation services available from Anugraha Jyothishalaya. It is a better landing point than a general homepage section because it can answer local, service-specific queries directly and still route visitors to the right page."
      sections={[
        {
          title: "Consultations available",
          body: "The consultation flow covers horoscope review, relationship concerns, career timing, marriage matching, and ritual recommendations. Visitors can move from general enquiry to a more specific service page without losing the site structure.",
          bullets: [
            "Vedic astrology consultations",
            "Nadi astrology reading support",
            "Marriage and compatibility guidance",
            "Remedy planning and ritual follow-up",
          ],
        },
        {
          title: "Why this page exists",
          body: "Search engines work better when local-intent pages are separate, descriptive, and easy to crawl. This page gives Chennai visitors a dedicated destination while keeping the visual identity of the site intact.",
        },
      ]}
      ctaHref="/contact"
      ctaLabel="Book a Chennai consultation"
    />
  );
}
