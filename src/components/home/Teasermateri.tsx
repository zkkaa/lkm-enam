"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import TextHeading from "@/components/ui/TextHeading";
import { materiTeaserData, type MateriTeaser } from "@/data/home";

gsap.registerPlugin(ScrollTrigger);

// ── Hanya tampilkan 4 card pertama ────────────────────────────────────────────
const PREVIEW_COUNT = 3;
const previewData = materiTeaserData.slice(0, PREVIEW_COUNT);

// ── Accent map ─────────────────────────────────────────────────────────────────
const accentMap = {
    indigo: {
        bg: "bg-indigo-500",
        bgLight: "bg-indigo-50",
        text: "text-indigo-500",
        textLight: "text-indigo-400",
        border: "border-indigo-200",
        num: "text-indigo-200",
        badge: "bg-indigo-100 text-indigo-600",
        hover: "group-hover:bg-indigo-500",
    },
    blue: {
        bg: "bg-blue-500",
        bgLight: "bg-blue-50",
        text: "text-blue-500",
        textLight: "text-blue-400",
        border: "border-blue-200",
        num: "text-blue-200",
        badge: "bg-blue-100 text-blue-600",
        hover: "group-hover:bg-blue-500",
    },
    emerald: {
        bg: "bg-emerald-500",
        bgLight: "bg-emerald-50",
        text: "text-emerald-500",
        textLight: "text-emerald-400",
        border: "border-emerald-200",
        num: "text-emerald-200",
        badge: "bg-emerald-100 text-emerald-700",
        hover: "group-hover:bg-emerald-500",
    },
};

// ── 3D Tilt Hook ───────────────────────────────────────────────────────────────
function useTilt() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
    const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
    const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onMouseLeave = () => { x.set(0); y.set(0); };

    return { rotateX: springX, rotateY: springY, onMouseMove, onMouseLeave };
}

// ── Magnetic CTA ───────────────────────────────────────────────────────────────
function MagneticCTA() {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 180, damping: 16 });
    const sy = useSpring(y, { stiffness: 180, damping: 16 });

    const onMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
    };
    const onMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.a
            ref={ref}
            href="/materi"
            style={{ x: sx, y: sy }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
        inline-flex items-center gap-3
        px-8 py-4 rounded-full
        bg-gray-900 text-white
        text-sm font-bold tracking-widest uppercase
        shadow-lg shadow-gray-900/15
        hover:shadow-xl hover:shadow-indigo-500/20
        transition-shadow duration-300
        cursor-pointer select-none
      "
        >
            Lihat Semua Materi
            <span className="text-indigo-400 text-base">→</span>
        </motion.a>
    );
}

// ── Featured Card (besar, kiri) ────────────────────────────────────────────────
function FeaturedCard({ item }: { item: MateriTeaser }) {
    const tilt = useTilt();
    const accent = accentMap[item.accent];

    return (
        <motion.div
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="group relative rounded-3xl overflow-hidden cursor-pointer h-full min-h-95 md:min-h-115"
        >
            {/* Background */}
            <div className={`absolute inset-0 ${accent.bg} transition-transform duration-500`} />

            {/* Dekorasi nomor besar */}
            <span
                aria-hidden
                className="absolute -bottom-6 -right-4 text-[11rem] font-black leading-none select-none pointer-events-none text-white/10"
                style={{ fontFamily: "Georgia, serif" }}
            >
                {String(item.pertemuan).padStart(2, "0")}
            </span>

            {/* Glow circle */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                <div>
                    {/* Badge pertemuan */}
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-white/70 mb-6">
                        <span className="w-4 h-px bg-white/40" />
                        Pertemuan {item.pertemuan}
                    </span>

                    {/* Title placeholder */}
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                        Judul Materi
                    </h3>

                    {/* Topics */}
                    <div className="flex flex-col gap-2 mt-4">
                        {item.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                <span className="text-white/70 text-sm">{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA kecil */}
                <Link
                    href="/materi"
                    className="
            self-start mt-8
            inline-flex items-center gap-2
            px-5 py-2.5 rounded-full
            bg-white text-gray-900
            text-xs font-bold tracking-wide uppercase
            hover:bg-white/90 transition-colors duration-200
          "
                >
                    Baca Resume
                    <span>→</span>
                </Link>
            </div>
        </motion.div>
    );
}

// ── Small Card ─────────────────────────────────────────────────────────────────
function SmallCard({ item }: { item: MateriTeaser }) {
    const tilt = useTilt();
    const accent = accentMap[item.accent];

    return (
        <motion.div
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1 min-h-52"
        >
            {/* Background */}
            <div className={`absolute inset-0 ${accent.bg} transition-all duration-500`} />

            {/* Nomor dekorasi */}
            <span
                aria-hidden
                className={`
          absolute -bottom-2 -right-1
          text-6xl font-black leading-none select-none pointer-events-none
          ${accent.num} group-hover:text-white/20
          transition-colors duration-400
        `}
                style={{ fontFamily: "Georgia, serif" }}
            >
                {String(item.pertemuan).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/70">
                        Pertemuan {item.pertemuan}
                    </span>
                    <p className="text-sm font-bold text-white mt-1.5 leading-snug">
                        Judul Materi
                    </p>
                </div>
                {/* Topics */}
                <div className="flex flex-col gap-2 mt-4">
                    {item.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                            <span className="text-white/70 text-sm">{topic}</span>
                        </div>
                    ))}
                </div>
                
            </div>
        </motion.div>
    );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function TeaserMateri() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Stagger masuk saat scroll
    useEffect(() => {
        const ctx = gsap.context(() => {
            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const [featured, ...smalls] = previewData;

    return (
        <section
            ref={sectionRef}
            id="teaser-materi"
            className="relative bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24"
        >
            {/* ── Dekorasi garis ────────────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-indigo-100 to-transparent"
            />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <TextHeading
                    subtitle="Resume"
                    title="Materi selama lkm"
                    titleItalic
                    animateOnScroll
                />
            </div>

            {/* ── Grid Featured Layout ──────────────────────────────────── */}
            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
                style={{ perspective: "1200px" }}
            >
                {/* Featured — kiri, span 2 baris */}
                <div
                    ref={(el) => { cardRefs.current[0] = el }}
                    className="md:row-span-2"
                >
                    <FeaturedCard item={featured} />
                </div>

                {/* Small cards — kanan */}
                {smalls.map((item, i) => (
                    <div
                        key={item.id}
                        ref={(el) => { cardRefs.current[i + 1] = el }}
                    >
                        <SmallCard item={item} />
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center items-center gap-6 mt-12"
            >
                <MagneticCTA />
            </motion.div>

        </section>
    );
}