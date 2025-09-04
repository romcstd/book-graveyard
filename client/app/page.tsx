import { HeroSection } from "@/components/hero-section";
import { RecentBooks } from "@/components/recent-books";
import { HeroSectionBanner } from "@/components/hero-section-banner";
import { Reviewers } from "@/components/reviewers";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <HeroSection />
          <RecentBooks />
        </div>
        <div className="space-y-12">
          <HeroSectionBanner className="hidden lg:block" />
          <Reviewers />
        </div>
      </div>
    </>
  );
}
