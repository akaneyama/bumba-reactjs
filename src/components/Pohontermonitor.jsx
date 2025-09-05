import React, { useState } from 'react';

const dataAwal = [
    {
        id: 1,
        kategori: 'Pohon Termonitor',
        jumlah: 10,
        deskripsi: 'Total pohon yang sedang dalam pemantauan aktif.'
    },
    {
        id: 2,
        kategori: 'Mitra Perusahaan',
        jumlah: 20,
        deskripsi: 'Jumlah perusahaan yang telah berpartisipasi dalam program.'
    },
    {
        id: 3,
        kategori: 'Program Alam',
        jumlah: 1,
        deskripsi: 'Inisiatif program alam skala besar yang sedang berjalan.'
    }
];

function PohonTermonitor() {
    
    const [statistik, setStatistik] = useState(dataAwal);

    const handleTambahSatu = (id) => {
        const statistikBaru = statistik.map(item => {
            if (item.id === id) {
                return { ...item, jumlah: item.jumlah + 1 };
            }
            return item;
        });
        setStatistik(statistikBaru);
    };

    return (
        <section className='bg-white min-h-fit py-16 md:py-14'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
                        Pohon Kehidupan
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
                        Pohon Termonitor
                    </h1>
               
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Kami percaya bahwa setiap pohon membawa harapan. Melalui kolaborasi dengan berbagai mitra, kami secara aktif memantau pertumbuhan dan dampak dari setiap inisiatif yang kami jalankan.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {statistik.map((item) => (
                        <div key={item.id} className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2'>
                            
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>{item.kategori}</h3>
                            
                            <p className='text-6xl font-extrabold text-green-600 my-4'>
                                {item.jumlah}
                            </p>
                            
                            <p className='text-gray-600 mb-6 h-12'>{item.deskripsi}</p>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
}

export default PohonTermonitor;