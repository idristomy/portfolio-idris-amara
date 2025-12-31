"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Cardprops = {
    title: string,
    description: string,
    technologies: string[],
    imgUrl: string,
    projectUrl: string,
    isRTL: boolean
}

function Card({ title, description, technologies, imgUrl, projectUrl, isRTL }: Cardprops) {

    const [isHovered, setIsHovered] = useState(false);

    // Icon animation variants based on locale
    const iconVariants = {
        hidden: { 
            opacity: 0, 
            x: isRTL ? -50 : 50 
        },
        visible: (i: number) => ({ 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.8,
                delay: i * 0.4
            }
        })
    };

    return(
        
        <Link href={projectUrl} target='_blank'>
            <div 
                className='relative flex flex-col gap-3 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-5 rounded-2xl hover:border-purple-500/50 hover:scale-105 transition-all duration-600 cursor-pointer h-full md:max-w-70 max-w-60'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                    <h1 className='text-xl font-bold'>
                        {title}
                    </h1>
                    <p className='text-sm text-slate-500 grow'>
                        {description}
                    </p>
                    <div className='flex gap-3 mb-2'>
                        {technologies.map((tech, idx) => (
                           <motion.div
                                key={idx}
                                className="w-8 h-8 flex items-center justify-center 
                                rounded-full bg-white 
                                border border-purple-500/40 
                                shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                variants={iconVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={idx}
                            >
                               <img src={tech} alt="" 
                               className='w-4 h-4 object-contain'
                               />
                           </motion.div>
                           
                        ))}
                    </div>
                    <div className='relative w-full h-38 overflow-hidden rounded-xl'>
                        <img src={imgUrl} alt={title}
                        className={`w-full h-full object-cover ${isHovered ? 'scale-120 opacity-50' : null} transition-all duration-500 `}
                        />
                        <div className={`absolute inset-0 bg-black transition-opacity ${
                            isHovered ? 'opacity-70' : 'opacity-0'
                        }`}></div>
                        <div className={`absolute inset-10 flex justify-center items-center gap-1 duration-800 transition-opacity ease-in-out ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                            <img 
                                className='w-6'
                                src="/icons/icons8-eye-30.png" 
                                alt="eye" />
                            <p className='font-semibold text-lg'>Preview</p>
                        </div>
                    </div>
                    
            </div>
        </Link>
    );
}

export default Card;