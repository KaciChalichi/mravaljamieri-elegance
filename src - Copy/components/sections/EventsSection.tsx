import { Building, Utensils, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import entertainment1 from "@/assets/entertainment-1.jpg";
import entertainment2 from "@/assets/entertainment-2.jpg";

const RESERVATION_LINK = "https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D";

export function EventsSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Entertainment Section */}
          <div id="live-entertainment">
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              {t("Live Entertainment", "ცოცხალი გასართობი", "Живые выступления")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              {t("Dancing & Singing", "ცეკვა და სიმღერა", "Танцы и песни")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "Experience authentic Georgian entertainment with traditional dancing and polyphonic singing at our restaurant celebrations.",
                "იგრძენით ავთენტური ქართული გართობა ტრადიციული ცეკვისა და მრავალხმიანი სიმღერის სახით ჩვენს რესტორანში.",
                "Испытайте подлинное грузинское развлечение с традиционными танцами и полифоническим пением на наших праздниках."
              )}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <img
                  src={entertainment1}
                  alt={t("Georgian dancing at restaurant", "ქართული ცეკვა რესტორანში", "Грузинские танцы в ресторане")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-primary-foreground">
                  <Music className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("Live Music", "ცოცხალი მუსიკა", "Живая музыка")}</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <img
                  src={entertainment2}
                  alt={t("Georgian singing at restaurant", "ქართული სიმღერა რესტორანში", "Грузинское пение в ресторане")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-primary-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("Folk Songs", "ხალხური სიმღერები", "Народные песни")}</span>
                </div>
              </div>
            </div>

            <a href={RESERVATION_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full">
                {t("Reserve a Table", "დაჯავშნეთ მაგიდა", "Забронировать столик")}
              </Button>
            </a>
          </div>

          {/* Events Info */}
          <div>
            <div className="bg-card rounded-lg p-6 md:p-8 border mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t("Book a Hall or Cabin", "დაჯავშნეთ დარბაზი ან კაბინა", "Забронируйте зал или кабинет")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("For private events and celebrations", "კერძო ღონისძიებებისა და ზეიმისთვის", "Для частных мероприятий и торжеств")}
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{t("Cabins (4-12 guests)", "კაბინები (4-12 სტუმარი)", "Кабинеты (4-12 гостей)")}</span>
                  <span className="font-medium">{t("Min. 300₾", "მინ. 300₾", "Мин. 300₾")}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{t("Halls (20-60 guests)", "დარბაზები (20-60 სტუმარი)", "Залы (20-60 гостей)")}</span>
                  <span className="font-medium">{t("Min. 1000₾", "მინ. 1000₾", "Мин. 1000₾")}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">{t("Great Hall (50-200 guests)", "დიდი დარბაზი (50-200 სტუმარი)", "Большой зал (50-200 гостей)")}</span>
                  <span className="font-medium">{t("Min. 3000₾", "მინ. 3000₾", "Мин. 3000₾")}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * {t("Minimum spend applies to food and beverages", "მინიმალური ხარჯი ვრცელდება კერძებსა და სასმელებზე", "Минимальный чек на еду и напитки")}
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t("Catering & Corporate", "კეითერინგი და კორპორატივი", "Кейтеринг и корпоративы")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("We bring the feast to you", "ზეიმს თქვენთან მოვიტანთ", "Мы привезём праздник к вам")}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {t(
                  "Planning a corporate event or need catering for your special occasion? Contact us for a custom menu and quote.",
                  "გეგმავთ კორპორატიულ ღონისძიებას ან გჭირდებათ კეითერინგი? დაგვიკავშირდით ინდივიდუალური მენიუსა და შეთავაზებისთვის.",
                  "Планируете корпоратив или нужен кейтеринг? Свяжитесь с нами для индивидуального меню."
                )}
              </p>
              <a href={RESERVATION_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  {t("Book Now", "დაჯავშნეთ ახლავე", "Забронировать")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
