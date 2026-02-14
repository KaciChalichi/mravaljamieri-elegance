import { ReactNode } from "react";
import { Header } from "./Header";
import { FloatingActions } from "./FloatingActions";
import { Footer } from "@/components/sections/Footer";
import { MobileActionBar } from "@/components/sections/QuickActionsSection";

interface PageLayoutProps {
  children: ReactNode;
  showMobileBar?: boolean;
}

export function PageLayout({ children, showMobileBar = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Anchor used by ScrollToTop to reliably scroll to the real top in any environment */}
      <div id="page-top" />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      {showMobileBar && <MobileActionBar />}
    </div>
  );
}
