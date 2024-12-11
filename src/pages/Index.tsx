import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-moroccan-cream flex flex-col">
      <Banner />
      <LanguageSwitcher />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;