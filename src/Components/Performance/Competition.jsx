import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaSearchPlus } from 'react-icons/fa';

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
            <div className="bg-gradient-to-r md:h-auto font-title from-black to-blue-950">
                <div className="flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 h-full transition-all duration-500">
                    <div className="flex justify-center gap-x-3 items-center">
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                        <h1 className="text-3xl font-bold transition-opacity text-center duration-500">COMPUTER ACHIEVEMENTS</h1>
                        <div className="w-2 h-2 bg-white rotate-45"></div>
                    </div>
                    <div className="text-center mb-10">
                        <h5 className="mt-3">SUB HEADING GOES HERE</h5>
                    </div>
                    <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {contentBlocks.map((block, index) => (
                            <div key={index} className="relative border-2 border-gray-400 p-4 h-auto hover:scale-105 duration-500">
                                <div className="w-full h-60 bg-white overflow-hidden relative bg-black group hover:opacity-80 duration-500">
                                    <img src={block.imageSrc} alt={block.title} className="w-full h-full object-cover" />
                                    <div 
                                        className="absolute bottom-3 right-3 text-white text-xl bg-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 border-2 border-white duration-300 cursor-pointer"
                                        onClick={() => openModal(block.imageSrc)}
                                    >
                                        <FaSearchPlus />
                                    </div>
                                </div>
                                <div className="flex items-center mt-2 justify-evenly">
                                    <div className="w-2 h-2 bg-white rotate-45"></div>
                                    <h1 className="text-xl font-bold text-center">{block.title}</h1>
                                    <div className="w-2 h-2 bg-white rotate-45"></div>
                                </div>
                                <p className="text-center mt-2">{block.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center">
                    <div className="relative">
                        <button 
                            onClick={closeModal} 
                            className="absolute top-3 right-20 mr-20 text-white text-2xl bg-black/60 px-2 items-center rounded-full focus:outline-none"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img src={selectedImage} alt="Enlarged" className="max-w-[70%] max-h-[70%] m-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}