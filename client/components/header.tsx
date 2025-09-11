import Link from "next/link";
import { DesktopMenu } from "@/components/desktop-menu";
import { MobileMenu } from "@/components/mobile-menu";

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-50 w-full lg:relative px-6 pt-4 lg:pt-8 sm:px-12 3xl:px-24">
            <div>
                <MobileMenu />
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-0.5 bg-black"></div>
                    <span className="text-xs">EST. 2024</span>
                    <div className="w-16 h-0.5 bg-black"></div>
                </div>
                <div className="text-center mb-4">
                    <Link href={"/"}>
                        <h1 className="font-playfair font-black text-4xl md:text-6xl text-primary hover:text-primary/80 transition-colors cursor-pointer">
                            Book Graveyard
                        </h1>
                    </Link>
                </div>
                <p className="font-serif text-muted-foreground italic text-sm sm:text-base text-center mb-4">&quot;Where ideas come to die. We are not trying to change the world, just trying to change your mind.&quot;</p>
            </div>
            <DesktopMenu />
        </header>
    )
};