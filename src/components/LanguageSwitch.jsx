import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation();


  const isIndonesian = i18n.language === 'id';


  const toggleLanguage = () => {
    const newLang = isIndonesian ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
  
      className={`relative inline-flex items-center h-8 w-16 cursor-pointer rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
        isIndonesian ? 'bg-green-500' : 'bg-gray-700'
      }`}
    >
  
      <span className="absolute left-3 text-sm font-bold text-white">ID</span>
      <span className="absolute right-3 text-sm font-bold text-white">EN</span>


      <span
        className={`absolute inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isIndonesian ? 'translate-x-1' : 'translate-x-9'
        }`}
      />
    </button>
  );
}

export default LanguageSwitch;