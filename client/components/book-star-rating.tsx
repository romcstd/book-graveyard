import { Star } from 'lucide-react';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

interface StarRatingProps {
    rating: number;
    outOf?: number;
}

export function BookStarRating({ rating, outOf = 5 }: StarRatingProps) {
    return (
        <div className="flex items-center">
            {Array.from({ length: outOf }).map((_, i) => {
                const starValue = i + 1;
                if (starValue <= Math.floor(rating)) return <FaStar key={i} className="text-yellow-400" />;
                if (starValue - 1 < rating && rating < starValue) return <FaRegStarHalfStroke key={i} className="text-yellow-400" />;
                return <FaRegStar key={i} className="text-gray-300" />;
            })}
            <span className="ml-2 text-sm text-gray-600">{rating}/{outOf}</span>
        </div>
    );
}
