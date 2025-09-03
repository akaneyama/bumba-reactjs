import React, { useState } from "react";
import logobumibaik from '../assets/bumibaiklogo2.png';
import email from '../assets/email.svg';
import lokasipin from '../assets/location.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <header className="sticky top-0 z-10 p-4">
      

   
<div className="hidden sm:flex container mx-auto py-2 px-2 items-center mb-4 justify-between">

  <div className="flex items-center space-x-6 text-sm text-gray-600">
 
    <div className="flex items-center space-x-2">
      <img src={lokasipin} className="h-4 w-4 " alt="Lokasi" />
      <span className="text-md font-semibold text-black">Graha Polinema 4th Floor, Jl. Soekarno Hatta No.9, Malang.</span>
    </div>
    

    <div className="flex items-center space-x-2">
      <img src={email} className="h-4" alt="Email" />
      <a href="mailto:business@bumibaik.com" className="hover:text-green-500 transition-colors text-md font-semibold text-black">
        business@bumibaik.com
      </a>
    </div>
  </div>

  <div className="flex items-center space-x-4">

    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={instagram} className="h-5 w-5 hover:opacity-75 transition-opacity" alt="Instagram" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

      <img src={whatsapp} className="h-5 w-5 hover:opacity-75 transition-opacity" alt="Facebook" />
    </a>
  </div>
  
</div>
      
      
    
      <nav className="container mx-auto relative flex justify-center sm:jus items-center py-2
               bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">

                    <div className="hidden sm:flex items-center space-x-16">
                    <a href="#home">
                        <img 
                        src={logobumibaik} 
                        alt="Logo Bumi Baik" 
                        className="h-16  object-contain hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                        <a href="#tentang" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">Tentang</a>
                        <a href="#layanan" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">Layanan</a>
                        <a href="#blog" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">Blog</a>
                        <a href="#faq" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">FAQ</a>
                        <a href="#kontak" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">Kontak</a>
                        <a href="#donasi" className="text-md text-black-600 hover:text-green-500 font-bold transition-colors">Donasi</a>
                    </div>

                    <div className="sm:hidden flex items-end">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-3xl focus:outline-none">
                        {isOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                    </nav>

   
      {isOpen && (
        <div className="sm:hidden container mx-auto px-8 ">
       
          <ul className="absolute inset-x-4 mt-2 rounded-xl bg-white rounded-b-lg shadow-lg py-2 z-20">
            <li><a href="#fitur" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Tentang</a></li>
            <li><a href="#harga" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Layanan</a></li>
            <li><a href="#tentang" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Blog</a></li>
            <li><a href="#contact" className="block px-6 py-2  text-gray-700 hover:bg-gray-100">FAQ</a></li>
            <li><a href="#contact" className="block px-6 py-2  text-gray-700 hover:bg-gray-100">Kontak</a></li>
            <li><a href="#contact" className="block px-6 py-2  text-gray-700 hover:bg-gray-100">Donasi</a></li>
          </ul>
        </div>
      )}

    </header>
  );
}

export default Header;