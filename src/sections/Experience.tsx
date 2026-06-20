import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      date: "Nov 2024 - Feb 2026",
      role: "Software Engineer",
      company: "Beinex Solutions (Remote)",
      description:
        "Worked as part of the development team on Aurex, a digital assurance platform for risk, governance, audit, and compliance, delivering features sprint-wise as part of an agile team. Built and maintained Angular modules, including the TimeLog module and dynamic, reusable components, while using SonarQube for code quality and Cursor AI to generate unit tests. Collaborated closely with UI/UX and backend teams during feature planning, and fixed bugs to optimize overall UI performance.",
      techStack: [
        "Next.js",
        "React",
        "Angular",
        "TypeScript",
        "REST APIs",
        "TailwindCSS",
        "SonarQube",
        "Git",
      ],
      accent: "from-indigo-500 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.15)",
    },
    {
      date: "Nov 2021 - Jun 2024",
      role: "Full Stack Developer",
      company: "Tandemloop Technologies",
      description:
        "Worked as a MEAN Stack Developer at Tandemloop, contributing to both government and enterprise client projects. Built frontend features using React for DOH, a government project, and worked on Zone Suite, an enterprise CRM application, using the MEAN stack across multiple integrated modules. Collaborated with backend developers and designers to deliver features in sprint-based cycles, while maintaining code quality through structured reviews and version control practices.",
      techStack: [
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "RxJS",
        "gRPC",
        "Python",
      ],
      accent: "from-cyan-400 via-teal-400 to-emerald-400",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-black tracking-tight mb-16 text-center bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
          >
            {/* LEFT COLUMN: Clean Timeline & Technology Stack Directory */}
            <div className="md:col-span-3 p-4 rounded-2xl bg-white/[0.01] border border-white/5 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="space-y-1 mb-4">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Timeline Bound
                </p>
                <h4 className="text-sm font-black text-gray-300 group-hover:text-white transition-colors">
                  {exp.date}
                </h4>
              </div>

              {/* Technologies Deployed Stack */}
              <div className="mt-auto space-y-2">
                <span className="block text-[9px] font-mono text-gray-500 font-bold tracking-widest uppercase">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-gray-400 group-hover:border-white/10 group-hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Performance Summary Terminals */}
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: `0 20px 40px -10px ${exp.glowColor}`,
              }}
              className="md:col-span-9 glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 group cursor-default"
            >
              {/* Left Side Accent Neon Core Strip */}
              <div
                className={`absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b ${exp.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Command Prompt Header Graphic */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 mt-0.5 tracking-wide">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Context Block */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal group-hover:text-gray-300 transition-colors text-justify">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
