export interface Reviewer {
  id: number;
  name: string;
  initials: string;
  title: string;
  description: string;
  image: string;
  genre?: string[];
}
