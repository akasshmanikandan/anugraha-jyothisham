import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/mantra-tantra")({
  head: () => ({
    meta: [
      { title: "Mantra & Tantra | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Mantra and tantra service page for ritual support, remedies, and consultation booking.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/mantra-tantra/" }],
  }),
  component: MantraTantraPage,
});

function MantraTantraPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Mantra & Tantra"
      description="A full service page for mantra and tantra consultation, connected to ritual support and remedies."
      canonical="https://www.anugrahajyothishalaya.com/services/mantra-tantra/"
      intro="This page covers mantra and tantra support as a distinct consultation path. It is written so the page itself contains enough context for a visitor to understand the service without relying on the homepage."
      sections={[
        {
          title: "Service focus",
          body: "The consultation may include mantra guidance, remedy suggestions, and spiritual support that aligns with the broader consultation plan. The tone remains practical and respectful.",
          bullets: [
            "Mantra recommendations",
            "Tantra-related remedy guidance",
            "Ritual planning",
            "Contact-based booking",
          ],
        },
        {
          title: "Linked services",
          body: "This route connects naturally with spiritual rituals, Nadi astrology, and Jyotisha. Internal links make those relationships easy for search engines to crawl.",
        },
      ]}
    />
  );
}
