import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { navItems, restaurantInfo } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className={cn(
                "font-display text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                isScrolled || !isHomePage ? "text-primary" : "text-primary-foreground"
              )}
            >
              {restaurantInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors duration-300 relative whitespace-nowrap",
                  isScrolled || !isHomePage
                    ? isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                    : isActive(item.href)
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300",
                  isActive(item.href) && "after:w-4"
                )}
              >
                {t(item.label, item.labelGe, item.labelRu)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button
                variant={isScrolled || !isHomePage ? "actionOutline" : "heroOutline"}
                size="sm"
                className={cn(
                  !isScrolled && isHomePage && "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Phone className="h-4 w-4" />
                {t("Call", "დარეკვა", "Звонок")}
              </Button>
            </Link>
            <a
              href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={isScrolled || !isHomePage ? "action" : "hero"}
                size="sm"
              >
                <Calendar className="h-4 w-4" />
                {t("Reserve", "დაჯავშნა", "Бронь")}
              </Button>
            </a>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1.5 ml-2">
              {/* UK Flag */}
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "relative w-8 h-6 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "en" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
                title="English"
              >
                <span className="absolute inset-0 bg-[#012169]" />
                {/* White diagonals */}
                <span className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 45%, white 45%, white 55%, transparent 55%), linear-gradient(to top right, transparent 45%, white 45%, white 55%, transparent 55%)' }} />
                {/* Red diagonals */}
                <span className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 47%, #C8102E 47%, #C8102E 53%, transparent 53%), linear-gradient(to top right, transparent 47%, #C8102E 47%, #C8102E 53%, transparent 53%)' }} />
                {/* White cross */}
                <span className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-white" />
                <span className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-white" />
                {/* Red cross */}
                <span className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-[#C8102E]" />
                <span className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-[#C8102E]" />
              </button>
              {/* Georgian Flag - using image for proper rendering */}
              <button
                onClick={() => setLanguage("ge")}
                className={cn(
                  "relative w-8 h-6 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "ge" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
                title="ქართული"
              >
                <img 
                  src="https://flagcdn.com/w40/ge.png" 
                  alt="Georgian flag"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
              {/* Russian Flag */}
              <button
                onClick={() => setLanguage("ru")}
                className={cn(
                  "relative w-8 h-6 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "ru" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
                title="Русский"
              >
                <span className="absolute inset-0 flex flex-col">
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-[#0039A6]" />
                  <span className="flex-1 bg-[#D52B1E]" />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Flags */}
            <div className="flex items-center gap-1">
              {/* UK Flag */}
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "relative w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "en" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60"
                )}
              >
                <span className="absolute inset-0 bg-[#012169]" />
                <span className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 45%, white 45%, white 55%, transparent 55%), linear-gradient(to top right, transparent 45%, white 45%, white 55%, transparent 55%)' }} />
                <span className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 47%, #C8102E 47%, #C8102E 53%, transparent 53%), linear-gradient(to top right, transparent 47%, #C8102E 47%, #C8102E 53%, transparent 53%)' }} />
                <span className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 bg-white" />
                <span className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-white" />
                <span className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[#C8102E]" />
                <span className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#C8102E]" />
              </button>
              {/* Georgian Flag - using image for proper rendering */}
              <button
                onClick={() => setLanguage("ge")}
                className={cn(
                  "relative w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "ge" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60"
                )}
              >
                <img 
                  src="https://flagcdn.com/w40/ge.png" 
                  alt="Georgian flag"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
              {/* Russian Flag */}
              <button
                onClick={() => setLanguage("ru")}
                className={cn(
                  "relative w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 border-2",
                  language === "ru" 
                    ? "border-primary scale-110 shadow-md" 
                    : "border-transparent opacity-60"
                )}
              >
                <span className="absolute inset-0 flex flex-col">
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-[#0039A6]" />
                  <span className="flex-1 bg-[#D52B1E]" />
                </span>
              </button>
            </div>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled || !isHomePage
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
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block w-full text-left py-3 px-4 text-lg font-medium transition-colors",
                          isActive(item.href)
                            ? "text-primary bg-secondary/50"
                            : "text-foreground/70 hover:text-foreground hover:bg-secondary/30"
                        )}
                      >
                        {t(item.label, item.labelGe, item.labelRu)}
                      </button>
                    ))}
                  </nav>
                  
                  {/* Mobile CTAs */}
                  <div className="py-6 border-t space-y-3">
                    <Button 
                      variant="ctaOutline" 
                      className="w-full"
                      onClick={() => handleNavClick("/contact")}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {t("Contact Us", "დაგვიკავშირდით", "Свяжитесь с нами")}
                    </Button>
                    <a
                      href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="cta" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        {t("Reserve a Table", "დაჯავშნეთ მაგიდა", "Забронировать столик")}
                      </Button>
                    </a>
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
