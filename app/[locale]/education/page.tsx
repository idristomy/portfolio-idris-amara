"use client"

import { motion, Variants } from "framer-motion";
import Educard from "@/Components/Educard";
import Subtitle from "@/Components/texts/Subtitle";
import { useLocale, useTranslations } from 'next-intl'

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const lineVariant: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease } },
};

const dotVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

const experiences = [
  {
    id: 1,
    icon: "💻",
    titlekey: "education.educard1.title",
    locationkey: "education.educard1.location",
    periodkey: "education.educard1.period",
    descriptionkey: "education.educard1.description",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 2,
    icon: "🎓",
    titlekey: "education.educard2.title",
    locationkey: "education.educard2.location",
    periodkey: "education.educard2.period",
    descriptionkey: "education.educard2.description",
  },
  {
    id: 3,
    icon: "💻",
    titlekey: "education.educard3.title",
    locationkey: "education.educard3.location",
    periodkey: "education.educard3.period",
    descriptionkey: "education.educard3.description",
  },
  {
    id: 4,
    icon: "📚",
    titlekey: "education.educard4.title",
    locationkey: "education.educard4.location",
    periodkey: "education.educard4.period",
    descriptionkey: "education.educard4.description",
  }
];

function Education() {
  const t = useTranslations("EducationPage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const cardLeft = isRTL ? fadeRight : fadeLeft;
  const cardRight = isRTL ? fadeLeft : fadeRight;

  return (
    <div className="flex flex-col justify-center gap-5 min-h-screen pt-20 md:pt-30 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
      {/* Header */}
      <motion.div
        className="text-start"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <Subtitle title={t("title")} emoji="💼" />
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{t('subtitle')}</h1>
      </motion.div>

      {/* Timeline */}
      <div className="relative pt-10 w-full">
        {/* Desktop center line */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30 transform -translate-x-1/2"
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Mobile left line */}
        <motion.div
          className={`md:hidden absolute ${locale === "ar" ? "right-2" : "left-4"} top-0 bottom-0 w-0.5 bg-purple-500/30`}
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative mb-8 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">

              {/* Left card (odd IDs) */}
              <div className={`hidden md:flex ${exp.id % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                {exp.id % 2 === 1 && (
                  <motion.div
                    variants={cardLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
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

              {/* Center dot */}
              <div className="hidden md:flex relative z-10 justify-center">
                <motion.div
                  className="w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50"
                  variants={dotVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 + 0.15 }}
                />
              </div>

              {/* Right card (even IDs) */}
              <div className={`hidden md:flex ${exp.id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {exp.id % 2 === 0 && (
                  <motion.div
                    variants={cardRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
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

              {/* Mobile view */}
              <div className="md:hidden w-full flex gap-4 items-start pl-2">
                <div className="relative z-10 shrink-0">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-950 shadow-lg shadow-purple-500/50 mt-2"
                    variants={dotVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  />
                </div>
                <motion.div
                  className="flex-1"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
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
