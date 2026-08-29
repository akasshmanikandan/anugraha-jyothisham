import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { GallerySection } from "@/components/GallerySection";

export const Route = createFileRoute("/rituals")({
  head: () => ({
    meta: [
      { title: "Temple Rituals | Anugraha Jyothishalaya" },
      {
        name: "description",
        content:
          "View our temple rituals, sacred ceremonies, and traditional practices at Anugraha Jyothishalaya.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/rituals/" }],
  }),
  component: Rituals,
});

function Rituals() {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <GallerySection />
      </div>
    </Layout>
  );
}
