import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { DocumentSearchHero } from "@/components/DocumentSearchHero";
import { DocumentChat } from "@/components/DocumentChat";

const DocumentSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-main bg-fixed backdrop-blur-[30px] flex flex-col">
      <div className="absolute inset-0 bg-white/30 backdrop-filter backdrop-blur-[30px]"></div>
      <div className="relative z-10">
        <Banner />
        <DocumentSearchHero />
        <DocumentChat />
        <Footer />
      </div>
    </div>
  );
};

export default DocumentSearch;