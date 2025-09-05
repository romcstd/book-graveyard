import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Link from "next/link";
import { reviewers } from "@/lib/reviewers";
import { Reviewer } from "@/types/reviewer";

export async function generateStaticParams() {
  return reviewers.map((reviewer) => ({
    slug: reviewer.slug,
  }))
}

interface ReviewerPageProps {
  params: Promise<{ slug: string }>
}

export default async function ReviewerPage({ params }: ReviewerPageProps) {
  const { slug } = await params;
  const reviewer: Reviewer | undefined = reviewers.find(r => r.slug === slug)
  if (!reviewer) return notFound()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link href="/reviewers" className="hover:text-primary">
              Our Reviewers
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{reviewer.name}</span>
          </nav>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            <Avatar className="h-32 w-32">
              <AvatarImage src={reviewer.avatar || "/placeholder.svg"} alt={reviewer.name} />
              <AvatarFallback className="text-2xl font-semibold">{reviewer.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center lg:text-left space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{reviewer.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{reviewer.title}</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {reviewer.genre?.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{reviewer.bio}</p>

              <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                <blockquote className="text-foreground italic">&quot;{reviewer.philosophy}&quot;</blockquote>
              </div>
            </div>
          </div>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
          <p className="text-muted-foreground mb-6">Discover {reviewer.name}&apos;s latest literary insights</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewer.recentReviews.map((review) => (
              <Card key={review.title} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{review.title}</CardTitle>
                  <CardDescription>by {review.author}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(review.rating) ? "text-yellow-500" : "text-muted"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.rating}/5</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground mb-4">{review.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read Full Review
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 text-center">
          <CardHeader className="mb-6">
            <CardTitle className="text-2xl">Connect with {reviewer.name}</CardTitle>
            <CardDescription className="max-w-2xl mx-auto">
              Have questions about a review or want to discuss a book? {reviewer.name} would love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button variant="outline" className="flex-1 bg-transparent">
                Send a Message
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View All Reviews
              </Button>
              <Button className="flex-1">Follow Reading Updates</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
