import { reviewers } from "@/lib/reviewers";
import { ReviewersCard } from "./reviewers-card";

export function Reviewers() {
    return (
        <section className="relative space-y-8">
            <div className="mb-8 text-center md:text-left">
                <h2 className="font-playfair font-black text-4xl md:text-5xl text-primary mb-4">Meet Our Reviewers</h2>
                <p className="text-muted-foreground">Two passionate readers bringing diverse perspectives to contemporary literature</p>
            </div>
            <div className="flex flex-col lg:flex-row xl:flex-col gap-4">
                {reviewers.map((reviewer) => (
                    <ReviewersCard reviewer={reviewer} key={reviewer.id} />
                ))}
            </div>
        </section>
    )
}