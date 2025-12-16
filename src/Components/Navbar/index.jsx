import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GiSkills, GiChampions } from "react-icons/gi";
import { MdCastForEducation, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaCampground } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCertDropdownOpen, setIsCertDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const location = useLocation();
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // ซ่อน/แสดง Nav ตามการเลื่อน
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            // เช็คการเลื่อนเพื่อปรับความทึบของพื้นหลัง
            setIsScrolled(currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // เช็คว่าหน้าไหนกำลังเปิดอยู่
    const isActive = (path) => location.pathname === path;

    return (
        <div className={`fixed w-full top-0 z-[100] transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'py-2' : 'py-4'}`}>
            <nav className={`
                    mx-auto transition-all duration-500 
                    /* ลบ bg-transparent ออก และใส่สีทึบไปเลย */
                    bg-gray-900 border-b border-white/10 py-4 px-6
                    
                    /* สไตล์สำหรับ Desktop (ทรงแคปซูลเมื่อเลื่อน) */
                    ${isScrolled ? 'md:max-w-6xl md:mt-4 md:rounded-full md:border md:shadow-2xl' : 'md:max-w-full md:mt-0 md:rounded-none md:border-transparent'}
                `}>
                <div className="flex justify-between items-center text-white">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center group">
                        <div className="w-9 h-9 bg-sky-500 flex items-center justify-center rounded-xl text-white group-hover:rotate-[15deg] transition-all duration-300 shadow-lg shadow-sky-500/20">
                            <TiUser size={22} />
                        </div>
                        <div className="ml-3 overflow-hidden">
                            <h1 className="text-xl font-black tracking-tighter leading-none group-hover:text-sky-400 transition-colors">VERAWOOD<span className="text-sky-500">.</span></h1>
                            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Portfolio</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" label="MAIN" active={isActive('/')} />

                        {/* Performance Dropdown */}
                        <div className="relative group" onMouseEnter={() => setIsCertDropdownOpen(true)} onMouseLeave={() => setIsCertDropdownOpen(false)}>
                            <button className={`px-4 py-2 text-sm font-bold flex items-center gap-2 hover:text-sky-400 transition-colors ${location.pathname.includes('Competition') || location.pathname.includes('Camp') ? 'text-sky-400' : ''}`}>
                                PERFORMANCE 
                                <FaChevronDown 
                                    size={10} 
                                    /* เพิ่มเงื่อนไขตรงนี้ครับ: ถ้า isCertDropdownOpen เป็นจริง ให้หมุน 180 */
                                    className={`transition-transform duration-300 ${isCertDropdownOpen ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            
                            <AnimatePresence>
                                {isCertDropdownOpen && (
                                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                                        className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50"
                                    >
                                        <DropdownItem to="/Competition" icon={<GiChampions />} label="Academic" />
                                        <DropdownItem to="/Camp" icon={<FaCampground />} label="Other" />
                                        <DropdownItem to="/Design" icon={<MdCastForEducation />} label="Design" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* About Dropdown */}
                       <div className="relative group" onMouseEnter={() => setIsAboutDropdownOpen(true)} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
                            <button className={`px-4 py-2 text-sm font-bold flex items-center gap-2 hover:text-sky-400 transition-colors ${location.pathname.includes('Personal') || location.pathname.includes('Education') ? 'text-sky-400' : ''}`}>
                                ABOUT <FaChevronDown size={10} className={`transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {isAboutDropdownOpen && (
                                    <motion.div 
                                        // 1. แก้ไข Animation ให้เป็นการลอยขึ้นลง (เหมือน Performance)
                                        initial={{ opacity: 0, y: 15 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        exit={{ opacity: 0, y: 15 }}
                                        
                                        // 2. แก้ไข Class ให้เป็นกล่อง Dropdown ลอยตัว (absolute) ไม่ใช่เต็มจอ (fixed)
                                        className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50"
                                    >
                                        <DropdownItem to="/Personal" icon={<FaUser />} label="Personal Info" />
                                        <DropdownItem to="/Education" icon={<MdCastForEducation />} label="Education" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/Contact" className="ml-4 bg-white text-black px-6 py-2 rounded-full text-xs font-black hover:bg-sky-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transform hover:scale-105">
                            CONTACT
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                            className="md:hidden text-white overflow-hidden bg-gray-900 rounded-lg p-2 "
                        >
                            <div className="p-4 pb-4 flex flex-col space-y-2">
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-sky-500 rounded-2xl font-bold">MAIN</Link>
                                <div className="p-4 bg-white/5 rounded-2xl">
                                    <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-3 uppercase">Performance</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <MobileLink to="/Competition" label="Academic" />
                                        <MobileLink to="/Camp" label="Other" />
                                        <MobileLink to="/Design" label="Design" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl">
                                    <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-3 uppercase">About</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <MobileLink to="/Personal" label="Personal" />
                                        <MobileLink to="/Education" label="Education" />
                                    </div>
                                </div>
                                <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-white/5 p-4 rounded-2xl text-center font-bold">CONTACT ME</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}

// Sub-components
function NavLink({ to, label, active }) {
    return (
        <Link to={to} className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group ${active ? 'text-sky-400' : 'text-white hover:text-sky-400'}`}>
            {label}
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-sky-500 transition-all duration-300 ${active ? 'w-4' : 'w-0 group-hover:w-4'}`}></span>
        </Link>
    );
}

function DropdownItem({ to, icon, label }) {
    return (
        <Link to={to} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sky-600 transition-all duration-300 group">
            <span className="text-sky-500 group-hover:text-white transition-colors">{icon}</span>
            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{label}</span>
        </Link>
    );
}

function MobileLink({ to, label }) {
    return (
        <Link to={to} className="p-2 bg-gray-900 border border-white/5 rounded-xl text-xs text-center font-bold">
            {label}
        </Link>
    );
}