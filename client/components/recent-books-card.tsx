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
        <Card>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="p-4 mx-auto">
                    <Image
                        src={book.image}
                        alt={book.title}
                        priority
                        width={256}
                        height={256}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="w-full flex flex-col justify-center text-center md:text-left gap-4 md:col-span-2">
                    <CardHeader className="mb-4">
                        {book.genre && (
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
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
                    <CardContent className="mb-4">
                        <p className="text-sm text-gray-600">{book.description}</p>
                    </CardContent>
                    <CardFooter className="justify-center md:justify-start">
                        <Button asChild>
                            <Link href={"/"}>Read More</Link>
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}