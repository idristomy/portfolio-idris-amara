// File: app/contact/page.tsx
'use client'

import { motion, Variants } from "framer-motion";
import Subtitle from "@/Components/texts/Subtitle";
import { useLocale, useTranslations } from 'next-intl'

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

function Contact() {
  const t = useTranslations("ContactPage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-30">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <motion.div
          className="text-center md:text-start mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Subtitle title={t('title')} emoji={"☎️"} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">{t('subtitle')}</h1>
          <p className="text-slate-400 text-lg">{t("description")}</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-10 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col gap-2" variants={fadeUp}>
              <label className="text-purple-400 font-semibold text-sm">{t('firstName.label')} *</label>
              <input
                type="text"
                placeholder={t("firstName.placeholder")}
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2" variants={fadeUp}>
              <label className="text-purple-400 font-semibold text-sm">{t('lastName.label')} *</label>
              <input
                type="text"
                placeholder={t('lastName.placeholder')}
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2 col-span-1 md:col-span-2" variants={fadeUp}>
              <label className="text-purple-400 font-semibold text-sm">{t("email.label")} *</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2 col-span-1 md:col-span-2" variants={fadeUp}>
              <label className="text-purple-400 font-semibold text-sm">{t("message.label")} *</label>
              <textarea
                placeholder={t("message.placeholder")}
                rows={6}
                className="border-purple-500/30 border-2 rounded-xl p-4 text-lg placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                required
              />
            </motion.div>

            <motion.div
              className="col-span-1 md:col-span-2 flex justify-center md:justify-start mt-4"
              variants={fadeUp}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative py-4 px-8 font-bold text-lg bg-purple-500 text-white rounded-xl cursor-pointer transition-colors duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="flex items-center gap-2">
                  {t("cta")}
                  {isRTL ? (
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </span>
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { emoji: "📧", label: t("email.label"), value: "idrisamara314@gmail.com" },
            { emoji: "📱", label: t("phoneNumber.label"), value: "(+213) 549034559", href: "tel:0549034559" },
            { emoji: "📍", label: t("location.label"), value: t("location.value") },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-colors duration-300"
            >
              {item.href ? (
                <a href={item.href}>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-slate-400 text-sm">{item.value}</p>
                </a>
              ) : (
                <>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-slate-400 text-sm">{item.value}</p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
