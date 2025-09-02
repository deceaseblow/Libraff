import React, { useEffect, useState, useRef } from 'react';
import { getCategories } from '../service/BookService';
import { IoClose, IoChevronForward, IoChevronBack } from "react-icons/io5";

function KataloqMenu({ onClose }) {
    const [categories, setCategories] = useState([]);
    const [hoveredMain, setHoveredMain] = useState(null);
    const [hoveredSub, setHoveredSub] = useState(null);
    const [mobileView, setMobileView] = useState('main'); // 'main', 'sub', 'subsub'
    const [mobileMainIndex, setMobileMainIndex] = useState(null);
    const [mobileSubIndex, setMobileSubIndex] = useState(null);

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

    const handleMobileMainClick = (index) => {
        setMobileMainIndex(index);
        setMobileView('sub');
        setMobileSubIndex(null);
    };

    const handleMobileSubClick = (index) => {
        const subItem = categories[mobileMainIndex]['alt-kateqoriyalar'][index];
        if (typeof subItem === 'object' && Array.isArray(subItem['alt-alt-kateqoriyalar'])) {
            setMobileSubIndex(index);
            setMobileView('subsub');
        }
    };

    const goBackToMain = () => {
        setMobileView('main');
        setMobileMainIndex(null);
    };

    const goBackToSub = () => {
        setMobileView('sub');
        setMobileSubIndex(null);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-gray-600/60 flex items-center justify-center p-4">
            <div
                ref={innerRef}
                className="relative w-full max-w-6xl h-[90vh] max-h-[600px] bg-white text-gray-600 flex flex-col md:flex-row rounded-2xl shadow-lg font-semibold overflow-hidden"
            >
                <button
                    className="absolute top-4 right-4 z-50 text-gray-600 hover:text-red-400 text-2xl"
                    onClick={onClose}
                >
                    <IoClose className='text-red-600 cursor-pointer' />
                </button>

                {/* Desktop View */}
                <div className="hidden md:flex w-full">
                    {/* Main Categories */}
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

                    {/* Sub Categories */}
                    {hoveredMain !== null && Array.isArray(categories[hoveredMain]['alt-kateqoriyalar']) && (
                        <div className="w-64 p-4 border-r border-gray-300 overflow-y-auto">
                            {categories[hoveredMain]['alt-kateqoriyalar'].map((sub, j) => {
                                const name = typeof sub === 'string' ? sub : sub.ad;
                                return (
                                    <div
                                        key={j}
                                        onMouseEnter={() => typeof sub !== 'string' && setHoveredSub(j)}
                                        className="py-2 px-3"
                                    >
                                        <h2 className='text-gray-500 hover:text-red-600 cursor-pointer'>{name}</h2>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Sub-Sub Categories */}
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

                {/* Mobile View */}
                <div className="md:hidden flex flex-col w-full h-full">
                    {/* Mobile Main Categories */}
                    {mobileView === 'main' && (
                        <div className="flex flex-col h-full">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-lg font-bold text-gray-700">Kateqoriyalar</h2>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2">
                                {categories.map((main, i) => (
                                    <div
                                        key={i}
                                        onClick={() => handleMobileMainClick(i)}
                                        className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100"
                                    >
                                        <h2 className='text-gray-600 font-medium'>{main.ad}</h2>
                                        {Array.isArray(main['alt-kateqoriyalar']) && main['alt-kateqoriyalar'].length > 0 && (
                                            <IoChevronForward className="text-gray-400" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mobile Sub Categories */}
                    {mobileView === 'sub' && mobileMainIndex !== null && (
                        <div className="flex flex-col h-full">
                            <div className="p-4 border-b border-gray-200 flex items-center">
                                <button onClick={goBackToMain} className="mr-3 p-1">
                                    <IoChevronBack className="text-gray-600" />
                                </button>
                                <h2 className="text-lg font-bold text-gray-700">{categories[mobileMainIndex].ad}</h2>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2">
                                {categories[mobileMainIndex]['alt-kateqoriyalar'].map((sub, j) => {
                                    const name = typeof sub === 'string' ? sub : sub.ad;
                                    const hasSubsub = typeof sub === 'object' && Array.isArray(sub['alt-alt-kateqoriyalar']) && sub['alt-alt-kateqoriyalar'].length > 0;
                                    return (
                                        <div
                                            key={j}
                                            onClick={() => hasSubsub ? handleMobileSubClick(j) : null}
                                            className={`flex items-center justify-between py-3 px-4 border-b border-gray-100 ${hasSubsub ? 'hover:bg-gray-50 active:bg-gray-100 cursor-pointer' : ''}`}
                                        >
                                            <h2 className='text-gray-600 font-medium'>{name}</h2>
                                            {hasSubsub && <IoChevronForward className="text-gray-400" />}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Mobile Sub-Sub Categories */}
                    {mobileView === 'subsub' && mobileMainIndex !== null && mobileSubIndex !== null && (
                        <div className="flex flex-col h-full">
                            <div className="p-4 border-b border-gray-200 flex items-center">
                                <button onClick={goBackToSub} className="mr-3 p-1">
                                    <IoChevronBack className="text-gray-600" />
                                </button>
                                <h2 className="text-lg font-bold text-gray-700">
                                    {categories[mobileMainIndex]['alt-kateqoriyalar'][mobileSubIndex].ad}
                                </h2>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2">
                                {categories[mobileMainIndex]['alt-kateqoriyalar'][mobileSubIndex]['alt-alt-kateqoriyalar'].map((item, k) => {
                                    const subsub = typeof item === 'string' ? item : item.ad;
                                    return (
                                        <div key={k} className="py-3 px-4 border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100 cursor-pointer">
                                            <h2 className='text-gray-600 font-medium'>{subsub}</h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default KataloqMenu;