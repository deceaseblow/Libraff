import React, { useEffect, useState } from 'react';
import { getAllBooksAxios } from '../service/BookService'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import Book from '../comp/Book'; // Ensure you import your Book component if it's custom

function BasketPage() {
    const [allBooks, setAllBooks] = useState([]);
    const [basketBooks, setBasketBooks] = useState([]);

    useEffect(() => {
        const basketIds = JSON.parse(localStorage.getItem('basketBooks')) || [];

        getAllBooksAxios()
            .then((res) => {
                const booksArray = Array.isArray(res) ? res : [];
                setAllBooks(booksArray);

                const filtered = booksArray.filter((book) =>
                    basketIds.includes(book.id)
                );
                setBasketBooks(filtered);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    }, []);

    return (
        <div className="WHOLE-BASKET-PAGE">
            <div className="container mx-auto px-20">
                <div className='flex gap-2 text-gray-500 text-[16px] py-4'>
                    <Link to='/'><p>Əsas səhifə</p></Link> / <p>Səbət</p>
                </div>
                <h1 className="text-[30px] font-semibold text-[#000] py-2">Səbət</h1>
                {basketBooks.length > 0 ? (
                    <div className="BOOKSDIV grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-4">
                        {basketBooks.map((book) => (
                            <Book key={book.id} data={book} />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[420px]">
                        <p className="text-gray-500 text-lg text-center">
                            Səbətdə heç bir kitab yoxdur.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BasketPage;
