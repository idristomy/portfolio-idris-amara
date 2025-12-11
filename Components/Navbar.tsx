"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiHome, TiUser } from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa6";
import { LuUniversity } from "react-icons/lu";
import { IoMdMailOpen } from "react-icons/io";
import { IoSunnySharp, IoMenu, IoClose } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname();
    const [isLangOpen, setIsLangIsOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { href: "/", iCon: TiHome },
        { href: "/about", iCon: TiUser },
        { href: "/projects", iCon: FaLightbulb },
        { href: "/education", iCon: LuUniversity },
        { href: "/contact", iCon: IoMdMailOpen }
    ];
    
    const flags = [
        { lang: "EN", className: "fi fi-sh" },
        { lang: "AR", className: "fi fi-sa" },
        { lang: "CN", className: "fi fi-cn fis" }
    ];

    return (
        <div className="fixed flex gap-5 justify-center md:mx-auto w-full mt-5 z-50 px-4">
            {/* Desktop Navbar */}
            <nav className="relative md:flex hidden px-5 py-2 h-fit rounded-2xl bg-slate-900/80 backdrop-blur-md border border-purple-500/20 shadow-lg">
                <ul className="flex justify-center items-center gap-3">
                    {navItems.map((item, idx) => {
                        const Icon = item.iCon;
                        const isActive = pathname === item.href;

                        return (
                            <li key={idx}>
                                <Link
                                    href={item.href}
                                    className={`
                                        rounded-full p-3 flex transition-all duration-300
                                        ${isActive
                                            ? "bg-purple-500 text-white shadow-purple-500/30 shadow-lg" 
                                            : "bg-slate-800/50 text-slate-300 hover:bg-purple-500/20 hover:text-purple-400"
                                        }
                                    `}
                                >
                                    <Icon size={22} />
                                </Link>
                            </li>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-8 bg-slate-700 mx-2"></div>

                    {/* Theme Toggle */}
                    <button className="rounded-full p-3 bg-slate-800/50 text-slate-300 cursor-pointer hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                        <IoSunnySharp size={22} />
                    </button>

                    {/* Language Selector */}
                    <button 
                        onClick={() => setIsLangIsOpen(!isLangOpen)}
                        className="flex items-center gap-1 cursor-pointer rounded-full p-3 bg-slate-800/50 text-slate-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                    >
                        <RiTranslate size={22} />
                        {isLangOpen ? <MdOutlineKeyboardArrowLeft size={20} /> : <MdOutlineKeyboardArrowRight size={20} />}
                    </button>
                </ul>

                {/* Language Dropdown - Desktop */}
                {isLangOpen && (
                    <div className="md:flex hidden flex-col rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/20 overflow-hidden absolute left-full ml-3 top-0 shadow-lg">
                        {flags.map((flag, idx) => (
                            <button 
                                key={idx} 
                                className="flex gap-3 items-center border-b border-slate-700 last:border-0 py-3 px-4 cursor-pointer hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                            >
                                <span className={`${flag.className} text-lg`}></span>
                                <p className="font-semibold">{flag.lang}</p>
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Mobile Navbar */}
            <nav className="fixed flex flex-col justify-start items-center gap-4 right-5 md:hidden py-3 px-2 w-14 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-purple-500/20 shadow-lg">
                <button 
                    className="cursor-pointer p-2 hover:text-purple-400 transition-colors duration-300"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {isNavOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </button>

                {isNavOpen && (
                    <>
                        {navItems.map((item, idx) => {
                            const Icon = item.iCon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setIsNavOpen(false)}
                                    className={`
                                        rounded-full p-2.5 flex transition-all duration-300
                                        ${isActive
                                            ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50" 
                                            : "bg-slate-800/50 text-slate-300 hover:bg-purple-500/20 hover:text-purple-400"
                                        }
                                    `}
                                >
                                    <Icon size={20} />
                                </Link>
                            );
                        })}

                        {/* Divider */}
                        <div className="h-px w-8 bg-slate-700 my-1"></div>

                        {/* Theme Toggle */}
                        <button className="rounded-full p-2.5 bg-slate-800/50 text-slate-300 cursor-pointer hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
                            <IoSunnySharp size={20} />
                        </button>

                        {/* Language Selector */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsLangIsOpen(!isLangOpen)}
                                className="flex items-center cursor-pointer  text-slate-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                            >
                                {isLangOpen ? <MdOutlineKeyboardArrowRight size={18} /> : <MdOutlineKeyboardArrowLeft size={18} />}
                                <RiTranslate size={20} />
                            </button>

                            {/* Language Dropdown - Mobile */}
                            {isLangOpen && (
                                <div className="flex flex-col rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/20 overflow-hidden absolute right-full top-0 mr-3 shadow-lg whitespace-nowrap">
                                    {flags.map((flag, idx) => (
                                        <button 
                                            key={idx} 
                                            className="flex justify-start items-center gap-2 border-b border-slate-700 last:border-0 py-2 px-3 cursor-pointer hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                                        >
                                            <span className={`${flag.className} text-sm`}></span>
                                            <p className="font-semibold text-sm">{flag.lang}</p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
}