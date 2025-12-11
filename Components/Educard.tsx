// File: components/Educard.tsx
"use client";

type Eduprops = {
  title: string;
  icon: string;
  description: string;
  location: string;
  date: string;
};

function Educard({ title, icon, description, location, date }: Eduprops) {
  return (
    <div className="w-full max-w-lg h-fit p-6 md:p-7 border rounded-2xl border-purple-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center gap-2 md:gap-3">
        <span className="text-2xl md:text-3xl">{icon}</span>
        <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
      </div>

      <p className="pt-2 md:pt-3 text-slate-300 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap justify-between items-center pt-4 md:pt-6 border-t border-slate-700/50 mt-4 gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm">📍</span>
          <p className="font-semibold text-purple-400 text-sm">{location}</p>
        </div>
        <p className="font-light text-slate-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default Educard;