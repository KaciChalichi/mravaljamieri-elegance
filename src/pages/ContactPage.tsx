import { PageLayout } from "@/components/layout/PageLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

const ContactPage = () => {
  return (
    <PageLayout>
      <ContactSection />
      <ReviewsSection />
      <FaqSection />
    </PageLayout>
  );
};

export default ContactPage;
