import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-moroccan-cream">
      <LanguageSwitcher />
      <Hero />
      <Features />
    </main>
  );
};

export default Index;