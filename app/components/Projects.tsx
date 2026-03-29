import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-yellow-400 text-sm tracking-[0.2rem] mb-3 uppercase">My Work</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-100">Featured Projects</h2>
      </div>

      <div className="space-y-16 sm:space-y-24">
        {[
          {
            num: "01",
            title: "Restaurant Order Management System (ROMS)",
            desc: "Developed a QR-based food ordering system, enabling customers to place orders directly from their table without staff assistance. Implemented real-time order tracking and integrated digital payment functionality.",
            stack: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            imageColor: "bg-gradient-to-br from-gray-800 to-black"
          }
        ].map((project, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

            {/* Preview Area (Simulating Image) */}
            <div className={`h-64 sm:h-80 md:h-96 w-full ${project.imageColor} relative flex items-center justify-center group`}>
              <span className="text-[10rem] sm:text-[15rem] font-serif font-bold text-white/5 select-none pointer-events-none absolute">
                {project.num}
              </span>

              {/* Overlay on Hover (Optional) */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition flex items-center gap-2">
                  <Github size={20} /> Code
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2">
                  <ExternalLink size={20} /> Live Demo
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-serif text-yellow-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-black/30 text-gray-400 px-3 py-1 rounded text-sm border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Mobile buttons (visible always on mobile, hidden on desktop if hover effect is used, but for accessibility keep duplicate or adjust) */}
              <div className="flex gap-4 md:hidden">
                <button className="flex items-center gap-2 text-sm border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg">
                  <Github size={16} /> Code
                </button>
                <button className="flex items-center gap-2 text-sm bg-yellow-400 text-black px-4 py-2 rounded-lg">
                  <ExternalLink size={16} /> Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
