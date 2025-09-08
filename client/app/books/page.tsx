import Link from "next/link";
import { books } from "@/lib/books";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function BooksPage() {
    return (
        <section className="container mx-auto max-w-5xl py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Books we read</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => (
                    <Link key={book.id} href={`/books/${book.slug}`}>
                        <Card className="cursor-pointer hover:shadow-lg transition">
                            <div className="relative w-full h-[250px]">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    className="rounded-t-md object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h2 className="font-semibold">{book.title}</h2>
                                <p className="text-sm text-muted-foreground">
                                    {book.author}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
