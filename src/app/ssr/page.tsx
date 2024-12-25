import React from "react";


interface Book {
    id: number; 
    name: string; 
    type: "fiction" | "non-fiction"; 
    available: boolean; 
}


async function fetchBooks(): Promise<Book[]> {
    try {
        const res = await fetch("https://simple-books-api.glitch.me/books", {
            cache: "no-store", 
        });

        if (!res.ok) {
            throw new Error("Failed to fetch books");
        }

        return await res.json();
    } catch (error) {
        console.error("Failed to fetch books:", error);
        return []; 
    }
}


export default async function BooksPage() {
    const books: Book[] = await fetchBooks();

    return (
        <div className="min-h-screen bg-black p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Server-Side Rendering</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books && books.length > 0 ? (
                    books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
                        >
                            <h2 className="text-xl font-semibold text-gray-600 mb-2">
                                {book.name}
                            </h2>
                            <p className="text-gray-600">
                                <strong>Type:</strong> {book.type}
                            </p>
                            <p className="text-gray-600">
                                <strong>Available:</strong> {book.available ? "Yes" : "No"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    );
}
