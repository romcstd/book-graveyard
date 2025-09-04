import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSectionBannerProps extends React.ComponentProps<"div"> {
    publish?: string;
}

export function HeroSectionBanner({ className, publish }: HeroSectionBannerProps) {
    return (
        <section className="flex flex-col items-center">
            <div className={cn("relative flex flex-col aspect-video lg:aspect-square w-full max-w-160", className)}>
                <Image
                    src="/hero/banner.webp"
                    alt="Hero background"
                    priority
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            <p className="mt-4 font-bold text-sm text-muted-foreground leading-normal tracking-tight">{publish}</p>
        </section>

    )
}