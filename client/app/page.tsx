import { HeroSection } from "@/components/hero-section";
import { RecentBooks } from "@/components/recent-books";
import { HeroSectionBanner } from "@/components/hero-section-banner";
import { Reviewers } from "@/components/reviewers";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 xl:gap-8">
        <div className="xl:col-span-2 space-y-12">
          <HeroSection />
          <RecentBooks />
        </div>
        <div className="space-y-12">
          <HeroSectionBanner className="hidden xl:block" publishDate="Published on 4/21/25" />
          <Reviewers />
        </div>
      </div>
    </>
  );
}
