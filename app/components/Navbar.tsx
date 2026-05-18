export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-tight">
          Abhinay
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">

          <a href="#" className="hover:text-white transition">
            About
          </a>

          <a href="#" className="hover:text-white transition">
            Experience
          </a>

          <a href="#" className="hover:text-white transition">
            Projects
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}