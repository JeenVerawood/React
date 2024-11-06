import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

export default function Education() {
    return (
        <>
            <Navbar />
            <div className='bg-gradient-to-r  font-title from-black to-blue-950'>
                <div 
                    className="flex flex-col justify-center items-center h-full text-white max-w-7xl m-auto p-12 h-screen transition-all duration-500"
                >
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>EDUCATION</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                    </div>
                   
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-4 w-full md:w-3/5 mt-4 justify-center">
    {/* Program */}
                        {/* Program */}
                        
                        <div className="border-2 border-gray-400 px-5 flex justify-between items-center p-4">
                            <div>
                                <h2 className="font-bold mb-2">Grad 1 - 6 </h2>
                                <p>Kularbwittaya School</p>
                            </div>
                            <div className='flex gap-x-10 mr-5'>
                                <a href="https://maps.app.goo.gl/wbqgXRpkL6wVzZCF8 " target="_blank" >
                                    <FaLocationDot />
                                </a>
                                <a href="https://klw.ac.th/main/" target="_blank" >
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="border-2 border-gray-400 px-5 flex  justify-between items-center p-4">
                            <div>
                                <h2 className="font-bold mb-2">Grad 6 - 12</h2>
                                <p>Taweethapisek school</p>
                            </div>
                            <div className='flex gap-x-10 mr-5'>
                                <a href="https://maps.app.goo.gl/EXTVhirS8a716QYy7" target="_blank" >
                                    <FaLocationDot />
                                </a>
                                <a href="https://taweethapisek.ac.th/2022/" target="_blank" >
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />

        </>
    );
}
