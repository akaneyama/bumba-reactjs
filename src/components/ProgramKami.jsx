import React from 'react';

import reactIcon from '../assets/react.svg';
import imgkalkulatorkarbon from '../assets/KalkulatorKarbon.png';
import imgCsrprovider from '../assets/csrprovider.png';
import imgGeotagging from '../assets/geotagging.png';
import imgDonasipohon from '../assets/donasipohon.png';
import imgaAdopttree from '../assets/adopttree.png';
import imgGreeneevent from '../assets/greenevents.png';
import imgtreeaining from '../assets/treeaining.png';
import imgvoluntree from '../assets/voluntree.png';

const programData = [
  {
    icon: imgkalkulatorkarbon, 
    title: 'Kalkulator Karbon',
    description: 'Hitung jejak karbon dari aktivitas keseharianmu dengan BumiBaik.',
    link: '#'
  },
  {
    icon: imgCsrprovider,
    title: 'CSR Provider',
    description: 'Lakukan program CSR penanaman pohon secara end-to-end bersama BumiBaik.',
    link: '#'
  },
  {
    icon: imgGeotagging,
    title: 'Teknologi Geo-tagging',
    description: 'Memudahkan kamu melakukan program penanaman pohon termonitor dan berkelanjutan dengan teknologi geo-tagging.',
    link: '#'
  },
  {
    icon: imgDonasipohon,
    title: 'Donasi Pohon',
    description: 'Buat kampanye donasimu untuk program penanaman pohon melalui platform BumiBaik.',
    link: '#'
  },
  {
    icon: imgaAdopttree,
    title: 'Adopt-Tree',
    description: 'Adopsi pohon secara B2B untuk mereduksi emisi karbon bersama BumiBaik.',
    link: '#'
  },
  {
    icon: imgGreeneevent,
    title: 'Green Events',
    description: 'Buat acara organisasi dan perusahaanmu lebih bermakna dengan nilai ESG dan berkelanjutan bersama BumiBaik.',
    link: '#'
  },
  {
    icon: imgtreeaining,
    title: 'Tree-aining',
    description: 'Bergabunglah dalam program edukasi serta kesadaran perubahan iklim dan pengetahuan karbon yang diinisiasi oleh BumiBaik.',
    link: '#'
  },
  {
    icon: imgvoluntree,
    title: 'Volun-Tree',
    description: 'Jadilah Sahabat Baik dengan terlibat dalam kegiatan relawan berbasis lingkungan di BumiBaik.',
    link: '#'
  },
];

function ProgramKami() {
  return (
    <section className="py-20    bg-emerald-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900">
            Program Kami
          </h2>
          <p className="mt-4 text-lg text-emerald-700 max-w-2xl mx-auto">
            Memfasilitasi pengurangan emisi karbon dan penanaman pohon untuk Bumi semakin baik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {programData.map((program, index) => (
    <div 
      key={index}
      className="bg-white p-8 rounded-xl shadow-lg flex flex-col group
                 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2
                 hover:ring-4 hover:ring-emerald-300
                 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* BAGIAN YANG DIPERBAIKI ADA DI BAWAH INI */}
      <div className="flex items-start gap-5">
        
        {/* 1. WADAH DIBUAT LEBIH BESAR & UKURANNYA TETAP (BUKAN w-full) */}
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src={program.icon} 
            alt={`${program.title} icon`} 
    
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">{program.title}</h3>
          <p className="text-gray-600 text-base">{program.description}</p>
        </div>
      </div>
  

      <a 
        href={program.link} 
        className="text-emerald-600 font-bold mt-auto pt-6 flex items-center group/link"
      >
        Lihat Selengkapnya
        <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2 text-2xl">→</span>
      </a>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default ProgramKami;