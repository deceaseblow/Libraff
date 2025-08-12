import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

function Book({ data }) {
  const { id, img, title, author, price, saleRate } = data;

  return (
    <Link to={`/details/${id}`}>
      <div className="relative group w-[250px] max-w-xs h-[480px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer flex flex-col items-center">
        <div className="absolute top-2 right-2 hidden group-hover:block duration-300 z-10">
          <LikeButton bookId={id} />
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>  
        <div className="p-4">
          <h3 className="text-gray-800 font-medium text-sm mb-3 line-clamp-2 leading-relaxed">
            {title}
          </h3>
          <h3 className="text-red-600 font-medium text-sm mb-3 line-clamp-2 leading-relaxed">
            {author}
          </h3>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-lg font-bold text-red-700">
              {saleRate} ₼
            </span>
            <span className="text-sm text-gray-400 line-through">
              {price}₼
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book;
