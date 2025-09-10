import { notFound } from "next/navigation";
import Image from "next/image";
import { books } from "@/lib/books";
import { Book } from "@/types/book";
import { BookStarRating } from "@/components/book-star-rating";
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
        <section className="">
            {/* Header */}
            <h1 className="font-playfair font-black text-4xl md:text-6xl mb-4">{book.title}: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <div className="font-serif italic text-muted-foreground mb-4">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className="mb-2"><hr className="border-t border-primary/20" /></div>
            <p className="font-serif text-base text-muted-foreground mb-6 uppercase">By <span className="font-bold text-primary">{book.author}</span> -  MANILA, AUGUST 31, 2025</p>

            {/* Layout */}
            <div className="">
                {/* Image */}
                <div className="p-8 gap-0 bg-[#f0ebe6] mb-2">
                    <div className="relative aspect-[2/3] w-full max-w-72 h-auto mx-auto">
                        <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>
                <div className="text-muted-foreground font-serif italic mb-4">{book.imageDescription}</div>

                <div className="font-serif grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <div className="leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-primary mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <Card className="rounded-none">
                            <CardContent>
                                <div className="">
                                    <h2 className="font-bold text-xl uppercase mb-4">Book Facts</h2>
                                    <ul className="mt-2 space-y-4 [&_strong]:uppercase">
                                        <li>
                                            <strong>Title:</strong> {book.title}
                                        </li>
                                        <li>
                                            <strong>Author:</strong> {book.author}
                                        </li>
                                        <li>
                                            <strong>Genres:</strong> {book.genre?.join(", ")}
                                        </li>
                                        <li className="flex">
                                            <strong className="mr-1">Rating:</strong> {book.rating && <BookStarRating rating={book.rating} />}
                                        </li>
                                        <li>
                                            <strong>Pages:</strong> {book.pages}
                                        </li>
                                        <li>
                                            <strong>Read if:</strong> you like quiet character studies, coastal settings, precise prose.
                                        </li>
                                        <li>
                                            <strong>Skip if:</strong> you need big twists or relentless pace.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div className="text-2xl leading-relaxed text-justify mb-8">&quot;Lorem Ipsum is simply dummy text of the printing and typesetting industry.&quot;</div>
                        <div className="text-right mb-4">- Chapter 9</div>
                        <div className="mb-4"><hr className="border-t border-primary/20" /></div>
                        <div className="leading-relaxed text-justify mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="leading-relaxed text-justify mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div>
                            <strong>Bottom line:</strong> A slow burn with a clean aftertaste. I&apos;ll shelve it in the &quot;return next rainy season&quot; stack.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
