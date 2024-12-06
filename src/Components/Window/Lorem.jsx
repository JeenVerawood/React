import React, { useRef, useEffect, useState } from 'react';
import { IoGameController } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

export default function Lorem() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showTexts, setShowTexts] = useState([false, false, false]); // Array to manage visibility of each text block

    useEffect(() => {
        const handleScroll = () => {
            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && top + height > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleText = (index) => {
        const updatedShowTexts = [...showTexts];
        updatedShowTexts[index] = !updatedShowTexts[index]; // Toggle the visibility for the specific index
        setShowTexts(updatedShowTexts);
    };

    return (
        <div className='bg-gradient-to-r from-black to-blue-950 font-title'>
            <div 
                ref={contactRef} 
                className={`flex flex-col  justify-center items-center ${isMobile ? 'h-auto' : 'h-screen'} text-white max-w-7xl m-auto p-12 text-center transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <div className="Header flex items-center gap-x-3">
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                    <h1 className={`text-3xl font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>WHY I LIKE COMPUTER?</h1>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                </div>
                <h5 className={`mt-3 transition-opacity duration-500 ${isVisible ? 'opacity-100 delay-100' : 'opacity-0'}`}>SUB HEADING GOES HERE</h5>
                
                <div className={`w-full flex ${isMobile ? 'flex-col  gap-y-5' : 'justify-around'} mt-12 `}>
                    {[ 
                        {
                            icon: <IoGameController className='m-auto my-10 text-9xl' />,
                            text: "I started by coding to create a game server, which sparked my interest in learning about computers and various programming languages."
                        },
                        {
                            icon: <FaConnectdevelop className='m-auto my-10 text-9xl' />,
                            text: "Careers related to computers are timeless, as long as the world keeps turning. Computers will continue to drive the development of our world"
                        },
                        {
                            icon: <TbWorldCode className='m-auto my-10 text-9xl' />,
                            text: "Studying about computer  enables me to pursue a successful and stable career, while also contributing positively to the nation."
                        }
                    ].map((item, index) => (
                        <div key={index} className={`flex-1 text-center border-2 border-gray-400 p-4 transition-opacity duration-500 ${isVisible ? 'opacity-100 delay-' + (400 + index * 200) : 'opacity-0'} mx-2`}>
                            {item.icon}
                            {isMobile ? (
                                <>
                                    <button onClick={() => toggleText(index)} className=' border-2 border-gray-400 text-white p-1 '>
                                        {showTexts[index] ? 'Show Less' : 'Show More'}
                                    </button>
                                    {showTexts[index] && (
                                        <h4 className='mt-3'>
                                            {item.text}
                                        </h4>
                                    )}
                                </>
                            ) : (
                                <h4>
                                    {item.text}
                                </h4>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
