import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBooksAxios } from '../service/BookService';

function Muellifler() {
    const [booksData, setBookData] = useState([]);

    useEffect(() => {
        getAllBooksAxios()
            .then(res => setBookData(res))
            .catch(err => console.error(err));
    }, []);

    const uniqueAuthors = [
        ...new Set(booksData
            .map(book => book?.author)
            .filter(author => author && author.trim())
        )
    ];

    const groupedAuthors = uniqueAuthors
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, author) => {
            const firstLetter = author[0]?.toUpperCase() || '?';
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(author);
            return acc;
        }, {});

    const letters = Object.keys(groupedAuthors).sort();

    return (
        <div>
            <div className="container mx-auto px-6 md:px-20">
                <div className='flex gap-2 text-gray-400 py-4 text-[16px]'>
                    <Link to='/'><p>Əsas səhifə</p></Link>/ <p>Müəlliflər</p>
                </div>
                <h1 className="text-[30px] font-semibold text-[#000] py-2 ">Müəlliflər</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4">
                    {letters.map(letter => (
                        <div key={letter}>
                            <h2 className="text-xl font-bold text-black mb-2">{letter}</h2>
                            <ul className="space-y-1">
                                {groupedAuthors[letter].map((author, index) => (
                                    <li key={index}>
                                        <Link
                                            to={`/authors/${encodeURIComponent(author)}`}
                                            className="text-red-600 hover:underline text-[15px]"
                                        >
                                            {author}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10'>
            </div>
        </div>
    )
}

export default Muellifler;
