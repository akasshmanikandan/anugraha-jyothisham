import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anugraha Jyothishalaya | Chennai Astrology Services" },
      {
        name: "description",
        content:
          "Learn about Anugraha Jyothishalaya, the consultation approach, services offered, and how to book an appointment with Govindan Namboodiri VG.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/about/" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SeoPage
      eyebrow="About"
      title="Anugraha Jyothishalaya"
      description="A dedicated astrology and consultation practice serving clients who want structured guidance, practical remedies, and a calm consultation experience."
      canonical="https://www.anugrahajyothishalaya.com/about/"
      intro="Anugraha Jyothishalaya is the consultation home of Govindan Namboodiri VG. The practice focuses on Vedic astrology, Nadi astrology, marriage matching, numerology, Vaasthu consultation, face reading, rituals, and related spiritual services. The aim is simple: provide clear guidance, listen carefully, and suggest remedies that are practical to follow."
      sections={[
        {
          title: "What the practice offers",
          body: "Clients come here for chart-based guidance, remedies, and ritual support. Each consultation is handled with attention to the situation at hand, with space for discussion before any recommendations are given.",
          bullets: [
            "Horoscope and birth-chart based guidance",
            "Matchmaking and compatibility review",
            "Rituals, remedies, and parihara support",
            "Location-sensitive Vaasthu guidance",
          ],
        },
        {
          title: "Who it is for",
          body: "The site is designed for people seeking a direct, respectful consultation experience rather than a noisy marketing style. Whether the need is family guidance, a marriage decision, or a remedy for an ongoing concern, the practice keeps the conversation grounded and personal.",
        },
        {
          title: "How to book",
          body: "You can reach the practice through the contact page, by phone, or through WhatsApp. Share your name, preferred language, and the topic you want to discuss so an appointment can be arranged smoothly.",
        },
      ]}
      ctaHref="/contact"
      ctaLabel="Contact the practice"
    />
  );
}
