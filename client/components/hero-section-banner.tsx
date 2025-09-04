import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSectionBanner({ className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("relative aspect-video lg:aspect-square w-full max-w-160 lg:max-w-160", className)}>
            <Image
                src="/hero/banner.webp"
                alt="Hero background"
                priority
                fill
                className="rounded-lg object-cover"
            />
        </div>
    )
}