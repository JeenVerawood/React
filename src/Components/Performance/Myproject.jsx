import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import img1 from '../img-main/project /1.png';
import img2 from '../img-main/project /2.png';
import img3 from '../img-main/project /3.png';
import imgTT from '../img-main/project /wahasdasd.png';

export default function Myproject() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => setSelectedImage(imageSrc);
    const closeModal = () => setSelectedImage(null);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen font-title">
                <div className="flex flex-col justify-center items-center text-white max-w-7xl mx-auto p-6 md:p-12 transition-all duration-500">
                    <div className="flex items-center mb-8">
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                        <h1 className="text-3xl md:text-4xl font-bold mx-4">PROJECT</h1>
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                    </div>
                    <h5 className="text-base md:text-lg mb-10 text-center">SUB HEADING GOES HERE</h5>
                    <div className="flex flex-col md:flex-row w-full items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="mb-4 md:mb-0">
                            <img
                                src={imgTT}
                                alt="Motorcycle Rider Detection"
                                className="w-full md:w-72 h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-3/5 px-5">
                            <h1 className="text-2xl md:text-3xl font-bold">MOTORCYCLE - RIDER DETECTION</h1>
                            <hr className="my-4 border-gray-500" />
                            <p className="mt-5 text-base md:text-lg">
                                The Motorcycle Rider Detection model is a development project aimed at detecting the phenomenon of motorcycle riding in tandem. This initiative seeks to leverage artificial intelligence (AI) technologies to enhance detection capabilities and improve safety measures in the future. Through the implementation of advanced algorithms and machine learning techniques, the model will focus on accurately identifying instances of multiple riders on a single motorcycle, thereby contributing to better traffic management and rider safety. This project reflects a commitment to innovation and the integration of AI solutions in real-world applications.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 bg-gray-800 p-6 w-full flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-xl md:text-2xl font-semibold mr-5">Tools</h2>
                        <h1 className="text-base md:text-lg text-center">Roblowflow, Colab, Kaggle</h1>
                    </div>
                    <div className="mt-4 bg-gray-800 p-6 w-full">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Result Images</h2>
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                            <img
                                src={img1}
                                alt="Project Image 1"
                                className="w-full md:w-80 h-auto border-2 border-gray-400 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => openModal(img1)}
                            />
                            <img
                                src={img2}
                                alt="Project Image 2"
                                className="w-full md:w-80 h-auto border-2 border-gray-400 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => openModal(img2)}
                            />
                            <img
                                src={img3}
                                alt="Project Image 3"
                                className="w-full md:w-80 h-auto border-2 border-gray-400 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => openModal(img3)}
                            />
                        </div>
                    </div>
                    {selectedImage && (
                        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center">
                            <div className="relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-3 right-3 text-white text-3xl bg-black/60 px-3 py-1 rounded-full focus:outline-none"
                                    aria-label="Close modal"
                                >
                                    &times;
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Enlarged"
                                    className="max-w-[100%] max-h-100%] m-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <hr  className='w-10 h-10 bg-white'/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}