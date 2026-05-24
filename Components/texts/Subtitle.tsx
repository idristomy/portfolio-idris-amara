'use client'

type SubtitleProps = {
    title: string;
    emoji: string;
}

function Subtitle ({title, emoji} : SubtitleProps ) {

    return(
        <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#14142A]">
            <span className="text-xl">{emoji}</span>
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase flex items-center">
                {title}
                <span className="inline-block w-0.5 h-3.5 bg-purple-400 ml-0.5 animate-fade"></span>
            </span>
        </div>
    );
}

export default Subtitle;