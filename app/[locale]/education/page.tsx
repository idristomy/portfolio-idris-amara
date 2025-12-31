"use client"

import { motion } from "framer-motion";
import Educard from "@/Components/Educard";
import Subtitle from "@/Components/texts/Subtitle";
import { useLocale, useTranslations } from 'use-intl'

const experiences = [
  {
    id: 1,
    icon: "💻",
    titlekey: "education.educard1.title",
    locationkey: "education.educard1.location",
    periodkey: "education.educard1.period",
    descriptionkey:
      "education.educard1.description",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 2,
    icon: "🎓",
    titlekey: "education.educard2.title",
    locationkey: "education.educard2.location",
    periodkey: "education.educard2.period",
    descriptionkey:
      "education.educard2.description",

  },
  {
    id: 3,
    icon: "💻",
    titlekey: "education.educard3.title",
    locationkey: "education.educard3.location",
    periodkey: "education.educard3.period",
    descriptionkey:
      "education.educard3.description",
  },
  {
    id: 4,
    icon: "📚",
    titlekey: "education.educard4.title",
    locationkey: "education.educard4.location",
    periodkey: "education.educard4.period",
    descriptionkey:
      "education.educard4.description",
  }
];

function Education() {

  const t = useTranslations("EducationPage")
  const locale = useLocale()
  const isRTL = locale === "ar"

  // Timeline animation variants
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, delay: 0.2 }
    }
  };

  // Card variants for left side (odd IDs)
  const leftCardVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? 100 : -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.2, delay: 0.5 }
    }
  };

  // Card variants for right side (even IDs)
  const rightCardVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? -100 : 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.4, delay: 0.8 }
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 min-h-screen pt-20 md:pt-30 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 ">
      {/* Header */}
      <motion.div className="text-start"
      initial={{
            opacity: 0,
            x: isRTL ? "100vw" : '-100vw',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}>
        <Subtitle title={t("title")} emoji="💼"/>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{t('subtitle')}</h1>
      </motion.div>
      
      {/* Timeline Container */}
      <div className="relative pt-10 w-full">
        {/* Continuous Center Line - Desktop Only */}
        <motion.div 
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30 transform -translate-x-1/2"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
        
        {/* Continuous Left Line - Mobile Only */}
        <motion.div 
          className={`md:hidden absolute ${locale === "ar" ? "right-2" : "left-4"} top-0 bottom-0 w-0.5 bg-purple-500/30`}
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className="relative mb-8 md:mb-16"
          >
            {/* Desktop: 3-Column Grid | Mobile: Single Column */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
              
              {/* LEFT SIDE - Desktop only, shows on ODD index */}
              <div className={`hidden md:flex ${exp.id % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                {exp.id % 2 === 1 && (
                  <motion.div
                    variants={leftCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Educard
                      title={t(exp.titlekey)}
                      icon={exp.icon}
                      description={t(exp.descriptionkey)}
                      location={t(exp.locationkey)}
                      date={t(exp.periodkey)}
                    />
                  </motion.div>
                )}
              </div>

              {/* CENTER - Timeline Dot (Hidden on mobile) */}
              <div className="hidden md:flex relative z-10 justify-center">
                {/* Dot */}
                <motion.div 
                  className="w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50"
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                ></motion.div>
              </div>

              {/* RIGHT SIDE - Desktop only, shows on EVEN index */}
              <div className={`hidden md:flex ${exp.id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {exp.id % 2 === 0 && (
                  <motion.div
                    variants={rightCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Educard
                      title={t(exp.titlekey)}
                      icon={exp.icon}
                      description={t(exp.descriptionkey)}
                      location={t(exp.locationkey)}
                      date={t(exp.periodkey)}
                    />
                  </motion.div>
                )}
              </div>

              {/* MOBILE VIEW - Single column with left timeline */}
              <div className="md:hidden w-full flex gap-4 items-start pl-2">
                {/* Mobile Dot */}
                <div className="relative z-10 shrink-0">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-950 shadow-lg shadow-purple-500/50 mt-2"
                    variants={timelineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.15 }}
                  ></motion.div>
                </div>
                {/* Card */}
                <motion.div 
                  className="flex-1"
                  variants={isRTL ? rightCardVariants : leftCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                >
                  <Educard
                    title={t(exp.titlekey)}
                    icon={exp.icon}
                    description={t(exp.descriptionkey)}
                    location={t(exp.locationkey)}
                    date={t(exp.periodkey)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;