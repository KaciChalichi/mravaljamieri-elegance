import { PageLayout } from "@/components/layout/PageLayout";
import { EventsSection } from "@/components/sections/EventsSection";
import { HallsSection } from "@/components/sections/HallsSection";

const EventsPage = () => {
  return (
    <PageLayout>
      <EventsSection />
      <HallsSection />
    </PageLayout>
  );
};

export default EventsPage;
