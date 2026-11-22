# NEXUS_ROOT // Cyber-Ops Interactive Hacker Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.x-020408?style=flat-square&logo=next.js&logoColor=00F0FF)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-020408?style=flat-square&logo=react&logoColor=00F0FF)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-020408?style=flat-square&logo=typescript&logoColor=00F0FF)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-020408?style=flat-square&logo=tailwind-css&logoColor=00F0FF)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-020408?style=flat-square&logo=framer&logoColor=00F0FF)](https://www.framer.com/motion/)

> **NEXUS_ROOT** adalah website portofolio personal bertema *Cyber-Security & Futuristic Hacker Interface* dengan palet warna **Void Black (`#020408`) & Electric Neon Blue (`#00F0FF`)**. Website ini dirancang dengan alur pengalaman yang terstruktur: dimulai dari **Gerbang Teka-Teki Sambutan (*Welcome Security Puzzle Gate*)** sebelum masuk ke **Home Page**, dilanjutkan sapaan terminal personal, galeri multi-foto profil, katalog proyek (dengan atau tanpa foto), perjalanan karier, hingga kontak terenkripsi.

---

## 1. Alur Pengalaman Pengguna (Structured User Journey)

Agar portofolio terasa rapi, bercerita, dan tidak berantakan, seluruh halaman disusun dalam 6 tahap berurutan:

1. **STAGE 0 — Welcome Puzzle Gate (`SecurityGate.tsx`):** Layar gerbang keamanan pembuka saat pengunjung baru tiba. Pengunjung disambut terminal keamanan dan diminta memecahkan **1 Teka-Teki / Mini-Game Dekripsi Singkat** untuk membuka akses ke Home Page (dilengkapi tombol `[ GUEST_BYPASS ]` bagi tamu yang ingin langsung masuk).
2. **STAGE 1 — Home & Sapaan Utama (`HeroTerminal.tsx`):** Tirai gerbang terbuka secara sinematik menuju Home Page. Menampilkan sapaan dinamis (berbeda statusnya jika pengunjung berhasil memecahkan teka-teki vs *guest*), identitas dengan animasi *glitch/scramble*, dan **Foto Profil Utama** berbingkai *Cyber-HUD* dengan laser pemindai.
3. **STAGE 2 — Profil & Galeri Multi-Foto (`ProfileBento.tsx`):** Tata letak *Bento Grid* berisi bio singkat, **pemilih galeri foto profil** (foto portrait, setup ngoding, aktivitas), radar lokasi *real-time*, dan *tech stack* berjalan.
4. **STAGE 3 — Arsip Proyek (`ProjectsVault.tsx`):** Galeri proyek dengan filter kategori. Mendukung tampilan foto proyek nyata maupun **Generative Cyber Blueprint** otomatis jika proyek belum memiliki foto.
5. **STAGE 4 — Jejak Pengalaman (`TimelinePlasma.tsx`):** Riwayat pendidikan/pengalaman dengan garis vertikal beranimasi sinar plasma Neon Blue saat di-scroll.
6. **STAGE 5 — Kontak Uplink (`ContactUplink.tsx`):** Tombol salin email satu klik berpartikel neon dan formulir pesan terenkripsi.

---

## 2. Autonomous AI Agent Protocol (Instruksi Eksekusi Codex CLI)

Dokumen ini menjadi panduan eksekusi utama bagi **Codex CLI**. Agen wajib menjalankan langkah berikut secara berurutan:

1. **Baca Spesifikasi:** Pahami seluruh aturan visual, koreografi animasi, dan kebutuhan fungsional (`FR-01` s.d. `FR-08`) di dalam `SRS.md`.
2. **Inisialisasi Proyek:** Buat proyek Next.js (App Router, TypeScript strict, Tailwind CSS, ESLint, direktori `src/`) dan instal paket animasi yang dibutuhkan.
3. **Bangun Cyber Design System & Motion Primitives:**
   - Konfigurasi tema warna *Black & Neon Blue*, efek *CRT scanline*, dan utilitas *cyber HUD border* di `src/app/globals.css`.
   - Implementasikan konstanta fisika animasi di `src/lib/motion.ts`.
   - Buat komponen primitif animasi di `src/components/motion/` (`CyberMatrixCanvas`, `GlitchText`, `ScrambleText`, `CyberHudCard`, `Magnetic`, `NeonCursor`).
4. **Bangun Welcome Security Puzzle Gate (`src/components/gate/SecurityGate.tsx`):**
   - Implementasikan layar gerbang sambutan interaktif lengkap dengan bank teka-teki (`src/data/puzzles.ts`), mini-game klik sirkuit/kode, animasi tirai terbuka (*cyber shutter open*), penyimpanan status di `sessionStorage`, serta tombol replay di Navbar.
5. **Bangun Konten Portofolio Terstruktur:**
   - Isi `src/data/portfolio.ts` dengan struktur data untuk multi-foto profil dan proyek (foto opsional).
   - Implementasikan seluruh section dari `HeroTerminal` hingga `ContactUplink`.
6. **Self-Verification Gate:**
   - Jalankan `npx tsc --noEmit` untuk memastikan nol *TypeScript error*.
   - Jalankan `npm run build` untuk memastikan *production build* berhasil.

---

## 3. Tech Stack & Dependensi

| Kategori | Paket / Teknologi | Fungsi Utama |
| :--- | :--- | :--- |
| **Framework** | `next`, `react`, `typescript` | Arsitektur App Router, SSR/SSG, dan *strict type-safety*. |
| **Styling** | `tailwindcss`, `clsx`, `tailwind-merge` | Palet *Void Black & Neon Blue*, efek cahaya neon, & responsivitas. |
| **Motion & Physics** | `framer-motion`, `lenis` | Animasi gerbang terbuka (*shutter*), *spring physics*, & *smooth scroll*. |
| **Icons & FX** | `lucide-react`, `canvas-confetti` | Ikon tajam & ledakan partikel Neon Blue saat berhasil memecahkan teka-teki. |

---

## 4. Struktur Direktori Proyek

```text
├── public/
│   ├── images/
│   │   ├── profile/                 # Koleksi foto profil (main.webp, setup.webp, activity.webp)
│   │   └── projects/                # Foto pratinjau proyek (opsional per proyek)
│   └── resume.pdf                   # File CV siap unduh
├── src/
│   ├── app/
│   │   ├── globals.css              # Palet Black & Neon Blue, efek scanline, custom scrollbar
│   │   ├── layout.tsx               # Font Space Grotesk + JetBrains Mono, Metadata, NeonCursor
│   │   └── page.tsx                 # Orkestrasi terstruktur: Gate -> Home -> Profile -> Projects -> Exp -> Contact
│   ├── components/
│   │   ├── gate/
│   │   │   └── SecurityGate.tsx     # Gerbang Mini-Game / Teka-Teki Sambutan sebelum Home Page
│   │   ├── motion/
│   │   │   ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   │   │   ├── CyberMatrixCanvas.tsx# Latar hujan kode biner/hex Neon Blue (HTML5 Canvas)
│   │   │   ├── NeonCursor.tsx       # Kursor crosshair & label kontekstual Neon Blue
│   │   │   ├── GlitchText.tsx       # Efek teks cyber glitch saat hover / trigger
│   │   │   ├── ScrambleText.tsx     # Animasi dekripsi huruf acak
│   │   │   ├── CyberHudCard.tsx     # Kartu kaca gelap bersudut siku HUD & spotlight neon
│   │   │   └── Magnetic.tsx         # Efek tarik magnetik pada tombol & ikon
│   │   ├── layout/
│   │   │   ├── HudNavbar.tsx        # Navigasi HUD + badge status akses + tombol Replay Gate
│   │   │   └── CyberFooter.tsx      # Footer berstatus enkripsi & Back-to-Top
│   │   └── sections/
│   │       ├── HeroTerminal.tsx     # Stage 1: Sapaan Home + Identitas Glitch + Foto Profil HUD
│   │       ├── ProfileBento.tsx     # Stage 2: Galeri Multi-Foto Profil + Bio + Radar + Tech Stack
│   │       ├── ProjectsVault.tsx    # Stage 3: Arsip Proyek (Foto / Cyber Blueprint) + Detail Drawer
│   │       ├── TimelinePlasma.tsx   # Stage 4: Timeline Pengalaman dengan sinar plasma scroll
│   │       └── ContactUplink.tsx    # Stage 5: One-Click Copy Email + Form Pesan Terenkripsi
│   ├── data/
│   │   ├── puzzles.ts               # Bank teka-teki & pola sirkuit untuk Welcome Security Gate
│   │   └── portfolio.ts             # Data terpusat: profil, multi-foto, proyek, & pengalaman
│   └── lib/
│       ├── motion.ts                # Konstanta spring physics & cubic-bezier easing
│       └── utils.ts                 # Helper cn() & generator blueprint proyek
├── README.md
└── SRS.md
```

---

## 5. Cara Menjalankan & Kustomisasi

```bash
# 1. Instal dependensi
npm install framer-motion lenis lucide-react clsx tailwind-merge canvas-confetti
npm install -D @types/canvas-confetti

# 2. Jalankan server pengembangan
npm run dev

# 3. Validasi TypeScript & Production Build
npx tsc --noEmit && npm run build
```

### Mengganti Foto & Data Sendiri
1. Simpan foto-foto profilmu ke `public/images/profile/` dan foto proyekmu ke `public/images/projects/`.
2. Buka `src/data/portfolio.ts` untuk mengganti nama, sapaan, daftar foto profil (`photos`), dan daftar proyek (`projects`). Jika proyek belum punya foto, cukup biarkan `thumbnailUrl: ""` dan sistem akan otomatis membuatkan visual *Cyber Blueprint* Neon Blue.