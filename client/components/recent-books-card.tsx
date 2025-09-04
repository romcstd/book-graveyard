import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Book } from "@/types/book"

interface BookCardProps {
    book: Book
}

export function RecentBooksCard({ book }: BookCardProps) {
    return (
        <Card className="py-0">
            <div className="flex flex-col sm:flex-row py-4 sm:p-8">
                <div className="relative aspect-[2/3] w-full max-w-48 sm:max-w-32 h-auto mx-auto sm:mx-0 mt-4 sm:mt-0">
                    <Image
                        src={book.image}
                        alt={book.title}
                        priority
                        fill
                        className="object-center object-contain rounded-xl"
                    />
                </div>
                <div className="w-full flex flex-col justify-center text-center sm:text-left gap-4 py-4 sm:py-0">
                    <CardHeader>
                        {book.genre && (
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                                {book.genre?.map((genre) => (
                                    <Badge
                                        key={genre}
                                        variant="secondary"
                                    >
                                        {genre}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        <h2 className="font-bold text-xl">{book.title}</h2>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{book.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                            <Link href={"/"}>Read More</Link>
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}