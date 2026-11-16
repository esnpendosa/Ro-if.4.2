# Agrovoice — Static Web & GitHub Pages

Platform informasi dan teknologi lintas sektor untuk **Pertanian**, **Peternakan**, dan **Perikanan**.

Situs ini telah dikonversi menjadi static website modern (HTML5, CSS3, ES6 JavaScript) tanpa ketergantungan server PHP maupun database SQL, siap di-host langsung melalui **GitHub Pages**.

## 🌐 Live Demo & GitHub Pages

- **Live URL**: [https://esnpendosa.github.io/Ro-if.4.2/](https://esnpendosa.github.io/Ro-if.4.2/)
- **Repository**: [https://github.com/esnpendosa/Ro-if.4.2](https://github.com/esnpendosa/Ro-if.4.2)

---

## 🚀 Fitur Situs

1. **Multi-Sektor Interaktif**:
   - Pemilih tema dinamis (🌾 Pertanian, 🐄 Peternakan, 🐟 Perikanan).
   - Animasi ilustrasi SVG realtime (tanaman bergoyang, ternak mengapung, ikan berenang).
   - Penyesuaian konten contoh fitur dan audiens secara otomatis sesuai tema sektor.

2. **Galeri Materi Flyer Lengkap**:
   - 18 materi flyer resolusi tinggi (6 sektor Pertanian, 6 sektor Peternakan, 6 sektor Perikanan).
   - Filter tab per sektor.
   - Slider / Carousel dengan navigasi tombol dan titik indikator.
   - Lightbox modal pop-up untuk memperbesar flyer saat diklik.

3. **Halaman Berita & Artikel Interaktif**:
   - Filter kategori: *Tips Tani*, *Tips Ternak*, *Tips Perikanan*, *Berita Dinas*, *Update Agrovoice*.
   - Pencarian instan (live search) judul dan ringkasan artikel.
   - Detail artikel lengkap dengan tombol bagikan langsung ke WhatsApp.

4. **Desain Responsif & Mobile-Friendly**:
   - Navigasi hamburger menu di layar ponsel.
   - Floating WhatsApp button yang responsif terhadap scroll footer.
   - Dukungan aksesibilitas (WAI-ARIA, prefer-reduced-motion, semantic HTML).

---

## 📂 Struktur Direktori

```text
Ro-if.4.2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deploy Pages
├── .nojekyll                   # Mencegah Jekyll processing di Pages
├── index.html                  # Halaman utama (Beranda)
├── berita.html                 # Halaman daftar berita & artikel
├── 404.html                    # Halaman 404 error
├── artikel/                    # Direktori artikel statis
│   ├── panduan-pengendalian-hama-wereng-batang-cokelat.html
│   ├── manajemen-pakan-dan-nutrisi-penggemukan-sapi-potong.html
│   ├── penerapan-sistem-bioflok-efisiensi-budidaya-ikan.html
│   ├── dinas-dorong-digitalisasi-pelaporan-penyuluh-lapangan.html
│   └── update-agrovoice-offline-first-dan-suara-lokal.html
├── assets/
│   └── images/                 # Logo, ikon, & aset grafik
├── storage/
│   └── uploads/                # Gambar flyer & sampul artikel
├── css/                        # CSS modul & tema sektor
└── js/                         # JavaScript logika interaktif
```

---

## ⚙️ Cara Mengaktifkan GitHub Pages di Repository

GitHub Actions workflow (`.github/workflows/deploy.yml`) sudah terpasang. Untuk memastikan Pages aktif:
1. Buka repository: [https://github.com/esnpendosa/Ro-if.4.2/settings/pages](https://github.com/esnpendosa/Ro-if.4.2/settings/pages)
2. Pada bagian **Build and deployment** -> **Source**:
   - Pilih **GitHub Actions** (otomatis build & deploy via workflow).
   - Atau pilih **Deploy from a branch** -> Branch: `main` / Folder: `/ (root)`.
3. Situs Anda akan live di [https://esnpendosa.github.io/Ro-if.4.2/](https://esnpendosa.github.io/Ro-if.4.2/).

---

## 📞 Kontak

- **Nama**: Bari'ur Ro'if Aflah
- **No. Telepon**: +62 823 4298 2905
- **Perusahaan**: CV Rozitech Multimedia Indonesia, Desa Leran, Kec. Manyar, Kabupaten Gresik
- **WhatsApp**: [Chat via WhatsApp](https://wa.me/6285604118932?text=Halo,%20saya%20tertarik%20dengan%20Agrovoice)
