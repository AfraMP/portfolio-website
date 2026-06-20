import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiMapPin,
  FiCheckCircle,
  FiMail,
  FiPhone,
} from "react-icons/fi";

// Premium Interactive Ecosystem Architecture Hub
const InteractiveTechCloud = () => {
  const [_hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techs = [
    {
      name: "Node.js",
      role: "High-Throughput Streams & Async I/O Pipelines",
      color: "from-emerald-500/20 to-emerald-400/5",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      name: "Angular",
      role: "Enterprise Architecture & Reactive Forms",
      color: "from-red-500/20 to-red-400/5",
      text: "text-red-400",
      border: "border-red-500/20",
    },
    {
      name: "React",
      role: "Dynamic Lifecycle Hooks & State Trees",
      color: "from-cyan-500/20 to-cyan-400/5",
      text: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      name: "MongoDB",
      role: "Aggregations & Document Store Topologies",
      color: "from-green-500/20 to-green-400/5",
      text: "text-green-400",
      border: "border-green-500/20",
    },
    {
      name: "TypeScript",
      role: "Strict Generics & Compile-Time Safety Wrapper",
      color: "from-blue-500/20 to-blue-400/5",
      text: "text-blue-400",
      border: "border-blue-500/20",
    },
  ];

  return (
    <div className="w-full py-5 px-5 my-2 rounded-xl border border-white/[0.04] bg-[#06060a]/80 relative overflow-hidden flex flex-col">
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-2">
        <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
          TECH STACK
        </span>
      </div>

      {/* Interactive Tag Grid */}
      <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mt-3">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            whileHover={{ y: -2, scale: 1.02 }}
            className={`px-3.5 py-2 rounded-lg border ${tech.border} bg-gradient-to-b ${tech.color} backdrop-blur-md transition-all duration-300 cursor-crosshair`}
          >
            <span
              className={`text-xs font-mono font-bold tracking-wider ${tech.text}`}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function HeroSummary() {
  const recruiterBadges = [
    {
      text: "OPEN TO ROLES IN UAE",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      bgColor: "bg-blue-500/[0.04]",
    },
    {
      text: "VALID SPOUSE VISA | NO SPONSORSHIP REQUIRED",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
      bgColor: "bg-cyan-500/[0.04]",
    },
    {
      text: "IMMEDIATELY AVAILABLE",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      bgColor: "bg-emerald-500/[0.04]",
    },
    {
      text: "4+ YRS FULL STACK",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      bgColor: "bg-purple-500/[0.04]",
    },
  ];

  return (
    <section
      id="summary"
      className="relative scroll-mt-24 max-w-5xl mx-auto px-4 space-y-10"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[200px] bg-indigo-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: Profile Image Card, Badges & Contacts */}
        <div className="lg:col-span-4 p-6 rounded-2xl border border-white/5 bg-[#09090d]/60 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div>
            {/* Profile Photo Wrapper */}
            <div className="relative w-44 h-44 mx-auto mb-6">
              <div className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full animate-spin-slow" />
              <div className="absolute -inset-3 border border-emerald-500/[0.05] rounded-full animate-pulse" />

              <div className="absolute bottom-3 -right-5 z-20 text-[10px] font-black tracking-widest bg-[#0a0f0d] text-emerald-400 px-3 py-1.5 rounded border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                #OPEN_TO_WORK
              </div>

              <div className="w-full h-full rounded-full p-2 relative z-10 bg-black/40">
                <img
                  src="/src/assets/Fathimathul_Afra_MP.png"
                  alt="Fathimathul Afra"
                  className="w-full h-full object-cover rounded-full border border-white/10 grayscale filter contrast-115 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            {/* Recruiter Availability Badges Stack */}
            <div className="space-y-2 mb-6">
              {recruiterBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 2 }}
                  className={`px-3 py-2.5 rounded-xl border-2 ${badge.borderColor} ${badge.bgColor} flex items-center gap-3 transition-all duration-300 shadow-md shadow-black/10`}
                >
                  <FiCheckCircle
                    className={`${badge.textColor} text-sm flex-shrink-0`}
                  />
                  <span
                    className={`text-[11px] font-bold tracking-wider leading-none ${badge.textColor}`}
                  >
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer Area (Contacts & Location) */}
          <div className="border-t border-white/5 pt-4 space-y-3.5">
            {/* Quick Contact Action Links */}
            <div className="space-y-2">
              <a
                href="mailto:afram.p245@gmail.com"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 flex items-center gap-3 transition-all group/contact"
              >
                <FiMail className="text-indigo-400 text-xs transition-transform group-hover/contact:scale-110" />
                <span className="text-[16px] font-mono font-medium text-gray-400 group-hover/contact:text-white truncate">
                  afram.p245@gmail.com
                </span>
              </a>

              <a
                href="tel:+971 54 794 8861"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 flex items-center gap-3 transition-all group/contact"
              >
                <FiPhone className="text-cyan-400 text-xs transition-transform group-hover/contact:scale-110" />
                <span className="text-[16px] font-mono font-medium text-gray-400 group-hover/contact:text-white">
                  +971 54 794 8861
                </span>
              </a>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            {/* Location Section */}
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-1.5 text-gray-500 font-bold">
                <FiMapPin className="text-cyan-400" /> LOCATION:
              </span>
              <span className="text-gray-200 font-bold tracking-wide">
                United Arab Emirates
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Professional Bio Details */}
        <div className="lg:col-span-8 flex flex-col justify-between p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent relative min-h-[480px]">
          {/* Top Group: Title Blocks */}
          <div className="space-y-1 text-left">
            <motion.h1
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-white"
            >
              Fathimathul Afra{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400">
                M P
              </span>
            </motion.h1>

            <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase bg-gradient-to-r from-white via-gray-100 to-gray-500 bg-clip-text text-transparent py-1">
              SOFTWARE ENGINEER
            </h2>
          </div>

          {/* UPGRADED INTELLIGENT STACK ARCHITECTURE RADAR */}
          <InteractiveTechCloud />

          {/* Bottom Group: Professional Profile Copy */}
          <div className="space-y-4 text-base text-gray-300 leading-relaxed pl-4 border-l-2 border-indigo-500/30">
            <p className="text-justify">
              Full Stack Developer with{" "}
              <span className="text-white font-bold">
                4 years of experience
              </span>{" "}
              building enterprise web applications.
            </p>
            <p className="text-sm text-gray-400 text-justify">
              I specialize across Node.js, Angular, React, and TypeScript. My
              focus is always on building fast, reliable backend data pipelines,
              making sure APIs scale smoothly under load, and crafting clean
              client-side navigation. Ultimately, I just love writing clean code
              that noticeably speeds up the application and creates a seamless
              experience for the user.
            </p>
          </div>

          {/* Core Call to Action Elements */}
          <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-6 mt-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 border-2 border-indigo-400/20 text-xs font-black tracking-wider text-white flex items-center gap-2 transition-all shadow-md shadow-indigo-600/10 hover:-translate-y-0.5"
            >
              <FiDownload /> DOWNLOAD RESUME
            </a>
            {/* <button
              onClick={onOpenExplorer}
              className="px-6 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border-2 border-white/5 hover:border-white/10 text-xs font-black tracking-wider text-gray-300 hover:text-white flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <FiCompass /> EXPLORE ARCHIVE
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
