import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // เพิ่ม Chevron
import { Link, useLocation } from "react-router-dom"; // เพิ่ม useLocation เพื่อทำ Active Link
import { GiSkills, GiChampions } from "react-icons/gi";
import { MdCastForEducation, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaCampground } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isPerfDropdownOpen, setIsPerfDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            // เช็คว่าสกรูลลงหรือขึ้นเพื่อซ่อน/แสดง Navbar
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            // เช็คว่าสกรูลลงมาแล้วหรือยังเพื่อเปลี่ยนสีพื้นหลังให้ทึบขึ้น
            setIsScrolled(window.scrollY > 20);
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper สำหรับเช็คหน้าปัจจุบันเพื่อทำสีเน้น (Active State)
    const isActive = (path) => location.pathname === path;

    return (
        <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
            <nav className="flex justify-between items-center text-white py-4 px-8 max-w-7xl mx-auto">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center group">
                    <div className="w-8 h-8 bg-sky-500 flex items-center justify-center mr-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                        <TiUser size={20}/>
                    </div>
                    <MdKeyboardDoubleArrowRight className="text-sky-500 mr-1"/>
                    <h1 className="text-xl font-bold tracking-tighter">VERAWOOD<span className="text-sky-500">.</span></h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive('/') ? 'text-sky-400' : 'hover:text-sky-400'}`}>
                        MAIN
                    </Link>

                    {/* PERFORMANCE Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPerfDropdownOpen(true)}
                        onMouseLeave={() => setIsPerfDropdownOpen(false)}
                    >
                        <button className="flex items-center gap-x-1 px-4 py-2 text-sm font-medium hover:text-sky-400 transition-colors">
                            PERFORMANCE <FaChevronDown size={10} className={`transition-transform ${isPerfDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {isPerfDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-48 bg-gray-900 border border-gray-800 rounded-xl mt-2 py-2 shadow-2xl"
                                >
                                    <DropdownLink to="/Competition" icon={<GiChampions />} label="ACADEMIC" />
                                    <DropdownLink to="/Camp" icon={<FaCampground />} label="OTHER" />
                                    <DropdownLink to="/Myproject" icon={<GoProjectRoadmap />} label="PROJECT" />
                                    <DropdownLink to="/Design" icon={<MdCastForEducation />} label="DESIGN" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ABOUT Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                        <button className="flex items-center gap-x-1 px-4 py-2 text-sm font-medium hover:text-sky-400 transition-colors">
                            ABOUT <FaChevronDown size={10} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {isAboutDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-48 bg-gray-900 border border-gray-800 rounded-xl mt-2 py-2 shadow-2xl"
                                >
                                    <DropdownLink to="/Personal" icon={<FaUser />} label="PERSONAL" />
                                    <DropdownLink to="/Education" icon={<MdCastForEducation />} label="EDUCATION" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/Contact" className="ml-4 bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                        CONTACT
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4 text-center">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>MAIN</Link>
                            <div className="border-t border-gray-800 pt-4">
                                <p className="text-gray-500 text-xs mb-4">PERFORMANCE</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link to="/Competition" className="text-sm py-2 bg-gray-800 rounded">ACADEMIC</Link>
                                    <Link to="/Camp" className="text-sm py-2 bg-gray-800 rounded">OTHER</Link>
                                </div>
                            </div>
                            <Link to="/Contact" className="bg-sky-600 py-3 rounded-full font-bold">CONTACT</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Sub-component สำหรับ Dropdown Links เพื่อลดความซ้ำซ้อน
function DropdownLink({ to, icon, label }) {
    return (
        <Link to={to} className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-sky-600 transition-colors">
            <span className="text-sky-400 group-hover:text-white">{icon}</span>
            {label}
        </Link>
    );
}