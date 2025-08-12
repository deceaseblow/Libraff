import React from 'react'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom'
function WishlistIcon() {
  return (
    <div className='hover:text-red-600 transition-colors duration-300 '>
      <Link to ='/wishlist' >
      <CiHeart className='h-[50px] scale-150'/>
      </Link>
    </div>
  )
}

export default WishlistIcon
