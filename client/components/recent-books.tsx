import { books } from "@/lib/books";
import { BookCard } from "./book-card"

export function RecentBooks() {
    return (
        <section className="relative">
            <div className="mb-8 text-center md:text-left">
                <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4">Recently Reviewed Books</h2>
                <p className="text-muted-foreground">Check out our latest book reviews and recommendations.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.slice(-3).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    )
}