import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Frequently asked questions about astrology, consultations, and the process at Anugraha Jyothishalaya.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/faq/" }],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <FAQSection />
      </div>
    </Layout>
  );
}
