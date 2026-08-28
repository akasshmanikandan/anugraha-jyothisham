import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Appointments | Anugraha Jyothishalaya" },
      { name: "description", content: "Book a private astrology consultation with Govindan Namboodiri VG. Located in Chennai, India." },
    ],
    links: [{ rel: "canonical", href: "https://www.anugrahajyothishalaya.com/contact/" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <ContactSection />
      </div>
    </Layout>
  );
}
