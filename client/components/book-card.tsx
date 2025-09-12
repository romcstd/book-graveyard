import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "@/types/book";

interface BookCardProps {
    book: Book
}

export function BookCard({ book }: BookCardProps) {
    return (
        <Card className="p-0 transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="p-4 gap-0 bg-zinc-100 rounded-tl-xl rounded-tr-xl">
                <div className="relative aspect-[2/3] w-full max-w-48 h-auto mx-auto">
                    <Image
                        src={book.image}
                        alt={book.title}
                        priority
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <h2 className="font-serif font-bold text-xl mb-2">{book.title}</h2>
                <p className="font-serif text-muted-foreground mb-4 uppercase">by {book.author}</p>
                <p className="font-serif text-muted-foreground leading-relaxed">{book.description}</p>
            </CardContent>
            <CardFooter className="px-4 pb-4 mt-auto">
                <Button asChild variant="outline">
                    <Link href={`/books/${book.slug}`} >Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}