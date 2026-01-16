import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { galleryCategories, galleryImages, GalleryCategoryId } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const current = images[currentIndex];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <X className="h-8 w-8" />
      </button>
      
      {/* Navigation */}
      <button
        onClick={onPrev}
        className="absolute left-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
      
      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] px-16"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[75vh] object-contain mx-auto"
        />
        {current.caption && (
          <p className="text-center text-primary-foreground/80 mt-4 text-lg">
            {current.caption}
          </p>
        )}
        <p className="text-center text-primary-foreground/50 mt-2 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export function GallerySection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("great-hall");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Listen for category change from HallsSection
  useEffect(() => {
    const handleCategoryChange = (e: CustomEvent<string>) => {
      if (galleryCategories.some(c => c.id === e.detail)) {
        setActiveCategory(e.detail as GalleryCategoryId);
      }
    };
    window.addEventListener("gallery-category" as any, handleCategoryChange);
    return () => window.removeEventListener("gallery-category" as any, handleCategoryChange);
  }, []);

  const filteredImages = galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Visual Tour", "ვიზუალური ტური")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Gallery", "გალერეა")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Explore our beautiful spaces and imagine your next celebration here",
              "დაათვალიერეთ ჩვენი მშვენიერი სივრცეები"
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as GalleryCategoryId)} className="mb-8">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-card p-1 justify-center">
            {galleryCategories.map(category => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 text-sm"
              >
                {t(category.name, category.nameGe)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Gallery Grid (Masonry-style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-muted aspect-square",
                // Make some images span more for masonry effect
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 5 && "md:col-span-2"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("View", "ნახვა")}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("Planning a special event?", "გეგმავთ განსაკუთრებულ ღონისძიებას?")}
          </p>
          <Button
            variant="ctaOutline"
            onClick={() => {
              const element = document.getElementById("events");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Send className="h-4 w-4 mr-2" />
            {t("Send Us Your Event Idea", "გამოგვიგზავნეთ თქვენი იდეა")}
          </Button>
        </div>

        {/* Edit Note */}
        <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-dashed border-muted-foreground/30 text-sm text-muted-foreground">
          <strong>📝 Owner Note:</strong> To add gallery images:
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Upload images to <code>public/gallery/</code> folder</li>
            <li>Open <code>src/data/restaurantData.ts</code></li>
            <li>Find the <code>galleryImages</code> array</li>
            <li>Replace <code>"/placeholder.svg"</code> with paths like <code>"/gallery/great-hall-1.jpg"</code></li>
          </ol>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
