import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import file terjemahan
import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
};

i18n
  .use(LanguageDetector) // Mendeteksi bahasa pengguna
  .use(initReactI18next) // Mengikat i18next dengan react
  .init({
    resources,
    fallbackLng: 'id', // Bahasa default jika deteksi gagal
    interpolation: {
      escapeValue: false // React sudah aman dari XSS
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    }
  });

export default i18n;