import { Reviewer } from "@/types/reviewer";

export const reviewers: Reviewer[] = [
    {
        id: 1,
        slug: "ella-mabini",
        name: "Ella Mabini",
        initials: "EM",
        title: "Literary Fiction Enthusiast",
        description: "Ella brings a deep appreciation for character-driven narratives and contemporary literary fiction. With a background in English literature, she focuses on exploring themes of identity, relationships, and social commentary in modern works.",
        bio: "With a Master's degree in English Literature from the University of the Philippines, Ella brings academic rigor and passionate curiosity to contemporary fiction. She specializes in character-driven narratives that explore themes of identity, belonging, and the human condition. Her reviews focus on the emotional resonance and literary craftsmanship that make stories unforgettable.",
        philosophy: "I believe every book is a conversation between the author and reader. My role is to facilitate that dialogue, helping readers discover stories that will challenge, comfort, and transform them.",
        genre: ["Literary Fiction", "Fantasy", "Science Fiction"],
        avatar: "/reviewers/ella-mabini.jpg",
        recentReviews: [
            {
                title: "The Midnight Library",
                author: "Matt Haig",
                rating: 4.5,
                excerpt: "A profound meditation on life's infinite possibilities, wrapped in an accessible narrative that speaks to anyone who has ever wondered 'what if?'",
            },
            {
                title: "Pachinko",
                author: "Min Jin Lee",
                rating: 5,
                excerpt: "An epic masterpiece that traces four generations of a Korean family with breathtaking scope and intimate emotional detail.",
            },
            {
                title: "The Song of Achilles",
                author: "Madeline Miller",
                rating: 4.5,
                excerpt: "Miller transforms ancient myth into a deeply moving love story that feels both timeless and urgently contemporary.",
            },
        ],
    },
    {
        id: 2,
        slug: "jamie-rebugio",
        name: "Jamie Rebugio",
        initials: "JR",
        title: "Genre Fiction Explorer",
        description: "Jamie specializes in fantasy, science fiction, and speculative works. Known for thoughtful analysis of world-building and narrative structure, Jamie brings fresh perspectives to both classic and emerging genre fiction.",
        bio: "A voracious reader with a background in creative writing and world mythology, Jamie brings fresh perspectives to speculative fiction. They excel at analyzing world-building, narrative structure, and the social commentary embedded within fantasy and science fiction. Jamie's reviews help readers navigate both beloved classics and emerging voices in genre fiction.",
        philosophy: "Genre fiction is where we explore the impossible to better understand the possible. Every fantasy world reflects our own reality, and every sci-fi future warns us about our present.",
        genre: ["Literary Fiction", "Fantasy", "Science Fiction"],
        avatar: "/reviewers/jamie-rebugio.jpg",
        recentReviews: [
            {
                title: "The Fifth Season",
                author: "N.K. Jemisin",
                rating: 5,
                excerpt: "Jemisin crafts a world so vivid and brutal that it becomes impossible to look away, while delivering sharp commentary on oppression and survival.",
            },
            {
                title: "Project Hail Mary",
                author: "Andy Weir",
                rating: 4.5,
                excerpt: "A perfect blend of hard science and emotional storytelling that proves science fiction can be both intellectually rigorous and deeply human.",
            },
            {
                title: "The Priory of the Orange Tree",
                author: "Samantha Shannon",
                rating: 4,
                excerpt: "An ambitious fantasy epic that successfully balances multiple storylines while creating a rich, dragon-filled world with complex political intrigue.",
            },
        ],
    }
];