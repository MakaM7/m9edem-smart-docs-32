import { useLanguage } from "@/contexts/LanguageContext";

export function DocumentSearchHero() {
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
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-moroccan-blue font-['Noto_Naskh_Arabic']" dir="rtl">
              {language === 'ar' ? 'البحث عن الوثائق الإدارية' : 'Recherche de Documents Administratifs'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-moroccan-charcoal font-['Noto_Naskh_Arabic']" dir="rtl">
              {language === 'ar'
                ? 'اكتشف كيفية الحصول على وثائقك الإدارية بسهولة مع مساعدنا الذكي'
                : 'Découvrez comment obtenir vos documents administratifs facilement avec notre assistant intelligent'}
            </p>
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