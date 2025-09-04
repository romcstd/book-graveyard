import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reviewer } from "@/types/reviewer";

interface ReviewerCardProps {
    reviewer: Reviewer
}

export function ReviewersCard({ reviewer }: ReviewerCardProps) {
    return (
        <Card className="p-6 gap-0">
            <CardHeader className="p-0 mb-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={reviewer.image} alt={reviewer.name} />
                        <AvatarFallback className="text-lg font-semibold">EM</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg">{reviewer.name}</CardTitle>
                        <CardDescription>{reviewer.title}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                    {reviewer.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {reviewer.genre?.map((genre) => (
                        <Badge key={genre} variant="outline" className="text-xs">
                            {genre}
                        </Badge>
                    ))}
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Read More →
                </Button>
            </CardContent>
        </Card>
    )
}