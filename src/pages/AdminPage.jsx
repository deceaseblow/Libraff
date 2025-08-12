import React, { useContext, useState } from 'react';
import { BookContext } from '../comp/BookContext';
import Table from '../comp/Table';
import BookForm from '../comp/BookForm';
import toast, { Toaster } from 'react-hot-toast';

function AdminPage() {
    const { books, addBook, updateBook, removeBook } = useContext(BookContext);
    const [showForm, setShowForm] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    async function handleDelete(id) {
        try {
            await removeBook(id);
            toast.success('Book deleted successfully');
        } catch (error) {
            toast.error('Failed to delete book');
        }
    }

    async function handleAdd(bookData) {
        try {
            await addBook(bookData);
            toast.success('Book added successfully');
            setShowForm(false);
        } catch (error) {
            toast.error('Failed to add book');
        }
    }

    async function handleUpdate(id, bookData) {
        try {
            await updateBook(id, bookData);
            toast.success('Book updated successfully');
            setEditingBook(null);
            setShowForm(false);
        } catch (error) {
            toast.error('Failed to update book');
        }
    }

    function handleEdit(book) {
        setEditingBook(book);
        setShowForm(true);
    }

    function handleCancelForm() {
        setShowForm(false);
        setEditingBook(null);
    }

    return (
        <div className='container mx-auto px-20 py-8'>
            <Toaster />
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg'>
                <h1 className="font-bold text-4xl mb-6 text-gray-800 py-10">
                    Admin Page
                </h1>
                
                <div className="mb-6">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Book
                    </button>
                </div>

                {showForm && (
                    <BookForm
                        book={editingBook}
                        onSubmit={editingBook ? 
                            (data) => handleUpdate(editingBook.id, data) : 
                            handleAdd
                        }
                        onCancel={handleCancelForm}
                    />
                )}

                <Table 
                    books={books}
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    );
}

export default AdminPage;