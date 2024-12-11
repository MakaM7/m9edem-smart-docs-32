import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative h-[400px] bg-transparent">
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-8">
          <img
            src="https://res.cloudinary.com/dkb1opktz/image/upload/v1733894266/c61e7b7f-705e-4002-a5ff-a035bdb47c32-removebg-preview_bdzqcq.png"
            alt="M9edem AI Logo"
            className="w-72 h-72 md:w-96 md:h-96"
          />
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-moroccan-blue font-['Noto_Naskh_Arabic'] tracking-wider" dir="rtl">
              {language === 'ar' ? 'لمقدم' : 'لمقدم'}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-moroccan-charcoal font-['Noto_Naskh_Arabic']" dir="rtl">
              {language === 'ar'
                ? "حِلِّ جميع إجراءاتك الإدارية بسهولة وذكاء مع 'لمقدم'، الوثائق في متناول يدك وبلمسة تقنية!"
                : "Résolvez toutes vos démarches administratives facilement et intelligemment avec 'لمقدم', vos documents à portée de main avec une touche technologique !"}
            </p>
            <Button 
              className="mt-6 bg-moroccan-blue hover:bg-moroccan-blue/90 text-white text-lg px-8 py-3 font-['Noto_Naskh_Arabic']"
              dir="rtl"
            >
              {language === 'ar' ? 'ابدأ الآن' : 'Commencer'}
            </Button>
          </div>
          <img
            src="https://res.cloudinary.com/dkb1opktz/image/upload/v1733894266/c61e7b7f-705e-4002-a5ff-a035bdb47c32-removebg-preview_bdzqcq.png"
            alt="M9edem AI Logo"
            className="w-72 h-72 md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
}