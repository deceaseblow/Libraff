import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllBooksAxios } from '../service/BookService'
import Footer from '../comp/Footer'
import Book from '../comp/Book' // ← Make sure this path is correct

function AuthorBooks() {
    const { authorName } = useParams()
    const decodedAuthor = decodeURIComponent(authorName)
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        getAllBooksAxios()
            .then((res) => {
                const filtered = res.filter(book => book.author === decodedAuthor)
                setBooksData(filtered)
            })
    }, [decodedAuthor])

    const seenTitles = new Set()
    const uniqueBooks = booksData.filter(book => {
        if (seenTitles.has(book.title)) return false
        seenTitles.add(book.title)
        return true
    })

    return (
        <div>
            <div className="container mx-auto px-20 py-8">
                <h1 className="text-2xl  font-bold mb-6">{decodedAuthor}  müəllifinin {uniqueBooks.length} kitabı tapıldı.</h1>

                {uniqueBooks.length === 0 ? (
                    <p className="text-gray-500">Bu müəllif üçün kitab tapılmadı.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {uniqueBooks.map(book => (
                            <Book key={book.id} data={book} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuthorBooks
