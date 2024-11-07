import React, { useState } from 'react'; 
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
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

function Design() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Function to open the modal
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };
  
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };
  

  // Handle Esc key press
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  // Add event listener on mount and cleanup on unmount
  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r md:h-auto font-title from-black to-blue-950">
        <div className="flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 h-full transition-all duration-500">
          <div className="flex justify-center gap-x-3 items-center">
            <div className="w-2 h-2 bg-white rotate-45"></div>
            <h1 className="text-3xl font-bold transition-opacity text-center duration-500">
                DESIGN
            </h1>
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>
          <div className="text-center mb-10">
            <h5 className="mt-3">SUB HEADING GOES HERE</h5>
          </div>
          {/* Layout: responsive grid with text below image on mobile */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="w-full flex flex-col md:flex-row border-2 border-gray-400 p-4 h-auto">
                {/* Image with hover effect */}
                <div className="relative w-full md:w-3/6 h-64 bg-white hover:opacity-70 duration-500 bg-black group">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover" 
                    onClick={() => openModal(card.image)} 
                  />
                  <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-end items-end m-5">
                    <FontAwesomeIcon 
                      onClick={() => openModal(card.image)} // Updated to call openModal on icon click
                      icon={faMagnifyingGlassPlus} 
                      className="text-white text-2xl bg-gray-900 p-6 rounded-full " 
                    />
                  </div>
                </div>
                {/* Card content */}
                <div className="text-center m-auto w-full md:w-3/6">
                  <div className="flex items-center mx-auto w-4/5 gap-x-2 justify-center">
                    <h1 className="text-2xl font-bold">{card.title}</h1>
                  </div>
                  <h1 className="mt-3 w-11/12 mx-auto">{card.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying large image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center  justify-center z-50">
          <div className="relative">
            <img src={currentImage} alt="Large view" className="max-w-3xl max-h-[80vh] object-contain" />
            <button 
              onClick={closeModal} 
              className="absolute top-0 right-0 p-4 text-white text-3xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Design;
