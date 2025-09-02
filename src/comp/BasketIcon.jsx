import React, { useEffect, useState } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function BasketIcon() {
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const updateBasketCount = () => {
      const basketIds = JSON.parse(localStorage.getItem('basketBooks')) || [];
      setBasketCount(basketIds.length);
    };

    // Initial load
    updateBasketCount();

    // Listen for storage changes (when items are added/removed)
    window.addEventListener('storage', updateBasketCount);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', updateBasketCount);
    };
  }, []);

  return (
    <div className='hover:text-red-600 transition-colors duration-300 hover:cursor-pointer relative'>
      <Link to='/basket'>
        <FaBasketShopping className='h-[50px] scale-120' />
        {basketCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
            {basketCount}
          </span>
        )}
      </Link>
    </div>
  )
}

export default BasketIcon