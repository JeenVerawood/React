import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaTools, FaImages, FaSearchPlus, FaTimes } from 'react-icons/fa';
import { MdOutlineSecurity } from "react-icons/md";

// ... (Import Img เดิมของคุณ) ...
import img1 from '../img-main/project /1.png';
import img2 from '../img-main/project /2.png';
import img3 from '../img-main/project /3.png';
import imgTT from '../img-main/project /wahasdasd.png';
import imgSMTE from '../img-main/cetificate/701ab753-8598-4b9e-b049-5d404f345737.jpeg';

export default function Myproject() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const openModal = (imageSrc) => setSelectedImage(imageSrc);
    const closeModal = () => setSelectedImage(null);

    useEffect(() => {
        setIsVisible(true);
        const handleKeyDown = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
    }, [selectedImage]);

    const tools = ["Roboflow", "Colab", "Kaggle", "Python", "YOLOv8"]; // ปรับชื่อให้ถูกต้อง

    return (
        <div className="bg-gray-900 min-h-screen font-title text-white">
            <Navbar />
            
            <main 
                ref={sectionRef}
                className={`max-w-6xl m-auto px-6 py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex justify-center gap-x-3 items-center">
                        <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-center">My Projects</h1>
                        <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                    </div>
                    <p className="mt-4 text-gray-400 text-xs md:text-sm uppercase text-center">
                        Integrating AI Solutions for Real-World Problems
                    </p>
                </div>

                {/* Project Hero Image */}
                <div className="w-fullrounded-sm overflow-hidden border border-gray-800 mb-12 shadow-2xl">
                    <img src={imgSMTE} alt="Project Banner" className="w-full h-full object-cover opacity-80" />
                </div>

                {/* Project Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left: Project Image & Tools */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-gray-800/40 border border-gray-700 p-4 rounded-sm shadow-xl">
                            <img
                                src={imgTT}
                                alt="Motorcycle Rider Detection"
                                className="w-full h-auto object-cover rounded-sm  transition-all duration-700"
                            />
                        </div>
                        
                        <div className="bg-gray-800/20 border border-gray-800 p-6 rounded-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 uppercase tracking-wide">
                                <FaTools className="text-sky-500" /> Technology Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, i) => (
                                    <span key={i} className="px-4 py-1.5 bg-gray-900 border border-gray-700 text-sky-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Project Description */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-sky-500"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                                Motorcycle <span className="text-sky-500">-</span> Rider Detection
                            </h2>
                            <p className="mt-6 text-gray-300 text-lg leading-relaxed font-light">
                                This AI-powered project focuses on detecting motorcycle riding patterns, specifically identifying multiple riders on a single motorcycle. 
                                By leveraging <strong>Advanced Machine Learning</strong> algorithms, the model enhances road safety measures and traffic management capabilities.
                            </p>
                            <p className="mt-4 text-gray-400 leading-relaxed italic">
                                "Our goal is to integrate innovative computer vision solutions into real-world traffic applications to reduce accidents and improve enforcement."
                            </p>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm">
                            <MdOutlineSecurity size={24} />
                            <span>Focus Areas: Public Safety, Traffic Management, AI Integration</span>
                        </div>
                    </div>
                </div>

                {/* Result Images Section */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <FaImages className="text-sky-500" /> Result Analysis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[img1, img2, img3].map((img, idx) => (
                            <div 
                                key={idx} 
                                className="relative aspect-video overflow-hidden border border-gray-700 group cursor-pointer"
                                onClick={() => openModal(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Result ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-sky-500 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <FaSearchPlus size={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Enhanced Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex justify-center items-center p-4 md:p-10"
                    onClick={closeModal}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <FaTimes size={32} />
                    </button>
                    <div className="max-w-5xl w-full">
                        <img
                            src={selectedImage}
                            alt="Enlarged Result"
                            className="max-h-[85vh] m-auto rounded-sm border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
            
            <Footer />
        </div>
    );
}