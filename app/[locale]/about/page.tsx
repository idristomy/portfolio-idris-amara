"use client"

import Subtitle from "@/Components/texts/Subtitle";
import Spline from "@splinetool/react-spline";
import  { useLocale, useTranslations } from "use-intl";
import { motion } from "framer-motion";


function About() {

    const primarySkills = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    ];

    const secondarySkills = [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ];


  const t = useTranslations("AboutPage")
  const locale = useLocale();
  const isRTL = locale === "ar"

    const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };


  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div className="mb-16"
          initial={{
            opacity: 0,
            x: isRTL ? "100vw" : '-100vw',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.3,
          }}
        >
          <Subtitle title={t('subtitle')} emoji={"🙎"} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            {t('title')}
          </h1>
        </motion.div>

        {/* Main Content - 3D Character + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          
          {/* Left Side - 3D Spline Character */}
          <motion.div className="relative w-full h-100 "
            initial={{
            opacity: 0,
            x: isRTL ? "100vw" : "-100vw",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.5,
          }}
          >
            {/* Glow effect behind character */}
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
            
            {/* Spline Container */}
            
              <Spline
                scene="https://prod.spline.design/aHcypBspSpAvQJHY/scene.splinecode"
                style={{
                    width: '100%',
                    height: '115%'
                }}
                />
            
          </motion.div>

          {/* Right Side - About Info */}
          <motion.div className="space-y-6 order-1 lg:order-2"
          initial={{
            opacity: 0,
            x: isRTL ? "-100vw" : '100vw',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.5,
          }}>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-8">
              
              
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">👋</span>
                  <span className="leading-relaxed">
                     {t.rich('description.p1', {
                      span: (chunk => <span className="text-purple-400 font-semibold">{chunk}</span>)
                     })}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <span className="leading-relaxed">
                    {t('description.p2')}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="leading-relaxed">
                    {t('description.p3')}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <span className="leading-relaxed">
                    {t('description.p4')}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="leading-relaxed font-semibold text-purple-400">
                    {t('description.p5')}
                  </span>
                </p>

              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-all duration-300">
                <p className="text-purple-400 font-semibold text-sm mb-1">{t('location.label')}</p>
                <p className="text-white font-bold">{t('location.value')}</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-all duration-300">
                <p className="text-purple-400 font-semibold text-sm mb-1">{t('Experience.label')}</p>
                <p className="text-white font-bold">{t('Experience.value')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="space-y-5">
          {/* Primary Skills - Always Use */}
          <motion.div 
            className=" p-6 md:p-8"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {t('skills.title1')}
            </h2>
            <p className="text-slate-400 text-center text-sm mb-6">{t('skills.subtitle1')}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 ">
              {primarySkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-1 py-3 rounded-xl"
                  title={skill.name}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-10 h-10 md:w-20 md:h-15 object-contain  md:grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Skills - Rarely Use */}
          <motion.div 
            className=" p-6 md:p-8"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {t('skills.title2')}
            </h2>
            <p className="text-slate-400 text-center text-sm mb-6">{t('skills.subtitle2')}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              {secondarySkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-1 py-3 rounded-xl"
                  title={skill.name}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-10 h-10 md:w-20 md:h-15 object-contain md:grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                {t('contact.description')}
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 bg-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 active:scale-95"
            >
                {t('contact.cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;