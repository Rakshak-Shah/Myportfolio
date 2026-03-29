// components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-yellow-400 text-xs sm:text-sm tracking-[0.2rem] mb-3 uppercase">About Me</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-100">Passionate About Code</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
        {/* Left Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl aspect-square flex flex-col items-center justify-center p-8 relative overflow-hidden group">
          <div className="w-32 h-32 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6 text-5xl font-serif text-yellow-400 border border-yellow-400/20">
            R
          </div>
          <h3 className="text-xl text-gray-200 font-medium">Full Stack Developer</h3>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        {/* Right Content */}
        <div className="text-left">
          <p className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg">
            Motivated and detail-oriented Computer Science student with hands-on excitement and experience in full-stack web development projects using the MERN stack. Skilled in building scalable web applications and RESTful APIs, I am currently expanding my expertise in DevOps tools such as Docker and version control systems.
            <br /><br />
            I am passionate about learning modern technologies and contributing my efforts to real-world software solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <h4 className="text-yellow-400 font-serif text-xl sm:text-2xl mb-2">Education</h4>
              <p className="text-gray-100 font-medium">B.Sc. in CSIT (Batch 2078)</p>
              <p className="text-gray-400 text-sm mt-1">Siddhanath Science Campus,<br/>Tribhuvan University</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <h4 className="text-yellow-400 font-serif text-xl sm:text-2xl mb-2">Certifications</h4>
              <p className="text-gray-100 font-medium">MERN Stack Development Course</p>
              <p className="text-gray-400 text-sm mt-1">Broadway Infosys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
