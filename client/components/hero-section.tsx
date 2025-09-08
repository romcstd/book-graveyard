import { HeroSectionBanner } from "./hero-section-banner";

export function HeroSection() {
    return (
        <section className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-muted-foreground">
                <div className="md:col-span-2">
                    <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary">
                        Tidal Quiet: A Novel That Whispers and Still Hits Like a Wave

                    </h2>
                </div>

                <div className="leading-relaxed text-justify">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus.
                    </div>
                </div>
                <div className="leading-relaxed text-justify">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus.
                    </div>
                </div>
                <div className="md:col-span-2 xl:hidden">
                    <HeroSectionBanner publishDate="Published on 4/21/25" />
                </div>
            </div>
        </section>
    )
}