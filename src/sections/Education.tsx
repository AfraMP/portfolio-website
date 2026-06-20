import { motion } from "framer-motion";

export default function Education() {
  const degrees = [
    {
      institution: "Deakin University",
      program: "Master of Data Science",
      timeline: "IN PROGRESS // EXPECTED 2028",
      type: "Postgrad Matrix",
      scope: "In Progress",
      details:
        "Currently pursuing a Master's degree through distance learning, focused on large-scale data modeling, predictive pipelines, and structured exploratory data analysis.",
      outcomes: [
        "Gen AI",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
      ],
      accent: "from-indigo-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.15)",
    },
    {
      institution: "Visvesvaraya Technological University",
      program: "B.Tech in Computer Science & Engineering",
      timeline: "GRADUATED 2021",
      type: "Undergrad Core",
      scope: "CGPA: 8.1 / 10.0",
      details:
        "Rigorous computing foundation covering Advanced Data Structures, Architectural Operating Systems, Algorithm Optimization, and DBMS.",
      outcomes: ["DSA", "System Design", "Database"],
      accent: "from-cyan-400 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
  ];

  return (
    <section id="education" className="scroll-mt-24 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-black tracking-tight mb-16 text-center bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Academic Foundations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {degrees.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{
              y: -6,
              scale: 1.015,
              boxShadow: `0 25px 40px -15px ${edu.glowColor}`,
            }}
            className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group cursor-default border-white/5 transition-all duration-500"
          >
            {/* Top Linear Laser Highlight Accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${edu.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Internal Shimmer */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${edu.accent} opacity-0 group-hover:opacity-[0.015] transition-opacity duration-500 pointer-events-none`}
            />

            <div>
              {/* Context Tag Line */}
              <div className="flex justify-between items-center gap-2 mb-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                  {edu.type}
                </span>
                <span
                  className={`font-mono text-[9px] tracking-wider px-2 py-0.5 rounded border border-white/5 bg-black/40 text-transparent bg-clip-text bg-gradient-to-r ${edu.accent}`}
                >
                  {edu.timeline}
                </span>
              </div>

              {/* Main Credentials */}
              <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {edu.program}
              </h3>
              <h4 className="text-sm font-medium text-cyan-400 mt-1">
                {edu.institution}
              </h4>

              {/* Scope Metrics Tag */}
              <span className="inline-block mt-3 text-[10px] font-mono font-bold bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md text-gray-400 group-hover:border-white/10 transition-colors">
                {edu.scope}
              </span>
            </div>

            <div>
              {/* Core Description Text Area */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal   mt-6 group-hover:text-gray-300 transition-colors">
                {edu.details}
              </p>

              {/* Course Outcomes Section (Only renders if array exists) */}
              {edu.outcomes && edu.outcomes.length > 0 && (
                <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                  <span className="block text-[9px] font-mono text-cyan-400/80 font-bold tracking-widest uppercase">
                    COURSE OUTCOMES & CORE MODULES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.outcomes.map((outcome, oIdx) => (
                      <span
                        key={oIdx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-gray-400 group-hover:border-white/10 group-hover:text-white transition-all duration-300"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
