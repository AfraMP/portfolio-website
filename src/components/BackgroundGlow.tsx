import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Intense Top Right Indigo/Purple Orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, 50, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-60 -right-40 w-[650px] h-[650px] bg-indigo-600/30 rounded-full blur-[150px]"
      />

      {/* Cyberpunk Hot Pink Mid-Screen Bleed */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[35%] right-[20%] w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[160px]"
      />

      {/* Deep Left Cyan/Neon-Teal Bottom Light */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[55%] -left-60 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[140px]"
      />
    </div>
  );
}
