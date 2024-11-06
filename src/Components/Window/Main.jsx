import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';
import myImage from '/Users/verawood/Desktop/PortFolio Website/src/assets/Img1.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Main() {
  const [rotation1, setRotation1] = useState(12);
  const [rotation2, setRotation2] = useState(45);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation1((prev) => prev + 1);
      setRotation2((prev) => prev + 1.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const { top, height } = contactRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && top + height > 0) {
        setIsVisible(true);
        setTimeout(() => {
          setShowText(true);
        }, 200);
      } else {
        setIsVisible(false);
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-gradient-to-r from-black to-blue-950 font-title'>
      <div className='flex justify-center items-center h-screen text-white max-w-7xl m-auto px-12 transition-all duration-500 transform'>
        {!isMobile && (
          <div className="w-2/4 h-[92%] flex items-center mb-12">
            <div>
              <h1 className='text-4xl font-bold'>Hi My name is!</h1>
              <h4 className='text-5xl font-bold mt-3'>Verawood Langvong</h4>
              <h6 className='mt-5'>Thank you for visiting. Please explore to </h6>
              <h6>earn more about my work and background.</h6>
              <Link to="About" className="flex items-center mt-2">
                <button className="mt-5 bg-white text-black px-4 py-2 rounded-full flex items-center hover:bg-sky-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:scale-110 duration-300">
                  <span className="mr-2">ABOUT ME</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
              <h6 className='mt-9'>My social</h6>
              <div className='flex gap-5'>
                <a href="https://www.instagram.com/febj_222/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-5 border-2 border-gray-400 duration-200 hover:scale-110 text-white w-12 h-12 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </button>
                </a>
                <a href="https://www.facebook.com/veerawood.langvong/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-5 border-2 border-gray-400 duration-200 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </button>
                </a>
                <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
                  <button className="mt-5 border-2 border-gray-400 duration-200 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </button>
                </a>
                <a href="https://line.me/yourlineprofile" target="_blank" rel="noopener noreferrer">
                  <button className="mt-5 border-2 border-gray-400 duration-200 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faLine} size="2x" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        {(isMobile) && (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-center mb-5">
              <h1 className='text-4xl font-bold'>Hi My name is!</h1>
              <h4 className='text-5xl font-bold mt-3'>Verawood Langvong</h4>
              <h6 className='mt-5'>"Thank you for visiting my website."</h6>
              <h6>Feel free to explore everything about me on this site."</h6>
            </div>
            <Link to="About" className="flex items-center justify-center w-full">
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center hover:bg-sky-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:scale-110 duration-300">
                <span className="mr-2">ABOUT ME</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        )}
        {!isMobile && (
          <div className="w-2/4 h-[92%] flex items-center justify-end mb-20">
            <div
              className="w-96 h-96 absolute border-2 border-gray-400 p-4 scale-110 duration-200 transition-all"
              style={{ transform: `rotate(${rotation1}deg)` }}
            ></div>
            <div
              className="w-96 h-96 absolute border-2 border-gray-400 p-4 duration-200 transition-all"
              style={{ transform: `rotate(${rotation2}deg)` }}
            ></div>
            <div className="Boxciecleimg w-96 h-96 bg-neutral-500 rounded-full overflow-hidden ">
              <img src={myImage} alt="My Image" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
      <div className='relative h-40'></div>
    </div>
  );
}
