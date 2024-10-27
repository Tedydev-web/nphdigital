import axios from 'axios';
import i18n from '../i18n';

const countryToLanguageMap = {
	VN: 'vi',
	IN: 'hi',
	CN: 'zh',
	US: 'en',
	GB: 'en',
	// Thêm các mã quốc gia khác nếu cần
};

const browserLanguageMap = {
	vi: 'vi',
	hi: 'hi',
	zh: 'zh',
	en: 'en',
	// Thêm các ngôn ngữ khác nếu cần
};

export const detectUserLanguage = async () => {
	try {
		// Sử dụng navigator.language trước
		const browserLanguage = navigator.language.slice(0, 2);
		if (browserLanguageMap[browserLanguage]) {
			i18n.changeLanguage(browserLanguageMap[browserLanguage]);
			return;
		}

		// Nếu navigator.language không xác định được, thì sử dụng IP
		const response = await axios.get('https://ipapi.co/json/');
		const countryCode = response.data.country_code;
		const language = countryToLanguageMap[countryCode] || 'en';
		i18n.changeLanguage(language);
	} catch (error) {
		console.error('Error detecting user language:', error);
		i18n.changeLanguage('en');
	}
};
