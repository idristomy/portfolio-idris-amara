// File: app/about/page.tsx
import Subtitle from "@/Components/texts/Subtitle";
import Spline from "@splinetool/react-spline";

function About() {

    const primarySkills = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    ];

    const secondarySkills = [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "UI/UX Design", level: 50 }
  ];



  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <Subtitle title={"About Me"} emoji={"🙎"} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Get to know me more
          </h1>
        </div>

        {/* Main Content - 3D Character + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          
          {/* Left Side - 3D Spline Character */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1">
            {/* Glow effect behind character */}
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
            
            {/* Spline Container */}
            <div className="relative w-full h-full  bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden ">
              <Spline
                scene="https://prod.spline.design/aHcypBspSpAvQJHY/scene.splinecode"
                style={{
                    width: '100%',
                    height: '115%'
                }}
                />
            </div>
          </div>

          {/* Right Side - About Info */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-8">
              
              
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">👋</span>
                  <span className="leading-relaxed">
                     My Name is Idris, In Chinese is<span className="text-purple-400 font-semibold"> 伊德睿 (Yi deRui)</span>
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <span className="leading-relaxed">
                    For over 2 years developing and programming interfaces with JavaScript, React, and Next.js.
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="leading-relaxed">
                    Computer Science student passionate about creating exceptional digital experiences.
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <span className="leading-relaxed">
                    Calisthenics player - I believe in building strong bodies and strong code.
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="leading-relaxed font-semibold text-purple-400">
                    Small progress is still progress.
                  </span>
                </p>

              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-all duration-300">
                <p className="text-purple-400 font-semibold text-sm mb-1">Location</p>
                <p className="text-white font-bold">Algeria 🇩🇿</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-all duration-300">
                <p className="text-purple-400 font-semibold text-sm mb-1">Experience</p>
                <p className="text-white font-bold">2+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-5">
          {/* Primary Skills - Always Use */}
          <div className=" p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Technologies I Use Daily
            </h2>
            <p className="text-slate-400 text-center text-sm mb-6">Frontend Development</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 ">
              {primarySkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-1 py-3 rounded-xl"
                  title={skill.name}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-10 h-10 md:w-20 md:h-15 object-contain  md:grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Skills - Rarely Use */}
          <div className=" p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Technologies I'm Familiar With
            </h2>
            <p className="text-slate-400 text-center text-sm mb-6">Backend & Tools</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              {secondarySkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 px-1 py-3 rounded-xl"
                  title={skill.name}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-10 h-10 md:w-20 md:h-15 object-contain md:grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's work together!
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 bg-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;