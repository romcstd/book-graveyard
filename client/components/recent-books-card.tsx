import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Book } from "@/types/book"

interface BookCardProps {
    book: Book
}

export function RecentBooksCard({ book }: BookCardProps) {
    return (
        <Card className="py-0">
            <div className="flex flex-col sm:flex-row">
                <div className="relative aspect-[3/4] w-full max-w-32 sm:max-w-64 h-auto mx-auto sm:mx-0 mt-4 sm:mt-0">
                    <Image
                        src={book.image}
                        alt={book.title}
                        priority
                        fill
                        className="object-center object-fill rounded-xl"
                    />
                </div>
                <div className="w-full flex flex-col justify-center text-center sm:text-left gap-4 xl:gap-8 py-4 sm:py-0">
                    <CardHeader>
                        {book.genre && (
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                                {book.genre.map((g) => (
                                    <span
                                        key={g}
                                        className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
                                    >
                                        {g}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h2 className="font-playfair font-black text-2xl md:text-3xl">{book.title}</h2>
                        <p>{book.author}</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">{book.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={"/"}>Read More</Link>
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}