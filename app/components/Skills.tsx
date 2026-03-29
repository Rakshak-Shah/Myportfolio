import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiGithub, SiPostman, SiDocker } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact className="text-4xl text-yellow-400 mb-4" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js", icon: <FaReact /> }
    ]
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-4xl text-yellow-400 mb-4" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: null }
    ]
  },
  {
    title: "Database",
    icon: <SiMongodb className="text-4xl text-yellow-400 mb-4" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <FaGitAlt className="text-4xl text-yellow-400 mb-4" />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker (Basic)", icon: <SiDocker /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-yellow-400 text-sm tracking-[0.2rem] mb-3 uppercase">My Expertise</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-100">Skills & Technologies</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif text-gray-100">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-black/40 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors cursor-default">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
