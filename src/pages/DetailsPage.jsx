import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllBooksAxios } from '../service/BookService';
import { IoCopy } from "react-icons/io5";

function DetailsPage() {
  const { id } = useParams(); // get book id from URL

  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    getAllBooksAxios()
      .then((res) => {
        const booksArray = Array.isArray(res) ? res : [];
        setData(booksArray);

        const book = booksArray.find(book => String(book.id) === String(id));

        setSelectedBook(book);

        const wishlist = JSON.parse(localStorage.getItem('likedBooks')) || [];
        const basket = JSON.parse(localStorage.getItem('basketBooks')) || [];

        if (book) {
          setIsInWishlist(wishlist.includes(book.id));
          setIsInBasket(basket.includes(book.id));
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [id]);

  const handleAddToWishlist = () => {
    const stored = JSON.parse(localStorage.getItem('likedBooks')) || [];
    let updated;

    if (stored.includes(selectedBook.id)) {
      updated = stored.filter(bookId => bookId !== selectedBook.id);
    } else {
      updated = [...stored, selectedBook.id];
    }

    localStorage.setItem('likedBooks', JSON.stringify(updated));
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToBasket = () => {
    const stored = JSON.parse(localStorage.getItem('basketBooks')) || [];
    let updated;

    if (stored.includes(selectedBook.id)) {
      updated = stored.filter(bookId => bookId !== selectedBook.id);
    } else {
      updated = [...stored, selectedBook.id];
    }

    localStorage.setItem('basketBooks', JSON.stringify(updated));
    setIsInBasket(!isInBasket);
  };

  if (!selectedBook) {
    return (
      <div className="container mx-auto px-20 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-600">Book not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={selectedBook.img}
              alt={selectedBook.title}
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className='flex align-center gap-3 font-semibold text-gray-600'>
              <IoCopy className='scale-110' />
              Kod: {selectedBook.code}
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              {selectedBook.title}
            </h1>

            <h2 className="text-xl text-red-600 font-medium">
              {selectedBook.author}
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-red-700">
                {selectedBook.saleRate} ₼
              </span>
              {selectedBook.price !== selectedBook.saleRate && (
                <span className="text-lg text-gray-400 line-through">
                  {selectedBook.price}₼
                </span>
              )}
            </div>

            {selectedBook.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>
            )}

            {selectedBook.genre && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Genre</h3>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {selectedBook.genre}
                </span>
              </div>
            )}

            {selectedBook.publishYear && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Publication Year</h3>
                <p className="text-gray-700">{selectedBook.publishYear}</p>
              </div>
            )}

            {selectedBook.pages && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Pages</h3>
                <p className="text-gray-700">{selectedBook.pages}</p>
              </div>
            )}

            <div className="space-y-4 pt-4">
              <button
                onClick={handleAddToBasket}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 
                    ${isInBasket
                      ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      : 'bg-red-600 text-white hover:bg-red-700'}`}
              >
                {isInBasket ? "Səbətdən çıxart" : "Səbətə əlavə et"}
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`w-full py-3 px-6 rounded-lg font-medium border 
                    ${isInWishlist
                      ? 'border-gray-500 text-gray-600 hover:bg-gray-100'
                      : 'border-red-600 text-red-600 hover:bg-red-50'}`}
              >
                {isInWishlist ? "Wishlistdən çıxart" : "Wishlistə əlavə et"}
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-30 py-5">
          <div className='flex justify-center align-center gap-10'>
            <div className='flex flex-col font-semibold text-gray-500 py-6'>
              <h2>Kateqoriya . . . . . . . {selectedBook.category}</h2>
              <h2>Alt-kateqoriya . . . .  {selectedBook.altCateg}</h2>
              <h2>Muellif . . . . . . . . . . {selectedBook.author}</h2>
            </div>
            <div className='flex flex-col font-semibold text-gray-500 py-6'>
              <h2>Nəşr . . . . . . . . . . {selectedBook.publisher}</h2>
              <h2>Səhifə sayı . . . . . {selectedBook.pageCount}</h2>
              <h2>Cildi . . . . . . . . . . . {selectedBook.cover}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
