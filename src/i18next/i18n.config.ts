import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.json';
import de from './languages/de.json';

export default i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'en',
		resources: {
			en: { ...en },
			de: { ...de }
		}
	});
