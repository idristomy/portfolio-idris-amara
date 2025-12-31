"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Subtitle from './texts/Subtitle';
import { useLocale, useTranslations } from 'next-intl';

function AnimatedHello() {
  const greetings = ["Hello", "مرحبا", "你好", "Salut"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentGreeting = greetings[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentGreeting.length) {
          setDisplayText(currentGreeting.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentGreeting.slice(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed, greetings]);

  return <Subtitle title={displayText} emoji="👋" />;
}

export default function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Left section animation
  const leftVariants: Variants = {
    hidden: { opacity: 0, x:  isRTL ? '100vw' : '-100vw' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Center (Avatar) animation
  const centerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Right section animation
  const rightVariants: Variants = {
    hidden: { opacity: 0, x: isRTL ? '-100vw' : '100vw' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen w-full p-4 bg-linear-to-b from-white via-purple-50 to-purple-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden'>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex md:flex-row flex-col md:items-center justify-around lg:gap-20 md:gap-10 gap-8 w-full max-w-6xl"
      >
        
        {/* Left Section */}
        <motion.div variants={leftVariants}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <AnimatedHello />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white w-60 py-5"
          >
            {t('title')}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-3 justify-start"
          >
            <motion.div 
              initial={{
                width: 0
              }}
              animate={{
                width: 50
              }}
              transition={{
                delay: 1.2,
                duration: 0.8
              }}
              className="h-1 w-12 bg-purple-500 rounded-full"></motion.div>
            <p className="text-slate-700 dark:text-slate-400 text-lg lg:text-xl font-light">
              {t('specialty')}
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex gap-3 mt-5 items-center"
          >
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/idristomy" 
              target='_blank'
              className="p-2.5 bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 dark:border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <FaGithub size={24} className="text-slate-700 dark:text-white" />
            </motion.a>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.15, rotateZ: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/amara-idris-942365206/" 
              target='_blank'
              className="p-2.5 bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 dark:border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <FaLinkedin size={24} className="text-slate-700 dark:text-white" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Center Section - Avatar */}
        <motion.div 
          variants={centerVariants}
          className="relative mx-auto"
        >
          {/* Animated Glow Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full blur-3xl bg-purple-400/30 dark:bg-purple-500/30"
          />
          
          {/* Avatar with Border */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="relative bg-white dark:bg-slate-900/50 backdrop-blur-sm border-4 border-purple-400/40 dark:border-purple-500/30 rounded-full p-1.5 hover:border-purple-500/60 dark:hover:border-purple-500/50  transition-all duration-300"
          >
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{  duration: 0.3, ease: "easeOut" }}
              src="/avataaars.svg" 
              alt="Avatar" 
              className="rounded-full z-10 w-64 h-64 lg:w-80 lg:h-80 object-cover hover:scale-113 hover:-translate-y-5 transition-all duration-300"
            />
          </motion.div>
          
          {/* Available for Work Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50 whitespace-nowrap cursor-default"
          >
            {t('tag')}
          </motion.div>
        </motion.div>

        {/* Right Section - Download CV */}
        <motion.div variants={rightVariants}>
          <motion.a 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="flex w-fit mx-auto justify-center items-center gap-3 bg-purple-500 text-white font-semibold py-3 px-6 md:px-8 text-sm rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            {t('cta')}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <IoMdDownload size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}