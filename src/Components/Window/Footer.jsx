import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!contactRef.current) return;
            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && top + height > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // ตรวจสอบทันทีที่โหลด
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
            <div
                ref={contactRef}
                className={`flex flex-col md:flex-row justify-between items-center max-w-7xl m-auto px-8 transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                {/* Branding & Copyright */}
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-xl font-bold tracking-tighter">
                        VERAWOOD<span className="text-sky-500">.</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Social Icons with Hover State */}
                <div className="flex space-x-6 mb-8 md:mb-0">
                    {[
                        { icon: faGithub, link: "https://github.com/JeenVerawood", color: "hover:text-white" },
                        { icon: faInstagram, link: "https://www.instagram.com/febj_222/", color: "hover:text-pink-500" },
                        { icon: faFacebook, link: "https://www.facebook.com/veerawood.langvong/", color: "hover:text-blue-500" },
                        { icon: faLine, link: "https://line.me/ti/p/PVnlFqB1tZ", color: "hover:text-green-500" }
                    ].map((item, idx) => (
                        <a 
                            key={idx} 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className={`text-gray-400 transition-all duration-300 ${item.color} transform hover:scale-125`}
                        >
                            <FontAwesomeIcon icon={item.icon} size="2x" />
                        </a>
                    ))}
                </div>

                {/* Direct Contact Info */}
                <div className="text-center md:text-right text-sm space-y-1">
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-2">Get in touch</p>
                    <a href="mailto:verawoodlans@gmail.com" className="block text-gray-300 hover:text-sky-400 transition-colors">
                        verawoodlans@gmail.com
                    </a>
                    <a href="tel:0830572508" className="block text-gray-300 hover:text-sky-400 transition-colors">
                        (+66) 83-057-2508
                    </a>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="max-w-7xl m-auto px-8 mt-10">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
        </footer>
    );
}