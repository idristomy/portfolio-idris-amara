
import Card from "@/Components/Card";
import Subtitle from "@/Components/texts/Subtitle";


function Projects () {

    const projects = [
          {
    title: "TOG System",
    description: "Ecommerce website for a cloud accounting platform with invoices, user dashboards, and accountant follow-up.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/tog-system.png",
    url: "#"
  },
  {
    title: "Chess Game",
    description: "A fully playable chess game built using React, featuring all valid moves and gameplay animations.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/chess-game.png",
    url: "#"
  },
  {
    title: "Four Connect",
    description: "A Connect-4 game where two players compete to align four pieces using React and JavaScript.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/four-connect.png",
    url: "#"
  },
  {
    title: "TechModern Landing",
    description: "A modern landing page template designed for tech companies with smooth UI and responsive layout.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/techmodern-landing.png",
    url: "#"
  },
  {
    title: "Nest Power Landing",
    description: "A responsive landing page for a renewable energy company with strong UI and animations.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/nest-power.png",
    url: "#"
  },
  {
    title: "Country Finder",
    description: "Dynamic web app using REST Countries API to search countries by name, region, and show complete info.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/country-finder.png",
    url: "#"
  },
  {
    title: "TOG Landing",
    description: "A modern and responsive landing page for the TOG company built with clean UI sections.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/tog-landing.png",
    url: "#"
  },
  {
    title: "Small Market Example",
    description: "A simple online store UI featuring product cards, filters, and category sections.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/small-market.png",
    url: "#"
  },
  {
    title: "Guess The Number",
    description: "Mini-game where players guess a random number and receive hints until they win.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/guess-number.png",
    url: "#"
  },
  {
    title: "Pig Game",
    description: "Dice game for two players where each tries to reach a target score first.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/pig-game.png",
    url: "#"
  },
  {
    title: "Bankist",
    description: "A modern bank UI allowing login, transfers, transaction history, and loan requests.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/bankist.png",
    url: "#"
  },
  {
    title: "My Portfolio",
    description: "My personal portfolio website showing my projects, skills, and experience.",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    img: "/projects/portfolio.png",
    url: "#"
  },
    ]


    return(
        <div className="min-h-screen w-fit mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-30">
            <div className=" ">
                <Subtitle title="projects" emoji="🔗" /> 
                <h1 className="xl:text-4xl md:text-3xl text-xl font-bold text-white mt-2 mb-10">Projecs & Works</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {projects.map((item, idx) => (
                        <Card 
                            title={item.title}
                            description={item.description}
                            technologies={item.icon}
                            imgUrl={item.img}
                            projectUrl={item.url}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )
};  

export default Projects;
