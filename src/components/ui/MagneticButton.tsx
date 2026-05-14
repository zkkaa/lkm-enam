"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="
        inline-flex items-center gap-3
        px-8 py-4 rounded-full
        bg-gray-900 text-white
        text-sm font-bold tracking-widest uppercase
        shadow-lg shadow-gray-900/20
        hover:shadow-xl hover:shadow-indigo-500/20
        transition-shadow duration-300
        cursor-pointer select-none
      "
    >
      {label}
      <span className="text-indigo-400">→</span>
    </motion.a>
  );
}