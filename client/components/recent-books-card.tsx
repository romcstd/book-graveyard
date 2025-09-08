import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book } from "@/types/book";

interface BookCardProps {
    book: Book
}

export function RecentBooksCard({ book }: BookCardProps) {
    return (
        <Card className="p-0">
            {/* <div className="w-full flex flex-col gap-4"> */}
                <CardHeader className="p-0">
                    <div className="relative aspect-[2/3] w-full h-auto mx-auto">
                        <Image
                            src={book.image}
                            alt={book.title}
                            priority
                            fill
                            className="object-cover object-center rounded-tl-xl rounded-tr-xl"
                        />
                    </div>
                </CardHeader>
                <CardContent className="px-4">
                    <h2 className="font-bold text-xl mb-2">{book.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{book.author}</p>
                    {book.genre && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                            {book.genre?.map((genre) => (
                                <Badge
                                    key={genre}
                                    variant="outline"
                                >
                                    {genre}
                                </Badge>
                            ))}
                        </div>
                    )}
                    <p className="text-sm text-muted-foreground">{book.description}</p>
                </CardContent>
                <CardFooter className="px-4 pb-4 mt-auto">
                    <Button asChild variant="link" size="sm" className="p-0 h-auto">
                        <Link href={`/books/${book.slug}`} >Read More</Link>
                    </Button>
                </CardFooter>
            {/* </div> */}
        </Card>
    )
}