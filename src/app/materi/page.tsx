"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/ui/NavBar";
import { FooterCopyright } from "@/components/ui/Footer";
import { materiList, pertemuanList } from "@/lib/materi-data";

gsap.registerPlugin(ScrollTrigger);

// ── Tag Badge ─────────────────────────────────────────────────────────────────
function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-indigo-50 text-indigo-600 border border-indigo-100">
      {tag}
    </span>
  );
}

// ── Materi Card ───────────────────────────────────────────────────────────────
function MateriCard({
  materi,
  index,
  featured = false,
}: {
  materi: (typeof materiList)[0];
  index: number;
  featured?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [index]);

  const pertemuanColors: Record<number, string> = {
    1: "bg-violet-100 text-violet-700",
    2: "bg-sky-100 text-sky-700",
    3: "bg-emerald-100 text-emerald-700",
  };

  if (featured) {
    return (
      <div ref={cardRef}>
        <Link href={`/materi/${materi.slug}`} className="group block">
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 border border-indigo-100/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-8 md:p-10">
            {/* Decorative orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/30 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Number */}
              <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center">
                <span
                  className="text-5xl md:text-6xl font-black text-indigo-200 select-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {String(materi.urutan).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${pertemuanColors[materi.pertemuan]}`}
                  >
                    Pertemuan {materi.pertemuan}
                  </span>
                  <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest px-2.5 py-1 bg-indigo-50 rounded-full border border-indigo-100">
                    ✦ Materi Unggulan
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
                  {materi.judul}
                </h2>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-2">
                  {materi.ringkasan}
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    {materi.pemateri}
                  </span>

                  <div className="flex gap-1.5 ml-2 flex-wrap">
                    {materi.tag.slice(0, 2).map((t) => (
                      <TagBadge key={t} tag={t} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-700 group-hover:scale-110 transition-all duration-300 shadow-md shadow-indigo-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div ref={cardRef}>
      <Link href={`/materi/${materi.slug}`} className="group block h-full">
        <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 p-6 flex flex-col gap-4">
          {/* Top row */}
          <div className="flex items-start justify-between gap-3">
            <span
              className="text-3xl font-black text-gray-100 select-none leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {String(materi.urutan).padStart(2, "0")}
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 ${pertemuanColors[materi.pertemuan]}`}
            >
              P{materi.pertemuan}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors duration-200 line-clamp-2">
              {materi.judul}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
              {materi.ringkasan}
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">
                {materi.pemateri}
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 group-hover:text-white transition-colors duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MateriPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activePertemuan, setActivePertemuan] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const filtered =
    activePertemuan === null
      ? materiList
      : materiList.filter((m) => m.pertemuan === activePertemuan);

  const featuredMateri = materiList[0];
  const gridMateri = filtered.filter((m) => m.slug !== featuredMateri.slug || activePertemuan !== null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative pt-32 pb-16 px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 bg-linear-to-b from-indigo-50/50 via-white to-white pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative stars like figma */}
        <span className="absolute top-24 right-16 text-2xl opacity-30 select-none">✦</span>
        <span className="absolute top-40 right-32 text-sm opacity-20 select-none">✦</span>
        <span className="absolute bottom-8 left-20 text-lg opacity-20 select-none">✦</span>

        <div className="relative max-w-5xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight mb-4"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Gudang{" "}
            <span className="text-indigo-500">materi</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-gray-400 text-sm md:text-base max-w-md font-light italic mt-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Latihan Kepemimpinan Mahasiswa
          </p>

          <p className="text-gray-500 text-sm max-w-xl mt-4 leading-relaxed">
            Di sini terkumpul segala materi dari rangkaian kegiatan LKM Kelompok 6, Informatika Universitas Siliwangi.
          </p>
        </div>
      </div>

      {/* ── Filter tabs ───────────────────────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24 mb-8">
        <div className="max-w-5xl mx-auto flex gap-2 flex-wrap">
          <button
            onClick={() => setActivePertemuan(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activePertemuan === null
                ? "bg-gray-900 text-white shadow-sm"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            Semua Materi
          </button>
          {pertemuanList.map((p) => (
            <button
              key={p.number}
              onClick={() =>
                setActivePertemuan(
                  activePertemuan === p.number ? null : p.number
                )
              }
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activePertemuan === p.number
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                  : "bg-indigo-50 text-indigo-500 hover:bg-indigo-100"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Featured card (only when showing all) */}
          {activePertemuan === null && (
            <MateriCard materi={featuredMateri} index={0} featured />
          )}

          {/* Divider */}
          {activePertemuan === null && (
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
                Semua Materi
              </span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(activePertemuan === null ? gridMateri : filtered).map(
              (materi, i) => (
                <MateriCard
                  key={materi.slug}
                  materi={materi}
                  index={activePertemuan === null ? i + 1 : i}
                />
              )
            )}
          </div>
        </div>
      </div>

      <FooterCopyright />
    </main>
  );
}
