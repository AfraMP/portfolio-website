import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Use MotionValues to track absolute position without triggering constant React re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply a smooth physics spring config to make the cursor trail feel premium
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hidden on touch devices automatically via pointer-events-none and md:block */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        {/* Dynamic Glowing Outer Trail Ring */}
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-indigo-500/40 bg-indigo-500/[0.03] -left-4 -top-4 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          style={{
            x: trailX,
            y: trailY,
          }}
        />

        {/* Sharp Center Core Dot */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 -left-[3px] -top-[3px] shadow-[0_0_8px_rgba(34,211,238,0.6)]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        />
      </div>
    </>
  );
}
