import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center h-screen text-white max-w-7xl m-auto p-12 transition-all duration-500">
                <div className="flex justify-center gap-x-3 items-center mb-6">
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                    <h1 className="text-3xl font-bold transition-opacity duration-500">CONTACT</h1>
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                </div>
                <div className="text-center mb-10">
                    <h5 className="mt-3 text-xl text-gray-300">Let's Connect! Reach out to me through any of the platforms below.</h5>
                </div>

                <div className="space-y-4 md:space-x-6 mb-4 gap-y-2 md:mb-0 flex flex-col md:flex-row justify-center w-full">
                    <div className='flex items-center text-white gap-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-600 rounded-lg shadow-lg w-full md:w-auto'>
                        <FontAwesomeIcon icon={faMobileAlt} size="2x" />
                        <h1 className="text-sm md:text-base">0830572508</h1>
                    </div>
                    <a href="https://www.instagram.com/febj_222/" aria-label="Instagram" className='flex items-center text-white gap-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-600 rounded-lg shadow-lg w-full md:w-auto' target='blank'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <h1 className="text-sm md:text-base">febj_222</h1>
                    </a>
                    <a href="https://www.facebook.com/veerawood.langvong/" aria-label="Facebook" className='flex items-center text-white gap-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-600 rounded-lg shadow-lg w-full md:w-auto'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <h1 className="text-sm md:text-base">Jeen Verawood</h1>
                    </a>
                    <a href="https://line.me/ti/p/PVnlFqB1tZ" aria-label="Line" className='flex items-center text-white gap-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-600 rounded-lg shadow-lg w-full md:w-auto'target='blank'>
                        <FontAwesomeIcon icon={faLine} size="2x" />
                        <h1 className="text-sm md:text-base">Jeen</h1>
                    </a>
                    <div  className='flex items-center text-white gap-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-600 rounded-lg shadow-lg w-full md:w-auto'>
                     <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <h1 className="text-sm md:text-base">Veraawoodlans@gmail.com</h1>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-12 w-full h-[400px] md:w-[80%] lg:w-[60%] rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d680.2324486770145!2d100.50585832477816!3d13.735098004189316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTI0MyDguJfguYjguLLguIHguLTguJnguYHguJTguIcgMTYg4LiE4Lit4Lil4LiH4Liq4Liy4LiZ!5e0!3m2!1sen!2sth!4v1730861681218!5m2!1sen!2sth"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}
