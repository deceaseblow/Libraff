import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'
function BasketIcon() {
  return (
    <div className='hover:text-red-600 transition-colors duration-300  hover:cursor-pointer'>
     <Link to='/basket'>
      <FaBasketShopping className='h-[50px] scale-120' />
     </Link>
    </div>
  )
}

export default BasketIcon
