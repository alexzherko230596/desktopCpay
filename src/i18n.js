import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(Backend)

.init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      cache: ['localStorage']
    },
    interpolation: {
        escapeValue: false
    }
  });

  export default i18n