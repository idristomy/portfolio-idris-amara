"use client";

import { motion, Variants } from "framer-motion";
import Card from "@/Components/Card";
import Subtitle from "@/Components/texts/Subtitle";
import { useTranslations, useLocale } from "use-intl"


const projects = [
  {
    titlekey: "projects.project1.title",
    descriptionkey: "projects.project1.description",
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    ],
    img: "/Jadoo Preview.png",
    url: "https://travel-website-landingpage-xi.vercel.app/"
  },
  {
    titlekey: "projects.project2.title",
    descriptionkey: "projects.project2.description",
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    ],
    img: "/Hania Preview.jpeg",
    url: "https://idristomy.github.io/Hania/"
  },
  {
    titlekey: "projects.project3.title",
    descriptionkey: "projects.project3.description",
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    ],
    img: "/Portfolio preview.png",
    url: "https://your-portfolio-link.com"
  }
];


function Projects() {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  
  // Determine direction based on locale
  const isRTL = locale === "ar";

  // Title animation variants - opposite direction of cards
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: isRTL ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Card animation variants - from right to left (or left to right for RTL)
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? -100 : 100 
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: i * 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="w-fit mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-30 pb-10 overflow-hidden">
      <div className="max-w-6xl">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Subtitle title={t("subtitle")} emoji="🔗" />
          <h1 className="md:text-4xl text-3xl font-bold text-white mt-2 mb-10">
            {t("title")}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15 }}
              custom={idx}
            >
              <Card
                title={t(item.titlekey)}
                description={t(item.descriptionkey)}
                technologies={item.icon}
                imgUrl={item.img}
                projectUrl={item.url}
                isRTL={isRTL}
              />
            </motion.div>
          ))}
        </div>

        <motion.h1
          className="animate-pulse duration-500 transition-all text-center mt-5"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('haedline')}
        </motion.h1>
      </div>
    </div>
  );
}

export default Projects;