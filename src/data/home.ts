export const aboutWebData = {
  revealText:
    "VI-sion lahir bukan sekadar tugas — ini adalah dokumentasi nyata perjalanan sebelas orang yang belajar memimpin, berdebat, jatuh, dan bangkit bersama.",
 
  highlightWords: ["VI-sion", "sebelas", "memimpin", "bersama"],
 
  meaning: {
    title: "Kenapa VI-sion?",
    points: [
      {
        symbol: "VI",
        desc: "Angka Romawi untuk 6 — nomor kelompok kami.",
      },
      {
        symbol: "Vision",
        desc: "Karena setiap langkah yang kami ambil punya tujuan.",
      },
      {
        symbol: "VI-sion",
        desc: "Identitas kami: kelompok yang melangkah dengan visi.",
      },
    ],
  },
 
  cta: {
    label: "Kenalan Dulu",
    href: "#GroupSection",
  },
};

export interface MateriTeaser {
  id: number;
  /** Nomor pertemuan */
  pertemuan: number;
  /** Warna aksen card */
  accent: "indigo" | "blue" | "emerald";
  /** Topik-topik yang dibahas */
  topics: string[];
}
 
export const materiTeaserData: MateriTeaser[] = [
  {
    id: 1,
    pertemuan: 1,
    accent: "indigo",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 2,
    pertemuan: 2,
    accent: "blue",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 3,
    pertemuan: 3,
    accent: "emerald",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 4,
    pertemuan: 4,
    accent: "indigo",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 5,
    pertemuan: 5,
    accent: "blue",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 6,
    pertemuan: 6,
    accent: "emerald",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 7,
    pertemuan: 7,
    accent: "indigo",
    topics: ["Materi 1", "Materi 2"],
  },
  {
    id: 8,
    pertemuan: 8,
    accent: "blue",
    topics: ["Materi 1", "Materi 2"],
  },
];

export interface TeamMember {
  id: number;
  name: string;
  npm: string;
  role: string;
  skills: string[];
  image: string;
  isMentor?: boolean;
  whatsapp?: string;
  quote?: string;
}

export const teamData: TeamMember[] = [
  // ── foto (paling depan) ────────────────────────────────────────────────
{
    id: 1,
    name: "Bimantara",
    npm: "247006111061",
    role: "Mentor",
    skills: ["Be Better Than Yesterday"],
    image: "/foto/bima.jpg",
  },

  {
    id: 2,
    name: "Muhammad Gibran Fajar",
    npm: "247006111181",
    role: "Mentor",
    skills: ["Be Your Own Hope"],
    image: "/foto/gibran.jpg",
    
  },

  // ── Team Lead ─────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Muhammad Fabian Syauqi Mazaya",
    npm: "257006111197",
    role: "Team Lead",
    skills: [],
    image: "/foto/fabian.JPG",
  },

  // ── Members (urut npm terkecil → terbesar) ────────────────────────────────
  {
    id: 4,
    name: "Lutfi Fitriani",
    npm: "257006111011",
    role: "",
    skills: [],
    image: "/foto/lutfi.JPG",
  },
  {
    id: 5,
    name: "Muhammad Azka Fakhri Fairuz",
    npm: "257006111019",
    role: "",
    skills: [],
    image: "/foto/azka.JPG",
  },
  {
    id: 6,
    name: "Muhammad Fathir Maulana",
    npm: "257006111022",
    role: "",
    skills: [],
    image: "/foto/fathir.JPG",
  },
  {
    id: 7,
    name: "Tisya Natasya Harviana",
    npm: "257006111035",
    role: "",
    skills: [],
    image: "/foto/tisya.JPG",
  },
  {
    id: 8,
    name: "Farrel Adelard Vicksian",
    npm: "257006111044",
    role: "",
    skills: [],
    image: "/foto/farrel.JPG",
  },
  {
    id: 9,
    name: "Gemmy Dwirismariyan Hagi",
    npm: "257006111074",
    role: "",
    skills: [],
    image: "/foto/gemmy.JPG",
  },
  {
    id: 10,
    name: "Alia Zirlyanti Aripin",
    npm: "257006111111",
    role: "",
    skills: [],
    image: "/foto/alia.JPG",
  },
  {
    id: 11,
    name: "Nazwa Khoerunnisa Herdiansyah",
    npm: "257006111110",
    role: "",
    skills: [],
    image: "/foto/nazwa.JPG",
  },
  {
    id: 12,
    name: "Hazmi Adzani Awanisi",
    npm: "257006111130",
    role: "",
    skills: [],
    image: "/foto/hazmi.JPG",
  },
  {
    id: 13,
    name: "Raffi Firmansyah",
    npm: "257006111131",
    role: "",
    skills: [],
    image: "/foto/raffi.JPG",
  },
];