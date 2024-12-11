import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src="https://res.cloudinary.com/dkb1opktz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1733892923/DALL_E_2024-12-11_05.55.07_-_A_modern_and_sleek_logo_for_an_app_called_Lm9edem_._The_design_should_be_inspired_by_Morocco_documents_and_AI._Incorporate_elements_like_the_Morocc_jph5l3.webp"
          alt="M9edem AI Logo"
          className="w-32 h-32 mb-8"
        />
        <h1 className="text-5xl font-bold mb-6 text-center" dir="rtl">
          {language === 'ar' ? 'Lm9edem' : 'Lm9edem'}
        </h1>
        <p className="text-2xl text-center max-w-3xl mb-8" dir="rtl">
          {language === 'ar'
            ? "حِلِّ جميع إجراءاتك الإدارية بسهولة وذكاء مع 'Lm9edem'، الوثائق في متناول يدك وبلمسة تقنية!"
            : "Résolvez toutes vos démarches administratives facilement et intelligemment avec 'Lm9edem', vos documents à portée de main avec une touche technologique !"}
        </p>
      </div>
    </div>
  );
}