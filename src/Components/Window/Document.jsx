import React from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';

export default function Document() {
    return (
        <>
            <Navbar />
            <div className='bg-gradient-to-r from-gray-900 to-blue-950 min-h-screen font-title text-white'>
                <div className="flex flex-col items-center max-w-7xl mx-auto p-12 transition-all duration-500 transform">
                    {/* Page Header */}
                    <div className='flex items-center gap-x-3 mb-8'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-4xl font-bold text-center'>DOCUMENTS</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <h5 className='text-lg font-light mb-12'>Explore various documents and certifications</h5>

                    {/* Document Cards Container */}
                    <div className='flex  gap-4 justify-center'>
                        {/* Document Card - Study Documents */}
                        <div className='flex w-full md:w-1/2 items-center bg-black p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                            <div className='w-[210px] h-[297px] md:w-[300px] md:h-[420px] bg-white rounded-lg overflow-hidden mr-8'>
                                <img src="" alt="Document Preview" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-2xl mb-2'>Study Documents</h1>
                                <hr className='border-gray-600 mb-2' />
                                <p className='text-gray-300 text-sm mb-1'>Detail 1 about the study documents</p>
                                <p className='text-gray-300 text-sm mb-1'>Detail 2 about the study documents</p>
                                <p className='text-gray-300 text-sm'>Detail 3 about the study documents</p>
                            </div>
                        </div>

                        {/* Document Card - Certifications */}
                        <div className='flex w-full md:w-1/2 items-center bg-black p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                            <div className='w-[210px] h-[297px] md:w-[300px] md:h-[420px] bg-white rounded-lg overflow-hidden mr-8'>
                                <img src="" alt="Certification Preview" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='text-2xl mb-2'>Certifications</h1>
                                <hr className='border-gray-600 mb-2' />
                                <p className='text-gray-300 text-sm mb-1'>Detail 1 about the certification</p>
                                <p className='text-gray-300 text-sm mb-1'>Detail 2 about the certification</p>
                                <p className='text-gray-300 text-sm'>Detail 3 about the certification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
