import Image from "next/image";
import { books } from "@/lib/books";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function CurrentBookWeAreReading() {

  const currentBook = books.find((book) => book.status === "Ongoing");

  if (!currentBook) {
    return (
      <section>
        <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4">Current Book We Are Reading</h2>
        <p className="font-serif text-muted-foreground">No ongoing book at the moment.</p>
      </section>
    );
  }

  if (
    currentBook.currentPage === undefined ||
    currentBook.startDate === undefined ||
    currentBook.expectedFinish === undefined ||
    currentBook.reviewDate === undefined
  ) {
    return (
      <section>
        <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4">Current Book We Are Reading</h2>
        <p className="font-serif text-muted-foreground">This book is marked as ongoing, but progress info is missing.</p>
      </section>
    );
  }


  const progress = Math.round((currentBook.currentPage / currentBook.pages) * 100);

  return (
    <section>
      <div className="mb-8 text-center md:text-left">
        <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4">Current Book We Are Reading</h2>
        <p className="font-serif text-muted-foreground">Discover the book we&apos;re currently diving into and join us on this reading journey.</p>
      </div>
      {/* Current Book Display */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Book Cover */}
        <div className="md:col-span-1">
          <div className="text-center">
            <div className="relative aspect-[2/3] max-w-128 w-full h-auto mx-auto mb-4">
              <Image
                src={currentBook.cover || "/placeholder.svg"}
                alt={`${currentBook.title} cover` || "Untitled Book"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center rounded-xl shadow-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {currentBook.genres?.map((genre) => (
                <Badge key={genre} variant="outline" className="text-xs">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-black text-2xl md:text-4xl mb-2">{currentBook.title}</h3>
              <p className="font-serif text-lg text-muted-foreground mb-4">Book by {currentBook.author}</p>
              <p className="font-serif text-foreground leading-relaxed">{currentBook.description}</p>
            </div>

            {/* Reading Progress */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Reading Progress</h3>
                    <span className="text-sm text-muted-foreground">{progress}% complete</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">Pages Read</p>
                    <p className="font-medium">
                      {currentBook.currentPage} of {currentBook.pages}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Reading Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Started Reading</span>
                    <span className="text-sm font-medium">{currentBook.startDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Expected Completion</span>
                    <span className="text-sm font-medium">{currentBook.expectedFinish}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Full Review Publication</span>
                    <span className="text-sm font-medium">{currentBook.reviewDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
