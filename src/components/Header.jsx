import React, { useState, useEffect } from "react";
import logobumibaik from '../assets/bumibaiklogo2.png';
// Anda bisa menyimpan ikon sosial di dalam komponen jika mau, atau tetap import
// import instagram from '../assets/instagram.svg';
// import whatsapp from '../assets/whatsapp.svg';
import { HiMenu, HiX } from 'react-icons/hi';

// --- Langkah 1: Definisikan link navigasi dalam sebuah array ---
const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Efek untuk mengubah background header saat di-scroll ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function untuk menghapus event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menutup menu mobile saat link di-klik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
<header className="sticky top-0 z-50 transition-all duration-300    ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`">
  {/* <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    > */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <nav className="flex items-center justify-between h-20 ">
          

          <a href="#home" className="flex-shrink-0">
            <img 
              src={logobumibaik} 
              alt="Logo Bumi Baik" 
              className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>


          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

     
          <div className="flex items-center space-x-4">
            <a 
              href="#donasi" 
              className="hidden md:inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm"
            >
              Donasi
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-800 text-3xl focus:outline-none z-50"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* --- Menu Mobile (Overlay) --- */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={handleLinkClick}
              className="text-2xl font-semibold text-gray-800 hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#donasi" 
            onClick={handleLinkClick}
            className="mt-8 bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Donasi
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;