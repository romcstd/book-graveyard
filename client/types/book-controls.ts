export type LayoutType = "columns" | "rows";

export interface BooksControlsProps {
    search: string;
    setSearch: (value: string) => void;
    selectedGenre: string;
    setSelectedGenre: (value: string) => void;
    allGenres: string[];
    layout: LayoutType;
    setLayout: (value: LayoutType) => void;
}