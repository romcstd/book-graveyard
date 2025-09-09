import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book } from "@/types/book";
import { FileText, Tag } from 'lucide-react';

interface BookCardProps {
    book: Book
}

export function BookCard({ book }: BookCardProps) {
    return (
        <Card className="p-0 transition-all duration-300 hover:-translate-y-2">
            {/* <div className="w-full flex flex-col gap-4"> */}
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
                <h2 className="font-bold text-xl mb-2">{book.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">by {book.author}</p>
                {book.genre && (
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                        <Badge variant="outline" className="flex items-center gap-1 text-xs">
                            <FileText className="h-3 w-3" />
                            {book.pages} pages
                        </Badge>
                        {book.genre?.map((genre) => (
                            <Badge key={genre} variant="outline" className="flex items-center gap-1 text-xs">
                                <Tag className="h-3 w-3" />
                                {genre}
                            </Badge>
                        ))}
                    </div>
                )}
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </CardContent>
            <CardFooter className="px-4 pb-4 mt-auto">
                <Button asChild variant="outline">
                    <Link href={`/books/${book.slug}`} >Read More</Link>
                </Button>
            </CardFooter>
            {/* </div> */}
        </Card>
    )
}