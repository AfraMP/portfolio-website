import { motion } from "framer-motion";

export default function Skills() {
  const architectures = [
    {
      system: "SYS-01 // UI LAYER",
      title: "Frontend Stack Architecture",
      efficiency: "90%",
      accent: "from-indigo-500 to-cyan-400",
      tags: [
        { name: "React (Hooks/Router)", status: "Expert" },
        { name: "Angular (v12-v17)", status: "Expert" },
        { name: "TypeScript", status: "Expert" },
        { name: "JavaScript (ES6+)", status: "Expert" },
        { name: "HTML5 / CSS3", status: "" },
        { name: "Tailwind CSS", status: "" },
        { name: "RxJS / NgRx", status: "" },
        { name: "SWR Data Fetching", status: "" },
        { name: "D3.js Visualization", status: "" },
      ],
    },
    {
      system: "SYS-02 // RUNTIME ENGINE",
      title: "Backend & Database Ingestion",
      efficiency: "85%",
      accent: "from-cyan-400 to-teal-400",
      tags: [
        { name: "Node.js Environment", status: "Expert" },
        { name: "Express.js Framework", status: "Expert" },
        { name: "RESTful APIs", status: "Expert" },
        { name: "GraphQL Specs", status: "" },
        { name: "WebSockets (Socket.IO)", status: "" },
        { name: "MongoDB NoSQL", status: "" },
        { name: "MySQL Database", status: "" },
        { name: "OAuth2 / JWT Vault", status: "" },
        { name: "Nodemailer Automation", status: "" },
      ],
    },
    {
      system: "SYS-03 // SYSTEM CONTROL",
      title: "DevOps & Tooling Integration",
      efficiency: "75%",
      accent: "from-pink-500 to-purple-500",
      tags: [
        { name: "Git / GitHub Control", status: "Expert" },
        { name: "Docker Containers", status: "" },
        { name: "CI/CD Pipelines", status: "" },
        { name: "SonarQube Quality", status: "" },
        { name: "Agile / Scrum Sprints", status: "" },
        { name: "Linux Sys Environments", status: "" },
        { name: "Webpack Bundler", status: "" },
        { name: "AWS S3 Infrastructure", status: "" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section id="skills" className="scroll-mt-24 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-black tracking-tight mb-16 text-center bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="space-y-12">
        {architectures.map((arch, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch group"
          >
            {/* LEFT SIDE: System Monitor Card */}
            <div className="md:col-span-4 glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden bg-white/[0.01] border-white/5">
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 block">
                  {arch.system}
                </span>
                <h3 className="text-lg font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {arch.title}
                </h3>
              </div>

              {/* In-View Loading Performance Bar */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider text-gray-400">
                  <span>STACK INTEGRATION</span>
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${arch.accent}`}
                  >
                    {arch.efficiency}
                  </span>
                </div>
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: arch.efficiency }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${arch.accent}`}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Complete Reinstated Grid Modules */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {arch.tags.map((tag, tIdx) => (
                <motion.div
                  key={tIdx}
                  variants={itemVariants}
                  whileHover={{
                    x: 4,
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  }}
                  className="glass-card px-4 py-3 rounded-xl flex items-center justify-between relative overflow-hidden group/blade transition-all duration-300 border-white/5"
                >
                  {/* Left Dynamic Interactive Laser Border */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b ${arch.accent} opacity-20 group-hover/blade:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="flex items-center gap-2.5 relative z-10">
                    <span className="font-mono text-[9px] text-gray-600 group-hover/blade:text-gray-400 transition-colors">
                      {(tIdx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold text-gray-300 group-hover/blade:text-white transition-colors tracking-wide">
                      {tag.name}
                    </span>
                  </div>

                  {/* Status Metrics Capsule */}
                  <span
                    className={`font-mono text-[8px] tracking-widest px-1.5 py-0.5 rounded border bg-black/40 border-white/5 group-hover/blade:border-white/10 text-gray-500 group-hover/blade:text-transparent group-hover/blade:bg-clip-text group-hover/blade:bg-gradient-to-r ${arch.accent} transition-all duration-300`}
                  >
                    {tag.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
