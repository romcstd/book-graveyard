import { books } from "@/lib/books";
import { RecentBooksCard } from "./recent-books-card";

export function RecentBooks() {
    return (
        <section className="relative">
            <div className="mb-8 text-center md:text-left">
                <h2 className="font-bold text-2xl mb-4">Recently Reviewed Books</h2>
                <p className="text-muted-foreground">Check out our latest book reviews and recommendations.</p>
            </div>
            <div className="space-y-4">
                {books.map((book) => (
                    <RecentBooksCard book={book} key={book.id} />
                ))}
            </div>
        </section>
    )
}