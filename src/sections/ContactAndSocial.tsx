import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiMail,
  FiPhone,
  FiMapPin,
  FiZap,
  FiDownload,
  FiCopy,
  FiX,
} from "react-icons/fi";
import resumePdf from "../assets/resume.pdf";

export default function ContactAndSocial() {
  const contactData = [
    { label: "Email", value: "afram.p245@gmail.com", icon: <FiMail /> },
    { label: "Phone", value: "+971-54-794-8861", icon: <FiPhone /> },
    { label: "Location", value: "UAE", icon: <FiMapPin /> },
  ];

  const [showResume, setShowResume] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      label: "View Projects",
      icon: <FiGithub />,
      href: "https://github.com/AfraMP",
      button: false,
    },
    {
      name: "LinkedIn",
      label: "Connect",
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/afra-m-p",
      button: false,
    },
    {
      name: "Resume",
      label: "View Resume",
      icon: <FiFileText />,
      href: "",
      button: true,
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "resumePdf";
    link.download = "Fathimathul_Afra_M_P_Resume.pdf";
    link.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + resumePdf);
    alert("Resume link copied to clipboard!");
  };

  return (
    <>
      <section id="connect" className="scroll-mt-24 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT: Contact & Social Combined */}
          <div className="md:col-span-7 space-y-6">
            {/* Contact Details Card */}
            {/* LEFT: Contact Details Card (Polished UI) */}
            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden flex flex-col">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                Get In Touch
              </h3>

              <div className="flex flex-col gap-6 flex-grow">
                {contactData.map((item, idx) => (
                  <a
                    key={idx}
                    href={
                      item.label === "Email"
                        ? `mailto:${item.value}`
                        : item.label === "Phone"
                          ? `tel:${item.value}`
                          : "#"
                    }
                    className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/20 border border-white/5 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-indigo-400">
                        {item.label}
                      </p>
                      <p className="text-white font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link, idx) =>
                link?.button ? (
                  <button
                    key={idx}
                    onClick={() => setShowResume(true)}
                    className="flex flex-col items-center justify-center gap-2 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-indigo-400 transition-colors text-xl">
                      {link.icon}
                    </div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {link.name}
                    </p>
                  </button>
                ) : (
                  <a
                    key={idx}
                    href={link.href}
                    className="flex flex-col items-center justify-center gap-2 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                      {link.icon}
                    </div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {link.name}
                    </p>
                  </a>
                ),
              )}
            </div>
          </div>

          {/* RIGHT: Live Availability (Optimized for New-to-Region) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-5 bg-gradient-to-br from-indigo-900/20 via-black to-black border border-indigo-500/30 p-8 rounded-3xl relative flex flex-col justify-between overflow-hidden"
          >
            {/* Live Status Header */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Available Now
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-2xl font-black text-white leading-tight mb-2">
                  Ready to Start
                </h3>
                <p className="text-sm text-gray-400">
                  Bringing global engineering standards and high-performance
                  delivery to the UAE.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Immediate Availability",
                    text: "Zero notice period; ready to onboard instantly.",
                  },
                  {
                    title: "Global Technical Standards",
                    text: "Experienced in high-scale enterprise engineering.",
                  },
                  {
                    title: "UAE Based",
                    text: "Currently in Dubai and ready for in-person collaboration.",
                  },
                  {
                    title: "Fast Integration",
                    text: "Highly adaptable; ready to align with local business goals.",
                  },
                  {
                    title: "Flexible Sync",
                    text: "Available for immediate interviews across all time zones.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 text-indigo-400">
                      <FiZap size={14} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="mailto:afram.p245@gmail.com"
              className="mt-8 w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Request Meeting <FiMail />
            </a>
          </motion.div>
        </div>
        <AnimatePresence>
          {showResume && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#0b0f19] border border-white/10 w-full max-w-3xl h-[85vh] rounded-3xl flex flex-col overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                  <h3 className="text-white font-bold px-2">Resume Viewer</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className="p-2 hover:bg-white/10 rounded-lg text-white"
                      title="Copy Link"
                    >
                      <FiCopy />
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-2 hover:bg-white/10 rounded-lg text-white"
                      title="Download"
                    >
                      <FiDownload />
                    </button>
                    <button
                      onClick={() => setShowResume(false)}
                      className="p-2 hover:bg-white/10 rounded-lg text-white"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
                <iframe
                  src={resumePdf}
                  className="flex-1 w-full h-full"
                  title="Resume"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
