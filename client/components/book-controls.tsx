'use client';

import { useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, Search } from 'lucide-react';
import { BooksControlsProps } from '@/types/book-controls';

export function BooksControls({
    search,
    setSearch,
    selectedGenre,
    setSelectedGenre,
    allGenres,
    layout,
    setLayout,
}: BooksControlsProps) {
    const handleColumns = useCallback(() => setLayout("columns"), [setLayout])
    const handleRows = useCallback(() => setLayout("rows"), [setLayout])
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            {/* Search & Genre */}
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

            {/* Layout Toggle */}
            <div className="flex gap-2">
                <Button
                    variant={layout === "columns" ? "default" : "outline"}
                    size="sm"
                    onClick={handleColumns}
                    aria-label="View as columns"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Grid className="h-4 w-4" />
                    Columns
                </Button>
                <Button
                    variant={layout === "rows" ? "default" : "outline"}
                    size="sm"
                    onClick={handleRows}
                    aria-label="View as rows"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <List className="h-4 w-4" />
                    Rows
                </Button>
            </div>
        </div>
    );
}
