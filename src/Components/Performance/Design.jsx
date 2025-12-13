import React, { useState, useEffect, useRef } from 'react'; 
import Navbar from '../Navbar'; // เพิ่มการ Import Navbar
import Footer from '../Window/Footer'; // เพิ่มการ Import Footer
import img1 from '../img-main/design-igm/4E456147-47DB-4658-9444-8ECBC7502960_1_105_c.jpeg';
import img2 from '../img-main/design-igm/64F0C15E-8CFD-4090-B092-F8115C81853F_1_105_c.jpeg';
import img3 from '../img-main/design-igm/A21851D2-183A-42B2-8EC4-D1D954D350E7_1_105_c.jpeg';
import img4 from '../img-main/design-igm/A51D098F-817E-4CEE-9866-177988158207_1_105_c.jpeg';
import img5 from '../img-main/design-igm/1.png';
import img6 from '../img-main/design-igm/2.png';
import img7 from '../img-main/design-igm/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const cardData = [
  {
    title: "TAWEETHAPISEK FESTIVAL 1 ST ",
    description: "I DESIGNED A FESTIVAL T-SHIRT FOR THE SCHOOL, WON FIRST PLACE, AND RECEIVED A 5,000 BAHT PRIZE.",
    image: img2
  },
  {
    title: "TAWEETHAPISEK FESTIVAL 3 ST ",
    description: "I DESIGNED A FESTIVAL T-SHIRT FOR THE SCHOOL, WON THIRD PLACE, AND RECEIVED A 2,000 BAHT PRIZE.",
    image: img1
  },
  {
    title: "SPORT DAY SHIRT ",
    description: "I DESIGNED A SPORTS SHIRT FOR THE SCHOOL'S COLOR DAY EVENT IN THE 2024 ACADEMIC YEAR.",
    image: img5
  },  
  {
    title: "STAFF SPORT DAY SHIRT V1 ",
    description: "I DESIGNED A STAFF SHIRT FOR THE COLOR DAY EVENT IN THE 2023 ACADEMIC YEAR.",
    image: img3
  },
  {
    title: "STAFF SPORT DAY T-SHIRT V2",
    description: "I DESIGNED A STAFF SHIRT FOR THE COLOR DAY EVENT IN THE 2023 ACADEMIC YEAR.",
    image: img4
  },
  {
    title: "SMTE SHIRT ",
    description: "I DESIGNED A SHIRT FOR THE SMTE PROGRAM TO BE USED FOR VARIOUS ACTIVITIES.",
    image: img6
  },  
  {
    title: "SOUVENIR T-SHIRT",
    description: "I DESIGNED A SHIRT TO BE SOLD IN THE FUTURE FOR THE SCHOOL.",
    image: img7
  },
];

export default function Design() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    setIsVisible(true);
    const handleKeyDown = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">
                  Graphic Design
              </h1>
              <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
            </div>
            <p className="mt-4 text-gray-400 ext-xs md:text-sm uppercase text-center">
                Award-winning merchandise and visual branding
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cardData.map((card, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row bg-gray-800/40 border border-gray-700 hover:border-sky-500 transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-full md:w-2/5 h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 cursor-pointer" 
                    onClick={() => openModal(card.image)} 
                  />
                  <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-gray-900 p-4 rounded-full border border-white/20">
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center flex-1 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                  <h2 className="text-lg font-bold tracking-wide uppercase group-hover:text-sky-400 transition-colors">
                    {card.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-gray-700 my-4 group-hover:w-20 group-hover:bg-sky-500 transition-all duration-500"></div>
                  <p className="text-sm text-gray-400 leading-relaxed ">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button 
              onClick={closeModal} 
              className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} className="text-3xl" />
            </button>
            <img 
                src={currentImage} 
                alt="Large view" 
                className="max-h-[85vh] object-contain shadow-2xl border border-white/10" 
                onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
} // <--- เพิ่มปีกกาปิดตรงนี้