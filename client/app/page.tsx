import { HeroSection } from "@/components/hero-section";
import { RecentBooks } from "@/components/recent-books";
import { Reviewers } from "@/components/reviewers";
export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <div className="relative px-8 sm:px-16 sm:py-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <RecentBooks />
            <Reviewers />
          </div>
        </div>
      </main>
    </>
  );
}
