export function RecentBooks() {
    return (
        <section className="relative">
            <div className="container mx-auto px-4 py-8">
                <h2 className="font-playfair text-3xl font-bold mb-6 text-center">Recently Reviewed Books</h2>
                {/* Replace the div below with actual book components */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Book Cover</span>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-2">Book Title</h3>
                        <p className="text-sm text-gray-600">Short description or review snippet...</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Book Cover</span>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-2">Book Title</h3>
                        <p className="text-sm text-gray-600">Short description or review snippet...</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Book Cover</span>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-2">Book Title</h3>
                        <p className="text-sm text-gray-600">Short description or review snippet...</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Book Cover</span>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-2">Book Title</h3>
                        <p className="text-sm text-gray-600">Short description or review snippet...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}