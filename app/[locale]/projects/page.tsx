"use client";

import { motion, Variants } from "framer-motion";
import { SiReact, SiTailwindcss, SiJavascript, SiFramer, SiHtml5, SiCss3, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Card from "@/Components/Card";
import Subtitle from "@/Components/texts/Subtitle";
import { useTranslations, useLocale } from "next-intl";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const projects = [
  {
    titlekey: "projects.project1.title",
    descriptionkey: "projects.project1.description",
    icon: [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
      { Icon: SiJavascript, color: "#F7DF1E" },
      { Icon: SiFramer, color: "#0055FF" },
      { Icon: FaGithub, color: "#181717" }
    ],
    img: "/Jadoo Preview.png",
    url: "https://travel-website-landing-page-mu.vercel.app/en"
  },
  {
    titlekey: "projects.project2.title",
    descriptionkey: "projects.project2.description",
    icon: [
      { Icon: SiHtml5, color: "#E34F26" },
      { Icon: SiCss3, color: "#1572B6" },
      { Icon: SiJavascript, color: "#F7DF1E" },
      { Icon: FaGithub, color: "#181717" }
    ],
    img: "/Hania Preview.jpeg",
    url: "https://idristomy.github.io/Hania/"
  },
  {
    titlekey: "projects.project3.title",
    descriptionkey: "projects.project3.description",
    icon: [
      { Icon: SiHtml5, color: "#E34F26" },
      { Icon: SiNextdotjs, color: "#000000" },
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
      { Icon: FaGithub, color: "#181717" }
    ],
    img: "/Portfolio preview.png",
    url: "https://portfolio-idris-amara-rose.vercel.app/"
  }
];

function Projects() {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="w-fit mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-30 pb-10 overflow-hidden">
      <div className="max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Subtitle title={t("subtitle")} emoji="🔗" />
          <h1 className="md:text-4xl text-3xl font-bold text-white mt-2 mb-10">
            {t("title")}
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp}>
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
        </motion.div>

        <motion.h1
          className="animate-pulse duration-500 transition-all text-center mt-5"
          variants={fadeUp}
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
