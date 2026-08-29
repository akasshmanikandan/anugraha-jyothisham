import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/marriage-matching")({
  head: () => ({
    meta: [
      { title: "Marriage Matching | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Marriage matching page with compatibility review, family consultation guidance, and a clear booking route.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/marriage-matching/" }],
  }),
  component: MarriageMatchingPage,
});

function MarriageMatchingPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Marriage Matching"
      description="A detailed marriage matching page that supports a separate, indexable consultation route."
      canonical="https://www.anugrahajyothishalaya.com/services/marriage-matching/"
      intro="Marriage matching is one of the most important reasons families visit the practice. This page explains how the consultation is handled, what factors can be reviewed, and how the result is used in a respectful and practical way."
      sections={[
        {
          title: "Consultation focus",
          body: "Compatibility review can include horoscope alignment, timing questions, family concerns, and remedy suggestions if there are obstacles. The page is intentionally specific so it stands on its own in search results.",
          bullets: [
            "Horoscope compatibility",
            "Family consultation support",
            "Timing and ceremony guidance",
            "Linked booking via contact",
          ],
        },
        {
          title: "What happens next",
          body: "After the review, visitors can continue to the contact page for an appointment or move to related services such as Jyotisha or Nadi astrology.",
        },
      ]}
    />
  );
}
