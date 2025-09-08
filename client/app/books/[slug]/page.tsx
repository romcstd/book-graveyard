import { notFound } from "next/navigation";
import Image from "next/image";
import { books } from "@/lib/books";
import { Book } from "@/types/book";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateStaticParams() {
  return books.map((books) => ({
    slug: books.slug,
  }))
}

interface BookPageProps {
    params: Promise<{ slug: string }>
}

export default async function BookPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book: Book | undefined = books.find(b => b.slug === slug);

    if (!book) return notFound();

    return (
        <main className="container mx-auto max-w-4xl py-10 px-4">
            {/* Header */}
            <h1 className="text-3xl font-bold tracking-tight mb-2">{book.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">By {book.author}</p>

            {/* Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Image */}
                <div className="relative w-full h-[400px] lg:col-span-1">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="rounded-md object-cover shadow-md"
                        priority
                    />
                </div>

                {/* Content */}
                <Card className="lg:col-span-2">
                    <CardContent className="p-6 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            {book.description}
                        </p>

                        {/* Genres */}
                        {book.genre && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {book.genre.map((g) => (
                                    <Badge key={g} variant="secondary">
                                        {g}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Book Facts */}
                        <div className="mt-6 border-t pt-4">
                            <h2 className="font-semibold text-lg">Book Facts</h2>
                            <ul className="text-sm mt-2 space-y-1">
                                <li>
                                    <strong>Author:</strong> {book.author}
                                </li>
                                <li>
                                    <strong>Pages:</strong> {book.pages}
                                </li>
                                <li>
                                    <strong>Genres:</strong> {book.genre?.join(", ")}
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
