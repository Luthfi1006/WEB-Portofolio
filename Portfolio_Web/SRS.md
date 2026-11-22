# Software Requirements Specification (SRS)
## Proyek: NEXUS_ROOT — Cyber-Ops Structured Hacker Portfolio

| Atribut Dokumen | Detail Spesifikasi |
| :--- | :--- |
| **ID Dokumen** | `SRS-NEXUS-GATE-2026` |
| **Versi** | `4.0.0 (Structured Welcome Puzzle Gate + Black & Neon Blue Edition)` |
| **Standar Referensi** | ISO/IEC/IEEE 29148 |
| **Target Eksekutor** | Autonomous AI Coding Agent (Codex CLI) |
| **Arsitektur Target** | Next.js App Router, React 19, TypeScript Strict, Tailwind CSS, Framer Motion |

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen *Software Requirements Specification* (SRS) ini mendefinisikan secara lengkap dan terstruktur arsitektur aplikasi, sistem desain **Void Black & Electric Neon Blue**, koreografi animasi futuristik, serta mekanika **Gerbang Teka-Teki Sambutan (*Welcome Security Puzzle Gate*)** yang menjadi pintu masuk interaktif menuju **Home Page** portofolio.

### 1.2 Arsitektur Alur Halaman (Structured Progression)
Aplikasi dirancang dengan struktur linear yang jelas dan terarah:
1. **Entry Gate (`SecurityGate`):** Pengunjung disambut oleh sistem keamanan terminal dan memecahkan 1 teka-teki/mini-game dekripsi singkat untuk membuka kunci gerbang.
2. **Home Page (`HeroTerminal`):** Tirai gerbang terbuka ke atas & bawah, menampilkan sapaan personal sesuai status akses pengunjung, nama/peran dengan efek dekripsi, dan foto profil utama berbingkai HUD.
3. **Profile & Multi-Photo Gallery (`ProfileBento`):** Pengenalan diri mendalam dilengkapi penampil berbagai foto profil pengguna.
4. **Projects Archive (`ProjectsVault`):** Pameran karya/proyek dengan dukungan foto pratinjau maupun *Cyber Blueprint* otomatis.
5. **Experience & Journey (`TimelinePlasma`):** Linimasa pengalaman dengan sinar plasma Neon Blue yang mengikuti scroll.
6. **Contact Uplink (`ContactUplink`):** Saluran komunikasi langsung untuk kolaborasi.

---

## 2. Sistem Desain Visual (Black & Neon Blue Cyber Theme)

### 2.1 Palet Warna Wajib (`src/app/globals.css`)
Seluruh antarmuka wajib menggunakan variasi hitam pekat (*Void Black*) dan biru neon elektrik (*Electric Neon Blue*):

| Token CSS | Kode Warna | Peran Visual |
| :--- | :--- | :--- |
| `--bg-void` | `#020408` | Latar belakang utama (Hitam pekat berbias biru malam) |
| `--bg-obsidian` | `#060B14` | Latar belakang panel terminal & gerbang keamanan |
| `--bg-cyber-glass` | `rgba(7, 16, 32, 0.75)` | Permukaan kartu kaca gelap dengan `backdrop-filter: blur(14px)` |
| `--neon-cyan` | `#00F0FF` | **Warna Aksen Utama** (Laser pemindai, garis sirkuit, border aktif, teks highlight) |
| `--neon-blue` | `#0EA5E9` | **Warna Aksen Sekunder** (Gradasi tombol, aura glow, indikator radar) |
| `--neon-deep` | `#0369A1` | Bayangan cahaya biru dalam (*outer neon box-shadow*) |
| `--neon-ice` | `#BAE6FD` | Sorotan cahaya putih-biru tajam |
| `--alert-crimson` | `#FF2A5F` | Indikator *LOCKED / WRONG CODE* pada gerbang teka-teki |
| `--text-primary` | `#F0F9FF` | Teks utama putih-kebiruan kontras tinggi |
| `--text-secondary` | `#94A3B8` | Teks deskripsi & metadata |
| `--border-cyber` | `rgba(0, 240, 255, 0.20)` | Garis tepi kartu 1px bernuansa biru neon |

### 2.2 Tipografi & Tekstur
- **Display Font:** `Space Grotesk` (Google Fonts) untuk judul utama yang tegas dan futuristik.
- **Terminal & Code Font:** `JetBrains Mono` (Google Fonts) untuk seluruh teks teka-teki, sapaan terminal, status HUD, badge teknologi, dan metadata.
- **Latar Atmosferik (`CyberMatrixCanvas.tsx`):** Latar `<canvas>` *fixed* dengan opasitas halus (`0.14`) yang merender aliran kode biner/heksadesimal (`0`, `1`, `0x0F`, `//`) berwarna `#00F0FF` serta bereaksi lembut saat kursor bergerak.
- **Subtle CRT Scanline:** Lapisan garis monitor tipis (`opacity: 0.035`, `pointer-events: none`) untuk memperkuat nuansa *cyber-deck*.

### 2.3 Konstanta Fisika Animasi (`src/lib/motion.ts`)
```ts
export const CYBER_MOTION = {
  EASE_CYBER_OUT: [0.16, 1, 0.3, 1] as const,
  EASE_SHUTTER: [0.76, 0, 0.24, 1] as const,
  SPRING_SNAPPY: { type: "spring", stiffness: 450, damping: 30, mass: 0.7 } as const,
  SPRING_MAGNETIC: { type: "spring", stiffness: 200, damping: 15, mass: 0.4 } as const,
  SPRING_CURSOR: { type: "spring", stiffness: 550, damping: 35, mass: 0.2 } as const,
};
```

---

## 3. Kebutuhan Fungsional (Functional Requirements)

### FR-01: Welcome Security Puzzle Gate (`SecurityGate.tsx` & `src/data/puzzles.ts`)
- **Deskripsi:** Gerbang pembuka layar penuh (*fullscreen interactive gateway*) yang muncul sebelum pengunjung masuk ke **Home Page**.
- **Struktur & Mekanika Teka-Teki Sambutan:**
  1. **Sambutan Gerbang:** Menampilkan header terminal beranimasi ketikan:
     - `> INCOMING CONNECTION DETECTED...`
     - `> SECURITY CHECKPOINT: SOLVE DECRYPTION CHALLENGE TO ENTER HOME`
  2. **Mini-Game / Teka-Teki Interaktif (2 Langkah Singkat & Seru):**
     - **Langkah 1 — Logic / Cyber Riddle:** Sistem memilih 1 teka-teki acak dari `src/data/puzzles.ts` (misalnya teka-teki logika sistem, pola angka biner, atau teka-teki cyber dengan petunjuk *Hint* yang jelas sehingga ramah bagi semua pengunjung) dengan 3 tombol pilihan jawaban Neon Blue. Jika salah, kartu bergetar halus (*shake animation*) dengan kilatan `--alert-crimson` dan menampilkan petunjuk tambahan.
     - **Langkah 2 — Node Circuit Alignment (Mini-Game Klik Cepat):** Setelah jawaban benar, muncul 4 sirkuit kunci Neon Blue (`NODE_01` s.d. `NODE_04`) yang menyala berurutan selama 1.5 detik; pengunjung cukup menekan ke-4 node tersebut untuk menstabilkan koneksi.
  3. **Smart UX Bypass (`GUEST_MODE`):** Di sudut bawah gerbang tersedia tombol kecil elegan: `[ SKIP_CHALLENGE // ENTER_AS_GUEST ]` agar recruiter atau tamu yang sedang terburu-buru tetap bisa langsung masuk ke Home Page tanpa hambatan.
  4. **Animasi Gerbang Terbuka (*Cyber Shutter Transition*):**
     - Saat teka-teki selesai, muncul banner besar bercahaya Neon Blue: **`[ ACCESS GRANTED // WELCOME TO NEXUS_ROOT ]`** disertai percikan partikel Neon Blue (`canvas-confetti`).
     - Layar gerbang terbelah dua secara horizontal (panel atas meluncur ke atas, panel bawah meluncur ke bawah dengan `EASE_SHUTTER`) untuk mengungkap **Home Page** di baliknya!
  5. **Persistence & Replay:** Status kelulusan (`"VERIFIED_AGENT"` atau `"GUEST"`) disimpan di `sessionStorage` agar tidak mengganggu saat pengunjung berpindah anchor/refresh, namun tersedia tombol **`[ REPLAY_GATE ]`** di Navbar jika pengunjung ingin memainkan ulang teka-teki sambutannya.

### FR-02: Tactical HUD Navbar (`HudNavbar.tsx`)
- **Deskripsi:** Bilah navigasi atas bergaya *glassmorphism* yang muncul setelah gerbang terbuka.
- **Elemen Wajib:**
  - Logo / Kode Sistem (`NEXUS_ROOT // v4.0`).
  - **Access Status Badge:** Menampilkan **`● AGENT_VERIFIED`** (warna Neon Cyan menyala) jika pengunjung menyelesaikan teka-teki sambutan, atau **`○ GUEST_ACCESS`** jika melewati teka-teki.
  - Link navigasi terstruktur dengan indikator aktif `layoutId`: `01.HOME`, `02.PROFILE`, `03.PROJECTS`, `04.EXPERIENCE`, `05.CONTACT`.
  - Tombol interaktif **`[ REPLAY_GATE ]`** untuk membuka kembali gerbang teka-teki sambutan kapan saja.

### FR-03: Stage 1 — Home Page & Sapaan Personal (`HeroTerminal.tsx`)
- **Deskripsi:** Halaman utama (`min-h-screen`) yang langsung menyambut pengunjung begitu gerbang terbuka.
- **Elemen & Animasi:**
  1. **Sapaan Dinamis Kontekstual:** Menampilkan kotak terminal sapaan yang menyesuaikan waktu lokal dan status kelulusan teka-teki pengunjung:
     - Jika lulus teka-teki: `> ACCESS GRANTED // WELCOME, VERIFIED AGENT. SYSTEM READY.`
     - Jika guest: `> WELCOME, VISITOR // GUEST SESSION INITIALIZED.`
  2. **Identitas & Headline Glitch:** Nama lengkap dan peran utama tampil besar dengan efek dekripsi huruf acak (`ScrambleText`) dan efek *RGB Neon Blue Glitch* saat di-hover (`GlitchText`).
  3. **Foto Profil Utama Berbingkai Cyber-HUD:** Foto profil utama di sisi kanan dalam bingkai bersudut *chamfered* Neon Blue, dilengkapi garis laser pemindai bergerak naik-turun, sudut siku HUD menyala, dan badge telemetry (`STATUS: ONLINE`, `ROLE: DEVELOPER`).
  4. **Magnetic CTA Buttons:** Tombol `"VIEW MY PROFILE"` dan `"EXPLORE PROJECTS"` dengan efek magnetik.

### FR-04: Stage 2 — Profil & Galeri Multi-Foto Bento (`ProfileBento.tsx`)
- **Deskripsi:** Section profil lengkap yang tersusun rapi menggunakan *Asymmetric Bento Grid* (12 kolom desktop, 1 kolom mobile).
- **Komposisi Kartu:**
  1. **Multi-Photo Profile Switcher Card (Col-span 5):** Menampilkan koleksi foto profil pengguna (`profile.photos[]`, misalnya: foto portrait, foto workspace/ngoding, foto kegiatan). Pengunjung dapat mengklik tab/thumbnail di bawah foto untuk berpindah antar foto dengan transisi *digital scanline wipe*. Menyediakan *fallback* visual avatar cyber jika file foto belum diisi.
  2. **Decrypted Bio & Highlight Stats Card (Col-span 7):** Cerita singkat tentang latar belakang, keahlian, minat teknologi, serta 3 angka statistik pencapaian dengan animasi *count-up*.
  3. **Live Location Radar Card (Col-span 4):** Animasi radar sonar berputar berwarna Neon Blue + jam lokal *real-time*.
  4. **Infinite Neon Tech-Stack Marquee (Col-span 8):** Pita ikon dan nama teknologi yang bergerak mulus dua arah.

### FR-05: Stage 3 — Arsip Proyek Cerdas (`ProjectsVault.tsx`)
- **Deskripsi:** Katalog proyek-proyek pengguna dengan filter kategori (`ALL`, `WEB_DEV`, `CYBER_TOOLS`, `CREATIVE_UI`) beranimasi `layoutId`.
- **Penanganan Foto Proyek Otomatis (Ada Foto maupun Tanpa Foto):**
  - **Jika `project.thumbnailUrl` tersedia:** Menampilkan foto proyek dalam rasio `16:9` dengan bingkai Neon Blue, efek *zoom* halus saat di-hover, dan tag kategori.
  - **Jika `project.thumbnailUrl` kosong atau error:** Sistem otomatis merender **Generative Cyber Blueprint Card** (latar grid koordinat Neon Blue, nomor seri proyek `PRJ-0X`, ikon arsitektur sistem, dan judul teknis) sehingga proyek yang belum memiliki foto tetap tampil estetis dan serasi dengan tema hacker.
- **Project Dossier Drawer:** Klik pada kartu proyek membuka panel samping (*slide-over drawer*) berisi ringkasan masalah, solusi teknis, fitur utama, tech stack, serta tautan *Live Demo* & *Source Code*.

### FR-06: Stage 4 — Jejak Pengalaman dengan Sinar Plasma (`TimelinePlasma.tsx`)
- **Deskripsi:** Linimasa pengalaman kerja, proyek tim, atau pendidikan dengan garis vertikal di sisi kiri yang dialiri **sinar plasma Neon Blue (`#00F0FF`)** seiring halaman di-scroll (`useScroll` + `useTransform`).

### FR-07: Stage 5 — Kontak Uplink (`ContactUplink.tsx`)
- **Deskripsi:** Bagian penutup yang terstruktur untuk menghubungi pemilik portofolio:
  - Tombol **One-Click Copy Email** dengan efek percikan partikel Neon Blue dan notifikasi `> EMAIL COPIED TO CLIPBOARD`.
  - Formulir pesan singkat (*Sender Name*, *Email*, *Message*) dengan animasi transmisi data.

---

## 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Aspek | Spesifikasi Terukur |
| :--- | :--- | :--- |
| **NFR-01** | **Performa 60 FPS** | Animasi *Digital Rain Canvas* wajib menggunakan `requestAnimationFrame` dan menjeda rendering otomatis saat tab browser tidak aktif (`document.hidden`). |
| **NFR-02** | **Responsivitas Penuh** | Gerbang teka-teki, Hero Home, galeri multi-foto, kartu proyek, dan timeline wajib tampil rapi dari layar `360px` (mobile) hingga `2560px` (desktop). |
| **NFR-03** | **Aksesibilitas** | Mendukung `useReducedMotion()` untuk mengurangi efek kilatan bagi pengguna sensitif gerak, serta menjaga kontras teks minimal rasio `4.5:1`. |
| **NFR-04** | **Mandiri Tanpa API Eksternal** | Seluruh teka-teki, animasi, dan data berjalan 100% lokal di dalam aplikasi tanpa ketergantungan API key pihak ketiga. |

---

## 5. Kontrak Struktur Data (`src/data/puzzles.ts` & `src/data/portfolio.ts`)

### 5.1 Kontrak Bank Teka-Teki Sambutan (`src/data/puzzles.ts`)
```ts
export interface SecurityRiddle {
  id: string;
  codeTag: string; // Contoh: "CIPHER_01 // BINARY_LOGIC"
  prompt: string; // Pertanyaan teka-teki singkat
  hint: string; // Petunjuk jika user salah memilih
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
  }[];
}
```

### 5.2 Kontrak Data Portofolio (`src/data/portfolio.ts`)
```ts
export interface ProfilePhoto {
  id: string;
  url: string;
  caption: string;
  tag: string; // Contoh: "MAIN_ID", "WORKSPACE", "FIELD_ACTIVITY"
}

export interface ProjectItem {
  id: string;
  codeName: string; // Contoh: "PRJ_01 // SENTINEL_WEB"
  title: string;
  category: "WEB_DEV" | "CYBER_TOOLS" | "CREATIVE_UI";
  year: string;
  shortDescription: string;
  problemStatement: string;
  solutionArchitecture: string;
  features: string[];
  techStack: string[];
  thumbnailUrl?: string; // Opsional: jika kosong, otomatis merender Cyber Blueprint
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface PortfolioData {
  profile: {
    alias: string;
    fullName: string;
    roles: string[];
    headline: string;
    subheadline: string;
    bio: string[];
    location: string;
    timezone: string;
    email: string;
    statusText: string;
    resumeUrl: string;
    photos: ProfilePhoto[];
    stats: { label: string; value: number; suffix: string }[];
  };
  skills: { name: string; level: string }[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  socials: { name: string; handle: string; url: string }[];
}
```

---

## 6. Definition of Done (Kriteria Selesai untuk Codex CLI)

Proyek dinyatakan selesai dan siap digunakan apabila:
1. Alur halaman berjalan terstruktur mulai dari **Stage 0 (`SecurityGate` Teka-Teki Sambutan)** -> **Stage 1 (`HeroTerminal` Home & Sapaan)** -> **Stage 2 (`ProfileBento` Multi-Foto)** -> **Stage 3 (`ProjectsVault`)** -> **Stage 4 (`TimelinePlasma`)** -> **Stage 5 (`ContactUplink`)**.
2. Tema warna **Void Black (`#020408`) & Electric Neon Blue (`#00F0FF` / `#0EA5E9`)** diterapkan secara konsisten di seluruh komponen.
3. Gerbang teka-teki sambutan berfungsi penuh (bisa dimainkan, ada animasi tirai terbuka ke Home Page, ada tombol *Guest Bypass*, dan bisa diulang via tombol `[ REPLAY_GATE ]` di Navbar).
4. Perintah `npx tsc --noEmit` dan `npm run build` selesai dengan exit code `0` tanpa error.