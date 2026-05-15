"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    onComplete: () => void;
}

// ── Helper: render teks per huruf dengan span ─────────────────────────────────
function LetterSpan({ text, className = "" }: { text: string; className?: string }) {
    return (
        <span className={className} aria-label={text}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.35,
                        delay: i * 0.045,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ whiteSpace: "pre" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [percent, setPercent] = useState(0);
    const [lottieData, setLottieData] = useState<object | null>(null);
    const [LottieComp, setLottieComp] = useState<React.ComponentType<{
        animationData: object;
        loop: boolean;
        autoplay: boolean;
        style?: React.CSSProperties;
    }> | null>(null);
    const [mounted, setMounted] = useState(false);
    // Phase 0 = "Selamat datang di VI-sion", phase 1 = "Sebelas langkah. Satu visi."
    const [textPhase, setTextPhase] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const bgNumRef = useRef<HTMLDivElement>(null);
    const lottieWrapRef = useRef<HTMLDivElement>(null);
    const lineLeftRef = useRef<HTMLDivElement>(null);
    const lineRightRef = useRef<HTMLDivElement>(null);
    const dotRowRef = useRef<HTMLDivElement>(null);

    // ── Load lottie-react secara dinamis ─────────────────────────────────────
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        import("lottie-react").then((mod) => setLottieComp(() => mod.default));
        fetch("/json/team.json")
            .then((r) => r.json())
            .then(setLottieData)
            .catch(console.error);
    }, []);

    // ── Ganti text phase setelah 3.8 detik ───────────────────────────────────
    useEffect(() => {
        const t = setTimeout(() => setTextPhase(1), 3800);
        return () => clearTimeout(t);
    }, []);

    // ── GSAP entrance — elemen statis (bukan teks phase) ─────────────────────
    useEffect(() => {
        if (!mounted) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Garis vertikal
            tl.fromTo(
                [lineLeftRef.current, lineRightRef.current],
                { scaleY: 0, opacity: 0 },
                { scaleY: 1, opacity: 1, duration: 1.0, stagger: 0.1, ease: "power2.inOut" },
                0
            );

            // Angka "VI" besar di background
            tl.fromTo(
                bgNumRef.current,
                { x: 60, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
                0.1
            );

            // Dot row
            const dots = dotRowRef.current?.querySelectorAll(".splash-dot");
            if (dots && dots.length) {
                tl.fromTo(
                    dots,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: "back.out(2)" },
                    0.3
                );
            }

            // Drift halus pada angka VI background
            gsap.to(bgNumRef.current, {
                y: -28,
                duration: 5.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [mounted]);

    // ── Lottie entrance setelah data siap ────────────────────────────────────
    useEffect(() => {
        if (!lottieData || !LottieComp) return;
        gsap.fromTo(
            lottieWrapRef.current,
            { x: 50, scale: 0.82, opacity: 0 },
            { x: 0, scale: 1, opacity: 1, duration: 1.0, ease: "back.out(1.2)", delay: 0.4 }
        );
    }, [lottieData, LottieComp]);

    // ── Loading counter — 8 detik ─────────────────────────────────────────────
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((p) => {
                if (p >= 100) { clearInterval(interval); return 100; }
                return p + 1;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    // ── Exit ketika 100% ──────────────────────────────────────────────────────
    useEffect(() => {
        if (percent < 100) return;
        const t = setTimeout(() => {
            gsap.to(containerRef.current, {
                opacity: 0,
                y: -14,
                duration: 0.75,
                ease: "power3.inOut",
                onComplete: onComplete,
            });
        }, 350);
        return () => clearTimeout(t);
    }, [percent, onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-white overflow-hidden flex flex-col"
        >
            {/* ── Dot pattern background ───────────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: "radial-gradient(circle, #e0e7ff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* ── Glow indigo ──────────────────────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-160 h-160 rounded-full bg-indigo-100/70 blur-3xl"
            />

            {/* ── Glow emerald ─────────────────────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-12 right-24 w-60 h-60 rounded-full bg-emerald-100/50 blur-3xl"
            />

            {/* ── Garis vertikal kiri ──────────────────────────────────────────── */}
            <div
                ref={lineLeftRef}
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top opacity-0"
                style={{ background: "linear-gradient(to bottom, transparent, #c7d2fe, transparent)" }}
            />

            {/* ── Garis vertikal kanan ─────────────────────────────────────────── */}
            <div
                ref={lineRightRef}
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-full w-px origin-top opacity-0"
                style={{ background: "linear-gradient(to bottom, transparent, #c7d2fe, transparent)" }}
            />

            {/* ── Dot row atas tengah ──────────────────────────────────────────── */}
            <div
                ref={dotRowRef}
                className="absolute top-7 left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`splash-dot rounded-full ${i === 2 ? "w-2 h-2 bg-indigo-400" : "w-1 h-1 bg-indigo-200"
                            }`}
                    />
                ))}
            </div>

            {/* ── Layout utama ─────────────────────────────────────────────────── */}
            <div className="relative z-10 flex-1 flex items-center px-12 md:px-20 lg:px-28 gap-12 max-w-7xl mx-auto w-full">

                {/* ── KIRI: Text phases ─────────────────────────────────────────── */}
                <div className="flex-1 max-w-xl min-h-55 flex flex-col justify-center">
                    <AnimatePresence mode="wait">

                        {/* ── PHASE 0: "Selamat datang di VI-sion" ─────────────────── */}
                        {textPhase === 0 && (
                            <motion.div
                                key="phase0"
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col gap-3"
                            >
                                {/* Label */}
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 text-lg font-bold tracking-[0.2em] uppercase text-indigo-500"
                                >
                                    <span className="w-6 h-px bg-indigo-400" />
                                    Selamat Datang di
                                </motion.span>

                                {/* "VI-sion" per huruf */}
                                <div
                                    className="flex items-baseline overflow-hidden"
                                    style={{ perspective: "700px" }}
                                >
                                    {/* VI */}
                                    <LetterSpan
                                        text="VI"
                                        className="font-black leading-none tracking-tighter text-gray-900 text-6xl md:text-8xl"
                                    // style handled inline via fontFamily
                                    />
                                    {/* - */}
                                    <motion.span
                                        className="font-black leading-none tracking-tighter text-indigo-400 text-5xl md:text-6xl mx-1"
                                        style={{ fontFamily: "Georgia, serif" }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.12, duration: 0.3 }}
                                    >
                                        -
                                    </motion.span>
                                    {/* sion */}
                                    <LetterSpan
                                        text="sion"
                                        className="font-black leading-none tracking-tighter text-indigo-500 italic text-5xl md:text-7xl"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* ── PHASE 1: "Sebelas langkah. Satu visi." ───────────────── */}
                        {textPhase === 1 && (
                            <motion.div
                                key="phase1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-4"
                            >
                                {/* Baris 1 */}
                                <p
                                    className="font-black leading-tight text-gray-900 text-3xl md:text-5xl"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    <LetterSpan text="Sebelas langkah." />
                                </p>

                                {/* Baris 2 — dengan delay lebih */}
                                <p
                                    className="font-black leading-tight text-indigo-500 italic text-3xl md:text-5xl"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    {/* Delay baris 2 = setelah baris 1 selesai */}
                                    {"Satu visi.".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                // delay baris 1 habis ~= 17 huruf × 0.045 + buffer
                                                delay: 0.85 + i * 0.055,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </p>

                                {/* Divider muncul setelah semua huruf */}
                                <motion.div
                                    className="h-px origin-left"
                                    style={{
                                        width: "88%",
                                        background: "linear-gradient(to right, #6366f1, rgba(99,102,241,0.35), transparent)",
                                    }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 1.6, ease: "easeOut" }}
                                />

                                {/* Sub label */}
                                <motion.p
                                    className="text-xs font-semibold tracking-widest text-gray-400 uppercase"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.9 }}
                                >
                                    Kelompok 6 · LKM
                                </motion.p>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* ── KANAN: Lottie ────────────────────────────────────────────── */}
                <div ref={lottieWrapRef} className="relative shrink-0 opacity-0">
                    {/* Ring tipis berputar */}
                    <motion.div
                        className="absolute inset-0 -m-8 rounded-full border border-indigo-200/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />

                    {lottieData && LottieComp && (
                        <LottieComp
                            animationData={lottieData}
                            loop
                            autoplay
                            style={{ width: 360, height: 360 }}
                        />
                    )}
                </div>
            </div>

            {/* ── Loading counter — bottom, tanpa progress bar ─────────────────── */}
            <div className="relative z-10 px-12 md:px-20 lg:px-28 pb-8 pt-3 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center"
                >
                    {/* Angka persen besar — seperti contoh splash screen kamu */}
                    <p
                        className="font-black text-gray-900 leading-none tabular-nums"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        }}
                    >
                        {percent}
                        <span className="text-indigo-400 text-2xl md:text-3xl ml-1">%</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}