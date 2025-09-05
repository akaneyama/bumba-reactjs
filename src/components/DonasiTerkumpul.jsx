import React from 'react';
import Untag from '../assets/untagloveearth.jpg'
import KopiBrewok from '../assets/warkopbrewok.jpg'
import SatuPohon from '../assets/satupohon.jpg'
const dummyDonations = [
  {
    id: 1,
    imageUrl: Untag,
    title: 'Untag Love Earth!: Satu Pohon untuk Sejuta Senyuman',
    organizer: 'Kelompok Tani Hutan Hijau Lestari',
    collectedAmount: 21350000, // BARU: Uang terkumpul
    targetAmount: 30000000,   // BARU: Target uang
    penanaman: '25 Desember 2025',
    status: 'Berlangsung',
  },
  {
    id: 2,
    imageUrl: KopiBrewok,
    title: 'Tanam Pohon untuk Kesejahteraan Petani Kopi',
    organizer: 'WARKOP BREWOK',
    collectedAmount: 73000000, // BARU
    targetAmount: 100000000,  // BARU
    penanaman: '25 Desember 2025',
    status: 'Berlangsung',
  },
  {
    id: 3,
    imageUrl: SatuPohon,
    title: 'Satu Pohon, Secangkir Harapan: Lestarikan Kopi',
    organizer: 'Komunitas Peduli Hutan',
    collectedAmount: 50000000, // BARU
    targetAmount: 50000000,   // BARU
    penanaman: '25 Desember 2025',
    status: '',
  },
];

// --- Helper Components untuk Ikon ---
const ArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> );
const TreeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block text-emerald-600" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 9.414a2 2 0 010 2.828l-5.293 5.293a2 2 0 01-2.828 0L4 12.243V18a2 2 0 002 2h8a2 2 0 002-2v-5.757l3.414-3.414zM10 2a1 1 0 00-1 1v2.586l-2.293 2.293a1 1 0 101.414 1.414L10 7.414l1.879 1.879a1 1 0 101.414-1.414L11 5.586V3a1 1 0 00-1-1z" /></svg> );


function DonasiTerkumpul() {
  // Fungsi untuk format mata uang Rupiah
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    // DIUBAH: Latar belakang section dengan gradient halus
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4">
        
        {/* --- Header Section (tetap sama) --- */}
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold text-emerald-600 tracking-wider uppercase">Donasi</h3>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-800">Kampanye Terbaru</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Setiap donasi Anda menjadi harapan baru bagi bumi. Lihat kampanye yang sedang berlangsung.</p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyDonations.map((campaign, index) => {
            const progressPercentage = Math.min((campaign.collectedAmount / campaign.targetAmount) * 100, 100);

            return (
              <div 
                key={campaign.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group
                           border border-transparent hover:border-emerald-400
                           transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2
                           opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* --- Gambar Kartu (tetap sama) --- */}
                <div className="relative">
                  <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover hover:scale-105 hover:shadow-lg" />
                  {campaign.status === 'Selesai' && ( <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">SELESAI</span> )}
                </div>

                {/* --- Konten Kartu --- */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{campaign.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">Oleh: {campaign.organizer}</p>
                  
                  {/* --- Progress Bar dengan Gradient --- */}
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="font-medium text-gray-600">Progress</span>
                    <span className="font-bold text-emerald-600">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-emerald-500 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>

                  {/* --- BARU: Tampilan Statistik Uang & Pohon --- */}
                  <div className="mt-5 pt-5 border-t border-gray-200 grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Terkumpul</p>
                      <p className="text-lg font-bold text-gray-800">{formatCurrency(campaign.collectedAmount)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Target</p>
                      <p className="font-semibold text-gray-600">{formatCurrency(campaign.targetAmount)}</p>
                    </div>
                  </div>
                  <p className="text-sm text-center text-gray-500 mt-1"><TreeIcon /> Penanaman: {campaign.penanaman}</p>
                  
                  {/* --- Tombol Aksi dengan Gradient --- */}
                  <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 px-4 rounded-lg
                                   flex items-center justify-center group shadow-md hover:shadow-lg
                                   transform hover:scale-105 transition-all duration-300">
                    Donasi Sekarang <ArrowIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* --- Tombol Lihat Semua (tetap sama) --- */}
        <div className="text-center mt-16">
          <button className="bg-transparent text-emerald-600 font-bold py-3 px-8 rounded-lg border-2 border-emerald-600
                           hover:bg-emerald-600 hover:text-white transition-all duration-300">
            Lihat Semua Kampanye
          </button>
        </div>

      </div>
    </section>
  );
}

export default DonasiTerkumpul;