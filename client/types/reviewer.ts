export interface Reviewer {
  id: number;
  slug: string;
  name: string;
  initials: string;
  title: string;
  description: string;
  bio: string;
  philosophy: string;
  avatar?: string;
  genre?: string[];
  recentReviews: {
    title: string;
    author: string;
    rating: number;
    excerpt: string;
  }[];
}
