'use client';

import { useState, useMemo, useCallback } from 'react';
import { books } from '@/lib/books';
import { Book } from '@/types/book';
import { BooksControls } from './book-controls';
import { BookCard } from "./book-card";
import { BookOpen } from 'lucide-react';
import { useDebounce } from "@/hooks/useDebounce";

type LayoutType = 'columns' | 'rows';

export function Books() {
    const [search, setSearch] = useState<string>("");
    const [selectedGenre, setSelectedGenre] = useState<string>("all");
    const [layout, setLayout] = useState<LayoutType>('columns');
    const debouncedSearch = useDebounce(search, 400);

    const handleSearch = useCallback((value: string) => setSearch(value), []);
    const handleGenre = useCallback((value: string) => setSelectedGenre(value), []);
    const handleLayout = useCallback((value: LayoutType) => setLayout(value), []);

    const filteredBooks: Book[] = useMemo(() => {
        return books.filter((book: Book) => {
            const matchesSearch =
                book.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                book.author.toLowerCase().includes(debouncedSearch.toLowerCase());

            const matchesGenre =
                selectedGenre === "all" ||
                (book.genre?.some(
                    genre => genre.toLowerCase() === selectedGenre.toLowerCase()
                ));

            return matchesSearch && matchesGenre;
        });
    }, [debouncedSearch, selectedGenre]);

    const allGenres = useMemo(() => {
        const genreSet = new Set<string>();

        books.forEach(book => {
            if (book.genre) {
                book.genre.forEach(genre =>
                    genreSet.add(genre)
                );
            }
        });

        return Array.from(genreSet).sort();
    }, []);

    return (
        <section className="relative">
            <div className="mb-8 text-center md:text-left">
                <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4">Books We Read</h2>
                <p className="text-muted-foreground">Check out our book reviews and recommendations.</p>
            </div>
            {/* Controls */}
            <BooksControls
                search={search}
                setSearch={handleSearch}
                selectedGenre={selectedGenre}
                setSelectedGenre={handleGenre}
                allGenres={allGenres}
                layout={layout}
                setLayout={handleLayout}
            />
            {/* Results Count */}
            <div className="mb-8">
                <p className="text-gray-600 font-medium">
                    {filteredBooks.length === books.length
                        ? `Showing all ${filteredBooks.length} books`
                        : `Showing ${filteredBooks.length} of ${books.length} books`
                    }
                </p>
            </div>
            {/* Books Card */}
            {filteredBooks.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}

            {/* Empty Result */}
            {filteredBooks.length === 0 && (
                <div className="text-center py-24">
                    <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">No books found</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Try adjusting your search terms or filters to discover more books.
                    </p>
                </div>
            )}
        </section>
    )
}