import React from 'react';

const programData = [
    // Data tetap sama, tidak perlu diubah
    {
      icon: '../assets/react.svg',
      title: 'Kalkulator Karbon',
      description: 'Hitung jejak karbon dari aktivitas keseharianmu dengan BumiBaik.',
      link: '#'
    },
    {
      icon: '../assets/react.svg',
      title: 'CSR Provider',
      description: 'Lakukan program CSR penanaman pohon secara end-to-end bersama BumiBaik.',
      link: '#'
    },
    {
      icon: '../assets/react.svg',
      title: 'Teknologi Geo-tagging',
      description: 'Memudahkan kamu melakukan program penanaman pohon termonitor dan berkelanjutan dengan teknologi geo-tagging.',
      link: '#'
    },
    {
      icon: '../assets/react.svg',
      title: 'Donasi Pohon',
      description: 'Buat kampanye donasimu untuk program penanaman pohon melalui platform BumiBaik.',
      link: '#'
    }
];

function ProgramKami() {
    return (
        // DIUBAH: Latar belakang diubah menjadi hijau lembut (emerald-50)
        <section className="py-20 bg-emerald-50"> 
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-16">
                    {/* DIUBAH: Warna teks disesuaikan agar kontras dengan latar baru */}
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
                            // BARU: Menambahkan animasi 'fade-in-up'
                            // BARU: Menambahkan 'group' agar bisa mengontrol elemen anak saat hover
                            // DIUBAH: Mengganti efek hover dengan border/ring berwarna
                            className="bg-white p-8 rounded-xl shadow-lg flex flex-col group
                                       transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2
                                       hover:ring-4 hover:ring-emerald-300
                                       opacity-0 animate-fade-in-up"
                            // BARU: Inline style untuk memberikan delay animasi yang berbeda untuk setiap kartu
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-start gap-5">
                                {/* BARU: Ikon dibungkus agar memiliki background dan styling sendiri */}
                                <div className="bg-emerald-100 p-3 rounded-full">
                                    <img 
                                        src={program.icon} 
                                        alt={`${program.title} icon`} 
                                        // DIUBAH: Ukuran ikon disesuaikan
                                        // BARU: Animasi pada ikon saat kartu di-hover
                                        className="w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{program.title}</h3>
                                    <p className="text-gray-600 text-base">{program.description}</p>
                                </div>
                            </div>
                            <a 
         
                               
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