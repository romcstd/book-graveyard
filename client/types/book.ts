export enum BookStatus {
  NotStarted = "Not Started",
  Ongoing = "Ongoing",
  Completed = "Completed",
}

export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  pages: number;
  description: string;
  cover: string;
  coverDescription: string;
  genres?: string[];
  rating?: number;
  status: BookStatus;
  currentPage?: number;
  startDate?: string;
  expectedFinish?: string;
  reviewDate?: string;
}
