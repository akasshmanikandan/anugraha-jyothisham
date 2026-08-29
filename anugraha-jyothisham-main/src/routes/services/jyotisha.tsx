import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/jyotisha")({
  head: () => ({
    meta: [
      { title: "Jyotisha Consultation | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Detailed Jyotisha consultation page covering horoscope reading, life guidance, timing, and practical remedy suggestions.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/jyotisha/" }],
  }),
  component: JyotishaPage,
});

function JyotishaPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Jyotisha Consultation"
      description="A deeper page for Jyotisha consultation, written to stand on its own in search results and internal navigation."
      canonical="https://www.anugrahajyothishalaya.com/services/jyotisha/"
      intro="Jyotisha is the core consultation discipline at the practice. This page explains how the reading is approached, what kind of questions can be discussed, and how the consultation leads into remedies when needed. It is designed to be useful on its own, not as a thin label attached to the homepage."
      sections={[
        {
          title: "What the consultation covers",
          body: "Jyotisha consultation can include birth chart review, current planetary period interpretation, timing for important decisions, and discussion of supportive remedies. The page is intentionally broad so it can answer user intent without repeating homepage copy.",
          bullets: [
            "Birth chart review",
            "Timing and decision support",
            "Practical remedy suggestions",
            "Follow-up ritual guidance",
          ],
        },
        {
          title: "Related pages",
          body: "Visitors who need a more specific reading can continue to Nadi astrology, numerology, or marriage matching. The site keeps those paths visible through real links rather than only in-page sections.",
        },
      ]}
    />
  );
}
