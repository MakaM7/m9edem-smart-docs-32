import { useLanguage } from "@/contexts/LanguageContext";

const features = {
  ar: [
    {
      title: "🧠 تحليل ذكي للوثائق",
      subtitle: "🔍 فحص دقيق للمستندات",
      description: `"M9edem Ai" يستخدم الذكاء الاصطناعي لتحليل المستندات المطلوبة بدقة.
      يوفر لك اختيار الوثائق المناسبة بناءً على طلبك، دون الحاجة للمراجعة اليدوية.
      يقلل من الأخطاء ويوفر لك الوقت في كل خطوة.`,
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893039/ddcf26ae-bb1a-44c7-a10a-027e7e3c4633_s8dhb3.jpg"
    },
    {
      title: "🚀 توجيه شخصي لحلول سريعة",
      subtitle: "📈 إرشاد فعال",
      description: `يتميز "M9edem Ai" بتقديم إرشادات مخصصة لكل مستخدم.
      يوجهك خطوة بخطوة في كل إجراء إداري، مما يمنعك من الوقوع في الأخطاء.
      يساعدك في تعبئة النماذج وتقديم الطلبات بسهولة، ليجعل العملية أسهل وأسرع.`,
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893039/ba1ba99d-f92e-4d2a-be0a-ffc1a6642736_it4rdx.jpg"
    },
    {
      title: "⚡ سرعة وكفاءة لا مثيل لها",
      subtitle: "⏳ تسريع الإجراءات الإدارية",
      description: `"M9edem Ai" يقلل من الوقت اللازم لاستخراج الوثائق الإدارية بفضل الأتمتة الكاملة.
      يقلل من التكاليف والجهود البشرية، ويجعل كل عملية أسرع وأكثر دقة.
      يضمن لك توفير الوقت والجهد في كل مرة، مما يسهل عليك الوصول إلى الوثائق المطلوبة فورًا.`,
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893038/8aa047f7-f064-407a-8413-afba90f0339c_hbpkzv.jpg"
    }
  ],
  fr: [
    {
      title: "🧠 Analyse Intelligente des Documents",
      subtitle: "🔍 Examen Précis des Documents",
      description: "M9edem Ai utilise l'intelligence artificielle pour analyser avec précision les documents requis...",
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893039/ddcf26ae-bb1a-44c7-a10a-027e7e3c4633_s8dhb3.jpg"
    },
    {
      title: "🚀 Guidage Personnalisé",
      subtitle: "📈 Orientation Efficace",
      description: "M9edem Ai se distingue en offrant des conseils personnalisés à chaque utilisateur...",
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893039/ba1ba99d-f92e-4d2a-be0a-ffc1a6642736_it4rdx.jpg"
    },
    {
      title: "⚡ Rapidité et Efficacité Inégalées",
      subtitle: "⏳ Accélération des Procédures Administratives",
      description: "M9edem Ai réduit le temps nécessaire pour extraire les documents administratifs...",
      image: "https://res.cloudinary.com/dkb1opktz/image/upload/v1733893038/8aa047f7-f064-407a-8413-afba90f0339c_hbpkzv.jpg"
    }
  ]
};

export function Features() {
  const { language } = useLanguage();
  const currentFeatures = features[language];

  return (
    <div className="bg-site-pattern bg-cover bg-fixed py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-moroccan-blue">
                {feature.title}
              </h3>
              <h4 className="text-xl mb-4 text-moroccan-terracotta">
                {feature.subtitle}
              </h4>
              <p className="text-moroccan-charcoal whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}