import React, { useState, useEffect, useRef } from 'react'; // แก้ไข: เพิ่ม useRef
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaSearchPlus, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // แก้ไข: เพิ่ม FaTimes

// Import รูปภาพ (คงไว้ตามเดิมของคุณ)
import Img1 from '../img-main/cetificate/123.png';
import Img2 from '../img-main/cetificate/11231231.png';
import Img3 from '../img-main/cetificate/tala.jpg';
import Img4 from '../img-main/cetificate/bamg.jpg';
import Img5 from '../img-main/cetificate/CamScanner 26-08-2566 21.30_7.jpg';
import Img6 from '../img-main/cetificate/CamScanner 26-08-2566 21.30_9.jpg';
import Img7 from '../img-main/cetificate/ภาพถ่ายหน้าจอ 2567-11-05 เวลา 12.43.07.png';
import Img8 from '../img-main/cetificate/CamScanner 26-08-2566 21.30_8.jpg';
import Img9 from '../img-main/cetificate/kmutt.png';

const contentBlocks = [
    { title: 'TRAINING AT SCB', description: 'ATTENDED TRAINING TO DEVELOP PERSONAL POTENTIAL IN ACHIEVEMENT', imageSrc: Img1 },
    { title: 'RESEARCH ETHICS TRAINING', description: 'TRAINING ON RESEARCH ETHICS FOR CONDUCTING RESEARCH AT NSTDA', imageSrc: Img2 },
    { title: 'CORAL PLANTING', description: 'ATTENDED SMTE CAMP FOR CORAL PLANTING ACTIVITY', imageSrc: Img3 },
    { title: 'SELF-DEVELOPMENT TRAINING', description: 'PARTICIPATED IN PERSONAL DEVELOPMENT AND SKILLS TRAINING AT KMUTT', imageSrc: Img4 },
    { title: '3D PRINTING WORKSHOP', description: 'PARTICIPATED IN A TRAINING ON USING 3D MODELING TO FOSTER CREATIVITY.', imageSrc: Img5 },
    { title: 'VISION AND INNOVATION', description: 'RECEIVED TRAINING IN INNOVATION AND CREATIVE IDEAS AT MAHIDOL UNIVERSITY.', imageSrc: Img6 },
    { title: 'EFFECTIVE ACADEMIC ENGLISH', description: 'COMPLETED A 7.5-HOUR ENGLISH TRAINING CONDUCTED BY NATIVE SPEAKERS.', imageSrc: Img7 },
    { title: 'ENGLISH IS FUN', description: 'COMPLETED ENGLISH TRAINING ORGANIZED BY TAWEETHAPISEK SCHOOL.', imageSrc: Img8 },
    { title: 'SCIENCE LAB WORKSHOP', description: 'CONDUCTED CHEMISTRY AND BIOLOGY LABS AT KMUTT UNIVERSITY.', imageSrc: Img9 },
];

export default function Camp() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const openModal = (imageSrc, index) => {
        setSelectedImage(imageSrc);
        setCurrentIndex(index);
    };
    
    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const goToNextImage = (e) => {
        e.stopPropagation();
        const nextIndex = currentIndex === contentBlocks.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedImage(contentBlocks[nextIndex].imageSrc);
    };

    const goToPrevImage = (e) => {
        e.stopPropagation();
        const prevIndex = currentIndex === 0 ? contentBlocks.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedImage(contentBlocks[prevIndex].imageSrc);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };

        if (selectedImage) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen font-title text-white">
                <div 
                    ref={sectionRef}
                    className={`max-w-7xl m-auto px-6 py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Header Section */}
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex justify-center gap-x-3 items-center">
                            <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                            <h1 className="text-3xl md:text-4xl font-bold  uppercase text-center">Camps & Workshops</h1>
                            <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                        </div>
                        <p className="mt-4 text-gray-400 text-xs md:text-sm uppercase text-center">
                            Development, Training and Social Activities
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contentBlocks.map((block, index) => (
                            <div 
                                key={index} 
                                className="group bg-gray-800/40 border border-gray-700 p-4 hover:border-sky-500 transition-all duration-500 flex flex-col"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-black mb-4 group">
                                    <img 
                                        src={block.imageSrc} 
                                        alt={block.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                    />
                                    <div 
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                        onClick={() => openModal(block.imageSrc, index)}
                                    >
                                        <div className="bg-sky-500 p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                                            <FaSearchPlus size={24} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-center text-center">
                                    <h2 className="text-lg font-bold  uppercase text-white group-hover:text-sky-400 transition-colors duration-300">
                                        {block.title}
                                    </h2>
                                    <div className="w-10 h-[2px] bg-gray-700 mx-auto my-3 group-hover:w-20 group-hover:bg-sky-500 transition-all duration-500"></div>
                                    <p className="text-sm text-gray-400 leading-relaxed italic">
                                        {block.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex justify-center items-center p-4 md:p-10"
                    onClick={closeModal}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={closeModal}
                    >
                        <FaTimes size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl flex flex-col items-center">
                        <button 
                            onClick={goToPrevImage} 
                            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 text-white/30 hover:text-sky-400 transition-colors p-4"
                        >
                            <FaArrowLeft size={40} />
                        </button>

                        <img 
                            src={selectedImage} 
                            alt="Enlarged" 
                            className="max-h-[70vh] object-contain shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()} 
                        />

                        <div className="mt-8 text-center max-w-2xl" onClick={(e) => e.stopPropagation()}>
                            <h3 className="text-sky-400 font-bold text-xl uppercase mb-2">
                                {contentBlocks[currentIndex].title}
                            </h3>
                            <p className="text-gray-300 text-base italic leading-relaxed">
                                {contentBlocks[currentIndex].description}
                            </p>
                            <div className="mt-4 text-gray-600 text-xs font-mono">
                                {currentIndex + 1} / {contentBlocks.length}
                            </div> 
                        </div>

                        <button 
                            onClick={goToNextImage} 
                            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 text-white/30 hover:text-sky-400 transition-colors p-4"
                        >
                            <FaArrowRight size={40} />
                        </button>
                    </div>
                </div>
            )}
            
            <Footer />
        </>
    );
}