import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [selectedCert, setSelectedCert]: any = useState(null);

  const certifications = [
    {
      title: "Microsoft Technology Assoicate - Javascript",
      issuer: "Microsoft",
      date: "Issued November 2019",
      verificationUrl:
        "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=396&cvid=NXLREFo7+htcIv4Y0/DIzg==",
      meta: {
        status: "ACTIVE",
      },
      accent: "from-purple-500 to-indigo-600",
      glowColor: "rgba(168, 85, 247, 0.15)",
    },
  ];

  return (
    <section
      id="certs"
      className="scroll-mt-24 max-w-5xl mx-auto px-4 py-12 relative"
    >
      <h2 className="text-3xl font-black tracking-tight mb-16 text-center bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Professional Credentials
      </h2>

      {/* CERTIFICATE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: `0 25px 40px -15px ${cert.glowColor}`,
            }}
            onClick={() => setSelectedCert(cert)}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 transition-all duration-500 flex flex-col justify-between"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.accent} opacity-40 group-hover:opacity-100 transition-opacity`}
            />

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/5 bg-white/[0.02] text-gray-400">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-gray-400 mt-1">
                {cert.issuer}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-[9px] font-mono text-emerald-400/80 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{" "}
                VERIFIED
              </span>
              <span className="text-xs font-bold text-cyan-400/80 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                View <span>→</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VERIFIED CREDENTIALS TERMINAL MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#090d16] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10 flex flex-col font-mono"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                  <span className="text-[10px] text-gray-500 font-bold ml-2 uppercase tracking-wider">
                    Credential Token Matrix
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/10 transition-all text-xs"
                >
                  ✕
                </button>
              </div>

              {/* Central Verified Certificate Log Board */}
              <div className="p-6 space-y-5 bg-black/40 text-left">
                <div className="space-y-1">
                  <span className="text-[9px] text-cyan-400 font-bold tracking-widest uppercase">
                    CERTIFICATE_TITLE:
                  </span>
                  <h3 className="text-sm font-black text-white tracking-tight leading-snug">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">
                      ISSUING_AUTHORITY:
                    </span>
                    <p className="text-xs font-bold text-gray-300">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                {/* Secure Target Destination Button */}
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                >
                  Go to Live Verification Gate <span>↗</span>
                </a>
              </div>

              {/* Footer status validation */}
              <div className="p-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-[9px] text-gray-500 px-6">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ● {selectedCert.meta.status}
                </span>
                <span className="uppercase">{selectedCert.date}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
