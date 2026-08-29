import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/nadi")({
  head: () => ({
    meta: [
      { title: "Nadi Astrology | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Explore the Nadi astrology consultation page with guidance on readings, questions, remedies, and appointment booking.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/nadi/" }],
  }),
  component: NadiPage,
});

function NadiPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Nadi Astrology"
      description="A dedicated Nadi astrology page with enough content to be crawled and indexed as its own service landing page."
      canonical="https://www.anugrahajyothishalaya.com/services/nadi/"
      intro="Nadi astrology is presented here as a full service page so search engines and users can understand it separately from the homepage. The page covers what a reading may involve, how a consultation is prepared, and which follow-up actions can be discussed after the reading."
      sections={[
        {
          title: "Reading focus",
          body: "The consultation may center on lineage questions, life patterns, family events, and the remedies recommended after the reading. The page works as a destination for users who already know they want Nadi astrology rather than a general astrology overview.",
          bullets: [
            "Dedicated Nadi consultation",
            "Question-led reading support",
            "Remedies and follow-up steps",
            "Clear booking path to contact",
          ],
        },
        {
          title: "Helpful next step",
          body: "After reading the overview, users can move to the contact page or return to the services hub for another discipline. That keeps crawl paths clear and improves the site architecture without changing the design language.",
        },
      ]}
    />
  );
}
