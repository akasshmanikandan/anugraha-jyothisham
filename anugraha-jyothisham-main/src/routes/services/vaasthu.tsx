import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/vaasthu")({
  head: () => ({
    meta: [
      { title: "Vaasthu Consultation | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Learn about Vaasthu consultation for homes, businesses, layout review, and remedy planning with Anugraha Jyothishalaya.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/vaasthu/" }],
  }),
  component: VaasthuPage,
});

function VaasthuPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Vaasthu Consultation"
      description="A standalone Vaasthu page for home and business layout guidance, keeping the route indexable and useful."
      canonical="https://www.anugrahajyothishalaya.com/services/vaasthu/"
      intro="Vaasthu consultation is often requested when a home, room layout, or workplace needs gentle correction. This page explains the service in a straightforward way so users can understand what kind of help is offered before making contact."
      sections={[
        {
          title: "What may be reviewed",
          body: "Layout, room placement, entry flow, and practical remedial suggestions can all be part of a Vaasthu discussion. The goal is to make the service feel concrete and actionable instead of vague or decorative.",
          bullets: [
            "Home layout review",
            "Workplace or shop guidance",
            "Remedy recommendations",
            "Consultation follow-up via contact",
          ],
        },
        {
          title: "Service connection",
          body: "Vaasthu often connects to astrology, numerology, and ritual support. The surrounding pages let users move between those topics naturally while keeping every page self-contained.",
        },
      ]}
    />
  );
}
