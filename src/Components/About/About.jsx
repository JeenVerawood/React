import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { CgWebsite } from "react-icons/cg";

export default function About() {
    return (
        <>
            <Navbar />
            <div className='bg-gradient-to-r font-title from-black to-blue-950'>
                <div className="flex flex-col justify-center items-center h-full text-white max-w-7xl m-auto p-12 h-screen transition-all duration-500">
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>PERSONAL</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Name</h2>
                            <p>Mr. Verawood Langvong</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Nickname</h2>
                            <p>Jeen</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Age</h2>
                            <p>17 Years</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Birthday</h2>
                            <p>20 / 02 / 2007</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Nationality</h2>
                            <p>Thai</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Ethnicity</h2>
                            <p>Thai</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Program</h2>
                            <p>Science, Mathematics, Technology, and Environment</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Address</h2>
                            <p>1243 Thadindang 16, Klongsan, Bangkok 10600</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r font-title from-black to-blue-950'>
                <div className="flex flex-col justify-center items-center h-full text-white max-w-7xl m-auto p-12 h-screen transition-all duration-500">
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>EDUCATION</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                        <div className="border-2 border-gray-400 px-5 flex justify-between items-center p-4">
                            <div>
                                <h2 className="font-bold mb-2">Kindergarten 1 - 3 </h2>
                                <p>Kularbwittaya School</p>
                            </div>
                            <div className='flex gap-x-5'>
                                <a href="https://maps.app.goo.gl/wbqgXRpkL6wVzZCF8 " target="_blank">
                                    <FaLocationDot />
                                </a>
                                <a href="https://klw.ac.th/main/" target="_blank">
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                        <div className="border-2 border-gray-400 px-5 flex justify-between items-center p-4">
                            <div>
                                <h2 className="font-bold mb-2">Grad 1 - 6 </h2>
                                <p>Kularbwittaya School</p>
                            </div>
                            <div className='flex gap-x-5'>
                                <a href="https://maps.app.goo.gl/wbqgXRpkL6wVzZCF8 " target="_blank">
                                    <FaLocationDot />
                                </a>
                                <a href="https://klw.ac.th/main/" target="_blank">
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                        <div className="border-2 border-gray-400 px-5 flex justify-between items-center p-4">
                            <div>
                                <h2 className="font-bold mb-2">Grad 6 - 12</h2>
                                <p>Taweethapisek School</p>
                            </div>
                            <div className='flex gap-x-5'>
                                <a href="https://maps.app.goo.gl/EXTVhirS8a716QYy7" target="_blank">
                                    <FaLocationDot />
                                </a>
                                <a href="https://taweethapisek.ac.th/2022/" target="_blank">
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r font-title from-black to-blue-950'>
                <div className="flex flex-col justify-center items-center h-full text-white max-w-7xl m-auto p-12 h-screen transition-all duration-500">
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                        <h1 className='text-3xl font-bold transition-opacity duration-500'>SKILLS</h1>
                        <div className='w-2 h-2 bg-white rotate-45'></div>
                    </div>
                    <div className='text-center mb-10'>
                        <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Programming & Development Tools</h2>
                            <p>Docker, GitLab, Github, Python, Arduino IDE, Open CV, Yolo</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Website Development Skills</h2>
                            <p>React.js, Javascript, HTML, CSS , Tailwind.css</p>
                        </div>
                        <div className="border-2 border-gray-400 p-4">
                            <h2 className="font-bold mb-2">Other Skills</h2>
                            <p>Adobe AfterEffect, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
