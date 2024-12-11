import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { toast } from "./ui/use-toast";

export function Banner() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: language === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Déconnexion réussie',
      duration: 2000,
    });
    navigate('/');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-md border-b border-gray-200/20 sticky top-0 z-50 py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="https://res.cloudinary.com/dkb1opktz/image/upload/v1733894400/DALL_E_2024-12-11_05.55.07_-_A_modern_and_sleek_logo_for_an_app_called__Lm9edem_._The_design_should_be_inspired_by_Morocco__documents__and_AI._Incorporate_elements_like_the_Morocc-removebg-preview_cfaqf0.png"
          alt="M9edem AI Logo"
          className="h-24 w-auto"
        />
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-moroccan-blue font-['Noto_Naskh_Arabic']">
                {language === 'ar' ? 'مرحباً' : 'Bienvenue'} {user.email}
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                {language === 'ar' ? 'تسجيل الخروج' : 'Déconnexion'}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}