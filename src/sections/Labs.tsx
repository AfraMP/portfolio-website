import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Assumes react-router-dom is used, or replace with standard anchor tag

export default function Labs() {
  const navigate = useNavigate();

  return (
    <section id="labs" className="scroll-mt-24 max-w-5xl mx-auto px-4">
      <div className="glass-card p-8 rounded-2xl border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-indigo-500/20 bg-gradient-to-r from-white/[0.01] via-transparent to-transparent">
        {/* Subtle top ambient accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-purple-500/0 opacity-50 group-hover:via-indigo-500/60 transition-all duration-500" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Side: Disguised R&D Title Context */}
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                EXPERIMENTAL SYSTEM ENVIRONMENT
              </span>
            </div>

            <h2 className="text-xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
              Advanced Research & Open Source Labs
            </h2>

            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              A private, sandbox container detailing secondary architectural
              testing modules, automated background utilities, data processing
              architectures, and experimental computing protocols.
            </p>
          </div>

          {/* Right Side: Action Trigger Redirect */}
          <motion.button
            onClick={() => navigate("/ai-labs")} // Swaps views safely onto your sub-route canvas
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.02] hover:bg-indigo-600/10 border border-white/5 hover:border-indigo-500/40 text-xs font-mono font-bold tracking-wider text-gray-300 hover:text-white transition-all duration-300 shadow-md whitespace-nowrap self-stretch md:self-auto justify-center"
          >
            ENTER CONSOLE{" "}
            <FiArrowRight className="text-sm text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
