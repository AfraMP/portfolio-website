import { useState } from "react";
// import { FiX } from "react-fi";
import { FiX } from "react-icons/fi";

export default function ProjectModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("All");
  if (!isOpen) return null;

  const items = [
    {
      title: "ZONE Suite CRM [cite: 32]",
      cat: "Featured [cite: 34]",
      desc: "Enterprise SaaS multi-tenant CRM engine[cite: 34].",
    },
    {
      title: "DOH Performance UI [cite: 35]",
      cat: "Open Source",
      desc: "Tailwind CSS lightweight dashboard system[cite: 35, 37].",
    },
    {
      title: "Log Stream Pipeline",
      cat: "Personal",
      desc: "Node.js real-time file processing engine.",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card bg-[#111115] w-full max-w-xl rounded-2xl p-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Project Explorer Engine</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            <FiX className="text-lg" />
            {/* <FiX /> */}
          </button>
        </div>

        <div className="flex gap-2 border-b border-white/5 pb-3 mb-4">
          {["All", "Featured", "Open Source", "Personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${filter === cat ? "bg-white/5 text-white" : "text-gray-400 hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar">
          {items
            .filter((i) => filter === "All" || i.cat.includes(filter))
            .map((item, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h4 className="font-semibold text-sm text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
                <span className="text-[10px] bg-indigo-500/10 text-accentGlow px-2 py-1 rounded font-bold uppercase">
                  {item.cat}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
