import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaSearchPlus } from 'react-icons/fa'; // Import icon from react-icons
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
    { title: 'TRAINING ON RESEARCH ETHICS', description: 'TRAINING ON RESEARCH ETHICS FOR CONDUCTING RESEARCH AT NSTDA', imageSrc: Img2 },
    { title: 'CORAL PLANTING', description: 'ATTENDED SMTE CAMP FOR CORAL PLANTING', imageSrc: Img3 },
    { title: 'UNDERWENT SELF-DEVELOPMENT TRAINING', description: 'UNDERWENT PERSONAL DEVELOPMENT AND SKILLS TRAINING AT KMUTT', imageSrc: Img4 },
    { title: 'TRAINING 3D PRINT', description: 'I PARTICIPATED IN A TRAINING ON USING 3D MODELING TO FOSTER CREATIVITY.', imageSrc: Img5 },
    { title: 'OPENING THE WORLD OF VISION AND INNOVATION ', description: 'I RECEIVED TRAINING IN INNOVATION AND IDEAS AT MU UNIVERSITY.', imageSrc: Img6 },
    { title: 'EFFECTIVE ENFLISH ACDEMIC', description: 'I COMPLETED A 7.5-HOUR ENGLISH TRAINING CONDUCTED BY NATIVE SPEAKERS.', imageSrc: Img7 },
    { title: 'ENGLISH IS FUN', description: '   I COMPLETED ENGLISH TRAINING ORGANIZED BY TAWEETHAPISEK SCHOOL.', imageSrc: Img8 },
    { title: 'CHEMISTRY AND BIOLOGY LABS', description: 'I DID CHEMISTRY AND BIOLOGY LABS AT KMUTT UNIVERSITY.', imageSrc: Img9 },
];

export default function Camp() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => setSelectedImage(imageSrc);
    const closeModal = () => setSelectedImage(null);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    // Add event listener for ESC key
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
                        <h1 className="text-3xl font-bold transition-opacity text-center duration-500">OTHER</h1>
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
                                        className="absolute bottom-3 right-3 text-white text-xl bg-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 border-2 border-white   duration-300 cursor-pointer"
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
