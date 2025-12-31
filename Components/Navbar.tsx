// File: components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { TiHome, TiUser } from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa6";
import { LuUniversity } from "react-icons/lu";
import { IoMdMailOpen } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useLocale } from "next-intl";

export default function Navbar() {
    const pathname = usePathname();
    const locale = useLocale();
    const router = useRouter();
    const [isLangOpen, setIsLangIsOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { href: "/", iCon: TiHome },
        { href: "/about", iCon: TiUser },
        { href: "/projects", iCon: FaLightbulb },
        { href: "/education", iCon: LuUniversity },
        { href: "/contact", iCon: IoMdMailOpen }
    ];
    
    const Languages = [
        { lang: "EN", className: "fi fi-sh", locale: "en" },
        { lang: "AR", className: "fi fi-sa", locale: "ar" },
        { lang: "CN", className: "fi fi-cn fis", locale: "cn" }
    ];

    const switchLanguage = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsLangIsOpen(false);
    };

    return (
        <div className="fixed flex gap-5 justify-center md:mx-auto w-full mt-5 z-50 px-4">
            {/* Desktop Navbar */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative md:flex hidden px-5 py-2 h-fit rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/20 shadow-lg"
            >
                <ul className="flex justify-center items-center gap-3">
                    {navItems.map((item, idx) => {
                        const Icon = item.iCon;
                        const isActive = pathname === item.href;

                        return (
                            <motion.li 
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`
                                        rounded-full p-3 flex transition-all duration-300
                                        ${isActive
                                            ? "bg-purple-500 text-white shadow-purple-500/30 shadow-lg" 
                                            : "bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-purple-500/20 hover:text-purple-400"
                                        }
                                    `}
                                >
                                    <Icon size={22} />
                                </Link>
                            </motion.li>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-8 bg-slate-300 dark:bg-slate-700 mx-2"></div>

                    {/* Theme Toggle */}
                   

                    {/* Language Selector */}
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsLangIsOpen(!isLangOpen)}
                        className="flex items-center gap-1 cursor-pointer rounded-full p-3 bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                    >
                        <RiTranslate size={22} />
                        {locale === "ar" ?
                            isLangOpen ? <MdOutlineKeyboardArrowRight size={20} /> : <MdOutlineKeyboardArrowLeft size={20} />
                            :
                            isLangOpen ? <MdOutlineKeyboardArrowLeft size={20} /> : <MdOutlineKeyboardArrowRight size={20} />
                        }
                    </motion.button>
                </ul>

                {/* Language Dropdown - Desktop */}
                <AnimatePresence>
                    {isLangOpen && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, x:locale === 'ar' ? 20 : -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: locale === 'ar' ? 20 :-20 }}
                            transition={{ duration: 0.5 }}
                            className={`md:flex hidden flex-col rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/20 overflow-hidden absolute ${locale === "ar" ? 'right-full mr-3' : 'left-full ml-3'} top-0 shadow-lg`}
                        >
                            {Languages.map((lang, idx) => (
                                <motion.button 
                                    key={idx}
                                    whileHover={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                                    onClick={() => switchLanguage(lang.locale)}
                                    className={`flex gap-3 items-center justify-center border-b border-slate-200 dark:border-slate-700 last:border-0 py-2 px-3 cursor-pointer transition-all duration-300
                                        ${locale === lang.locale 
                                            ? 'bg-purple-500/30 text-purple-600 dark:text-purple-400' 
                                            : 'text-slate-700 dark:text-slate-300'
                                        }`}
                                >
                                    <span className={`${lang.className} text-sm`}></span>
                                    <p className="font-semibold text-sm">{lang.lang}</p>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Navbar */}
            <motion.nav 
                initial={{ x: locale === "ar" ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`fixed flex flex-col justify-start items-center gap-4 ${locale === "ar" ? "left-4" : "right-5"} md:hidden py-3 px-2 w-14 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/20 shadow-lg`}
            >
                <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer p-2 text-slate-700 dark:text-slate-300 hover:text-purple-400 transition-colors duration-300"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {isNavOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </motion.button>

                <AnimatePresence>
                    {isNavOpen && (
                        <>
                            {navItems.map((item, idx) => {
                                const Icon = item.iCon;
                                const isActive = pathname === item.href;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: locale === "ar" ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: locale === "ar" ? -20 : 20 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsNavOpen(false)}
                                            className={`
                                                rounded-full p-2.5 flex transition-all duration-300
                                                ${isActive
                                                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50" 
                                                    : "bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-purple-500/20 hover:text-purple-400"
                                                }
                                            `}
                                        >
                                            <Icon size={20} />
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Divider */}
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                className="h-px w-8 bg-slate-300 dark:bg-slate-700 my-1"
                            />

                            {/* Theme Toggle */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: navItems.length * 0.05 }}
                            >
                              
                            </motion.div>

                            {/* Language Selector */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: (navItems.length + 1) * 0.05 }}
                                className="relative"
                            >
                                <button 
                                    onClick={() => setIsLangIsOpen(!isLangOpen)}
                                    className="flex items-center cursor-pointer text-slate-700 dark:text-slate-300 hover:text-purple-400 transition-all duration-300"
                                >
                                    <RiTranslate size={30} />
                                </button>

                                <AnimatePresence>
                                    {isLangOpen && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.9, x: locale === 'ar' ? -20 : 20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className={`flex flex-col rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/20 overflow-hidden absolute top-0 shadow-lg whitespace-nowrap ${locale === "ar" ? "left-full ml-5" : "right-full mr-5"}`}
                                        >
                                            {Languages.map((lang, idx) => (
                                                <motion.button 
                                                    key={idx}
                                                    whileHover={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                                                    onClick={() => switchLanguage(lang.locale)}
                                                    className={`flex justify-start items-center gap-2 border-b border-slate-200 dark:border-slate-700 last:border-0 py-2 px-3 cursor-pointer transition-all duration-300
                                                        ${locale === lang.locale 
                                                            ? 'bg-purple-500/30 text-purple-600 dark:text-purple-400' 
                                                            : 'text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    <span className={`${lang.className} text-sm`}></span>
                                                    <p className="font-semibold text-sm">{lang.lang}</p>
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}