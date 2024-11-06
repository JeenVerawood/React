import React, { useRef, useEffect, useState } from 'react';
import { MdOutlineDesignServices } from "react-icons/md";  
import { LuShieldQuestion } from "react-icons/lu";
import { PiUsersThreeLight, PiPingPong } from "react-icons/pi";
import { IoBasketballOutline } from "react-icons/io5";
import { GiTennisCourt } from "react-icons/gi";

export default function Lorem() {
    const contactRef = useRef(null); // Reference to the component
    const [isVisible, setIsVisible] = useState(false); // State to check visibility
    const [showText, setShowText] = useState(false); // State to control when to show the text

    useEffect(() => {
        const handleScroll = () => {
            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the content is in view
            if (top < windowHeight && top + height > 0) {
                setIsVisible(true); // Set visibility to true
                setTimeout(() => {
                    setShowText(true); // Show all text after 2 seconds
                }, 200); // Start showing after a brief moment
            } else {
                setIsVisible(false); // Set visibility to false
                setShowText(false); // Hide text when not in view
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-gradient-to-r from-ablack min-h-screen md:h-auto flex justify-center items-center'>
            <div 
            ref={contactRef} 
            className={`flex flex-col justify-center text-white items-center max-w-7xl m-auto p-12 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
            <div className='flex justify-center gap-x-3 items-center'>
                <div className='w-2 h-2 bg-white rotate-45'></div>
                <h1 className='text-3xl font-bold transition-opacity duration-500'>TALENT & HOBBY</h1>
                <div className='w-2 h-2 bg-white rotate-45'></div>
            </div>
            <div className='text-center'>
                <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <MdOutlineDesignServices size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>UX / UI DESIGN </h1>
                        <h1>Website design and more</h1>
                    </div>
                </div>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <LuShieldQuestion size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>SOLUTION</h1>
                        <h1>Solving problems with practical solutions.</h1>
                    </div>
                </div>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <PiUsersThreeLight size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>LEADER</h1>
                        <h1>Guiding teams with effective leadership.</h1>
                    </div>
                </div>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <PiPingPong size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>TABLE TENNIS</h1>
                        <h1>Enjoying the skill and speed of ping pong.</h1>
                    </div>
                </div>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <IoBasketballOutline size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>BASKETBALL</h1>
                        <h1>Teamwork and strategy on the court.</h1>
                    </div>
                </div>
                <div className="w-full h-40 border-2 border-gray-400 p-4 gap-x-4 flex items-center ">
                    <div className='flex justify-center items-center w-1/2 h-full border-2 border-gray-400'>
                        <GiTennisCourt size={80}/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl'>BADMINTON</h1>
                        <h1>Passionate about fitness and agility.</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
