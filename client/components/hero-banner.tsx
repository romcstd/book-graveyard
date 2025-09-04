import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-[300px] md:h-[600px] w-full">
            <Image
                src="/hero/banner.webp"
                alt="Hero background"
                fill
                priority
                className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-black/100" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <h1 className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                    Discover the magical journey
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                    Dive into the world of books with us. Explore reviews, recommendations, and our current reads. Join our community of passionate readers and never miss an update!
                </p>
            </div>
        </section>
    )
}