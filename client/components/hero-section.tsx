import Image from "next/image"
export function HeroSection() {
    return (
        <section className="relative px-8 sm:px-16 lg:px-32 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 text-sm leading-relaxed text-muted-foreground">
                <div className="space-y-4 leading-relaxed text-justify">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus. Placeat illum repudiandae iusto ad ipsa corrupti temporibus illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus et. Quis, illum facere! Velit rem enim excepturi, facere, ea quaerat quo commodi sit, dolorum nulla odio? Aliquam, temporibus mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum possimus rem impedit nemo harum quasi obcaecati in, voluptatibus saepe tempora, qui, veniam quis excepturi quia odio inventore at quaerat nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus ad placeat totam mollitia rerum veritatis molestiae tenetur, explicabo quidem magni ullam repellat eveniet dolor! Ratione eum similique asperiores at.
                    </div>
                </div>
                <div className="space-y-4 leading-relaxed text-justify tracking-wide">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam vel fugiat commodi quod laudantium, rerum qui consequatur cum in esse rem iste adipisci, molestiae similique culpa quam corporis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem totam, illo ut temporibus sunt possimus quam corrupti minima praesentium facilis cumque sequi quaerat. Veniam animi ipsum autem explicabo. Voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto pariatur iste sit nihil nulla reiciendis beatae magni quo quod est quia ratione a, laborum error in, suscipit ea impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque vitae omnis quia earum saepe impedit animi modi autem quae, nulla sed iusto inventore quos libero voluptates commodi reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum culpa dolorem eveniet quas, quaerat voluptatem mollitia, quia cumque officiis voluptatibus. Placeat illum repudiandae iusto ad ipsa corrupti temporibus illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus et. Quis, illum facere! Velit rem enim excepturi, facere, ea quaerat quo commodi sit, dolorum nulla odio? Aliquam, temporibus mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum possimus rem impedit nemo harum quasi obcaecati in, voluptatibus saepe tempora, qui, veniam quis excepturi quia odio inventore at quaerat nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus ad placeat totam mollitia rerum veritatis molestiae tenetur, explicabo quidem magni ullam repellat eveniet dolor! Ratione eum similique asperiores at.
                    </div>
                </div>
                <div className="flex flex-col items-center md:col-span-2 xl:col-span-1">
                    <Image
                        src="/hero/banner.webp"
                        alt="Hero background"
                        priority
                        width={640}
                        height={640}
                        className="rounded-lg"
                    />
                    <p className="mt-4 font-bold leading-normal tracking-tight">Published on 4/21/25</p>
                </div>
            </div>
        </section>
    )
}