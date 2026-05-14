"use client"

import Navbar from "@/components/ui/NavBar";
import HeroSection from "@/components/home/HeroSection";
import Quotes from "@/components/home/Quotes";
import Team from "@/components/home/Team";
import ScrollAnim from "@/components/common/ScrollAnim";
import { Footer } from "@/components/ui/Footer";
import GroupIntro from "@/components/home/GroupIntro";
import AboutWeb from "@/components/home/AboutWeb";

export default function Home() {
  return (
    <main>
      <ScrollAnim >
        <Navbar />
        <HeroSection />
        <AboutWeb />
        <Quotes />
        <GroupIntro />
        <Team />
        <Footer />
      </ScrollAnim>
    </main>
  )
}