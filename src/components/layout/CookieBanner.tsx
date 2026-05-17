import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mravaljamieri-cookie-consent";

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => { localStorage.setItem(STORAGE_KEY, "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem(STORAGE_KEY, "declined"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-[60] lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md", "animate-slide-down")}>
      <div className="bg-card border shadow-elegant rounded-t-lg lg:rounded-lg p-5 mx-auto">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">
              {t("We use cookies", "ჩვენ ვიყენებთ ქუქი-ფაილებს", "Мы используем cookies")}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {t("We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.", "ჩვენ ვიყენებთ ქუქი-ფაილებს თქვენი გამოცდილების გასაუმჯობესებლად.", "Мы используем cookies для улучшения вашего опыта.")}
            </p>
            <div className="flex gap-2">
              <Button variant="cta" size="sm" onClick={accept}>{t("Accept", "მიღება", "Принять")}</Button>
              <Button variant="outline" size="sm" onClick={decline}>{t("Decline", "უარყოფა", "Отклонить")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
