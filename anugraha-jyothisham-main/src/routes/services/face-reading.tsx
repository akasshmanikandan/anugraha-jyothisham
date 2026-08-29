import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";

export const Route = createFileRoute("/services/face-reading")({
  head: () => ({
    meta: [
      { title: "Face Reading | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Face reading consultation page with clear service details, related links, and contact information.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/face-reading/" }],
  }),
  component: FaceReadingPage,
});

function FaceReadingPage() {
  return (
    <SeoPage
      eyebrow="Service"
      title="Face Reading"
      description="A useful route for face reading enquiries, with enough depth for SEO and user understanding."
      canonical="https://www.anugrahajyothishalaya.com/services/face-reading/"
      intro="Face reading is presented here as a distinct service page so that visitors can understand its purpose without having to scan the homepage. The route supports people looking for character, life-pattern, and decision guidance from an experienced consultation setting."
      sections={[
        {
          title: "What the service is about",
          body: "The consultation may discuss observable patterns, personal tendencies, and questions that are better addressed in a one-to-one setting. It is kept practical and respectful, with no exaggerated claims.",
          bullets: [
            "One-to-one consultation",
            "Personal pattern discussion",
            "Linked remedy planning",
            "Direct route to booking",
          ],
        },
        {
          title: "Where to go next",
          body: "If the enquiry needs a broader reading, the visitor can move to Jyotisha or Nadi astrology. If the goal is only to book, the contact page is one click away.",
        },
      ]}
    />
  );
}
