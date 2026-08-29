import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServicesSection } from "@/components/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "Explore traditional Vedic astrology services, rituals, and consultations offered by Anugraha Jyothishalaya.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/services/" }],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <ServicesSection />
      </div>
    </Layout>
  );
}
