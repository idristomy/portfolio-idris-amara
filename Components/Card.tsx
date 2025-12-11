"use client";
import { useState } from 'react';
import Link from 'next/link';

type Cardprops = {
    title: string,
    description: string,
    technologies: string[],
    imgUrl: string,
    projectUrl: string
}
function Card({ title, description, technologies, imgUrl, projectUrl }: Cardprops) {

    const [isHovered, setIsHovered] = useState(false);
    return(
        
        <Link href={projectUrl} target='_blank'>
            <div 
                className='relative flex flex-col gap-1 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-5 rounded-2xl hover:border-purple-500/50 hover:scale-105 transition-all duration-500 cursor-pointer h-full max-w-60 '
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
                           
                                <img src={tech} alt="" 
                                className='w-5'
                                />
                           
                        ))}
                    </div>
                    <div className='relative w-full h-32 overflow-hidden rounded-xl '>
                        <img src={imgUrl} alt={title}
                        className='w-full h-full object-cover hover:scale-105 transition-all duration-300'
                        />
                        <div className={`absolute inset-0 bg-black transition-opacity ${
                            isHovered ? 'opacity-50' : 'opacity-0'
                        }`}></div>
                        <div className={`absolute inset-0 flex justify-center items-center gap-3 duration-500 transition-opacity ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                            <img src="/eye-alt-svgrepo-com" alt="eye" />
                            <p className='font-semibold text-lg'>Preview</p>
                        </div>
                    </div>
            </div>
        </Link>
    );
}

export default Card;