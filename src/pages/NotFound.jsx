import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="min-h-screen bg-[#000] flex items-center justify-center px-6">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8 relative">
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 sm:text-[12rem] animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 text-9xl font-black text-red-500/20 blur-sm sm:text-[12rem]">
                        404
                    </div>
                </div>

                <div className="mb-8 space-y-4">
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        The page you're looking for seems to have vanished into the digital void. 
                        Don't worry, it happens to the best of us.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link 
                        to='/' 
                        className="group relative px-8 py-4 bg-red-600 text-white font-semibold rounded-lg
                                 transform transition-all duration-300 hover:bg-red-700 hover:scale-105 
                                 hover:shadow-2xl hover:shadow-red-500/50 focus:outline-none focus:ring-4 
                                 focus:ring-red-500/50 active:scale-95"
                    >
                        <span className="relative z-10">Take Me Home</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                                 transition-all duration-300 hover:bg-white hover:text-black 
                                 focus:outline-none focus:ring-4 focus:ring-white/50"
                    >
                        Go Back
                    </button>
                </div>

                <div className="text-center">
                    <Link 
                        to = '/support'
                            className="inline-flex items-center text-gray-400 hover:text-red-400 
                                 transition-colors duration-300 font-medium group"
                    >
                        Need help? Contact support
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </span>
                    </Link>
                </div>

            </div>

          
        </div>
    )
}

export default NotFound