import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getAllBooksAxios } from '../service/BookService';
import Book from '../comp/Book';

function SearchedPage() {
  const { searchedEl } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooksAxios()
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => console.error(err)); // Handle error if needed
  }, []);

  // Filter books based on search term
  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(searchedEl?.toLowerCase()) 
  );

  return (
    <div className='container mx-auto px-20'>
      <h1 className="text-[30px] font-semibold text-[#000] py-6 ">
        Axtarış nəticəsi : '{searchedEl}'
      </h1>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {filteredBooks.map((item, i) => <Book key={i} data={item} />)}
        </div>
      ) : (
       <div className='h-90  '> <p>Axtarışa uyğun kitab tapılmadı.</p></div>
      )}

    </div>
  )
}

export default SearchedPage;
