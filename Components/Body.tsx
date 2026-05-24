"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Image from 'next/image';
import Subtitle from './texts/Subtitle';
import { useLocale, useTranslations } from 'next-intl';

const greetings = ["Hello", "مرحبا", "你好", "Salut"];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function AnimatedHello() {
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
  }, [displayText, isDeleting, currentIndex, typingSpeed]);

  return <Subtitle title={displayText} emoji="👋" />;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const isRTL = locale === "ar";

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: isRTL ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: isRTL ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.2 } },
  };

  return (
    <div className='flex justify-center items-center min-h-screen w-full p-4 bg-linear-to-b from-white via-purple-50 to-purple-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden'>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex md:flex-row flex-col md:items-center justify-around lg:gap-20 md:gap-10 gap-8 w-full max-w-6xl"
      >
        {/* Left Section */}
        <motion.div variants={slideLeft} className="flex flex-col gap-4">
          <motion.div variants={fadeUp}>
            <AnimatedHello />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-xl md:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white w-60 py-3"
          >
            {t('title')}
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center gap-3 justify-start">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ delay: 0.9, duration: 0.6, ease }}
              className="h-1 bg-purple-500 rounded-full"
            />
            <p className="text-slate-700 dark:text-slate-400 text-lg lg:text-xl font-light">
              {t('specialty')}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3 mt-2 items-center">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/idristomy"
              target='_blank'
              className="p-2.5 bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 dark:border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <FaGithub size={24} className="text-slate-700 dark:text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
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
        <motion.div variants={scaleIn} className="relative mx-auto">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-3xl bg-purple-400/30 dark:bg-purple-500/30"
          />

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="relative bg-white dark:bg-slate-900/50 backdrop-blur-sm border-4 border-purple-400/40 dark:border-purple-500/30 rounded-full p-1.5 hover:border-purple-500/60 dark:hover:border-purple-500/50 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full z-10 w-64 h-64 lg:w-80 lg:h-80"
            >
              <Image
                src="/avataaars.svg"
                alt="Avatar"
                width={320}
                height={320}
                priority
                className="rounded-full w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50 whitespace-nowrap cursor-default"
          >
            {t('tag')}
          </motion.div>
        </motion.div>

        {/* Right Section - Download CV */}
        <motion.div variants={slideRight}>
          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-fit mx-auto justify-center items-center gap-3 bg-purple-500 text-white font-semibold py-3 px-6 md:px-8 text-sm rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            {t('cta')}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <IoMdDownload size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
