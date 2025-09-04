import React from 'react';
import logo1 from '../assets/mitra/a (1).jpeg';
import logo2 from '../assets/mitra/a (1).jpg';
import logo3 from '../assets/mitra/a (1).png';
import logo4 from '../assets/mitra/a (10).png';
import logo5 from '../assets/mitra/a (11).png';
import logo6 from '../assets/mitra/a (12).png';
import logo7 from '../assets/mitra/a (13).png';
import logo8 from '../assets/mitra/a (14).png';
import logo9 from '../assets/mitra/a (15).png';
import logo10 from '../assets/mitra/a (16).png';
import logo11 from '../assets/mitra/a (17).png';
import logo12 from '../assets/mitra/a (18).png';
import logo13 from '../assets/mitra/a (2).jpeg';
import logo14 from '../assets/mitra/a (2).jpg';
import logo15 from '../assets/mitra/a (2).png';
import logo16 from '../assets/mitra/a (3).jpeg';
import logo17 from '../assets/mitra/a (3).jpg';
import logo18 from '../assets/mitra/a (3).png';
import logo19 from '../assets/mitra/a (4).jpg';
import logo20 from '../assets/mitra/a (4).png';
import logo21 from '../assets/mitra/a (5).jpg';
import logo22 from '../assets/mitra/a (5).png';
import logo23 from '../assets/mitra/a (6).jpg';
import logo24 from '../assets/mitra/a (6).png';
import logo25 from '../assets/mitra/a (7).jpg';
import logo26 from '../assets/mitra/a (7).png';
import logo27 from '../assets/mitra/a (8).png';
import logo28 from '../assets/mitra/a (9).png';

const mitraData = [
    { id: 1, name: 'Mitra 1', logo: logo1 },
    { id: 2, name: 'Mitra 2', logo: logo2 },
    { id: 3, name: 'Mitra 3', logo: logo3 },
    { id: 4, name: 'Mitra 4', logo: logo4 },
    { id: 5, name: 'Mitra 5', logo: logo5 },
    { id: 6, name: 'Mitra 6', logo: logo6 },
    { id: 7, name: 'Mitra 7', logo: logo7 },
    { id: 8, name: 'Mitra 8', logo: logo8 },
    { id: 9, name: 'Mitra 9', logo: logo9 },
    { id: 10, name: 'Mitra 10', logo: logo10 },
    { id: 11, name: 'Mitra 11', logo: logo11 },
    { id: 12, name: 'Mitra 12', logo: logo12 },
    { id: 13, name: 'Mitra 13', logo: logo13 },
    { id: 14, name: 'Mitra 14', logo: logo14 },
    { id: 15, name: 'Mitra 15', logo: logo15 },
    { id: 16, name: 'Mitra 16', logo: logo16 },
    { id: 17, name: 'Mitra 17', logo: logo17 },
    { id: 18, name: 'Mitra 18', logo: logo18 },
    { id: 19, name: 'Mitra 19', logo: logo19 },
    { id: 20, name: 'Mitra 20', logo: logo20 },
    { id: 21, name: 'Mitra 21', logo: logo21 },
    { id: 22, name: 'Mitra 22', logo: logo22 },
    { id: 23, name: 'Mitra 23', logo: logo23 },
    { id: 24, name: 'Mitra 24', logo: logo24 },
    { id: 25, name: 'Mitra 25', logo: logo25 },
    { id: 26, name: 'Mitra 26', logo: logo26 },
    { id: 27, name: 'Mitra 27', logo: logo27 },
    { id: 28, name: 'Mitra 28', logo: logo28 },
  ];
function MitraKami() {
    return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Mitra Kami
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Kami bangga telah dipercaya oleh berbagai perusahaan dan institusi terkemuka untuk bertumbuh bersama.
                </p>
              <div className="mt-4 w-24 h-1 bg-emerald-500 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
              {mitraData.map((mitra) => (
                <div key={mitra.id} className="flex justify-center">
                  <img
                    src={mitra.logo}
                    alt={`Logo ${mitra.name}`}
                    className="max-h-16 w-auto object-cover hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default MitraKami;