'use client';

import Link from "next/link";
import { Book } from '@/types/book';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, Tag, Star } from 'lucide-react';
import Image from 'next/image';

interface BookCardProps {
    book: Book;
    layout: 'columns' | 'rows';
    index: number;
}

export function TestBookCard({ book, layout, index }: BookCardProps) {
    // Mock rating for display (since not in your Book type)
    const mockRating = 4.2;

    const generateStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < fullStars
                    ? 'fill-yellow-400 text-yellow-400'
                    : i === fullStars && hasHalfStar
                        ? 'fill-yellow-200 text-yellow-400'
                        : 'text-gray-300'
                    }`}
            />
        ));
    };

    const cardClass = layout === 'rows'
        ? 'grid grid-cols-[140px_1fr] gap-0 lg:grid-cols-[140px_1fr]'
        : 'flex flex-col';

    return (
        <article
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 cursor-pointer ${cardClass}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={`relative overflow-hidden ${layout === 'rows' ? 'h-48 w-[140px] lg:w-[180px]' : 'h-56 w-full'}`}>
                <div className="relative w-full h-full group">
                    <Image
                        src={book.cover}
                        alt={`${book.title} cover`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes={layout === 'rows' ? '(max-width: 768px) 140px, 180px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-semibold text-center px-4 text-sm leading-tight">
                            {book.title}
                        </p>
                    </div>
                </div>
            </div>

            <div className={`p-6 flex flex-col flex-1 ${layout === 'rows' ? 'lg:p-8' : ''}`}>
                <div className="mb-4">
                    <h2 className={`font-serif font-bold text-gray-900 mb-2 line-clamp-2 ${layout === 'rows' ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                        {book.title}
                    </h2>
                    <p className="text-gray-600 font-medium text-base">
                        by {book.author}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                        <FileText className="h-3 w-3" />
                        {book.pages} page
                    </Badge>
                    {book.genres && book.genres.map((genre, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1 text-xs">
                            <Tag className="h-3 w-3" />
                            {genre}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                        {generateStars(mockRating)}
                    </div>
                    <span className="text-gray-600 font-medium text-sm">
                        {mockRating}/5
                    </span>
                </div>

                <p className={`text-gray-600 leading-relaxed mb-6 flex-1 ${layout === 'rows' ? 'line-clamp-3' : ''}`}>
                    {book.description}
                </p>

                <div className="flex gap-2">
                    <Button asChild variant="outline">
                        <Link href="#">
                            Read More
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}