import React, { useState } from 'react'
import Logo from './Logo'
import KataloqButton from './KataloqButton'
import SearchBar from './SearchBar'
import WishlistIcon from './WishlistIcon'
import BasketIcon from './BasketIcon'
import { Link } from 'react-router-dom'

function Navbar({ onSearch }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className=" mx-auto sm:px-20">
            {/* Top row */}
            <div className="flex justify-between items-center py-6 px-5">
                <Logo />
                
                {/* Desktop search & Kataloq */}
                <div className="hidden sm:flex items-center gap-4">
                    <KataloqButton />
                    <SearchBar onSearch={onSearch} />
                </div>

                {/* Icons & Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <WishlistIcon />
                    <BasketIcon />

                    {/* Hamburger menu button */}
                    <button
                        className="sm:hidden focus:outline-none cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden mb-4">
                    <div className="flex flex-col gap-2 font-semibold text-gray-600 px-5">
                       <div className='flex flex-wrap gap-4 pb-4'> 
                        <KataloqButton />
                        <SearchBar onSearch={onSearch} />
                        </div>

                        <h2 className="cursor-pointer">BestSeller-May</h2>
                        <Link to="/muellifler">
                            <h2 className="cursor-pointer">Müəlliflər</h2>
                        </Link>
                        <Link to="/klassikler">
                            <h2 className="cursor-pointer">Klassiklər</h2>
                        </Link>
                        <Link to="/odenisvecatdirilma">
                            <h2 className="cursor-pointer hover:underline">Ödəniş və çatdırılma</h2>
                        </Link>
                        <Link to="/loyalliqKarti">
                            <h2 className="cursor-pointer">Loyallıq kartı</h2>
                        </Link>
                        <h2 className="cursor-pointer">FAQ</h2>
                        <h2 className="cursor-pointer">Əlaqə</h2>
                    </div>
                </div>
            )}

            {/* Desktop bottom row */}
            <div className="hidden sm:flex justify-between items-center py-1 font-semibold text-gray-500 text-[14px] md:text-[16px] gap-2">
                <div className="flex justify-between items-center gap-4">
                    <h2 className="cursor-pointer">BestSeller-May</h2>
                    <Link to="/muellifler">
                        <h2 className="cursor-pointer">Müəlliflər</h2>
                    </Link>
                    <Link to="/klassikler">
                        <h2 className="cursor-pointer">Klassiklər</h2>
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Link to="/odenisvecatdirilma">
                        <h2 className="cursor-pointer hover:underline">Ödəniş və çatdırılma</h2>
                    </Link>
                    <Link to="/loyalliqKarti">
                        <h2 className="cursor-pointer">Loyallıq kartı</h2>
                    </Link>
                    <h2 className="cursor-pointer">FAQ</h2>
                    <h2 className="cursor-pointer">Əlaqə</h2>
                </div>
            </div>
            <hr className="border-[1px] border-[#e5e5e5] my-1" />
        </div>
    )
}

export default Navbar
