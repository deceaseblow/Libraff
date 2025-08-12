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
    },[])
    useEffect(() => {
        getSecilmisBooks()
            .then((res) => {
                setData3(res)
            })
    },[])

    if (!data.length) {
        return (
            <div className="min-h-screen bg-[#fff] flex items-center justify-center px-6">
                <Loader />
            </div>)
    }
    return (
        <>
            <BookSwiper />
            <div className="container mx-auto px-20">
                <h1 className="text-[30px] font-semibold text-[#000] py-6 ">Həftənin ən son  <span className='text-red-600'> baxılanları</span></h1>
                <div className='HEFTENIN-EN-SON-BAXILANLAR grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-4 '>
                    {data2.map((item, i) => <Book key={i} data={item} />)}
                </div>
               
                <h1 className="text-[30px] font-semibold text-[#000] py-6 "><span className='text-red-600'>Libraff</span>ın seçimləri  </h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-4'> 
                    {data3.map((item, i) =><Book key={i} data={item} />)}
                </div> 
                <h1 className="text-[30px] font-semibold text-[#000] py-6 ">Bütün <span className='text-red-600'> kitablar</span></h1>
               <div className="BOOKSDIV grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-4">
                    {data.map((item, i) => <Book key={i} data={item} />)}
                </div>
            </div>
        </>
    )
}

export default Home
