# AjemTrip

AjemTrip adalah prototype website travel statis untuk mencari dan memesan hotel,
pesawat, kereta, dan bus.

## Fitur

- Register dan login pengguna.
- Profil pengguna dengan data pribadi.
- Lupa password dan penggantian password.
- Pencarian perjalanan dengan riwayat pencarian.
- Pemesanan, simulasi pembayaran, dan tiket digital.
- Notifikasi aktivitas akun dan pemesanan.
- Responsive layout untuk desktop dan mobile.

## Menjalankan secara lokal

Karena aplikasi menggunakan `localStorage`, website dapat dibuka langsung melalui
`indeks.html`. Untuk hasil yang lebih konsisten, gunakan static server sederhana,
misalnya ekstensi **Live Server** di VS Code.

> Data akun dan pemesanan pada versi demo disimpan di browser pengguna. Jangan
> gunakan password produksi atau data sensitif pada demo ini. Untuk produksi,
> pindahkan autentikasi, database, dan pembayaran ke backend yang aman.

## Demo

1. Buka `indeks.html`.
2. Pilih **Register** dan buat akun.
3. Login menggunakan akun tersebut.
4. Cari perjalanan, pilih penawaran, isi data, dan selesaikan simulasi pembayaran.
5. Lihat profil, tiket, dan notifikasi dari halaman akun.

## Deployment

Repository ini disiapkan untuk GitHub Pages melalui workflow pada
`.github/workflows/pages.yml`. Untuk mengaktifkannya, buka **Settings → Pages**
di repository GitHub, pilih **GitHub Actions** sebagai source, lalu jalankan
workflow `Deploy AjemTrip to GitHub Pages`. Setelah aktif, halaman publik
tersedia di `https://azimaf.github.io/Travel-Ajem-Trip/`.
