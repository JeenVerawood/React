import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaSearchPlus, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import Img1 from '../img-main/cetificate/DDD.png'; 
import Img2 from '../img-main/cetificate/CamScanner 26-08-2566 21.30_2.jpg';
import Img3 from '../img-main/cetificate/CamScanner 26-08-2566 21.30_4.jpg';
import Img4 from '../img-main/cetificate/robot.png';
import Img5 from '../img-main/cetificate/hh_.png';
import Img6 from '../img-main/cetificate/ภาพถ่ายหน้าจอ 2567-11-04 เวลา 13.54.13.png';
import Img7 from '../img-main/cetificate/ภาพถ่ายหน้าจอ 2567-11-04 เวลา 13.59.10.png';
import Img8 from '../img-main/cetificate/เกียรติบัตรเข้าร่วมโครงการ JWC13 - วีรวุฒิ เลี้ยงวงษ์.png';
import Img9 from '../img-main/cetificate/ภาพถ่ายหน้าจอ 2567-11-04 เวลา 13.47.06.png';
import Img10 from '../img-main/cetificate/ภาพถ่ายหน้าจอ 2567-11-04 เวลา 13.51.42.png';
import Img13 from '../img-main/cetificate/dee.jpg';
import Img14 from '../img-main/cetificate/Arduino.jpg';
import Img15 from '../img-main/cetificate/kmtl.png';
import Img16 from '../img-main/cetificate/image.png';
import Img17 from '../img-main/cetificate/SPU.png';
import Img18 from '../img-main/cetificate/ARDDD.png';
import Img19 from '../img-main/cetificate/warchor.png';
import Img20 from '../img-main/cetificate/TG.png';


const contentBlocks = [
    { 
        title: 'NSTDA7 (NECTEC)', 
        description: 'RESEARCH TRAINING WITH RESEARCHERS FOR 2 MONTHS AT NECTEC ON THE TOPIC OF "CHAT BOT FOR EDUCATION"', 
        imageSrc: Img1 
    },
    { 
        title: 'NSTDA (NECTEC)', 
        description: 'RECEIVED AN EXCELLENT RATING IN RESEARCH EVALUATION', 
        imageSrc: Img13 
    },
    { 
        title: 'GOLD MEDAL IN THE REGIONAL ', 
        description: 'AWARDED A GOLD MEDAL IN THE REGIONAL PROJECT COMPETITION IN THE FIELD OF COMPUTER SCIENCE', 
        imageSrc: Img6 
    },
    { 
        title: 'ARTS AND CRAFTS COMPETITION ', 
        description: 'PARTICIPATED IN THE DISTRICT-LEVEL ROBOTICS COMPETITION AND WON THE FIRST RUNNER-UP AWARD', 
        imageSrc: Img2 
    },
    { 
        title: 'INEX One Minute Robotic Games', 
        description: 'COMPETED IN AN AUTONOMOUS ROBOTICS COMPETITION TO ACHIEVE GOALS USING LEGO EV3', 
        imageSrc: Img3 
    },
    { 
        title: 'BSU ROBOT GAMES', 
        description: 'PARTICIPATED IN A HAND-CONTROLLED ROBOT COMPETITION FOR THE ROYAL TROPHY', 
        imageSrc: Img4 
    }, 
    { 
        title: 'JUNIOR WEB MASTER CAMP ', 
        description: 'ATTENDED A CAMP FOR WEBSITE DEVELOPMENT IN THE DESIGN FIELD', 
        imageSrc: Img8 
    },
    
    { 
        title: 'I-DIA XI', 
        description: 'SELF-DISCOVERY CAMP ORGANIZED BY (KMUTT) FOCUSED ON COMPUTER SCIENCE', 
        imageSrc: Img9
    },
    { 
        title: 'TP X UP SKILLS CENTER ', 
        description: 'ATTENDED A CAMP ORGANIZED BY THE SCHOOL TO DEVELOP VARIOUS SKILLS', 
        imageSrc: Img10 
    },
    { 
        title: 'SPI AI PROMPT HACKATHON', 
        description: 'PARTICIPATED IN A HACKATHON COMPETITION USING PROMPTS FOR AI CREATION', 
        imageSrc: Img17
    },
    { 
        title: 'TRAINING ON BASIC FRONTEND WEBSITE DEVELOPMENT', 
        description: 'TRAINING ON CSS, HTML, AND JAVASCRIPT AT THE NATIONAL RESEARCH CENTER', 
        imageSrc: Img19
    },
    { 
        title: 'AI BASIC ', 
        description: 'BASIC AI TRAINING FOR MODEL DEVELOPMENT ORGANIZED BY KING MONGKUT S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL)', 
        imageSrc: Img20 
    },
    { 
        title: 'PHOTOSHOP SKILL', 
        description: 'AWARDED 3RD PLACE IN A T-SHIRT DESIGN COMPETITION', 
        imageSrc: Img5 
    },
    { 
        title: 'AFTER EFFECT SKILL', 
        description: 'FIRST PLACE WINNER IN A MOTION GRAPHIC DESIGN COMPETITION', 
        imageSrc: Img7
    },
    { 
        title: 'TRAINING ON ARDUINO BOARD ', 
        description: 'TRAINING ON ARDUINO BOARD USAGE ORGANIZED BY THE SCHOOL', 
        imageSrc: Img18
    },
    { 
        title: 'ROBOTICS TRAINING', 
        description: 'TRAINING ON CIRCUIT ASSEMBLY AND HAND-CONTROLLED ROBOT OPERATION', 
        imageSrc: Img14 
    },
    { 
        title: 'WEBSITE SKILL', 
        description: 'WEBSITE DEVELOPMENT TRAINING ORGANIZED BY KING MONGKUT S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL)', 
        imageSrc: Img15 
    },
    { 
        title: 'PYTHON SKILL', 
        description: 'BEGINNER PYTHON LANGUAGE TRAINING ORGANIZED BY KING MONGKUT S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL)', 
        imageSrc: Img16 
    }
];

export default function Technology() {
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

    // แยก Animation หน้าเว็บให้รันครั้งเดียว
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // จัดการเรื่อง Scroll lock และปุ่ม Escape
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
                            <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-center">Computer Achievements</h1>
                            <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                        </div>
                        <p className="mt-4 text-gray-400 text-xs md:text-sm uppercase text-center">
                            A collection of my academic and technical accomplishments
                        </p>
                    </div>

                    {/* Achievements Grid */}
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
                                        <div className="bg-sky-500 p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <FaSearchPlus size={24} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-center text-center">
                                    <h2 className="text-lg font-bold tracking-wide uppercase text-white group-hover:text-sky-400 transition-colors duration-300">
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

            {/* Lightbox / Modal */}
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
                            <h3 className="text-sky-400 font-bold text-xl uppercase tracking-wider mb-2">
                                {contentBlocks[currentIndex].title}
                            </h3>
                            <p className="text-gray-300 text-base italic leading-relaxed">
                                {contentBlocks[currentIndex].description}
                            </p>
                            {/* แก้ไข Tag ปิดตรงนี้ */}
                            <div className="mt-4 text-gray-600 text-xs">
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