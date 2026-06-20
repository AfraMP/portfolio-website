import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function FloatingRedirect() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <motion.a
        href="https://google.com" // Replace with your target routing path
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          y: -4,
          scale: 1.05,
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md text-xs font-mono font-bold tracking-wider text-white shadow-lg shadow-black/40 group transition-colors duration-300 hover:border-indigo-400/60"
      >
        {/* Animated Radar Pulse Core */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
        </span>

        <span className="group-hover:text-cyan-400 transition-colors">
          LAUNCH CONSOLE
        </span>

        <FiExternalLink className="text-sm text-gray-400 group-hover:text-white transition-colors animate-pulse" />
      </motion.a>
    </div>
  );
}
