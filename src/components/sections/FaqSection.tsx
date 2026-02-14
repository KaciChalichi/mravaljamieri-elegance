import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqItems } from "@/data/restaurantData";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Help Center", "დახმარების ცენტრი", "Помощь")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Frequently Asked Questions", "ხშირად დასმული კითხვები", "Часто задаваемые вопросы")}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                  {t(item.question, item.questionGe, item.questionRu)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {t(item.answer, item.answerGe, item.answerRu)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
