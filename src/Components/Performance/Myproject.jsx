import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import i1 from "./img1/Summary/1.jpg"
import i2 from "./img1/Summary/2.jpg"
import i3 from "./img1/Summary/3.jpg"
import i4 from "./img1/Summary/4.jpg"
import i5 from "./img1/Summary/5.jpg"
import i6 from "./img1/Summary/6.jpg"
import i7 from "./img1/Summary/7.jpg"
import i8 from "./img1/Summary/8.jpg"
import i9 from "./img1/Summary/9.jpg"
import i10 from "./img1/Summary/10.jpg"
import TTD from "./img1/Summary/image.png"
import img1 from '../img-main/project /1.png';
import img2 from '../img-main/project /2.png';
import img3 from '../img-main/project /3.png';
import imgTT from '../img-main/project /wahasdasd.png';
import imgSMTE from '../img-main/cetificate/701ab753-8598-4b9e-b049-5d404f345737.jpeg';

const projectData = [
  {
    title: "AI News Update",
    description: [
      "Developed a centralized platform for the latest AI news and research updates.",
      "Implemented automated data fetching from multiple AI news sources via REST APIs."
    ],
    tech: ["Next.js", "Tailwind CSS", "REST APIs", "Node.js","Python","Docker",],
    link: null, // ใส่ลิ้งก์ของคุณ
    details: "An all-in-one portal for AI enthusiasts. This project focuses on efficient data fetching and a minimalist UI design that prioritizes fast access to trending AI topics, providing a seamless experience for staying updated with the rapidly evolving AI landscape.",
    images: [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10] // แนะนำให้เปลี่ยนเป็นรูปหน้าเว็ปจริงของคุณเองในภายหลัง
  },
{
    title: "AI Chatbot for Physics Education (NSTDA/NECTEC)",
    description: [
      "Developed a Line-based chatbot to assist in teaching physics to Grade 10 students.",
      "Collaborated with researchers at NECTEC to design and develop the interactive teaching media."
    ],
    tech: ["Line API", "Figma", "UX/UI Design", "HTML/CSS/JS"],
    link: "https://line.me/R/ti/p/@821ayreq", // ใส่ลิงก์โครงการของคุณหากมี
    details: "A 2-month research skill training project at NSTDA (NECTEC). The project focused on creating an interactive chatbot that simplifies complex physics concepts through storytelling and gameplay. This experience enhanced my skills in real-world application development, UX/UI design, and collaborative research processes.",
    images: [TTD] // แนะนำให้ใช้รูปผลงานแชทบอทจากในไฟล์ของคุณเอง
},
  {
    title: "School Merchandise E-commerce",
    description: ["Developed a pre-order platform managing the entire lifecycle.", "Generated over 50,000 THB in revenue."],
    tech: ["React.js", "Tailwind CSS", "Figma"],
    link: "https://tpsmtestore.netlify.app",
    details: "A full-scale project where I handled everything from the initial UI/UX design in Figma to vendor negotiations and digital marketing.",
    images: null
  },
  {
    title: "Motorcycle Rider Detection Model",
    description: ["Developing an AI model to detect illegal riding behaviors.", "Using computer vision to improve road safety."],
    tech: ["Roboflow", "AI/Python", "YOLOv8"],
    link: "https://github.com/JeenVerawood/Motorcycle-Rider-Model", 
    details: "Leveraging Deep Learning to identify instances of multiple riders on a single motorcycle. This model uses YOLOv8 to process real-time video feeds.",
    images: [imgTT, img1, img2, img3] 
  },
  {
    title: "Web Design Hackathon (JWC 13)",
    description: ["Designed a user-friendly website prototype using Figma.", "Won the Popular Vote Award."],
    tech: ["Figma", "UI/UX Design"],
    link: "https://www.figma.com/design/BIhmRM8J1CAVGONuQkVwKX/Untitled?node-id=0-1&t=O5unBmf1VZQs9L2I-1",
    details: "Awarded Popular Vote for a design that emphasized user accessibility during a competitive hackathon.",
    images: [imgSMTE] // เพิ่ม images ป้องกัน Error
  },
  {
    title: "Intelligent Classroom (SMTE Gold Medal)",
    description: ["Engineered an automated lighting system for energy efficiency.", "National Gold Medal Winner."],
    tech: ["Arduino", "C++", "IoT Sensors"],
    link: null, 
    details: "An IoT solution that automates classroom environments to reduce energy waste, earning top honors in a national competition.",
    images: [imgSMTE] 
  }
  
];

export default function MyProject() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleKeyDown = (e) => { if (e.key === 'Escape') closeProject(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = (e) => {
    e.stopPropagation();
    if (!selectedProject?.images) return;
    setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (!selectedProject?.images) return;
    setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="bg-gray-900 min-h-screen font-title py-20 flex items-center overflow-hidden">
        <div ref={sectionRef} className={`max-w-7xl m-auto px-6 md:px-12 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Section Header */}
          <div className='flex flex-col items-center mb-16'>
            <div className='flex justify-center gap-x-3 items-center'>
              <div className='w-2 h-2 bg-white rotate-45'></div>
              <h1 className='text-3xl md:text-4xl font-bold uppercase text-white'>My Projects</h1>
              <div className='w-2 h-2 bg-white rotate-45'></div>
            </div>
            <p className='text-gray-400 mt-4 tracking-widest text-xs uppercase'>Integrating Technology & Design Solutions</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div key={index} className="bg-gray-800/40 border border-gray-700 p-8 rounded-sm hover:border-sky-500 transition-all duration-500 group flex flex-col h-full hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                <h3 className="text-xl font-bold mb-6 text-sky-400 uppercase tracking-tight">{project.title}</h3>
                
                <ul className="list-disc list-outside ml-5 text-gray-400 text-sm space-y-3 mb-6 flex-grow">
                  {project.description.map((bullet, bIndex) => (
                    <li key={bIndex} className="pl-2 leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, tIndex) => (
                        <span key={tIndex} className="text-[10px] font-bold px-3 py-1 bg-gray-900 text-gray-400 border border-gray-700 rounded-full group-hover:border-sky-500/30 transition-colors uppercase">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-800">
                  {(project.details || (project.images && project.images.length > 0)) && (
                    <button 
                        onClick={() => openProject(project)} 
                        className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-sky-600 hover:text-white transition-all transform hover:scale-105"
                    >
                        <FaSearchPlus /> DETAILS
                    </button>
                  )}

                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-sky-400 text-xs font-bold transition-colors">
                        <FaExternalLinkAlt /> <span>VISIT</span>
                    </a>
                  ) : (
                    !project.details && <span className="text-gray-700 text-xs">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Slider Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex justify-center items-center p-4 md:p-10" onClick={closeProject}>
          <div className="bg-gray-900 border border-gray-700 w-full max-w-4xl relative rounded-sm shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeProject} className="absolute top-4 right-4 z-[110] text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full">
              <FaTimes size={20} />
            </button>

            {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative group/slide bg-black aspect-video flex items-center justify-center border-b border-gray-800">
                    <img 
                        src={selectedProject.images[currentImgIndex]} 
                        alt="Project view" 
                        className="max-w-full max-h-full object-contain select-none"
                    />
                    {selectedProject.images.length > 1 && (
                        <>
                            <button onClick={prevImg} className="absolute left-4 p-4 text-sky-500 hover:text-white transition-all"><FaChevronLeft size={30}/></button>
                            <button onClick={nextImg} className="absolute right-4 p-4 text-sky-500 hover:text-white transition-all"><FaChevronRight size={30}/></button>
                            <div className="absolute bottom-4 flex gap-2">
                                {selectedProject.images.map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${i === currentImgIndex ? 'bg-sky-500 w-6' : 'bg-white/20'} transition-all`}></div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* ส่วนข้อความ Details */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">{selectedProject.title}</h2>
              {selectedProject.details && (
                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">"{selectedProject.details}"</p>
              )}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-bold px-3 py-1 bg-gray-900 text-sky-400 border border-gray-700 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}