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

export interface TeamMember {
  id: number;
  name: string;
  npm: string;
  role: string;
  skills: string[];
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Fathir Maulana",
    npm: "257006111022",
    role: "",
    skills: [],
    image: "/foto/fathir.JPG",
  },
  {
    id: 2,
    name: "Farrel Adelard Vicksian",
    npm: "257006111044",
    role: "",
    skills: [],
    image: "/foto/farrel.JPG",
  },
  {
    id: 3,
    name: "Tisya Natasya Harviana",
    npm: "257006111035",
    role: "",
    skills: [],
    image: "/foto/tisya.JPG",
  },
  {
    id: 4,
    name: "Nazwa Khoerunnisa Herdiansyah",
    npm: "257006111110",
    role: "",
    skills: [],
    image: "/foto/nazwa.JPG",
  },
  {
    id: 5,
    name: "Lutfi Fitriani",
    npm: "257006111011",
    role: "",
    skills: [],
    image: "/foto/lutfi.JPG",
  },
  {
    id: 6,
    name: "Gemmy Dwirismariyan Hagi",
    npm: "257006111074",
    role: "",
    skills: [],
    image: "/foto/gemmy.JPG",
  },
  {
    id: 7,
    name: "Raffi Firmansyah",
    npm: "257006111131",
    role: "",
    skills: [],
    image: "/foto/raffi.JPG",
  },
  {
    id: 8,
    name: "Alia Zirlyanti Aripin",
    npm: "257006111111",
    role: "",
    skills: [],
    image: "/foto/alia.JPG",
  },
  {
    id: 9,
    name: "Hazmi Adzani Awanisi",
    npm: "257006111130",
    role: "",
    skills: [],
    image: "/foto/hazmi.JPG",
  },
  {
    id: 10,
    name: "Muhammad Azka Fakhri Fairuz",
    npm: "257006111019",
    role: "",
    skills: [],
    image: "/foto/azka.JPG",
  },
  {
    id: 11,
    name: "Muhammad Fabian Syauqi Mazaya",
    npm: "257006111197",
    role: "Team Lead",
    skills: [],
    image: "/foto/fabian.JPG",
  },
];

