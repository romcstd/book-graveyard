export function Footer() {
    return (
        <footer className="relative px-8 sm:px-16 3xl:px-32 border-t border-border bg-card mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground">Book Graveyard</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Where literary souls find their eternal rest. We curate thoughtful reviews and recommendations for
                            readers seeking depth in contemporary literature.
                        </p>
                        <p className="text-xs text-muted-foreground">Est. 2024</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Explore</h4>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Current Reading
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Book Reviews
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                About Our Reviewers
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Newsletter
                            </a>
                        </nav>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Connect</h4>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Subscribe to Newsletter
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Contact Us
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Submit a Review
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-muted-foreground">© 2024 Book Graveyard. All rights reserved.</p>
                    <p className="text-xs text-muted-foreground italic mt-2 md:mt-0">
                        &quot;Every book deserves a proper burial in memory.&quot;
                    </p>
                </div>
            </div>
        </footer>
    )
};