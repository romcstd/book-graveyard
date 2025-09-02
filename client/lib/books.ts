// lib/books.ts
import { Book } from "@/types/book"

export const books: Book[] = [
   {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        description: "Between life and death there is a library. Within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived...",
        image: "/recent-books/book-cover-1.jpg",
        genre: ["Fantasy", "Philosophical Fiction"],
    },
    {
        id: 2,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        description: "A tale of gods, kings, immortal fame, and the human heart. A moving retelling of the Iliad, focusing on the deep bond between Achilles and Patroclus.",
        image: "/recent-books/book-cover-2.jpg",
        genre: ["Contemporary", "Romance"],
    },
    {
        id: 3,
        title: "Pachinko",
        author: "Min Jin Lee",
        description: "An epic historical novel following a Korean family through generations as they navigate identity, belonging, and survival in Japan.",
        image: "/recent-books/book-cover-3.jpg",
        genre: ["Science Fiction", "Literary Fiction"],
    },
]
