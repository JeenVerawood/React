import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';

export default function Personal() {
    return (
        <>
            <Navbar />
            <div className='bg-gradient-to-r  font-title from-black to-blue-950'>
                <div 
                className="flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 h-auto md:h-screen transition-all duration-500"
                >
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>PERSONAL</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>  
                    </div>
                    {/* Responsive Grid for Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {/* Name */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Name</h2>
                            <p>Mr. Verawood Langvong</p>
                        </div>
                        {/* Nickname */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Nickname</h2>
                            <p>Jeen</p>
                        </div>
                        {/* Age */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Age</h2>
                            <p>17 Years</p>
                        </div>
                        {/* Birthday */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Birthday</h2>
                            <p>20 / 02 / 2007</p>
                        </div>
                        {/* Nationality */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Nationality</h2>
                            <p>Thai</p>
                        </div>
                        {/* Ethnicity */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Ethnicity</h2>
                            <p>Thai</p>
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                        {/* Program */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Program</h2>
                            <p>Science, Mathematics, Technology, and Environment</p>
                        </div>
                        {/* Address */}
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Address</h2>
                            <p>1243 Thadindang 16, Klongsan, Bangkok 10600</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />

        </>
    );
}
