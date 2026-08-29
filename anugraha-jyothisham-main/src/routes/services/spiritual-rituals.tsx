import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/spiritual-rituals")({
  head: () => ({
    meta: [
      { title: "Spiritual Rituals | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Spiritual rituals page for parihara, homam, temple support, and consultation booking.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/spiritual-rituals/" }],
  }),
  component: SpiritualRitualsPage,
});

function SpiritualRitualsPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Spiritual Rituals"
      description="A standalone route for spiritual ritual services and parihara support."
      canonical="https://www.anugrahajyothishalaya.com/services/spiritual-rituals/"
      intro="This page gathers the ritual side of the practice into one crawlable destination. It explains how temple rituals, homam, and other spiritual remedies fit into the consultation process without repeating the homepage."
      sections={[
        {
          title: "What may be arranged",
          body: "Depending on the consultation outcome, the ritual support may involve homam, temple-related remedies, or other parihara suggestions that are practical to carry out. The page is specific enough to help both users and search engines.",
          bullets: [
            "Temple ritual support",
            "Homam and parihara guidance",
            "Ritual follow-up planning",
            "Direct appointment route",
          ],
        },
        {
          title: "Connected pages",
          body: "Spiritual rituals connect best with the ritual overview, about page, and contact page. Those real links now exist as separate routes instead of only anchor targets.",
        },
      ]}
    />
  );
}
