import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative h-[400px]">
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-8">
          <img
            src="https://res.cloudinary.com/dkb1opktz/image/upload/v1733894266/c61e7b7f-705e-4002-a5ff-a035bdb47c32-removebg-preview_bdzqcq.png"
            alt="M9edem AI Logo"
            className="w-24 h-24 md:w-32 md:h-32"
          />
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-moroccan-blue" dir="rtl">
              {language === 'ar' ? 'Lm9edem' : 'Lm9edem'}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-moroccan-charcoal" dir="rtl">
              {language === 'ar'
                ? "حِلِّ جميع إجراءاتك الإدارية بسهولة وذكاء مع 'Lm9edem'، الوثائق في متناول يدك وبلمسة تقنية!"
                : "Résolvez toutes vos démarches administratives facilement et intelligemment avec 'Lm9edem', vos documents à portée de main avec une touche technologique !"}
            </p>
            <Button 
              className="mt-6 bg-moroccan-blue hover:bg-moroccan-blue/90 text-white text-lg px-8 py-3"
              dir="rtl"
            >
              {language === 'ar' ? 'ابدأ الآن' : 'Commencer'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}