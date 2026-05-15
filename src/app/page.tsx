"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import Navbar from "@/components/ui/NavBar";
import HeroSection from "@/components/home/HeroSection";
import Quotes from "@/components/home/Quotes";
import Team from "@/components/home/Team";
import ScrollAnim from "@/components/common/ScrollAnim";
import { Footer } from "@/components/ui/Footer";
import GroupIntro from "@/components/home/GroupIntro";
import AboutWeb from "@/components/home/AboutWeb";
import TeaserMateri from "@/components/home/Teasermateri";
import MentorSection from "@/components/home/Mentorsection";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && (
        <SplashScreen onComplete={() => setSplashDone(true)} />
      )}

      {/* 
        Main content tetap di-mount agar ScrollTrigger & plugin GSAP
        sudah siap saat splash selesai. Cukup sembunyikan secara visual
        sampai splash selesai.
      */}
      <main
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: splashDone ? "auto" : "none",
        }}
      >
        <ScrollAnim>
          <Navbar />
          <HeroSection />
          <AboutWeb />
          <TeaserMateri />
          <Quotes />
          <GroupIntro />
          <MentorSection />
          <Team />
          <Footer />
        </ScrollAnim>
      </main>
    </>
  );
}