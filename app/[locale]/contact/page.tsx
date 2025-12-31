// File: app/contact/page.tsx
'use client'

import { motion } from "framer-motion";
import Subtitle from "@/Components/texts/Subtitle";
import { useLocale, useTranslations } from 'use-intl' 

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

function Contact() {

  const t = useTranslations("ContactPage")
  const locale = useLocale()
  const isRTL = locale === "ar"

  // Title animation variants - from left or right based on locale
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? 100 : -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  // Form animation - from opposite direction
  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? -100 : 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-30">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center md:text-start mb-10"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Subtitle title={t('title')} emoji={"☎️"} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">{t('subtitle')}</h1>
          <p className="text-slate-400 text-lg">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-10 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <motion.div 
              className="flex flex-col gap-2"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <label className="text-purple-400 font-semibold text-sm">{t('firstName.label')} *</label>
              <input
                type="text"
                placeholder={t("firstName.placeholder")}
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Last Name */}
            <motion.div 
              className="flex flex-col gap-2"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <label className="text-purple-400 font-semibold text-sm">{t('lastName.label')} *</label>
              <input
                type="text"
                placeholder={t('lastName.placeholder')}
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex flex-col gap-2 col-span-1 md:col-span-2"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <label className="text-purple-400 font-semibold text-sm">{t("email.label")} *</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2  focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div 
              className="flex flex-col gap-2 col-span-1 md:col-span-2"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-purple-400 font-semibold text-sm">{t("message.label")} *</label>
              <textarea
                placeholder={t("message.placeholder")}
                rows={6}
                className="border-purple-500/30 border-2 rounded-xl p-4 text-lg placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              className="col-span-1 md:col-span-2 flex justify-center md:justify-start mt-4"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                type="submit"
                className="group relative py-4 px-8 font-bold text-lg bg-purple-500 text-white rounded-xl cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  {t("cta")}
                  {
                    locale === "ar" ?
                    <svg 
                      className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    :
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                </span>
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <motion.div 
            className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-white font-semibold mb-2">{t("email.label")}</h3>
            <p className="text-slate-400 text-sm">idrisamara314@gmail.com</p>
          </motion.div>

          <motion.div 
            className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <a href="tel:0549034559">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-white font-semibold mb-2">{t("phoneNumber.label")}</h3>
              <p className="text-slate-400 text-sm">(+213) 549034559</p>
            </a>
          </motion.div>

          <motion.div 
            className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-2">{t("location.label")}</h3>
            <p className="text-slate-400 text-sm">{t("location.value")}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;