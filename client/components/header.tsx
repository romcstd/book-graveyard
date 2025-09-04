import Link from "next/link";
import { Button } from "./ui/button";
export function Header() {
    return (
        <header className="relative px-8 sm:px-16 lg:px-32 py-8">
            <div className="pb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-0.5 bg-black"></div>
                    <span className="newspaper-byline text-xs">EST. 2024</span>
                    <div className="w-16 h-0.5 bg-black"></div>
                </div>
                <div className="text-center mb-4">
                    <Link href={"/"}>
                        <h1 className="font-playfair font-black text-4xl md:text-6xl text-primary hover:text-primary/80 transition-colors cursor-pointer">
                            Book Graveyard
                        </h1>
                    </Link>
                </div>
                <p className="text-zinc-400 italic text-sm sm:text-base text-center">&quot;Where ideas come to die. We are not trying to change the world, just trying to change your mind.&quot;</p>
            </div>
            <nav className="border-t-2 border-b-2 border-primary/20 bg-card">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center py-4">
                        <div className="flex flex-col sm:flex-row items-center text-center lg:space-x-8">
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Link className="block" href={"/current-book-we-are-reading"}>
                                    Current Book We Are Reading
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Link className="block" href={"/books-we-read"}>
                                    Books We Read
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Link className="block" href={"/about-ella"}>
                                    About Ella
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Link className="block" href={"/about-jamie"}>
                                    About Jamie
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Link className="block" href={"/newsletter"}>
                                    Newsletter
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};