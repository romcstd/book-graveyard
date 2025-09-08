export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  pages: number;
  description: string;
  image: string;
  genre?: string[];
}
