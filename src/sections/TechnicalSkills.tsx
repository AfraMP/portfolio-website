import { motion } from "framer-motion";

export default function TechnicalSkills() {
  const deepDives = [
    {
      code: "MOD-01 // CONCURRENCY",
      title: "ZONE Suite Sync Infrastructure",
      challenge:
        "Handling bulk data ingestion and real-time webhook operations across a multi-tenant environment without causing memory leaks or event-loop blocks.",
      solution:
        "Implemented memory-safe Node.js streams paired with custom database aggregation pipelines. Integrated OAuth2 connection sharing alongside automated background cron jobs to safely offload heavy data processes.",
      impact:
        "Reduced manual tracking dependencies by 60% and accelerated platform runtime stability.",
      accent: "from-indigo-500 to-purple-600",
    },
    {
      code: "MOD-02 // OPTIMIZATION",
      title: "DOH Application Render Engine",
      challenge:
        "Eliminating redundant asynchronous network requests and stabilizing cross-browser rendering speeds for heavy datasets within a critical UAE government interface.",
      solution:
        "Architected a reusable component ecosystem completely utility-styled with Tailwind CSS. Layered SWR client-side data caching strategies to store api states cleanly, eliminating unnecessary loading spinners.",
      impact:
        "Achieved a audited 30% improvement in first-contentful paint load times.",
      accent: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="architecture-deep-dive"
      className="scroll-mt-24 max-w-5xl mx-auto px-4"
    >
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
          Engineering Highlights
        </span>
        <h2 className="text-3xl font-black tracking-tight mt-3 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Architectural Problem Solving
        </h2>
      </div>

      <div className="space-y-8">
        {deepDives.map((system, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group border-white/5"
          >
            {/* Top neon glow line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${system.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Title Block */}
              <div className="md:col-span-4 space-y-2">
                <span className="font-mono text-[9px] text-gray-500 block tracking-wider">
                  {system.code}
                </span>
                <h3 className="text-lg font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {system.title}
                </h3>
                <div className="pt-4 hidden md:block">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    PROVEN IMPACT //
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {system.impact}
                  </p>
                </div>
              </div>

              {/* Right Column: Challenge & Solution Matrix */}
              <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-red-400/80 uppercase tracking-widest mb-1">
                    The Engineering Constraint
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal">
                    {system.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                    The Implemented Architecture
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
                    {system.solution}
                  </p>
                </div>
                {/* Mobile view fallback for impact */}
                <div className="block md:hidden border-t border-white/5 pt-3 mt-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block">
                    IMPACT:
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {system.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
