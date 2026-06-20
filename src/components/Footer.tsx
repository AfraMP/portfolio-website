import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCpu } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/AfraMP",
      label: "GitHub",
      color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/afra-m-p/",
      label: "LinkedIn",
      color: "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/user2670iH/",
      label: "LeetCode",
      color:
        "hover:text-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
    },
    {
      icon: <SiHackerrank />,
      url: "https://www.hackerrank.com/profile/afram_p245",
      label: "HackerRank",
      color:
        "hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]",
    },
    {
      icon: <FiMail />,
      url: "mailto:afram.p245@gmail.com",
      label: "Email",
      color:
        "hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]",
    },
  ];

  return (
    <footer className="w-full mt-32 border-t border-white/5 bg-[#07070a]/60 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Branding & Availability Tag */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-black tracking-wider text-white">
            Fathimathul Afra M P<span className="text-indigo-400">.</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Opportunities
          </div>
        </div>

        {/* Center: Social Hub */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -4, scale: 1.1 }}
              className={`p-3 rounded-xl bg-white/[0.02] border border-white/5 text-gray-400 text-lg transition-all duration-300 ${link.color}`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Right: Copyright, Hidden Labs Link, & Back-To-Top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            {/* Minimalist Hidden Gateway Button */}
            <button
              onClick={() => navigate("/ai-labs")}
              className="font-mono text-[10px] text-gray-600 hover:text-indigo-400 transition-colors flex items-center gap-1 bg-white/[0.01] hover:bg-indigo-500/5 px-2 py-1 rounded border border-transparent hover:border-indigo-500/20"
            >
              <FiCpu className="text-[11px]" /> SYS_LABS // v1.0
            </button>

            <p className="text-xs text-gray-500 tracking-wide font-normal">
              &copy; {currentYear} &bull; Afra &bull; Built with React
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-[11px] text-gray-400 hover:text-white transition-all duration-300"
          >
            Jump to Init{" "}
            <FiArrowUp className="text-xs text-indigo-400 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
