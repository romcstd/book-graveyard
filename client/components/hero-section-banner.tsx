import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSectionBannerProps extends React.ComponentProps<"div"> {
    publishDate?: string;
}

export function HeroSectionBanner({ className, publishDate }: HeroSectionBannerProps) {
    return (
        <section className={cn("flex flex-col items-center", className)}>
            <div className="relative flex flex-col aspect-video xl:aspect-square w-full max-w-256">
                <Image
                    src="/hero/banner.webp"
                    alt="Hero background"
                    priority
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            <p className="mt-4 font-bold text-sm text-muted-foreground leading-normal tracking-tight">{publishDate}</p>
        </section>

    )
}