import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AuthHero } from "@/components/AuthHero";
import { useLanguage } from "@/contexts/LanguageContext";

const Auth = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-main bg-fixed backdrop-blur-[30px] flex flex-col">
      <div className="absolute inset-0 bg-white/30 backdrop-filter backdrop-blur-[30px]"></div>
      <div className="relative z-10">
        <LanguageSwitcher />
        <AuthHero />
        <div className="container mx-auto px-4 py-8 max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <SupabaseAuth 
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#1B4B8A',
                      brandAccent: '#1B4B8A',
                    },
                  },
                },
              }}
              providers={[]}
              localization={{
                variables: {
                  sign_in: {
                    email_label: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
                    password_label: language === 'ar' ? 'كلمة المرور' : 'Mot de passe',
                  },
                },
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Auth;