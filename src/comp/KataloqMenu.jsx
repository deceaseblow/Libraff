import React, { useEffect, useState, useRef } from 'react';
import { getCategories } from '../service/BookService';
import { IoClose } from "react-icons/io5"; // Close icon

function KataloqMenu({ onClose }) {
    const [categories, setCategories] = useState([]);
    const [hoveredMain, setHoveredMain] = useState(null);
    const [hoveredSub, setHoveredSub] = useState(null);

    const innerRef = useRef(null);
    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res);
                setHoveredMain(0);
            })
            .catch((err) => console.error("Failed to fetch categories", err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (innerRef.current && !innerRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100] bg-gray-600/60 flex items-center justify-center">
            <div
                ref={innerRef}
                className="relative w-full max-w-6xl h-[600px] bg-white text-gray-600 flex rounded-2xl shadow-lg  font-semibold"
            >
                <button
                    className="absolute top-4 right-4 z-50 text-gray-600 hover:text-red-400 text-2xl"
                    onClick={onClose}
                >
                    <IoClose className='text-red-600 cursor-pointer' />
                </button>
                <div className="w-64 p-4 border-r border-gray-300 overflow-y-auto">
                    {categories.map((main, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => { setHoveredMain(i); setHoveredSub(null); }}
                            className="py-2 px-3"
                        >
                            <h2 className='text-gray-500 hover:text-red-600 cursor-pointer'>{main.ad}</h2>
                        </div>
                    ))}
                </div>

                {hoveredMain !== null && Array.isArray(categories[hoveredMain]['alt-kateqoriyalar']) && (
                    <div className="w-64 p-4 border-r border-gray-300 overflow-y-auto">
                        {categories[hoveredMain]['alt-kateqoriyalar'].map((sub, j) => {
                            const name = typeof sub === 'string' ? sub : sub.ad;
                            return (
                                <div
                                    key={j}
                                    onMouseEnter={() => typeof sub !== 'string' && setHoveredSub(j)}
                                    className="py-2 px-3  "
                                >
                                    <h2 className='text-gray-500 hover:text-red-600 cursor-pointer'>{name}</h2>
                                </div>
                            );
                        })}
                    </div>
                )}
                {hoveredMain !== null &&
                    hoveredSub !== null &&
                    typeof categories[hoveredMain]['alt-kateqoriyalar'][hoveredSub] === 'object' &&
                    Array.isArray(categories[hoveredMain]['alt-kateqoriyalar'][hoveredSub]['alt-alt-kateqoriyalar']) && (
                        <div className="w-64 p-4 overflow-y-auto">
                            {categories[hoveredMain]['alt-kateqoriyalar'][hoveredSub]['alt-alt-kateqoriyalar'].map((item, k) => {
                                const subsub = typeof item === 'string' ? item : item.ad;
                                return (
                                    <div key={k} className="text-gray-500 py-2 px-3 hover:text-red-600 cursor-pointer">
                                        {subsub}
                                    </div>
                                );
                            })}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default KataloqMenu;
