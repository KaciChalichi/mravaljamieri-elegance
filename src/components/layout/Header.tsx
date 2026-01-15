import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { navItems, restaurantInfo } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center"
          >
            <span
              className={cn(
                "font-display text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                isScrolled ? "text-primary" : "text-primary-foreground"
              )}
            >
              {restaurantInfo.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors duration-300 relative",
                  isScrolled
                    ? activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                    : activeSection === item.id
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300",
                  activeSection === item.id && "after:w-4"
                )}
              >
                {t(item.label, item.labelGe)}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${restaurantInfo.phone}`}>
              <Button
                variant={isScrolled ? "actionOutline" : "heroOutline"}
                size="sm"
                className={cn(
                  !isScrolled && "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Phone className="h-4 w-4" />
                {t("Call", "დარეკვა")}
              </Button>
            </a>
            <Button
              variant={isScrolled ? "action" : "hero"}
              size="sm"
              onClick={() => scrollToSection("#events")}
            >
              <Calendar className="h-4 w-4" />
              {t("Reserve", "დაჯავშნა")}
            </Button>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ge" : "en")}
              className={cn(
                "flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "GE" : "EN"}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "en" ? "ge" : "en")}
              className={cn(
                "p-2 text-sm font-medium",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {language === "en" ? "GE" : "EN"}
            </button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled
                      ? "text-foreground"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="font-display text-xl font-bold text-primary">
                      {restaurantInfo.name}
                    </span>
                  </div>
                  
                  <nav className="flex-1 py-6">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={cn(
                          "block py-3 px-4 text-lg font-medium transition-colors",
                          activeSection === item.id
                            ? "text-primary bg-secondary/50"
                            : "text-foreground/70 hover:text-foreground hover:bg-secondary/30"
                        )}
                      >
                        {t(item.label, item.labelGe)}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Mobile CTAs */}
                  <div className="py-6 border-t space-y-3">
                    <a href={`tel:${restaurantInfo.phone}`} className="block">
                      <Button variant="ctaOutline" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        {t("Call Now", "დარეკეთ ახლა")}
                      </Button>
                    </a>
                    <a href={restaurantInfo.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="ctaOutline" className="w-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        {t("Get Directions", "მისამართი")}
                      </Button>
                    </a>
                    <Button
                      variant="cta"
                      className="w-full"
                      onClick={() => scrollToSection("#events")}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {t("Reserve a Table", "დაჯავშნეთ მაგიდა")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
