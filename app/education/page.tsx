// File: app/education/page.tsx
import Educard from "@/Components/Educard";
import Subtitle from "@/Components/texts/Subtitle";

const experiences = [
  {
    id: 1,
    icon: "💻",
    title: "Freelance Frontend Developer",
    location: "Algeria (Remote)",
    period: "2025 - Present",
    description:
      "Building modern, responsive web applications for clients worldwide. Specializing in React, Next.js, while delivering optimized and scalable solutions.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 2,
    icon: "💻",
    title: "Web Development Intern",
    location: "Egypt, Menofia",
    period: "12 Sep 2024 - 12 Oct 2024",
    description:
      "Completed a one-month internship focused on core web technologies. Built a fully functional website using HTML, CSS, and JavaScript while improving responsive design and problem-solving skills.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"]
  },
  {
    id: 3,
    icon: "🎓",
    title: "Bachelor's Degree in Computer Science",
    location: "USTHB, Algeria",
    period: "2023 - Present",
    description:
      "Pursuing a Bachelor's degree in Computer Science, learning programming fundamentals, algorithms, data structures, and web technologies.",
    tags: ["Computer Science", "Programming", "Web Development"]
  },
  {
    id: 4,
    icon: "📚",
    title: "High School Diploma – Experimental Sciences",
    location: "Omer El Mokhtar High School, Algeria",
    period: "2020 - 2023",
    description:
      "Completed high school studies in Experimental Sciences with strong foundations in mathematics, physics, and analytical reasoning.",
    tags: ["Experimental Sciences", "Mathematics", "Physics"]
  }
];


function Education() {
  return (
    <div className="flex flex-col justify-center gap-5 min-h-screen pt-20 md:pt-30 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 ">
      {/* Header */}
      <div className="text-left">
        <Subtitle title="Experiences" emoji="💼"/>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Experiences & Degrees</h1>
      </div>
      
      {/* Timeline Container */}
      <div className="relative pt-10 w-full">
        {/* Continuous Center Line - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30 transform -translate-x-1/2"></div>
        
        {/* Continuous Left Line - Mobile Only */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
        
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative mb-8 md:mb-16">
            {/* Desktop: 3-Column Grid | Mobile: Single Column */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
              
              {/* LEFT SIDE - Desktop only, shows on EVEN index */}
              <div className={`hidden md:flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {idx % 2 === 0 && (
                  <Educard
                    title={exp.title}
                    icon={exp.icon}
                    description={exp.description}
                    location={exp.location}
                    date={exp.period}
                  />
                )}
              </div>

              {/* CENTER - Timeline Dot (Hidden on mobile) */}
              <div className="hidden md:flex relative z-10 justify-center">
                {/* Dot */}
                <div className="w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50"></div>
              </div>

              {/* RIGHT SIDE - Desktop only, shows on ODD index */}
              <div className={`hidden md:flex ${idx % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {idx % 2 === 1 && (
                  <Educard
                    title={exp.title}
                    icon={exp.icon}
                    description={exp.description}
                    location={exp.location}
                    date={exp.period}
                  />
                )}
              </div>

              {/* MOBILE VIEW - Single column with left timeline */}
              <div className="md:hidden w-full flex gap-4 items-start pl-2">
                {/* Mobile Dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-950 shadow-lg shadow-purple-500/50 mt-2"></div>
                </div>
                {/* Card */}
                <div className="flex-1">
                  <Educard
                    title={exp.title}
                    icon={exp.icon}
                    description={exp.description}
                    location={exp.location}
                    date={exp.period}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;