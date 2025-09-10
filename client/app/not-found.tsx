import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <section className="flex flex-1 flex-col items-center justify-center text-center p-6">
            <h1 className="text-8xl font-extrabold text-zinc-500">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Oops! Page not found
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Sorry, the page you’re looking for might have been removed, renamed, or never existed.
            </p>
            <Button asChild className="mt-4" size="lg">
                <Link
                    href="/"
                >
                    Go Back to Homepage
                </Link>
            </Button>
        </section>
    );
}