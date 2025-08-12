import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch?.(search);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <div className="relative">
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button type="submit">
            <FaSearch className="text-gray-500" />
          </button>
        </span>
        <input 
          type="search"
          name="Search"
          placeholder="Növbəti kitabı axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-w-xs py-2 pr-10 pl-3 text-sm rounded-full focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 border border-gray-300"
        />
      </div>
    </form>
  )
}

export default SearchBar;
