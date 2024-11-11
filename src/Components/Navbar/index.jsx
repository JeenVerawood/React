import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiSkills, GiChampions } from "react-icons/gi";
import { MdCastForEducation, MdOutlineKeyboardDoubleArrowDown, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaCampground } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCertificateDropdownOpen, setIsCertificateDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) {
                if (window.scrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true); // Always visible on mobile
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`bg-gray-800 sticky w-full top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex justify-between items-center text-white py-4 px-5 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center px-6">
                    <Link to="/" className="flex items-center" >
                    <div className="w-6 h-6 bg-white flex items-center justify-center mr-2  rounded-full text-gray-900">
                            <TiUser />
                        </div>
                        <MdKeyboardDoubleArrowRight className="mr-3"/>
                        <h1 className="text-2xl font-bold">PORTFOLIO</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-5 mr-5">
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded transition">
                        MAIN
                    </Link>

                    {/* Certificate Dropdown */}
                    <div
                        className="relative flex items-center gap-x-2 hover:bg-gray-700 px-3 py-2 rounded transition"
                        onMouseEnter={() => setIsCertificateDropdownOpen(true)}
                        onMouseLeave={() => setIsCertificateDropdownOpen(false)}
                    >
                        <h1>PERFORMANCE</h1>
                        <AnimatePresence>
                            {isCertificateDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-10 mr-10 left-1 w-48 bg-gray-800 rounded-md shadow-lg"
                                >
                                    <Link to="/Competition" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GiChampions />
                                        ACADEMIC
                                    </Link>
                                    <Link to="/Camp" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <FaCampground />
                                        OTHER
                                    </Link>
                                    <Link to="/Myproject" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GoProjectRoadmap />
                                        PROJECT
                                    </Link>
                                    <Link to="/Design" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <MdCastForEducation />
                                        DESIGN
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* About Dropdown */}
                    <div
                        className="relative hover:bg-gray-700 px-3 py-2 rounded transition "
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                        <h1>ABOUT</h1>
                        <AnimatePresence>
                            {isAboutDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg"
                                >
                                    <Link to="/Personal" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <FaUser />
                                        PERSONAL
                                    </Link>
                                    <Link to="/Education" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GiSkills />
                                        EDUCATION
                                    </Link>
                                    <Link to="/skills" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <MdCastForEducation />
                                        SKILLS
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <Link to="/Contact" className=" bg-white text-black hover:bg-gray-400 duration-300 px-5 py-1 rounded-full transition">
                        CONTACT
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center mr-6">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center text-center py-5 space-y-5">
                        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded transition" onClick={() => setIsMobileMenuOpen(false)}>
                            MAIN
                        </Link>

                        {/* Certificate Dropdown */}
                        <div
                            className="relative flex flex-col items-center"
                            onClick={() => setIsCertificateDropdownOpen(!isCertificateDropdownOpen)}
                        >
                            <h1 className="cursor-pointer">PERFORMANCE</h1>
                            {isCertificateDropdownOpen && (
                                <div className="flex flex-col items-center bg-gray-800 rounded-md">
                                    <Link to="/Competition" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GiChampions />
                                        ACADEMIC
                                    </Link>
                                    <Link to="/Camp" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <FaCampground />
                                        OTHER
                                    </Link>
                                    <Link to="/Myproject" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GoProjectRoadmap />
                                        PROJECT
                                    </Link>
                                    <Link to="/Design" className="block px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <MdCastForEducation />
                                        DESIGN
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* About Dropdown */}
                        <div
                            className="relative flex flex-col items-center"
                            onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        >
                            <h1 className="cursor-pointer">ABOUT</h1>
                            {isAboutDropdownOpen && (
                                <div className="flex flex-col items-center bg-gray-800 rounded-md">
                                    <Link to="/Personal" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <FaUser />
                                        PERSONAL
                                    </Link>
                                    <Link to="/Education" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <GiSkills />
                                        EDUCATION
                                    </Link>
                                    <Link to="/skills" className="px-4 py-2 text-white flex items-center gap-x-2 hover:bg-gray-700">
                                        <MdCastForEducation />
                                        SKILLS
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/Contact" className=" bg-white text-black hover:bg-gray-400 duration-300 px-5 py-1 rounded-full transition">
                            CONTACT
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
