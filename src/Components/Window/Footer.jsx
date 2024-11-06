import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div
                ref={contactRef}
                className={`flex flex-col md:flex-row justify-between items-center max-w-7xl m-auto px-4 transition-all duration-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-lg font-semibold">VERAWOOD LANGVONG</h1>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="https://www.instagram.com/febj_222/" aria-label="Instagram" target='blank'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/veerawood.langvong/" aria-label="Facebook"  target='blank' >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://github.com/JeenVerawood" aria-label="GitHub" arget='blank'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://line.me/ti/p/PVnlFqB1tZ" aria-label="Line" arget='blank'>
                        <FontAwesomeIcon icon={faLine} size="2x" />
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p>Contact us: verawoodlans@gmail.com</p>
                    <p>Phone: 0830572508</p>
                </div>
            </div>
        </footer>
    );
}
