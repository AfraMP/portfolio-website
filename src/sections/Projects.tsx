import { motion } from "framer-motion";

export default function Projects() {
  const featured = [
    {
      title: "ZONE Suite CRM Platform",
      type: "Professional",
      desc: "An enterprise CRM platform managing contacts, orders, invoices, email, and meeting notes using the MEAN stack. Integrated REST APIs, OAuth2 authentication (Gmail/Office 365), Razorpay webhook payments, and a cron-based reminder system for multi-tenant clients.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
    },
    {
      title: "Aurex",
      type: "Professional",
      desc: "A digital assurance platform for enterprise risk, governance, audit, and compliance. Worked on migrating sections to a micro-frontend architecture and enabling independent module development, while contributing to UI optimization for faster load times and smoother responsiveness.",
      tech: ["Angular", "Typescript", "Responsive Design"],
    },
    {
      title: "Department of Health (UAE project)",
      type: "Professional",
      desc: "A government healthcare platform supporting public health operations. Built a high-performance, scalable interface using SWR for data caching, reusable UI components, and React Context for state management, styled with Tailwind CSS.",
      tech: ["React", "SWR", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "AI Chat Assistant",
      type: "Personal",
      desc: "A chat assistant that provides instant answers to user questions using a locally integrated LLM. Built the frontend with Angular and the backend with Node.js, enabling real-time, conversational responses to user queries.",
      tech: ["Angular", "Node.js", "LLM Integration", "Express.js"],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-black tracking-tight mb-12 text-center bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Featured Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.025 }}
            className={`glass-card p-6 rounded-2xl flex flex-col justify-between relative transition-all duration-500 group cursor-pointer ${
              proj.type === "Open Source"
                ? "glow-border-cyan"
                : "glow-border-indigo"
            }`}
          >
            <div>
              <span
                className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 ${
                  proj.type === "Open Source"
                    ? "text-cyan-400"
                    : proj.type === "Personal"
                      ? "text-pink-400"
                      : "text-indigo-400"
                }`}
              >
                {proj.type}
              </span>
              <h3 className="text-xl font-bold mt-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                {proj.title}
              </h3>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed font-normal text-justify">
                {proj.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-6">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] bg-white/[0.02] border border-white/5 group-hover:border-white/10 px-2.5 py-1 rounded-md text-gray-400 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
