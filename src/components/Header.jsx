import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import logobumibaik from '../assets/bumibaiklogo2.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LanguageSwitch from './LanguageSwitch'; 

function Header() {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  

  const navLinks = [
    { href: "#tentang", label: t('header.nav.about') },
    { href: "#layanan", label: t('header.nav.services') },
    { href: "#blog", label: t('header.nav.blog') },
    { href: "#faq", label: t('header.nav.faq') },
    { href: "#kontak", label: t('header.nav.contact') },
  ];

 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  


  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
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
              {t('header.donateButton')} 
            </a>
          
            <div className="mt-2">
              <LanguageSwitch />
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-800 text-3xl focus:outline-none z-50"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-gradient-to-b from-green-50 to-white`}
      >
        <div className="flex flex-col h-full safe-area-padding">
          <div className="flex flex-col items-center justify-center flex-grow pt-20">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`block py-4 text-3xl font-semibold text-gray-800 hover:text-green-600 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {link.label}
              </a>
            ))}
            
            <hr className={`my-6 w-1/2 border-gray-300 transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }} />

            <a
              href="#donasi"
              onClick={handleLinkClick}
              className={`bg-green-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-green-600 transition-all duration-500 shadow-lg ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '900ms' }}
            >
              {t('header.donateButton')}
            </a>
          </div>

          <div className={`flex justify-center items-center space-x-6 p-8 transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
        
           

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600">
              <FaInstagram size={28} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600">
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;