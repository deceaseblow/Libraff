import React, { useContext } from 'react';
import { BookContext } from './BookContext';

function Table({ handleDelete }) {
  const { books } = useContext(BookContext);

  return (
    <div>
      <div className="container p-4 mx-auto sm:p-6 dark:text-gray-800">
        <h2 className="mb-6 text-3xl font-semibold leading-tight">
          All Books
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-300">
                <th className="p-3">No</th>
                <th className="p-3">Image</th>
                <th className="p-3">ID</th>
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Category</th>
                <th className="p-3">Alt Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
              {books && books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book.id} className="hover:bg-gray-100 dark:hover:bg-gray-200">
                    <td className="px-3 py-2 align-middle">{index + 1}</td>
                    <td className="px-3 py-2 align-middle">
                      {book.img ? (
                        <img
                          src={book.img}
                          alt={book.title}
                          className="w-12 h-16 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-12 h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-xs">
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 align-middle">{book.id}</td>
                    <td className="px-3 py-2 align-middle">{book.title}</td>
                    <td className="px-3 py-2 align-middle">{book.author}</td>
                    <td className="px-3 py-2 align-middle">{book.category}</td>
                    <td className="px-3 py-2 align-middle">{book.altCateg}</td>
                    <td className="px-3 py-2 align-middle">${book.price}</td>
                    <td className="px-3 py-2 align-middle space-x-2">
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-6 text-center text-gray-600">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
