"use client";
import Link from 'next/link';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';

type Tech = { Icon: IconType; color: string };

type Cardprops = {
    title: string,
    description: string,
    technologies: Tech[],
    imgUrl: string,
    projectUrl: string,
    isRTL: boolean
}

const iconContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } }
};

const iconItem: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } }
};

function Card({ title, description, technologies, imgUrl, projectUrl }: Cardprops) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rawRotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rawRotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
    const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 20 });
    const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link href={projectUrl} target='_blank'>
            <motion.div
                style={{ rotateX, rotateY, transformPerspective: 900 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(168,85,247,0.18)" }}
                transition={{ duration: 0.2 }}
                className='relative flex flex-col gap-3 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-5 rounded-2xl hover:border-purple-500/50 cursor-pointer h-full md:max-w-70 max-w-60'
            >
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='text-sm text-slate-500 grow'>{description}</p>

                <motion.div
                    className='flex gap-3 mb-2'
                    variants={iconContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {technologies.map(({ Icon, color }, idx) => (
                        <motion.div
                            key={idx}
                            variants={iconItem}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                        >
                            <Icon className='w-4 h-4' style={{ color }} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className='relative w-full h-38 overflow-hidden rounded-xl'>
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 240px, 280px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/60 flex justify-center items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img className='w-6' src="/icons/icons8-eye-30.png" alt="eye" />
                        <p className='font-semibold text-lg text-white'>Preview</p>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    );
}

export default Card;
