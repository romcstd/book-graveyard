import { HeroSection } from "@/components/hero-section";
import { RecentBooks } from "@/components/recent-books";
import { Reviewers } from "@/components/reviewers";
export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <div className="container mx-auto sm:px-8 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <RecentBooks />
          <Reviewers />
        </div>
      </main>
    </>
  );
}
