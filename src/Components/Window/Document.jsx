import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';

export default function Document() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [rotation1, setRotation1] = useState(0); // For first icon rotation
    const [rotation2, setRotation2] = useState(0); // For second icon rotation
    const [dropdownOpen1, setDropdownOpen1] = useState(false); // Dropdown for first button
    const [dropdownOpen2, setDropdownOpen2] = useState(false); // Dropdown for second button

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Update rotation based on the scroll position
            setRotation1(scrollPosition * 0.2); // Adjust rotation speed as needed
            setRotation2(scrollPosition * 0.2);

            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && top + height > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <Navbar />
        <div className='bg-gradient-to-r font-title from-black to-blue-950 h-'>
            <div 
                ref={contactRef} 
                className={`flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 transition-all min-h-screen md:h-auto duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >   
                <div className='flex items-center gap-x-3'>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                    <h1 className='text-3xl font-bold transition-opacity text-center duration-500'>OTHER DOCUMENTS</h1>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                </div>
                <h5 className='mt-5'>SUB HEADING GOES HERE</h5>
                <div className='flex gap-x-2 w-full'>
                <div className='flex bg-black p-10 w-full '>
                        <div className='w-72 bg-white h-96'>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl'>asdasd</h1>
                            <hr />
                            <h1>asdasasasd</h1>
                            <h1>asdasasasd</h1>
                            <h1>asdasasasd</h1>
                        </div>
                </div>
                <div className='flex bg-black p-10 w-full '>
                        <div className='w-72 bg-white h-96'>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl'>asdasd</h1>
                            <hr />
                            <h1>asdasasasd</h1>
                            <h1>asdasasasd</h1>
                            <h1>asdasasasd</h1>
                        </div>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
