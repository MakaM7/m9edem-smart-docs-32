import { useLanguage } from "@/contexts/LanguageContext";

export function DocumentSearchHero() {
  const { language } = useLanguage();

  return (
    <div className="relative container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-moroccan-blue font-['Noto_Naskh_Arabic']" dir="rtl">
        {language === 'ar' ? 'البحث عن الوثائق الإدارية' : 'Recherche de Documents Administratifs'}
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-moroccan-charcoal font-['Noto_Naskh_Arabic']" dir="rtl">
        {language === 'ar'
          ? 'اكتشف كيفية الحصول على وثائقك الإدارية بسهولة مع مساعدنا الذكي'
          : 'Découvrez comment obtenir vos documents administratifs facilement avec notre assistant intelligent'}
      </p>
    </div>
  );
}