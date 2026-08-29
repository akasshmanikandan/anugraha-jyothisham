import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/astrologer-perambur")({
  head: () => ({
    meta: [
      { title: "Astrologer in Perambur | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Perambur-specific astrology and consultation page for families looking for Vedic guidance, marriage matching, and remedy support.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/astrologer-perambur/" }],
  }),
  component: PeramburAstrologerPage,
});

function PeramburAstrologerPage() {
  return (
    <SeoPage
      eyebrow="Perambur"
      title="Astrologer in Perambur"
      description="A focused local page for Perambur visitors who want an astrologer with a clear appointment flow and service-specific information."
      canonical="https://www.anugrahajyothishalaya.com/astrologer-perambur/"
      intro="This page gives Perambur visitors a direct route into the practice. It explains the consultation choices clearly, supports a local search query, and links out to the deeper service pages for anyone who wants to explore a specific discipline first."
      sections={[
        {
          title: "What visitors usually ask about",
          body: "The most common topics are family guidance, marriage matching, timing for important life events, and remedies for repeated obstacles. The page keeps those paths visible without forcing the user to hunt through anchor sections.",
          bullets: [
            "Marriage matching",
            "Astrological consultation",
            "Ritual and parihara support",
            "Follow-up booking through contact",
          ],
        },
        {
          title: "For nearby families",
          body: "Perambur often brings family-based enquiries, so the page is structured to make that obvious. It helps the site rank for local intent while still leading visitors to the main services and contact pages.",
        },
      ]}
      ctaHref="/contact"
      ctaLabel="Contact for Perambur booking"
    />
  );
}
