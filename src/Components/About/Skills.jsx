import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';

export default function Skills() {
    return (
        <>
            <Navbar />
            <div className='bg-gradient-to-r  font-title from-black to-blue-950'>
                <div 
                    className="flex flex-col justify-center items-center h-full text-white max-w-7xl m-auto p-12 h-screen transition-all duration-500"
                >
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>SKILLS</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                    </div>

                    {/* Third Row */}
                    <div className="grid grid-row-3 gap-4  mt-4">
                        {/* Program */}
                        <div className="border-2 border-gray-400 p-4">
                            <div className='flex items-center '>
                                <div className="w-2 h-2 bg-white mb-2 mr-2 rotate-45"></div>
                                <h2 className="font-bold mb-2">Programming & Development Tools</h2>
                            </div>
                            <p>Docker, GitLab, Github, Python, Arduino IDE, Open CV, Yolo</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                        <div className='flex items-center '>
                            <div className="w-2 h-2 bg-white mb-2 mr-2 rotate-45"></div>
                                <h2 className="font-bold mb-2"> Website Development Skills</h2>
                            </div>
                            <p>React.js, Javascript, HTML, CSS , Tailwin.css</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                        <div className='flex items-center '>
                                <div className="w-2 h-2 bg-white mb-2 mr-2 rotate-45"></div>
                                <h2 className="font-bold mb-2">Other Skills</h2>
                            </div>
                            <p>Adobe AfterEffect, Adobe Photoshop, Adobe illustrator, Adobe Premiere pro  </p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />

        </>
    );
}
