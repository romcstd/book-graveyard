import Link from "next/link";
import { Button } from "./ui/button";
export default function Header() {
    return (
        <header className="px-4 sm:px-8 py-8">
            <div className="pb-8">
                <div className="text-center">
                    <Link href="/">
                        <h1 className="font-serif font-black text-4xl md:text-6xl leading-tight tracking-tight text-primary mb-3 hover:text-primary/80 transition-colors cursor-pointer">
                            Book Graveyard
                        </h1>
                    </Link>
                </div>
                <p className="italic text-sm sm:text-base text-center">"Where ideas come to die. We are not trying to change the world, just trying to change your mind."</p>
            </div>
            <nav className="border-t-2 border-primary/20 bg-card">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center py-4">
                        <div className="flex flex-col sm:flex-row items-center text-center lg:space-x-8">
                            <Button
                                asChild
                                variant="ghost"
                                className="newspaper-byline hover:text-primary hover:bg-primary/10 transition-colors mr-0"
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