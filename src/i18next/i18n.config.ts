import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import de from './languages/de.json';

i18n.use(initReactI18next).init({
	lng: 'en', // Set the initial language of the App
	resources: {
		en: { ...en },
		de: { ...de }
	} // Where we're gonna put translations' files
});
