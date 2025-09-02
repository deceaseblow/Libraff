import React, { useEffect, useState } from 'react';
import Book from '../comp/Book';
import { getAllBooksAxios } from '../service/BookService';
import { Link } from 'react-router-dom';
function WishlistPage() {
  const [allBooks, setAllBooks] = useState([]);
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('likedBooks')) || [];

    getAllBooksAxios()
      .then((res) => {
        const booksArray = Array.isArray(res) ? res : [];
        setAllBooks(booksArray);

        const filtered = booksArray.filter((book) =>
          likedIds.includes(book.id)
        );
        setLikedBooks(filtered);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="WHOLE-WISHLIST-PAGE">
      <div className="pmx-auto px-5 sm:px-9 md:px-20">
        <div className='flex gap-2 text-gray-500 text-[16px] py-4'>
          <Link to='/'><p>Əsas səhifə</p></Link> / <p>Wishlist</p>
        </div>
        <h1 className="text-[30px] font-semibold text-[#000] py-2">Wishlist</h1>

        {likedBooks.length > 0 ? (
          <div className="BOOKSDIV flex flex-wrap justify-center gap-5 p-4">
            {likedBooks.map((book) => <Book key={book.id} data={book} />)}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[460px]">
            <p className="text-gray-500 text-lg text-center">
              Bəyəndiyiniz kitab yoxdur.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default WishlistPage;

