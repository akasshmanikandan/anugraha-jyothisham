import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/nadi-reading")({
  head: () => ({
    meta: [
      { title: "Nadi Reading | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Nadi reading service page with consultation details, related services, and appointment routing.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/nadi-reading/" }],
  }),
  component: NadiReadingPage,
});

function NadiReadingPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Nadi Reading"
      description="A separate route for Nadi reading enquiries and consultation details."
      canonical="https://www.anugrahajyothishalaya.com/services/nadi-reading/"
      intro="Nadi reading deserves its own page because visitors often search for it directly. This page explains the service in plain language and makes it easy to route to contact or to the broader Nadi astrology page."
      sections={[
        {
          title: "How it is used",
          body: "Nadi reading consultations may help with family questions, life events, and remedy suggestions after a reading. The structure is kept clean so the page is useful both to people and to search engines.",
          bullets: [
            "Dedicated reading overview",
            "Consultation and questions",
            "Remedy discussion",
            "Clear booking links",
          ],
        },
        {
          title: "Related routes",
          body: "This page links back to the services overview and the contact page, and it can sit beside the general Nadi astrology page without duplicating the same copy.",
        },
      ]}
    />
  );
}
