import { HeroSectionBanner } from "./hero-section-banner";

export function HeroSection() {
    return (
        <section className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed text-muted-foreground">
                <div className="leading-relaxed text-justify">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus. Placeat illum repudiandae iusto ad ipsa corrupti temporibus illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus et.
                    </div>
                </div>
                <div className="leading-relaxed text-justify">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus. Placeat illum repudiandae iusto ad ipsa corrupti temporibus illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus et.
                    </div>
                </div>
                <div className="flex flex-col items-center lg:hidden">
                    <HeroSectionBanner />
                    <p className="mt-4 font-bold leading-normal tracking-tight">Published on 4/21/25</p>
                </div>
            </div>
        </section>
    )
}