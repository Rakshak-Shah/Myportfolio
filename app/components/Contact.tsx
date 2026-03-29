export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto">
      <p className="text-yellow-400 text-sm tracking-[0.2rem] mb-3 uppercase">Contact</p>
      <h2 className="text-4xl md:text-5xl font-serif text-gray-100 mb-8">Get In Touch</h2>

      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-gray-300 text-lg border-y border-white/10 py-6 max-w-xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-xl">📍</span> Kathmandu, Nepal
        </div>
        <div className="hidden sm:block text-white/20">|</div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-xl">📞</span> +977 9742415584
        </div>
      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rakxakshah@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-yellow-400 text-yellow-400 px-10 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium text-lg"
      >
        Say Hello
      </a>
    </section>
  );
}
