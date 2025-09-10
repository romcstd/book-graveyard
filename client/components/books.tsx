'use client';

import { useState, useMemo } from 'react';
import { books } from '@/lib/books';
import { Book } from '@/types/book';
import { BookCard } from "./book-card"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, Search, BookOpen } from 'lucide-react';

type LayoutType = 'columns' | 'rows';

export function Books() {
    const [search, setSearch] = useState<string>("");
    const [selectedGenre, setSelectedGenre] = useState<string>("all");
    const [layout, setLayout] = useState<LayoutType>('columns');

    const filteredBooks: Book[] = useMemo(() => {
        return books.filter((book: Book) => {
            const filterSearch =
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase());

            const filterGenre =
                selectedGenre === "all" ||
                (book.genre?.some(
                    genre => genre.toLowerCase() === selectedGenre.toLowerCase()
                ));

            return filterSearch && filterGenre;
        });
    }, [search, selectedGenre]);

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
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="text"
                            placeholder="Search books or authors..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 min-w-[200px]"
                        />
                    </div>

                    <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Genres" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Genres</SelectItem>
                            {allGenres.map((genre) => (
                                <SelectItem key={genre} value={genre}>
                                    {genre}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex gap-2">
                    <Button
                        variant={layout === 'columns' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLayout('columns')}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Grid className="h-4 w-4" />
                        Columns
                    </Button>
                    <Button
                        variant={layout === 'rows' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLayout('rows')}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <List className="h-4 w-4" />
                        Rows
                    </Button>
                </div>
            </div>
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