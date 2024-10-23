import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import viTranslations from './locales/vi.json';

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslations },
		vi: { translation: viTranslations },
	},
	lng: 'vi', // ngôn ngữ mặc định
	fallbackLng: 'vi',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
