export interface MateriSubsection {
  title: string;
  items: string[];
}

export interface MateriSection {
  heading: string;
  content: string | string[];
  type: "paragraph" | "list" | "sublist";
  subsections?: MateriSubsection[];
}

export interface Materi {
  slug: string;
  pertemuan: number;
  urutan: number;
  judul: string;
  pemateri: string;
  ringkasan: string;
  tag: string[];
  sections: MateriSection[];
}

export const materiList: Materi[] = [
  {
    slug: "analisis-pengembangan-masyarakat",
    pertemuan: 1,
    urutan: 1,
    judul: "Analisis dan Pengembangan Masyarakat",
    pemateri: "A Ace",
    ringkasan:
      "Memahami kondisi masyarakat secara sistematis dan bagaimana merancang pengembangan yang berkelanjutan melalui partisipasi aktif, keadilan sosial, dan kemandirian.",
    tag: ["Sosial", "Kepemimpinan", "Masyarakat"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Analisis Masyarakat merupakan proses memahami kondisi suatu kelompok secara sistematis. Sedangkan, pengembangan masyarakat sendiri adalah proses-proses terencana untuk meningkatkan kualitas suatu kelompok.",
      },
      {
        heading: "Tujuan Utama Pengembangan Masyarakat",
        type: "list",
        content: [
          "Meningkatkan kesejahteraan sosial dan ekonomi",
          "Membangun potensi sosial",
          "Mendorong kemandirian masyarakat",
          "Mengurangi kesenjangan sosial",
        ],
      },
      {
        heading: "Prinsip Pengembangan Masyarakat",
        type: "list",
        content: [
          "Partisipasi aktif masyarakat",
          "Keadilan sosial",
          "Kemandirian",
          "Kebutuhan berbasis data",
          "Keberlanjutan dan keterlibatan semua pihak",
        ],
      },
      {
        heading: "Metode Pengembangan Masyarakat",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Observasi",
            items: [
              "Teknik pengumpulan data melalui pengamatan langsung terhadap perilaku, interaksi, dan kondisi lingkungan masyarakat di lapangan untuk mendapatkan gambaran situasi yang objektif.",
            ],
          },
          {
            title: "Wawancara",
            items: [
              "Proses interaksi komunikasi dua arah untuk menggali informasi, opini, dan pengalaman personal dari informan secara mendalam.",
            ],
          },
          {
            title: "Fokus Diskusi Grup",
            items: [
              "Diskusi terarah yang melibatkan sekelompok orang untuk mengeksplorasi berbagai perspektif dan dinamika kelompok mengenai isu tertentu dalam masyarakat.",
            ],
          },
          {
            title: "Survei / Kuisioner",
            items: [
              "Instrumen pengumpulan data berupa daftar pertanyaan tertulis yang disebarkan kepada responden dalam jumlah besar guna memetakan tren atau pola perilaku secara kuantitatif.",
            ],
          },
          {
            title: "Kesadaran Sosial",
            items: [
              "Kemampuan peneliti untuk memahami kebutuhan, dinamika hubungan, serta struktur sosial yang memengaruhi kehidupan sehari-hari masyarakat setempat.",
            ],
          },
          {
            title: "Kesadaran Nilai dan Budaya",
            items: [
              "Sikap sensitivitas dan penghormatan terhadap nilai-nilai, norma, serta tradisi lokal agar program pengembangan yang dirancang dapat diterima tanpa menimbulkan konflik nilai.",
            ],
          },
        ],
      },
      {
        heading: "Faktor Pendorong",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Faktor Internal",
            items: [
              "Pertumbuhan penduduk, inovasi dan kreativitas masyarakat, pendidikan, kesadaran sosial, serta nilai dan budaya.",
            ],
          },
          {
            title: "Faktor Eksternal",
            items: [
              "Globalisasi, perkembangan teknologi, kebijakan pemerintah, dan inovasi antar budaya.",
            ],
          },
        ],
      },
      {
        heading: "Tahapan Analisis dan Pengembangan",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Identifikasi Masalah",
            items: [
              "Langkah awal untuk mengenali, memetakan, dan memahami akar persoalan serta tantangan utama yang sedang dihadapi oleh masyarakat.",
            ],
          },
          {
            title: "Analisis Kebutuhan",
            items: [
              "Proses sistematis untuk menentukan kesenjangan antara kondisi saat ini dengan kondisi yang diharapkan, guna menetapkan prioritas intervensi yang paling mendesak.",
            ],
          },
          {
            title: "Perencanaan Program",
            items: [
              "Penyusunan strategi, tujuan, jadwal kegiatan, serta pengalokasian sumber daya secara partisipatif agar langkah pengembangan memiliki arah yang jelas dan terukur.",
            ],
          },
          {
            title: "Implementasi",
            items: [
              "Fase pelaksanaan rencana ke dalam aksi nyata di lapangan dengan melibatkan peran aktif seluruh pemangku kepentingan.",
            ],
          },
          {
            title: "Evaluasi dan Keberlanjutan",
            items: [
              "Proses penilaian efektivitas program yang telah berjalan sekaligus penyusunan strategi agar manfaat dari perubahan tersebut dapat terus dirasakan secara mandiri.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dinamika-sosial-dan-politik",
    pertemuan: 1,
    urutan: 2,
    judul: "Dinamika Sosial dan Politik",
    pemateri: "A Arul",
    ringkasan:
      "Proses perubahan dalam kehidupan masyarakat dan sistem pemerintahan dari waktu ke waktu, serta peran strategis mahasiswa sebagai agen perubahan yang kritis dan moderat di era digital.",
    tag: ["Politik", "Sosial", "Mahasiswa"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Dinamika sosial dan politik adalah proses perubahan yang terjadi dalam kehidupan masyarakat dan sistem pemerintahan dari waktu ke waktu. Perubahan ini dipengaruhi oleh berbagai faktor, seperti perkembangan ekonomi, teknologi, budaya, serta partisipasi masyarakat dalam kehidupan berbangsa dan bernegara.",
      },
      {
        heading: "Perkembangan di Indonesia",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Masa Pra-Kemerdekaan (Sebelum 1945)",
            items: [
              "Masyarakat Indonesia berada di bawah penjajahan. Dinamika sosial ditandai oleh munculnya kesadaran nasional, semangat persatuan, serta lahirnya berbagai organisasi pergerakan nasional.",
            ],
          },
          {
            title: "Orde Lama (1945–1968)",
            items: [
              "Masa awal kemerdekaan dan pembentukan identitas bangsa. Sistem politik cenderung terpusat dengan pengaruh ideologi yang sangat kuat dalam kehidupan bernegara.",
            ],
          },
          {
            title: "Orde Baru (1968–1998)",
            items: [
              "Fokus pada stabilitas politik dan pembangunan ekonomi. Pertumbuhan ekonomi pesat, namun ruang kebebasan politik menjadi terbatas.",
            ],
          },
          {
            title: "Era Reformasi (1998–Sekarang)",
            items: [
              "Demokrasi berkembang lebih terbuka, kebebasan berpendapat semakin luas. Reformasi mendorong transparansi, akuntabilitas, serta desentralisasi kekuasaan.",
            ],
          },
        ],
      },
      {
        heading: "Korelasi dan Spektrum Politik",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Ideologi",
            items: [
              "Seperangkat nilai, gagasan, dan keyakinan yang menjadi dasar dalam berpikir dan bertindak dalam kehidupan politik.",
            ],
          },
          {
            title: "Spektrum Kiri dan Kanan",
            items: [
              "Kiri: menekankan kesetaraan sosial, pemerataan ekonomi, dan peran negara yang lebih besar.",
              "Kanan: menekankan kebebasan individu, pasar bebas, tradisi, dan peran pemerintah yang lebih terbatas.",
            ],
          },
          {
            title: "Pro dan Oposisi",
            items: [
              "Dalam sistem demokrasi, terdapat pihak yang mendukung kebijakan pemerintah (pro) dan pihak yang mengkritisi atau memberikan alternatif kebijakan (oposisi).",
            ],
          },
          {
            title: "Politik Kampus",
            items: [
              "Ruang pembelajaran demokrasi bagi mahasiswa. Melalui organisasi dan diskusi, kampus menjadi tempat melatih kepemimpinan dan kepedulian terhadap isu sosial.",
            ],
          },
          {
            title: "Idealis dan Realistis",
            items: [
              "Idealis: berpegang teguh pada nilai, prinsip, dan cita-cita.",
              "Realistis: mempertimbangkan kondisi nyata, tantangan, dan kemungkinan yang ada.",
            ],
          },
        ],
      },
      {
        heading: "Mahasiswa: Moderat dan Kritis",
        type: "list",
        content: [
          "Kritis: mampu menganalisis permasalahan secara objektif dan mendalam",
          "Moderat: bersikap seimbang, tidak ekstrem, dan terbuka terhadap perbedaan pandangan",
          "Bertanggung jawab: menyampaikan aspirasi dengan cara yang santun, berbasis data, dan solutif",
        ],
      },
      {
        heading: "Peran Mahasiswa di Era Digital",
        type: "list",
        content: [
          "Menjadi penyaring informasi yang kritis",
          "Melawan hoaks dengan literasi digital",
          "Menggunakan media sosial untuk edukasi dan advokasi",
          "Menyuarakan aspirasi secara etis dan konstruktif",
          "Mendorong perubahan sosial melalui inovasi digital",
        ],
      },
    ],
  },
  {
    slug: "manajemen-aksi",
    pertemuan: 1,
    urutan: 3,
    judul: "Manajemen Aksi",
    pemateri: "A Defri",
    ringkasan:
      "Aksi atau demonstrasi sebagai penyuaraan pendapat dan tuntutan secara terorganisir. Memahami mekanisme, perangkat, dan cara merancang aksi yang efektif, termasuk di ruang digital.",
    tag: ["Organisasi", "Aksi", "Digital"],
    sections: [
      {
        heading: "Apa itu Manajemen Aksi?",
        type: "paragraph",
        content:
          "Aksi atau demonstrasi merupakan pernyataan sikap/penyuaraan pendapat, opini, atau tuntutan dengan teknik tertentu agar mendapat perhatian dari pihak yang dituju tanpa birokrasi. Tujuan aksi adalah untuk menekan pembuatan keputusan supaya melakukan suatu tindakan. Hal yang melatarbelakangi terjadinya aksi karena matinya jalur penyampaian aspirasi atau buntunya dialog dengan pihak terkait, berdasarkan Undang-Undang No. 9/1998.",
      },
      {
        heading: "Mekanisme Keputusan Aksi",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Diskusi Awal",
            items: [
              "Tahap penggalian gagasan mentah di mana pihak pengembang dan tokoh masyarakat bertemu untuk menyamakan persepsi mengenai temuan masalah serta potensi solusi.",
            ],
          },
          {
            title: "Pembentukan Tim",
            items: [
              "Langkah pengorganisasian dengan menunjuk individu-individu yang kompeten dan mewakili berbagai elemen masyarakat.",
            ],
          },
          {
            title: "Diskusi Lanjutan",
            items: [
              "Proses pematangan rencana secara teknis oleh tim yang telah dibentuk, mencakup pembagian tugas, penentuan jadwal, serta antisipasi kendala.",
            ],
          },
          {
            title: "Aksi di Lapangan",
            items: [
              "Tahap eksekusi di mana seluruh rencana yang telah disepakati bersama diwujudkan melalui serangkaian tindakan nyata.",
            ],
          },
        ],
      },
      {
        heading: "Perangkat Aksi",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Koordinator Lapangan",
            items: [
              "Pimpinan tertinggi di lapangan yang bertanggung jawab mengendalikan seluruh massa aksi dan mengambil keputusan cepat berdasarkan situasi.",
            ],
          },
          {
            title: "Orator",
            items: [
              "Bertugas menyampaikan aspirasi, tuntutan, dan pesan-pesan perjuangan secara lisan guna membakar semangat massa.",
            ],
          },
          {
            title: "Negosiator",
            items: [
              "Perwakilan tim yang melakukan diplomasi atau perundingan langsung dengan pihak terkait.",
            ],
          },
          {
            title: "Agitator",
            items: [
              "Memengaruhi massa secara psikologis melalui yel-yel, poster, maupun interaksi langsung guna menjaga fokus dan militansi massa.",
            ],
          },
          {
            title: "Logistik",
            items: [
              "Bertanggung jawab atas ketersediaan perlengkapan teknis dan kebutuhan dasar massa: konsumsi, alat peraga, hingga transportasi.",
            ],
          },
          {
            title: "Tim Kreatif",
            items: [
              "Pengonsep visual dan narasi aksi yang menciptakan gimik, atribut menarik, atau pertunjukan teatrikal agar isu mudah dipahami publik.",
            ],
          },
          {
            title: "Tim Humas",
            items: [
              "Jembatan komunikasi antara massa aksi dengan media massa untuk memberikan keterangan pers secara akurat.",
            ],
          },
          {
            title: "Tim Medis",
            items: [
              "Bersiaga memberikan pertolongan pertama dan evakuasi jika ada massa yang mengalami cedera atau gangguan kesehatan.",
            ],
          },
          {
            title: "Dokumenter",
            items: [
              "Mengabadikan seluruh rangkaian kegiatan dalam bentuk foto maupun video sebagai arsip sejarah dan materi publikasi.",
            ],
          },
        ],
      },
      {
        heading: "Pergeseran Medan Juang di Era Digital",
        type: "paragraph",
        content:
          "Di era digital, perjuangan tidak lagi terbatas pada ruang fisik. Ruang siber telah menjadi arena baru dalam advokasi, kampanye, dan mobilisasi massa. Gerakan sosial kini dapat dibangun, diperluas, dan diperkuat melalui teknologi informasi.",
      },
      {
        heading: "Senjata Kader Informatika dalam Aksi Digital",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Fungsi Utama Website Aksi",
            items: [
              "Menjadi pusat informasi resmi gerakan",
              "Menyediakan data, kajian, dan dokumen pendukung",
              "Menghubungkan massa dengan agenda aksi",
              "Menjadi media kampanye dan edukasi publik",
            ],
          },
          {
            title: "Kredibilitas dan Otoritas",
            items: [
              "Platform digital harus menyajikan informasi yang valid, akurat, dan dapat dipertanggungjawabkan agar dipercaya publik.",
            ],
          },
          {
            title: "Visualisasi Data",
            items: [
              "Penyajian data dalam bentuk infografis, grafik, atau visual interaktif akan memudahkan publik memahami isu yang diangkat.",
            ],
          },
          {
            title: "Search Engine Optimization (SEO)",
            items: [
              "Optimalisasi mesin pencari penting agar informasi dan kampanye aksi mudah ditemukan oleh masyarakat luas di internet.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "otoritas-informasi",
    pertemuan: 2,
    urutan: 1,
    judul: "Otoritas Informasi",
    pemateri: "A Ikmal",
    ringkasan:
      "Kemampuan mengelola, mendistribusikan, dan melindungi informasi secara bertanggung jawab. Memahami tiga pilar utama otoritas, klasifikasi informasi, serta siklus manajemen otoritas dalam konteks digital.",
    tag: ["Teknologi", "Informasi", "Digital"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Otoritas merupakan kemampuan seseorang dalam mengelola, mendistribusikan, membuat keputusan, dan memerintahkan tindakan.",
      },
      {
        heading: "3 Pilar Utama Otoritas",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Struktur (Structure)",
            items: [
              "Menentukan hierarki dan bagaimana tanggung jawab dibagi dalam sebuah sistem.",
            ],
          },
          {
            title: "Validasi (Validation)",
            items: [
              "Proses pembuktian bahwa seseorang adalah benar-benar pihak yang berhak melakukan tindakan atau mengakses informasi tertentu.",
            ],
          },
          {
            title: "Hak Akses (Access Rights)",
            items: [
              "Izin spesifik yang diberikan kepada pengguna untuk mengakses, mengubah, atau mendistribusikan informasi.",
            ],
          },
        ],
      },
      {
        heading: "Informatika sebagai Arsitek Hukum",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Digital Sovereignty (Kedaulatan Digital)",
            items: [
              "Kemampuan suatu entitas untuk memiliki kendali penuh atas data dan infrastruktur digitalnya sendiri. Informatika menyediakan alat seperti enkripsi dan penyimpanan data lokal.",
            ],
          },
          {
            title: "Supreme Authority (Otoritas Tertinggi)",
            items: [
              "Dalam sistem teknis, sering disebut sebagai Root atau Superadmin — entitas yang memiliki kendali mutlak atas seluruh sistem.",
            ],
          },
        ],
      },
      {
        heading: "Klasifikasi Informasi",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Publik",
            items: [
              "Data boleh diakses oleh siapa saja tanpa batasan khusus, bersifat transparan dan terbuka.",
            ],
          },
          {
            title: "Internal",
            items: ["Data hanya boleh diakses oleh anggota organisasi saja."],
          },
          {
            title: "Rahasia",
            items: [
              "Data bersifat sensitif, tidak boleh diakses oleh pihak lain, dan apabila terjadi kebocoran akan merugikan pihak tertentu.",
            ],
          },
        ],
      },
      {
        heading: "Siklus Manajemen Otoritas",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Akurasi (Accuracy)",
            items: [
              "Memastikan bahwa data identitas pengguna benar dan mutakhir.",
            ],
          },
          {
            title: "Klasifikasi (Classification)",
            items: [
              "Menentukan tingkat sensitivitas setiap data atau aset baru yang masuk ke dalam sistem.",
            ],
          },
          {
            title: "Distribusi (Distribution)",
            items: [
              "Proses memberikan hak akses kepada pihak yang tepat melalui saluran yang aman.",
            ],
          },
          {
            title: "Proteksi (Protection)",
            items: [
              "Melindungi hak akses dari ancaman luar (peretasan) maupun ancaman dalam melalui pemantauan (audit trail) dan enkripsi.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "retorika",
    pertemuan: 2,
    urutan: 2,
    judul: "Retorika",
    pemateri: "A Abdillah",
    ringkasan:
      "Seni berbicara secara efektif dan persuasif untuk memengaruhi, meyakinkan, atau menginspirasi audiensi melalui bahasa yang tepat dan strategis — dengan keseimbangan antara ethos, pathos, dan logos.",
    tag: ["Komunikasi", "Kepemimpinan", "Publik Speaking"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Retorika adalah sebuah seni berbicara secara efektif dan persuasif untuk memengaruhi, meyakinkan, atau menginspirasi audiensi melalui bahasa yang tepat dan strategis.",
      },
      {
        heading: "Prinsip Dasar Retorika",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Ethos (Kredibilitas)",
            items: [
              "Mengarah kepada kualitas siapa yang berbicara. Kredibilitas pembicara menjadi pondasi utama dalam memengaruhi audiensi.",
            ],
          },
          {
            title: "Pathos (Emosi)",
            items: [
              "Cara penyampaian yang berfokus pada perasaan audiensi, meliputi perasaan simpati, marah, bangga, semangat, dan lain-lain.",
            ],
          },
          {
            title: "Logos (Logika)",
            items: [
              "Sebuah argumen akan lebih mudah diyakinkan jika disertai dengan fakta dan data sehingga masuk akal dan mudah diterima.",
            ],
          },
        ],
      },
      {
        heading: "Ruang Lingkup Retorika",
        type: "sublist",
        content: [],
        subsections: [
          {
            title: "Teknik Berbicara",
            items: [
              "Story Telling — menyampaikan pesan melalui cerita yang menarik",
              "Menggunakan bahasa tubuh secara efektif",
              "Memiliki struktur yang jelas",
              "Menyertakan data dan contoh konkret",
              "Latihan secara konsisten",
            ],
          },
          {
            title: "Memahami Audiensi dan Gaya Bicara",
            items: [
              "Mengetahui background audiensi",
              "Penyesuaian gaya (formal, semi formal, atau non-formal)",
              "Gunakan istilah yang relevan dengan audiensi",
            ],
          },
        ],
      },
      {
        heading: "Prinsip-Prinsip Dasar",
        type: "paragraph",
        content:
          "Penting bagi seseorang yang melakukan retorika untuk memiliki keterhubungan dan keseimbangan antara emosi, logika, dan kredibilitas yang relevan untuk kemampuan memengaruhi audiensi. Ketiganya harus berjalan selaras agar pesan tersampaikan dengan maksimal.",
      },
    ],
  },
  {
    slug: "analisa-organisasi",
    pertemuan: 3,
    urutan: 1,
    judul: "Analisa Organisasi",
    pemateri: "Fauzan Alvian Mubarok",
    ringkasan:
      "Proses memahami kondisi suatu organisasi agar dapat berjalan secara efektif dan terarah, mencakup struktur, tujuan, pembagian tugas, serta komunikasi antar anggota.",
    tag: ["Organisasi", "Manajemen", "Kepemimpinan"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Analisa dan organisasi merupakan proses memahami kondisi suatu organisasi agar dapat berjalan secara efektif dan terarah. Dalam sebuah organisasi, diperlukan struktur, tujuan, pembagian tugas, serta komunikasi yang baik antar anggota. Melalui analisa organisasi, dapat diketahui berbagai masalah, kebutuhan, maupun potensi yang dimiliki organisasi sehingga dapat dilakukan perbaikan dan pengembangan secara tepat.",
      },
      {
        heading: "Tujuan Analisa Organisasi",
        type: "paragraph",
        content:
          "Tujuan dari analisa organisasi adalah untuk meningkatkan efektivitas kerja, memperkuat kerja sama antar anggota, serta membantu organisasi mencapai tujuan yang telah ditetapkan. Dengan analisa yang baik, organisasi dapat berkembang menjadi lebih teratur, solid, dan mampu menghadapi berbagai tantangan.",
      },
    ],
  },
  {
    slug: "pembangunan-pengembangan-organisasi",
    pertemuan: 3,
    urutan: 2,
    judul: "Pembangunan dan Pengembangan Organisasi",
    pemateri: "Wildan Fauzi Agustin",
    ringkasan:
      "Pembangunan organisasi sebagai proses pembentukan dasar dan sistem, serta pengembangan organisasi sebagai upaya meningkatkan kualitas agar mampu berkembang sesuai kebutuhan dan perubahan zaman.",
    tag: ["Organisasi", "Manajemen", "Pengembangan"],
    sections: [
      {
        heading: "Pembangunan Organisasi",
        type: "paragraph",
        content:
          "Pembangunan organisasi adalah proses pembentukan dasar dan sistem organisasi agar dapat berjalan dengan baik. Proses ini meliputi penyusunan struktur organisasi, pembagian tugas, penetapan visi dan misi, serta pembentukan aturan yang menjadi pedoman bersama.",
      },
      {
        heading: "Pengembangan Organisasi",
        type: "paragraph",
        content:
          "Pengembangan organisasi merupakan upaya meningkatkan kualitas organisasi agar mampu berkembang sesuai kebutuhan dan perubahan zaman. Pengembangan dapat dilakukan melalui peningkatan kemampuan anggota, perbaikan sistem kerja, penguatan komunikasi, serta peningkatan kerja sama antar anggota organisasi.",
      },
      {
        heading: "Tujuan",
        type: "paragraph",
        content:
          "Tujuan pembangunan dan pengembangan organisasi adalah menciptakan organisasi yang aktif, efektif, adaptif, dan mampu mencapai tujuan bersama secara maksimal.",
      },
    ],
  },
  {
    slug: "kekeluargaan",
    pertemuan: 3,
    urutan: 3,
    judul: "Kekeluargaan",
    pemateri: "Teh Annisa",
    ringkasan:
      "Nilai penting dalam LKM yang menekankan hubungan harmonis antar anggota organisasi, menciptakan rasa saling menghargai, saling membantu, serta memperkuat solidaritas dan kebersamaan.",
    tag: ["Organisasi", "Nilai", "Solidaritas"],
    sections: [
      {
        heading: "Pengertian",
        type: "paragraph",
        content:
          "Kekeluargaan dalam LKM merupakan nilai penting yang menekankan hubungan harmonis antar anggota organisasi. Sikap kekeluargaan menciptakan rasa saling menghargai, saling membantu, serta memperkuat solidaritas dan kebersamaan dalam menjalankan kegiatan organisasi.",
      },
      {
        heading: "Manfaat Kekeluargaan",
        type: "paragraph",
        content:
          "Dengan adanya rasa kekeluargaan, anggota organisasi dapat bekerja sama dengan lebih baik, menjaga komunikasi yang positif, serta menciptakan lingkungan organisasi yang nyaman dan kondusif. Nilai ini juga membantu membangun rasa memiliki terhadap organisasi sehingga setiap anggota lebih bertanggung jawab dalam menjalankan tugas dan menjaga nama baik organisasi.",
      },
      {
        heading: "Peran dalam Organisasi",
        type: "paragraph",
        content:
          "Kekeluargaan menjadi salah satu faktor penting dalam membangun organisasi yang solid, kompak, dan mampu bertahan dalam berbagai situasi.",
      },
    ],
  },
];

export function getMateriBySlug(slug: string): Materi | undefined {
  return materiList.find((m) => m.slug === slug);
}

export function getMateriByPertemuan(pertemuan: number): Materi[] {
  return materiList.filter((m) => m.pertemuan === pertemuan);
}

export const pertemuanList = [
  { number: 1, label: "Pertemuan 1" },
  { number: 2, label: "Pertemuan 2" },
  { number: 3, label: "Pertemuan 3" },
];
