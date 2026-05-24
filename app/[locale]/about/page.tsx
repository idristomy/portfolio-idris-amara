"use client"

import { useLocale, useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import {
  FileCode2,
  Palette,
  FileJson,
  Atom,
  Box,
  Wind,
  LayoutGrid,
  GitBranch,
  Sparkles,
  Github,
  Code2,
  Terminal,
  Database,
  Layers
} from "lucide-react";
import Subtitle from "@/Components/texts/Subtitle";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function About() {
    const primarySkills = [
        { name: "HTML", Icon: FileCode2 },
        { name: "CSS", Icon: Palette },
        { name: "JavaScript", Icon: FileJson },
        { name: "React", Icon: Atom },
        { name: "Next.js", Icon: Box },
        { name: "Tailwind CSS", Icon: Wind },
        { name: "Bootstrap", Icon: LayoutGrid },
        { name: "Git", Icon: GitBranch },
        { name: "Framer Motion", Icon: Sparkles },
    ];

    const secondarySkills = [
        { name: "GitHub", Icon: Github },
        { name: "Python", Icon: Code2 },
        { name: "Node.js", Icon: Terminal },
        { name: "MongoDB", Icon: Database },
        { name: "Express.js", Icon: Layers },
    ];

    const t = useTranslations("AboutPage");
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-30 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Subtitle title={t('subtitle')} emoji="👨‍💻" />
                    <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                        {t('title')}
                    </h1>
                </motion.div>

                {/* Main Content - Avatar + Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">

                    {/* Left Side - Animated Avatar */}
                    <motion.div
                        className="relative w-full h-100"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-purple-500/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        <motion.div
                            className="relative w-full h-full flex items-center justify-center"
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-72 h-72 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                                <div className="w-64 h-64 bg-slate-900 rounded-full flex items-center justify-center text-9xl">
                                    👨‍💻
                                </div>
                            </div>

                            {[
                                { Icon: Code2, position: { top: '10%', left: '50%' } },
                                { Icon: Database, position: { top: '50%', right: '10%' } },
                                { Icon: Sparkles, position: { bottom: '10%', left: '50%' } },
                                { Icon: Terminal, position: { top: '50%', left: '10%' } }
                            ].map(({ Icon, position }, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-slate-900 p-3 rounded-full border border-purple-500/30 shadow-lg"
                                    style={position}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                                >
                                    <Icon className="w-6 h-6 text-purple-400" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - About Info */}
                    <motion.div
                        className="space-y-6 order-1 lg:order-2"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
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
                                    <span className="leading-relaxed">{t('description.p2')}</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl">🎓</span>
                                    <span className="leading-relaxed">{t('description.p3')}</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl">💪</span>
                                    <span className="leading-relaxed">{t('description.p4')}</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl">🚀</span>
                                    <span className="leading-relaxed font-semibold text-purple-400">{t('description.p5')}</span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.03, borderColor: "rgba(168,85,247,0.5)" }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center transition-colors duration-300"
                            >
                                <p className="text-purple-400 font-semibold text-sm mb-1">{t('location.label')}</p>
                                <p className="text-white font-bold">{t('location.value')}</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.03, borderColor: "rgba(168,85,247,0.5)" }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center transition-colors duration-300"
                            >
                                <p className="text-purple-400 font-semibold text-sm mb-1">{t('Experience.label')}</p>
                                <p className="text-white font-bold">{t('Experience.value')}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <div className="space-y-5">
                    <motion.div
                        className="p-6 md:p-8"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-2 text-center">{t('skills.title1')}</h2>
                        <p className="text-slate-400 text-center text-sm mb-6">{t('skills.subtitle1')}</p>

                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-6"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {primarySkills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.12, y: -4 }}
                                    className="group flex flex-col items-center gap-2 cursor-pointer bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-4 py-4 rounded-xl hover:border-purple-500/50 transition-colors duration-300"
                                    title={skill.name}
                                >
                                    <skill.Icon className="w-10 h-10 md:w-12 md:h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="p-6 md:p-8"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-2 text-center">{t('skills.title2')}</h2>
                        <p className="text-slate-400 text-center text-sm mb-6">{t('skills.subtitle2')}</p>

                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-6"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {secondarySkills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.12, y: -4 }}
                                    className="group flex flex-col items-center gap-2 cursor-pointer bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-4 py-4 rounded-xl hover:border-purple-500/50 transition-colors duration-300"
                                    title={skill.name}
                                >
                                    <skill.Icon className="w-10 h-10 md:w-12 md:h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10">
                        <h2 className="text-3xl font-bold text-white mb-4">{t('contact.title')}</h2>
                        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">{t('contact.description')}</p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            {t('contact.cta')}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default About;
