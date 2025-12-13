import React, { useRef, useEffect, useState } from 'react';
import { 
  FaCode, FaServer, FaDatabase, FaTools, 
  FaRobot, FaUserCheck, FaChevronRight 
} from 'react-icons/fa';

export default function Lorem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ข้อมูล Skills แบ่งตามหมวดหมู่
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-sky-400" />,
      skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-emerald-400" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", ,"Line API","Python (Scraping)", "C++"]
    },
    {
      title: "Database System",
      icon: <FaDatabase className="text-amber-400" />,
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Design",
      icon: <FaTools className="text-rose-400" />,
      skills: ["Git / GitHub", "Docker", "Postman", "Figma (UI/UX)"]
    },
    {
      title: "Other Interests",
      icon: <FaRobot className="text-indigo-400" />,
      skills: ["Arduino", "Robotics", "Basic AI Model"]
    }
  ];

  const softSkills = [
    "Strong Communication", "Teamwork & Collaboration", 
    "Adaptability & Learning", "Analytical Mindset"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='bg-gradient-to-r from-blue-950 to-black min-h-screen font-title py-20 flex items-center'>
      <div 
        ref={sectionRef}
        className={`max-w-7xl m-auto px-6 md:px-12 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        {/* Header */}
        <div className='flex flex-col items-center mb-16'>
          <div className='flex justify-center gap-x-3 items-center'>
            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
            <h1 className='text-3xl md:text-4xl font-bold uppercase tracking-widest text-white'>Skills & Expertise</h1>
            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
          </div>
          <p className='text-gray-400 mt-4 tracking-widest text-sm uppercase'>My Technical Stack & Core Competencies</p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className='bg-gray-800/40 border-2 border-gray-700 p-6 rounded-sm hover:border-sky-500 transition-all duration-500 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-gray-900 border border-gray-600 group-hover:border-sky-500 transition-colors'>
                  {cat.icon}
                </div>
                <h3 className='text-xl font-bold text-white uppercase tracking-tight'>{cat.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className='px-3 py-1 bg-gray-900 text-gray-300 text-xs border border-gray-600 rounded-full hover:text-white hover:border-sky-400 transition-all'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills Card (Special Style) */}
          <div className='bg-gradient-to-br from-sky-600/20 to-indigo-600/20 border-2 border-sky-500/50 p-6 rounded-sm'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='p-3 bg-sky-500 text-white'>
                <FaUserCheck />
              </div>
              <h3 className='text-xl font-bold text-white uppercase tracking-tight'>Soft Skills</h3>
            </div>
            <ul className='space-y-3'>
              {softSkills.map((skill, idx) => (
                <li key={idx} className='flex items-center text-gray-200 text-sm'>
                  <FaChevronRight className='text-sky-500 mr-2 text-xs' />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}