import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DesktopMenu() {
    return (
        <nav className="border-t border-b border-primary/20 hidden lg:block">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center py-4">
                    <div className="flex flex-col sm:flex-row items-center text-center lg:space-x-8">
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                            <Link className="block" href={"/current-book-we-are-reading"}>
                                Current Book We Are Reading
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                            <Link className="block" href={"/books"}>
                                Books We Read
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                            <Link className="block" href={"/reviewers/ella-mabini"}>
                                About Ella
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                            <Link className="block" href={"/reviewers/jamie-rebugio"}>
                                About Jamie
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                            <Link className="block" href={"/newsletter"}>
                                Newsletter
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}