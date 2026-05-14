"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { aboutWebData } from "@/data/home";
import MagneticButton from "../ui/MagneticButton";
import WordReveal from "../ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);


// ── Main Component ─────────────────────────────────────────────────────────────
export default function AboutWeb() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLDivElement>(null);
    const meaningRef = useRef<HTMLDivElement>(null);
    const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Parallax angka "VI" di background
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgTextRef.current, {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    markers: false,
                },
            });

            // Meaning section fade in
            gsap.fromTo(
                meaningRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: meaningRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Points stagger
            pointsRef.current.forEach((el, i) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        delay: i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about-web"
            className="relative bg-white overflow-hidden py-32 md:py-40"
        >
            {/* ── Dekorasi angka VI besar — parallax ────────────────────── */}
            <div
                ref={bgTextRef}
                aria-hidden
                className="pointer-events-none select-none absolute -top-10 -right-10 font-black text-[22rem] md:text-[30rem] leading-none tracking-tighter text-gray-100 "
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
                VI
            </div>

            {/* ── Dekorasi garis diagonal kiri ──────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-indigo-200 to-transparent"
            />

            <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-5xl">

                {/* ── Label ─────────────────────────────────────────────────── */}
                <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 mb-8"
                >
                    <span className="w-6 h-px bg-indigo-400" />
                    Tentang Website
                </motion.span>

                {/* ── Word Reveal ────────────────────────────────────────────── */}
                <WordReveal
                    text={aboutWebData.revealText}
                    highlights={aboutWebData.highlightWords}
                    className="text-3xl font-black leading-tight tracking-tight max-w-3xl mb-20"
                />

                {/* ── Meaning Section ───────────────────────────────────────── */}
                <div ref={meaningRef} className="mb-16">
                    <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-gray-400 mb-8">
                        {aboutWebData.meaning.title}
                    </h3>

                    <div className="flex flex-col gap-0">
                        {aboutWebData.meaning.points.map((point, i) => (
                            <div
                                key={i}
                                ref={(el) => { pointsRef.current[i] = el }}
                                className="
                  flex items-start gap-6
                  py-6 border-b border-gray-100
                  group
                "
                            >
                                {/* Nomor */}
                                <span className="text-xs font-mono text-gray-300 pt-1 w-4 shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                {/* Symbol */}
                                <span
                                    className="
                    shrink-0 w-20 md:w-28
                    text-2xl md:text-3xl font-black tracking-tight
                    text-gray-900 group-hover:text-indigo-500
                    transition-colors duration-300
                  "
                                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                                >
                                    {point.symbol}
                                </span>

                                {/* Desc */}
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-1">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ───────────────────────────────────────────────────── */}
                <MagneticButton
                    label={aboutWebData.cta.label}
                    href={aboutWebData.cta.href}
                />
            </div>
        </section>
    );
}