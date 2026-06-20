export default function Navbar() {
  const navItems = ["Summary", "Skills", "Projects", "Experience"];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-black tracking-wider">
          Fathimathul Afra M P<span className="text-accentGlow">.</span>
        </div>
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative py-1"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
