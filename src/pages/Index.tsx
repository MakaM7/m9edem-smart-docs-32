import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main bg-fixed backdrop-blur-[30px] flex flex-col">
      <div className="absolute inset-0 bg-white/30 backdrop-filter backdrop-blur-[30px]"></div>
      <div className="relative z-10">
        <Banner />
        <LanguageSwitcher />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;