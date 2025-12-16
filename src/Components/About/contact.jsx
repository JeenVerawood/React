import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLine } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const professionalContacts = [
        { icon: faMobileAlt, label: "Phone Number", value: "083-057-2508", link: "tel:0830572508", color: "text-sky-400" },
        { icon: faEnvelope, label: "Email Address", value: "Verawoodlans@gmail.com", link: "mailto:Veraawoodlans@gmail.com", color: "text-emerald-400" }
    ];

    const socialLinks = [
        { icon: faInstagram, label: "Instagram", value: "@febj_222", link: "https://www.instagram.com/febj_222/", color: "hover:text-pink-500" },
        { icon: faFacebook, label: "Facebook", value: "Jeen Verawood", link: "https://www.facebook.com/veerawood.langvong/", color: "hover:text-blue-500" },
        { icon: faLine, label: "Line ID", value: "Jeen", link: "https://line.me/ti/p/PVnlFqB1tZ", color: "hover:text-green-500" },
        { icon: faGithub, label: "GitHub", value: "JeenVerawood", link: "https://github.com/JeenVerawood", color: "hover:text-white" }
    ];

    return (
        <div className="bg-gray-900 min-h-screen font-title text-white">
            <Navbar />
            
            <main 
                ref={sectionRef}
                className={`max-w-7xl m-auto px-6 py-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex justify-center gap-x-3 items-center">
                        <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                        <h1 className='text-3xl md:text-4xl font-bold tracking-widest text-white uppercase'>Contact Me</h1>
                        <div className="w-2 h-2 bg-sky-500 rotate-45"></div>
                    </div>
                   <span className="w-[20vw] h-[2px] mt-10 bg-sky-500"></span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Contact Cards */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-sky-500"></span>
                            GET IN TOUCH
                        </h2>
                        
                        {/* Professional Contact Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {professionalContacts.map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href={item.link}
                                    className="bg-gray-800/40 border border-gray-700 p-6 rounded-sm hover:border-sky-500 hover:bg-gray-800 transition-all group"
                                >
                                    <FontAwesomeIcon icon={item.icon} className={`${item.color} mb-4`} size="2x" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{item.label}</p>
                                    <p className="text-lg font-medium group-hover:text-sky-400 transition-colors">{item.value}</p>
                                </a>
                            ))}
                        </div>

                        {/* Social Links Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {socialLinks.map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className={`flex flex-col items-center bg-gray-800/20 border border-gray-800 py-6 rounded-sm transition-all ${item.color} hover:border-gray-500 hover:bg-gray-800`}
                                >
                                    <FontAwesomeIcon icon={item.icon} size="2x" className="mb-2" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Map Section */}
                    <div className="relative">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-sky-500"></span>
                            LOCATION
                        </h2>
                        <div className="w-full h-[350px] border-2 border-gray-800 rounded-sm overflow-hidden relative group">
                            <div className="absolute inset-0 bg-sky-500/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8711311077755!2d100.4958145!3d13.7265882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298e3b3988e7d%3A0x868b8e04040a454e!2sTha%20Din%20Daeng%2016%2C%20Khlong%20San%2C%20Bangkok%2010600!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                                width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                                allowFullScreen="" loading="lazy" 
                                title="My Location"
                            />
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sky-500" />
                            <span>Klongsan, Bangkok, Thailand</span>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}