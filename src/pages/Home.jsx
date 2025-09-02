import React from 'react'
import { getAllBooksAxios, getWeeksBooks, getSecilmisBooks } from '../service/BookService'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../comp/Loader'
import Book from '../comp/Book'
import BookSwiper from '../comp/BookSwiper'
import Footer from '../comp/Footer'
const Home = () => {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    useEffect(() => {
        getAllBooksAxios()
            .then((res) => {
                setData(res);
            })
    }, [])

    useEffect(() => {
        getWeeksBooks()
            .then((res) => {
                setData2(res)
            })
    }, [])
    useEffect(() => {
        getSecilmisBooks()
            .then((res) => {
                setData3(res)
            })
    }, [])

    if (!data.length) {
        return (
            <div className="min-h-screen bg-[#fff] flex items-center justify-center px-6">
                <Loader />
            </div>)
    }
    return (
        <>
            <BookSwiper />
            <div className="container mx-auto px-5 sm:px-9 md:px-20">
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className="text-[30px] font-semibold text-[#000] py-6">Həftənin ən son  <span className='text-red-600'> baxılanları</span></h1>
                    <div className='HEFTENIN-EN-SON-BAXILANLAR flex justify-center flex-wrap gap-3'>
                        {data2.map((item, i) => <Book key={i} data={item} />)}
                    </div>

                    <h1 className="text-[30px] font-semibold text-[#000] py-5"><span className='text-red-600'>Libraff</span>ın seçimləri  </h1>
                    <div className='flex justify-center flex-wrap gap-3 p-4'>
                        {data3.map((item, i) => <Book key={i} data={item} />)}
                    </div>
                    <h1 className="text-[30px] font-semibold text-[#000] py-5">Bütün <span className='text-red-600'> kitablar</span></h1>
                    <div className="BOOKSDIV flex justify-center flex-wrap gap-4 p-4">
                        {data.map((item, i) => <Book key={i} data={item} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
