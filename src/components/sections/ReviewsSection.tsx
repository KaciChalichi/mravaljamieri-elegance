import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo, reviews } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating
              ? "text-gold fill-gold"
              : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Guest Experiences", "სტუმრების გამოცდილება")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("What People Say", "რას ამბობენ ხალხი")}
          </h2>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 p-6 bg-card rounded-lg border max-w-lg mx-auto">
          <div className="text-center">
            <div className="font-display text-5xl font-bold text-foreground mb-1">
              {restaurantInfo.rating}
            </div>
            <div className="flex justify-center mb-1">
              <StarRating rating={Math.round(restaurantInfo.rating)} />
            </div>
            <p className="text-sm text-muted-foreground">
              {restaurantInfo.reviewCount}+ {t("reviews", "შეფასება")}
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-border" />
          <div className="text-center md:text-left">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6 mb-2 mx-auto md:mx-0"
            />
            <a
              href={restaurantInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              {t("See all reviews", "ყველა შეფასება")}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card rounded-full shadow-medium transition-opacity",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card rounded-full shadow-medium transition-opacity",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Reviews */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-80 bg-card rounded-lg p-6 border shadow-soft"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{t(review.date, review.dateGe)}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  "{t(review.text, review.textGe)}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href={restaurantInfo.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ctaOutline">
              <ExternalLink className="h-4 w-4 mr-2" />
              {t("See More on Google", "მეტი Google-ზე")}
            </Button>
          </a>
        </div>

        {/* As Seen On (placeholder) */}
        <div className="mt-16 pt-12 border-t">
          <p className="text-center text-sm text-muted-foreground mb-6">
            {t("As seen on", "ნანახია")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["TripAdvisor", "Lonely Planet", "Condé Nast", "Forbes"].map(name => (
              <div key={name} className="text-sm font-medium text-muted-foreground">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
