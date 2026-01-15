import { Heart, Award, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const beliefs = [
  { icon: Heart, title: "Quality", titleGe: "ხარისხი", description: "Only the finest ingredients" },
  { icon: Sparkles, title: "Warmth", titleGe: "სითბო", description: "Genuine hospitality" },
  { icon: Users, title: "Celebration", titleGe: "ზეიმი", description: "Every meal is special" },
  { icon: Award, title: "Craft", titleGe: "ხელოსნობა", description: "Traditional recipes, perfected" },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              {t("Our Story", "ჩვენი ისტორია")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t("A Tradition of Hospitality", "სტუმართმოყვარეობის ტრადიცია")}
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                {t(
                  "For over three decades, Mravaljamieri has been the heart of Georgian celebration in Tbilisi. Our name means 'many years' – the traditional toast that wishes health, happiness, and longevity to all who gather at our table.",
                  "სამი ათწლეულის განმავლობაში მრავალჟამიერი იყო ქართული ზეიმის გული თბილისში. ჩვენი სახელი ნიშნავს დღეგრძელობას – ტრადიციულ სადღეგრძელოს, რომელიც ჯანმრთელობას, ბედნიერებას და სიცოცხლის სიგრძეს უსურვებს ყველას, ვინც ჩვენს სუფრას უსხდება."
                )}
              </p>
              <p>
                {t(
                  "Our kitchen honors the recipes passed down through generations while embracing the finest seasonal ingredients from local farms. Every dish tells a story of our land, our people, and our enduring love for the art of gathering.",
                  "ჩვენი სამზარეულო პატივს მიაგებს თაობიდან თაობას გადაცემულ რეცეპტებს და იყენებს საუკეთესო სეზონურ ინგრედიენტებს ადგილობრივი ფერმებიდან."
                )}
              </p>
            </div>

            {/* What We Believe */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <belief.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {t(belief.title, belief.titleGe)}
                    </h4>
                    <p className="text-sm text-muted-foreground">{belief.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Meet the Kitchen */}
            <div className="p-6 bg-card rounded-lg border">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {t("Meet the Kitchen", "გაიცანით სამზარეულო")}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t(
                  "Led by our head chef with 20+ years of experience in Georgian cuisine, our kitchen team brings passion and expertise to every dish.",
                  "ჩვენი სამზარეულოს გუნდს ხელმძღვანელობს მთავარი შეფ-მზარეული 20+ წლიანი გამოცდილებით ქართულ სამზარეულოში."
                )}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img
                src="/placeholder.svg"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/10 rounded-lg -z-10" />
          </div>
        </div>

        {/* Awards/Press Row (placeholder) */}
        <div className="mt-16 pt-12 border-t">
          <p className="text-center text-sm text-muted-foreground mb-6">
            {t("As featured in", "წარმოდგენილი")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
