"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import TextHeading from "@/components/ui/TextHeading";
import { mentorData, type Mentor } from "@/data/home";

gsap.registerPlugin(ScrollTrigger);

// ── 3D Tilt Hook ───────────────────────────────────────────────────────────────
function useTilt(strength = 10) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [strength, -strength]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-strength, strength]);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return { rotateX: springX, rotateY: springY, onMouseMove, onMouseLeave };
}

// ── Mentor Card ────────────────────────────────────────────────────────────────
function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const tilt = useTilt(7);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-shadow duration-500 cursor-default"
    >
      {/* ── Foto ──────────────────────────────────────────────────── */}
      <div className="relative w-full aspect-3/4 overflow-hidden bg-gray-100">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay bawah */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

        {/* Nomor index dekorasi */}
        <span
          aria-hidden
          className="absolute top-5 right-5 text-6xl font-black leading-none select-none text-white/15"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Badge "Mentor" */}
        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          Mentor
        </span>

        {/* Nama di atas foto (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
            {mentor.name}
          </h3>
        </div>
      </div>

      {/* ── Info bawah ────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 p-6">

        {/* Quote */}
        {mentor.quote ? (
          <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-indigo-300 pl-4">
            &ldquo;{mentor.quote}&rdquo;
          </p>
        ) : (
          <p className="text-gray-300 text-sm italic border-l-2 border-gray-200 pl-4">
            Quote belum diisi...
          </p>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Kontak WA */}
        <a
          href={`https://wa.me/62${mentor.whatsapp.replace(/^0/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            text-xs font-bold tracking-wide uppercase
            text-gray-400 hover:text-indigo-500
            transition-colors duration-200
          "
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Hubungi Mentor
        </a>
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function MentorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  // Stagger masuk dari bawah saat scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll<HTMLDivElement>(".mentor-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mentor"
      className="relative bg-gray-50 py-24 md:py-32 px-6 md:px-16 lg:px-24"
    >
      {/* ── Dekorasi titik-titik ───────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #e0e7ff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Dekorasi glow indigo ───────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-indigo-100/60 blur-3xl"
      />

      <div className="relative z-10">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <TextHeading
            subtitle="Pembimbing"
            title="Mereka yang Memandu"
            titleItalic
            animateOnScroll
          />

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-400 md:text-right shrink-0 max-w-xs"
          >
            Dua orang yang sabar menemani kami belajar memimpin dari nol.
          </motion.p>
        </div>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {mentorData.map((mentor, i) => (
            <div key={mentor.id} className="mentor-card">
              <MentorCard mentor={mentor} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}