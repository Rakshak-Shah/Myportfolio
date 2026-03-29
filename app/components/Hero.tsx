import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import RaxakImage from '../Components/Images/Raxak.jpg'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-20 overflow-hidden ">

      {/* Background glow (optional) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center relative z-10 px-2 sm:px-0">
<div className="justify-center items-center">
      

       <div className="flex   flex-row-reverse    rounded-full  ">   
       
         <img src={RaxakImage.src} alt="Raxak" className="rounded-full object-cover h-70 w-70"/>
       <div className="flex-col"> <p className="text-yellow-400 tracking-[0.2rem] text-xs sm:text-sm uppercase mb-4 animate-fade-in-up justify-left ml-">
          Hello, I’m
        </p>
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-serif text-yellow-100 mb-6 leading-tight">
          Rakshayak Bahadur Shah
        </h1>
         <h2 className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 font-light">
          MERN Stack Developer
        </h2>
         <p className="text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-lg leading-relaxed px-4 sm:px-0">
          Crafting elegant, scalable web experiences using MongoDB, Express.js,
          React, and Node.js.
        </p>
        </div>
        </div>

       
         
       
</div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-6 sm:px-0">
          <a href="#projects" className="bg-yellow-400 text-black px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-yellow-300 transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] text-sm sm:text-base text-center block sm:inline-block w-full sm:w-auto">
            View My Work
          </a>

          <a href="#skills" className="bg-yellow-400 text-black px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-yellow-300 transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] text-sm sm:text-base text-center block sm:inline-block w-full sm:w-auto">
            Skills
          </a>

          <a href="#contact" className="bg-yellow-400 text-black px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-yellow-300 transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] text-sm sm:text-base text-center block sm:inline-block w-full sm:w-auto">
            Contact Me
          </a>
         
      
</div>
            {/* Social icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 text-gray-400 text-3xl sm:text-4xl mt-12 mb-16">
          <a href="https://github.com/Rakshak-Shah" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-yellow-400 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
          </a>
          
          <a href="https://www.linkedin.com/in/rakshayak-bdr-shah-shah-7ababb338/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-yellow-400 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
          </a>
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rakxakshah@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-yellow-400 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
          </a>
        </div>
        

      </div>
     
    </section>
  );
}
