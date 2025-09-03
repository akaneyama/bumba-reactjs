import React, { useState } from 'react';
import axios from 'axios';


function KalkulatorKarbon() {
  // === STATE MANAGEMENT ===
  // State untuk menyimpan nilai dari setiap input form
  const [penggunaanListrik, setPenggunaanListrik] = useState('');
  const [penggunaanBBM, setPenggunaanBBM] = useState('');
  const [penggunaanLPG, setPenggunaanLPG] = useState('');
  
  // State untuk menyimpan hasil kalkulasi yang diterima dari API (berupa object)
  const [hasilKalkulasi, setHasilKalkulasi] = useState(null);
  
  // State untuk menyimpan pesan error jika terjadi kesalahan
  const [error, setError] = useState('');
  
  // (BARU) State untuk melacak status loading saat request API sedang berjalan
  const [isLoading, setIsLoading] = useState(false);

  // === FUNGSI UTAMA UNTUK MENGIRIM DATA KE API ===
  // Fungsi ini dibuat 'async' agar kita bisa menggunakan 'await' untuk menunggu respon API
  const handleKalkulasi = async (e) => {
    // Mencegah form dari perilaku default-nya yaitu me-reload halaman
    e.preventDefault(); 
    
    // (VALIDASI) Cek apakah semua input sudah diisi
    if (!penggunaanListrik || !penggunaanBBM || !penggunaanLPG) {
      setError('Mohon isi semua kolom untuk melakukan perhitungan.');
      setHasilKalkulasi(null); // Kosongkan hasil jika ada input yang kurang
      return; // Hentikan eksekusi fungsi
    }
    
    // (PERSIAPAN) Reset state sebelum melakukan request API baru
    setError('');
    setHasilKalkulasi(null);
    setIsLoading(true); // (UX) Mulai status loading untuk memberi tahu pengguna proses berjalan

    // (DATA) Siapkan object data yang akan dikirim sebagai body request ke API
    const dataToSend = {
      listrik: parseInt(penggunaanListrik),
      bbm: parseInt(penggunaanBBM),
      lpg: parseInt(penggunaanLPG),
    };

    // (LOGIKA API) Menggunakan blok try...catch...finally untuk menangani request API
    try {
      // (REQUEST) Kirim data ke endpoint API menggunakan metode POST dengan axios.
      // 'await' akan menjeda eksekusi sampai promise dari axios selesai.
      // Ganti URL ini jika alamat atau port API Anda berbeda.
      const response = await axios.post('http://127.0.0.1:8000/kalkulasi', dataToSend);

      // (SUCCESS) Jika request berhasil (API merespon dengan status 2xx),
      // simpan data dari respon API ke dalam state.
      // Kita asumsikan API mengembalikan data dalam `response.data`.
      setHasilKalkulasi(response.data);

    } catch (err) {
      // (ERROR) Blok ini akan dieksekusi jika terjadi error (koneksi gagal, server error 500, dll)
      console.error("Terjadi error saat menghubungi API:", err);
      setError('Gagal terhubung ke server. Mohon periksa koneksi Anda atau coba lagi nanti.');
    } finally {
      // (CLEANUP) Blok ini akan SELALU dieksekusi, baik request berhasil maupun gagal.
      // Ini adalah tempat yang tepat untuk mematikan status loading.
      setIsLoading(false);
    }
  };

  // === RENDER KOMPONEN (JSX) ===
  return (
    <section className="bg-green-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Bagian Judul */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Kalkulator Jejak Karbon
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Ketahui Dampak Karbon Aktivitas Anda
          </h1>
        </div>

        {/* Wrapper Utama */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

       
          <div className="w-full lg:w-2/5 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Input Data Bulanan</h3>
            <form onSubmit={handleKalkulasi} className="space-y-6">
              
         
              <div>
                <label htmlFor="listrik" className="block text-sm font-medium text-gray-700 mb-1">Pengeluaran Listrik (Rp)</label>
                <input type="number" id="listrik" value={penggunaanListrik} onChange={(e) => setPenggunaanListrik(e.target.value)} placeholder="Contoh: 150000" className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"/>
              </div>

        
              <div>
                <label htmlFor="bbm" className="block text-sm font-medium text-gray-700 mb-1">Pengeluaran BBM Kendaraan (Rp)</label>
                <input type="number" id="bbm" value={penggunaanBBM} onChange={(e) => setPenggunaanBBM(e.target.value)} placeholder="Contoh: 300000" className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"/>
              </div>
              
   
              <div>
                <label htmlFor="lpg" className="block text-sm font-medium text-gray-700 mb-1">Pengeluaran Gas LPG (Rp)</label>
               <input type="number" id="lpg" value={penggunaanLPG} onChange={(e) => setPenggunaanLPG(e.target.value)} placeholder="Contoh: 50000" className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"/>
              </div>
          
              <button
                type="submit"
                disabled={isLoading} 
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Menghitung...' : 'Hitung Jejak Karbon'} {/* Teks tombol berubah saat loading */}
              </button>
              
              {/* Tempat untuk menampilkan pesan error */}
              {error && (
                <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>
              )}
            </form>
          </div>

         {/* Kolom Kanan: Hasil Analisis */}
         <div className="w-full lg:w-3/5 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hasil Analisis BumiBaik</h3>
            <div className="bg-gray-50 rounded-lg p-6 h-full flex-grow flex flex-col justify-center">
              
              {/* 1. Tampilan spinner (tidak berubah) */}
              {isLoading && (
                 <div className="text-center text-gray-500">
                    <svg className="animate-spin h-8 w-8 text-green-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <p className="mt-3">BumiBaik sedang menganalisis data dalam beberapa menit...</p>
                 </div>
              )}

              {/* 2. Tampilan pesan awal (tidak berubah) */}
              {!isLoading && !hasilKalkulasi && (
                 <div className="text-center text-gray-500">
                   <p>Hasil perhitungan dan analisis akan muncul di sini.</p>
                   <p className="text-sm mt-2">Silakan isi data di samping dan klik "Hitung".</p>
                 </div>
              )}

              {/* 3. (DIUBAH) Tampilan hasil jika sudah ada data dari API */}
              {hasilKalkulasi && (
                <div className="space-y-6 animate-fade-in">

                  {/* Total Emisi & Kategori dari AI */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total Jejak Karbon Bulanan Anda</p>
                    <p className="text-5xl font-extrabold text-green-600 my-2">
                      {/* (DIUBAH) Mengakses data dari 'perhitungan' */}
                      {hasilKalkulasi.perhitungan.total.toFixed(2)}
                      <span className="text-2xl font-medium text-gray-700 ml-2">kg CO₂e</span>
                    </p>
                    

                    <div className="mt-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        Kategori Jejak Karbon: {hasilKalkulasi.analisis.kategori}
                      </span>
                    </div>
                  </div>
                  

                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">📝 Ringkasan Analisis</h4>
                    <p className="text-sm text-gray-700 text-justify">
                      {hasilKalkulasi.analisis.analisa_singkat}
                    </p>
                  </div>

                  {/* Rincian Emisi */}
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold text-center mb-3">Rincian Sumber Emisi:</h4>
       
                    <div className="flex justify-between items-center bg-white p-3 rounded-md border"><p className="font-medium text-gray-700">⚡️ Listrik</p><p className="font-mono text-gray-800">{hasilKalkulasi.perhitungan.listrik.toFixed(2)} kg CO₂e</p></div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-md border"><p className="font-medium text-gray-700">⛽️ BBM Kendaraan</p><p className="font-mono text-gray-800">{hasilKalkulasi.perhitungan.bbm.toFixed(2)} kg CO₂e</p></div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-md border"><p className="font-medium text-gray-700">🔥 Gas LPG</p><p className="font-mono text-gray-800">{hasilKalkulasi.perhitungan.lpg.toFixed(2)} kg CO₂e</p></div>
                  </div>
                  
             
                  <div className="pt-4 border-t">
                     <h4 className="font-semibold text-center mb-3">💡 Rekomendasi BumiBaik untuk Anda</h4>
                     <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        {hasilKalkulasi.analisis.saran_tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                     </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default KalkulatorKarbon;