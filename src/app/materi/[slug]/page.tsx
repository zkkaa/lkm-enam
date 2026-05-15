"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/ui/NavBar";
import { FooterCopyright } from "@/components/ui/Footer";
import BackButton from "@/components/ui/BackButton";
import {
  getMateriBySlug,
  materiList,
  type MateriSection,
} from "@/lib/materi-data";

gsap.registerPlugin(ScrollTrigger);

// ── Section Renderer ──────────────────────────────────────────────────────────
function SectionBlock({
  section,
  index,
}: {
  section: MateriSection;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      {/* Section heading */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 max-w-8 bg-indigo-200" />
        <h2 className="text-base md:text-lg font-bold text-gray-800">
          {section.heading}
        </h2>
      </div>

      {/* Content */}
      {section.type === "paragraph" && (
        <p className="text-gray-500 text-sm md:text-base leading-relaxed pl-8 md:pl-10">
          {section.content as string}
        </p>
      )}

      {section.type === "list" && (
        <ul className="pl-8 md:pl-10 flex flex-col gap-2">
          {(section.content as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.type === "sublist" && section.subsections && (
        <div className="pl-8 md:pl-10 flex flex-col gap-4">
          {section.subsections.map((sub, si) => (
            <div key={si} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                  {String.fromCharCode(97 + si)}.
                </span>
                <h3 className="text-sm font-semibold text-gray-700">
                  {sub.title}
                </h3>
              </div>
              <ul className="pl-5 flex flex-col gap-1.5">
                {sub.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex items-start gap-2.5 text-gray-400 text-sm"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Navigation between materi ─────────────────────────────────────────────────
function MateriNav({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const currentIdx = materiList.findIndex((m) => m.slug === currentSlug);
  const prev = currentIdx > 0 ? materiList[currentIdx - 1] : null;
  const next =
    currentIdx < materiList.length - 1 ? materiList[currentIdx + 1] : null;

  return (
    <div className="flex gap-3 justify-between mt-12 pt-8 border-t border-gray-100">
      {prev ? (
        <Link
          href={`/materi/${prev.slug}`}
          className="group flex items-center gap-3 max-w-[45%]"
        >
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-200">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 group-hover:text-white transition-colors"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-300 font-semibold">
              Sebelumnya
            </span>
            <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1">
              {prev.judul}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={`/materi/${next.slug}`}
          className="group flex items-center gap-3 max-w-[45%] ml-auto text-right"
        >
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-gray-300 font-semibold">
              Berikutnya
            </span>
            <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1">
              {next.judul}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-200">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 group-hover:text-white transition-colors"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MateriDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const materi = getMateriBySlug(slug);

  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  if (!materi) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, metaRef.current],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, headerRef);
    return () => ctx.revert();
  }, [slug]);

  const pertemuanColors: Record<number, { bg: string; text: string }> = {
    1: { bg: "bg-violet-100", text: "text-violet-700" },
    2: { bg: "bg-sky-100", text: "text-sky-700" },
  };
  const pColor = pertemuanColors[materi.pertemuan] ?? pertemuanColors[1];

  // Sibling materi in same pertemuan
  const siblings = materiList.filter(
    (m) => m.pertemuan === materi.pertemuan && m.slug !== materi.slug
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BackButton href="/materi" label="Kembali" noConfirm />

      <div className="pt-28 pb-8 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* ── Header ──────────────────────────────────────────────── */}
          <div ref={headerRef}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <Link
                href="/materi"
                className="hover:text-gray-600 transition-colors"
              >
                Materi
              </Link>
              <span>/</span>
              <span className="text-gray-600 line-clamp-1">{materi.judul}</span>
            </div>

            {/* Badges */}
            <div ref={metaRef} className="flex items-center gap-2 flex-wrap mb-4">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${pColor.bg} ${pColor.text}`}
              >
                Pertemuan {materi.pertemuan}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                Materi {materi.urutan}
              </span>
              {materi.tag.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {materi.judul}
            </h1>

            {/* Pemateri card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="1.8"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                  Disampaikan oleh
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {materi.pemateri}
                </span>
              </div>
            </div>

            {/* Ringkasan */}
            <div className="pl-4 border-l-2 border-indigo-200 mb-10">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed italic">
                {materi.ringkasan}
              </p>
            </div>
          </div>

          {/* ── Sections ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-10">
            {materi.sections.map((section, i) => (
              <SectionBlock key={i} section={section} index={i} />
            ))}
          </div>

          {/* ── Materi Navigation ───────────────────────────────────── */}
          <MateriNav currentSlug={materi.slug} />

          {/* ── Materi Terkait ───────────────────────────────────────── */}
          {siblings.length > 0 && (
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Materi di Pertemuan yang Sama
              </p>
              <div className="flex flex-col gap-3">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/materi/${s.slug}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200"
                  >
                    <span
                      className="text-2xl font-black text-gray-100 group-hover:text-indigo-100 transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {String(s.urutan).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-700 transition-colors">
                        {s.judul}
                      </p>
                      <p className="text-xs text-gray-400">{s.pemateri}</p>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-300 group-hover:text-indigo-400 transition-colors shrink-0"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterCopyright />
    </main>
  );
}
