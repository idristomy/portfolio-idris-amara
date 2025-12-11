"use client";

import { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


function AnimatedHello() {
  const greetings = [
    "Hello",
    "مرحبا",
    "你好",
    "Salut"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentGreeting = greetings[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentGreeting.length) {
          setDisplayText(currentGreeting.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentGreeting.slice(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          // Move to next greeting
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed, greetings]);

  return (
    <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#14142A]">
      <span className="text-xl">👋</span>
      <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase flex items-center">
        {displayText}
        <span className="inline-block w-0.5 h-3.5 bg-purple-400 ml-0.5 animate-fade"></span>
      </span>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fade {
          animation: fade 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div className='block md:flex justify-center items-center min-h-screen mx-auto w-full p-4'>

      <div className="flex md:flex-row flex-col md:items-center justify-around lg:gap-50 md:gap-10 gap-10 ">
        {/* Left Section */}
        <div>
          <AnimatedHello />
          <h1 className="text-xl md:text-2xl font-bold text-white w-60 py-5 ">IDRIS AMARA</h1>
          <div className="flex items-center gap-3 justify-start">
            <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
            <p className="text-slate-400 text-lg lg:text-xl font-light">
              Frontend Developer
            </p>
          </div>
          
          {/* Social Links - Updated to match design */}
          <div className="flex gap-3 mt-5 items-center">
            <a 
              href="#" 
              className="p-2.5 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="#" 
              className="p-2.5 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Center Section - Avatar */}
        <div className="relative mx-auto ">
          {/* Glow Effect - Improved */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-purple-500/30 animate-pulse"></div>
          
          {/* Avatar with Border - Matching design */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm border-4 border-purple-500/30 rounded-full p-1.5 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <img 
              src="/avataaars.svg" 
              alt="Avatar" 
              className="rounded-full z-10 w-64 h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>

          {/* Available for Work Badge */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50 whitespace-nowrap">
            Available for work
          </div>
        </div>

        {/* Right Section - Download CV */}
        <div>
          <a 
            href="#" 
            className="flex w-fit mx-auto justify-center items-center gap-3 bg-purple-500 text-white font-semibold py-3 px-6 md:px-8 text-sm rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Download CV
            <IoMdDownload size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}