
type SubtitleProps = {
    title: string;
    emoji: string;
}

function Subtitle ({title, emoji} : SubtitleProps ) {

    return(
        <div className="flex items-center bg-[#14142A] rounded-4xl py-2 px-4 w-fit"> 
            <span className="text-xl">{emoji}</span>
            <p className="lg:text-xl text-sm font-semibold text-purple-400  pl-2">{title}</p>
            <span className="w-0.5 h-4 ml-1 bg-purple-300"></span>
        </div>
    );
}

export default Subtitle;