import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const actions = [
  {
    icon: Phone,
    label: "Call Us",
    labelGe: "დაგვირეკეთ",
    description: "Speak with our team",
    descriptionGe: "დაელაპარაკეთ ჩვენს გუნდს",
    href: "/contact",
    color: "text-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    labelGe: "WhatsApp",
    description: "Quick message",
    descriptionGe: "სწრაფი შეტყობინება",
    href: "/contact",
    color: "text-green-600",
  },
  {
    icon: MapPin,
    label: "Directions",
    labelGe: "მისამართი",
    description: "Find us easily",
    descriptionGe: "გვიპოვეთ ადვილად",
    href: "/contact",
    color: "text-blue-600",
  },
  {
    icon: Calendar,
    label: "Reserve",
    labelGe: "ჯავშანი",
    description: "Book your table",
    descriptionGe: "დაჯავშნეთ მაგიდა",
    href: "https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D",
    color: "text-primary",
    external: true,
  },
];

export function QuickActionsSection() {
  const { t } = useLanguage();

  return (
    <section id="quick-actions" className="relative -mt-12 z-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            const isExternal = 'external' in action && action.external;
            
            const content = (
              <>
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-3",
                  "bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                )}>
                  <Icon className={cn("h-5 w-5", action.color, "group-hover:text-inherit")} />
                </div>
                <span className="font-display text-lg font-semibold text-foreground mb-1">
                  {t(action.label, action.labelGe)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t(action.description, action.descriptionGe)}
                </span>
              </>
            );
            
            const className = cn(
              "group bg-card rounded-lg p-4 md:p-6 shadow-medium hover:shadow-elegant",
              "transition-all duration-300 hover:-translate-y-1",
              "flex flex-col items-center text-center"
            );
            
            if (isExternal) {
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            }
            
            return (
              <Link
                key={action.label}
                to={action.href}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Mobile Sticky Bar Component
export function MobileActionBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t shadow-lg">
      <div className="grid grid-cols-3 divide-x">
        <Link
          to="/contact"
          className="flex flex-col items-center py-3 text-foreground hover:bg-secondary transition-colors"
        >
          <Phone className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium">{t("Call", "დარეკვა")}</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center py-3 text-foreground hover:bg-secondary transition-colors"
        >
          <MapPin className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium">{t("Directions", "მისამართი")}</span>
        </Link>
        <a
          href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-3 bg-primary text-primary-foreground"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">{t("Reserve", "ჯავშანი")}</span>
        </a>
      </div>
    </div>
  );
}
