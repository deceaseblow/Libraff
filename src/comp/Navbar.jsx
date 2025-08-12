import React from 'react'
import Logo from './Logo'
import KataloqButton from './KataloqButton'
import SearchBar from './SearchBar'
import WishlistIcon from './WishlistIcon'
import { Link } from 'react-router-dom'
import BasketIcon from './BasketIcon'
function Navbar({onSearch}) {
    return (

        <div className="container mx-auto px-20 ">
            <div className='flex justify-between items-center py-6'>
                <Logo />
                <div className='flex items-center gap-4'>
                    <KataloqButton />
                     <SearchBar onSearch={onSearch} />
                </div>
                <div className='flex items-center gap-4'>
                    <WishlistIcon />
                    <BasketIcon/>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-1 font-semibold text-[gray] text-[16px] gap-2'>
                <div className='flex justify-between items-center gap-4'>
                    <h2 className='cursor-pointer '>BestSeller-May</h2>
                    <Link to="/muellifler"> <h2 className='cursor-pointer '>Müəlliflər</h2></Link>
                    <Link to='/klassikler'> <h2 className='cursor-pointer '>Klassiklər</h2></Link>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <Link to='/odenisvecatdirilma'>  <h2 className='cursor-pointer hover:underline '>Ödəniş və çatdırılma</h2></Link>
                    <Link to='/loyalliqKarti'><h2 className='cursor-pointer '>Loyallıq kartı </h2></Link>
                    <h2 className='cursor-pointer '>FAQ</h2>
                    <h2 className='cursor-pointer '>Əlaqə </h2>
                </div>
            </div>
            <hr className="border-[1px] border-[#e5e5e5] my-1" />

        </div>

    )
}

export default Navbar
