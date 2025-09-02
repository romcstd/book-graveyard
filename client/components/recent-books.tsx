import { books } from "@/lib/books"
import { RecentBooksCard } from "./recent-books-card";

export function RecentBooks() {
    return (
        <section className="relative lg:col-span-2">
            <div className="mb-8 text-center md:text-left">
                <h2 className="font-playfair font-black text-3xl md:text-4xl mb-4">Recently Reviewed Books</h2>
                <p>Check out our latest book reviews and recommendations.</p>
            </div>
            <div className="space-y-8">
                {books.map((book) => (
                    <RecentBooksCard book={book} key={book.id} />
                ))}
            </div>
        </section>
    )
}