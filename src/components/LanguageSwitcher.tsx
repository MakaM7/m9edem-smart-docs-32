import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => setLanguage(language === 'ar' ? 'fr' : 'ar')}
        className="bg-moroccan-blue hover:bg-moroccan-blue/90 text-white"
      >
        {language === 'ar' ? 'Français' : 'العربية'}
      </Button>
    </div>
  );
}