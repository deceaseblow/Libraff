import{ createContext, useState, useEffect } from "react";
import { 
    getAllBooksAxios, 
    postBookAxios, 
    updateBookAxios, 
    deleteBookAxios 
} from "../service/BookService";

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        try {
            const fetched = await getAllBooksAxios();
            setBooks(fetched);  
        } catch (error) {
            console.error("Error fetching books in context:", error);
        }
    }

    async function addBook(bookData) {
        try {
            const newBook = await postBookAxios(bookData);
            setBooks(prevBooks => [...prevBooks, newBook]);
            return newBook;
        } catch (error) {
            console.error("Error adding book:", error);
            throw error;
        }
    }

    async function updateBook(id, bookData) {
        try {
            const updatedBook = await updateBookAxios(id, bookData);
            setBooks(prevBooks => 
                prevBooks.map(book => 
                    book.id === id ? updatedBook : book
                )
            );
            return updatedBook;
        } catch (error) {
            console.error("Error updating book:", error);
            throw error;
        }
    }

    async function removeBook(id) {
        try {
            await deleteBookAxios(id);
            setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
            throw error;
        }
    }

    return (
        <BookContext.Provider value={{ 
            books, 
            setBooks, 
            fetchBooks,
            addBook, 
            updateBook, 
            removeBook 
        }}>
            {children}
        </BookContext.Provider>
    );
}