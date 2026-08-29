import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/numerology")({
  head: () => ({
    meta: [
      { title: "Numerology | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Dedicated numerology page covering name analysis, number patterns, business naming, and consultation booking.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/numerology/" }],
  }),
  component: NumerologyPage,
});

function NumerologyPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Numerology"
      description="A numerology service page with its own route, metadata, and internal links."
      canonical="https://www.anugrahajyothishalaya.com/services/numerology/"
      intro="Numerology consultations focus on the meaning and influence of numbers tied to names, dates, and chosen timings. The page gives search engines a distinct destination and gives visitors a focused explanation of the service before they book."
      sections={[
        {
          title: "What the consultation can include",
          body: "The review may consider name vibration, date patterns, and practical suggestions for choosing a more supportive number sequence. It is useful for personal decisions, business naming, and timing discussions.",
          bullets: [
            "Name analysis",
            "Date and number review",
            "Business naming support",
            "Appointment and follow-up routing",
          ],
        },
        {
          title: "Related topics",
          body: "Numerology connects well with Jyotisha and Vaasthu, so the internal links on the site now make that relationship visible without forcing everything into a single page.",
        },
      ]}
    />
  );
}
