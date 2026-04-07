import Hero from "../sections/Hero";
import ExploreSection from "../sections/ExploreSection";
import WhySection from "../sections/WhySection";
import ClientsSection from "../sections/ClientsSection";
import GallerySection from "../sections/GallerySection";
import CTA from "../sections/CTA";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreSection />
      <WhySection />
      <ClientsSection />
      <GallerySection />
      <CTA />
      <Chatbot />
    </>
  );
}
