export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="px-6 sm:px-10 py-4 sm:py-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-gray-100 z-50 relative hover:text-yellow-400 transition-colors">
          RBS<span className="text-yellow-400">.</span>
        </a>
      </div>
    </nav>
  );
}
