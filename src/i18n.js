import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Tiếng việt
import COMMON_VI from './locales/vi/common.json';
import HOME_VI from './locales/vi/home.json';
import ABOUT_VI from './locales/vi/about.json';
import SERVICE_VI from './locales/vi/service.json';
import SERVICE_DETAILS_VI from './locales/vi/serviceDetails.json';
import BLOG_VI from './locales/vi/blog.json';
import BLOG_DETAILS_1_VI from './locales/vi/blogDetails1.json';
import BLOG_DETAILS_2_VI from './locales/vi/blogDetails2.json';
import BLOG_DETAILS_3_VI from './locales/vi/blogDetails3.json';
import BLOG_DETAILS_4_VI from './locales/vi/blogDetails4.json';
import BLOG_DETAILS_5_VI from './locales/vi/blogDetails5.json';
import BLOG_DETAILS_6_VI from './locales/vi/blogDetails6.json';
import BLOG_DETAILS_7_VI from './locales/vi/blogDetails7.json';
import BLOG_DETAILS_8_VI from './locales/vi/blogDetails8.json';
import BLOG_DETAILS_9_VI from './locales/vi/blogDetails9.json';
import BLOG_DETAILS_10_VI from './locales/vi/blogDetails10.json';
import BLOG_DETAILS_11_VI from './locales/vi/blogDetails11.json';
import BLOG_DETAILS_12_VI from './locales/vi/blogDetails12.json';
import BLOG_DETAILS_13_VI from './locales/vi/blogDetails13.json';
import BLOG_DETAILS_14_VI from './locales/vi/blogDetails14.json';
import BLOG_DETAILS_15_VI from './locales/vi/blogDetails15.json';
import CONTACT_VI from './locales/vi/contact.json';
import BLOG_RELATED_VI from './locales/vi/blogRelated.json';

// Tiếng anh
import COMMON_EN from './locales/en/common.json';
import HOME_EN from './locales/en/home.json';
import ABOUT_EN from './locales/en/about.json';
import SERVICE_EN from './locales/en/service.json';
import SERVICE_DETAILS_EN from './locales/en/serviceDetails.json';
import BLOG_EN from './locales/en/blog.json';
import BLOG_DETAILS_1_EN from './locales/en/blogDetails1.json';
import BLOG_DETAILS_2_EN from './locales/en/blogDetails2.json';
import BLOG_DETAILS_3_EN from './locales/en/blogDetails3.json';
import BLOG_DETAILS_4_EN from './locales/en/blogDetails4.json';
import BLOG_DETAILS_5_EN from './locales/en/blogDetails5.json';
import BLOG_DETAILS_6_EN from './locales/en/blogDetails6.json';
import BLOG_DETAILS_7_EN from './locales/en/blogDetails7.json';
import BLOG_DETAILS_8_EN from './locales/en/blogDetails8.json';
import BLOG_DETAILS_9_EN from './locales/en/blogDetails9.json';
import BLOG_DETAILS_10_EN from './locales/en/blogDetails10.json';
import BLOG_DETAILS_11_EN from './locales/en/blogDetails11.json';
import BLOG_DETAILS_12_EN from './locales/en/blogDetails12.json';
import BLOG_DETAILS_13_EN from './locales/en/blogDetails13.json';
import BLOG_DETAILS_14_EN from './locales/en/blogDetails14.json';
import BLOG_DETAILS_15_EN from './locales/en/blogDetails15.json';
import CONTACT_EN from './locales/en/contact.json';
import BLOG_RELATED_EN from './locales/en/blogRelated.json';

// Tiếng trung
import COMMON_ZH from './locales/zh/common.json';
import HOME_ZH from './locales/zh/home.json';
import ABOUT_ZH from './locales/zh/about.json';
import SERVICE_ZH from './locales/zh/service.json';
import SERVICE_DETAILS_ZH from './locales/zh/serviceDetails.json';
import BLOG_ZH from './locales/zh/blog.json';
import BLOG_DETAILS_1_ZH from './locales/zh/blogDetails1.json';
import BLOG_DETAILS_2_ZH from './locales/zh/blogDetails2.json';
import BLOG_DETAILS_3_ZH from './locales/zh/blogDetails3.json';
import BLOG_DETAILS_4_ZH from './locales/zh/blogDetails4.json';
import BLOG_DETAILS_5_ZH from './locales/zh/blogDetails5.json';
import BLOG_DETAILS_6_ZH from './locales/zh/blogDetails6.json';
import BLOG_DETAILS_7_ZH from './locales/zh/blogDetails7.json';
import BLOG_DETAILS_8_ZH from './locales/zh/blogDetails8.json';
import BLOG_DETAILS_9_ZH from './locales/zh/blogDetails9.json';
import BLOG_DETAILS_10_ZH from './locales/zh/blogDetails10.json';
import BLOG_DETAILS_11_ZH from './locales/zh/blogDetails11.json';
import BLOG_DETAILS_12_ZH from './locales/zh/blogDetails12.json';
import BLOG_DETAILS_13_ZH from './locales/zh/blogDetails13.json';
import BLOG_DETAILS_14_ZH from './locales/zh/blogDetails14.json';
import BLOG_DETAILS_15_ZH from './locales/zh/blogDetails15.json';
import CONTACT_ZH from './locales/zh/contact.json';
import BLOG_RELATED_ZH from './locales/zh/blogRelated.json';

// Tiếng Hindi
import COMMON_HI from './locales/hi/common.json';
import HOME_HI from './locales/hi/home.json';
import ABOUT_HI from './locales/hi/about.json';
import SERVICE_HI from './locales/hi/service.json';
import SERVICE_DETAILS_HI from './locales/hi/serviceDetails.json';
import BLOG_HI from './locales/hi/blog.json';
import BLOG_DETAILS_1_HI from './locales/hi/blogDetails1.json';
import BLOG_DETAILS_2_HI from './locales/hi/blogDetails2.json';
import BLOG_DETAILS_3_HI from './locales/hi/blogDetails3.json';
import BLOG_DETAILS_4_HI from './locales/hi/blogDetails4.json';
import BLOG_DETAILS_5_HI from './locales/hi/blogDetails5.json';
import BLOG_DETAILS_6_HI from './locales/hi/blogDetails6.json';
import BLOG_DETAILS_7_HI from './locales/hi/blogDetails7.json';
import BLOG_DETAILS_8_HI from './locales/hi/blogDetails8.json';
import BLOG_DETAILS_9_HI from './locales/hi/blogDetails9.json';
import BLOG_DETAILS_10_HI from './locales/hi/blogDetails10.json';
import BLOG_DETAILS_11_HI from './locales/hi/blogDetails11.json';
import BLOG_DETAILS_12_HI from './locales/hi/blogDetails12.json';
import BLOG_DETAILS_13_HI from './locales/hi/blogDetails13.json';
import BLOG_DETAILS_14_HI from './locales/hi/blogDetails14.json';
import BLOG_DETAILS_15_HI from './locales/hi/blogDetails15.json';
import CONTACT_HI from './locales/hi/contact.json';
import BLOG_RELATED_HI from './locales/hi/blogRelated.json';
const resources = {
	vi: {
		home: HOME_VI,
		common: COMMON_VI,
		about: ABOUT_VI,
		service: SERVICE_VI,
		blog: BLOG_VI,
		serviceDetails: SERVICE_DETAILS_VI,
		blog1: BLOG_DETAILS_1_VI,
		blog2: BLOG_DETAILS_2_VI,
		blog3: BLOG_DETAILS_3_VI,
		blog4: BLOG_DETAILS_4_VI,
		blog5: BLOG_DETAILS_5_VI,
		blog6: BLOG_DETAILS_6_VI,
		blog7: BLOG_DETAILS_7_VI,
		blog8: BLOG_DETAILS_8_VI,
		blog9: BLOG_DETAILS_9_VI,
		blog10: BLOG_DETAILS_10_VI,
		blog11: BLOG_DETAILS_11_VI,
		blog12: BLOG_DETAILS_12_VI,
		blog13: BLOG_DETAILS_13_VI,
		blog14: BLOG_DETAILS_14_VI,
		blog15: BLOG_DETAILS_15_VI,
		contact: CONTACT_VI,
		blogRelated: BLOG_RELATED_VI,
	},

	en: {
		home: HOME_EN,
		common: COMMON_EN,
		about: ABOUT_EN,
		service: SERVICE_EN,
		blog: BLOG_EN,
		serviceDetails: SERVICE_DETAILS_EN,
		blog1: BLOG_DETAILS_1_EN,
		blog2: BLOG_DETAILS_2_EN,
		blog3: BLOG_DETAILS_3_EN,
		blog4: BLOG_DETAILS_4_EN,
		blog5: BLOG_DETAILS_5_EN,
		blog6: BLOG_DETAILS_6_EN,
		blog7: BLOG_DETAILS_7_EN,
		blog8: BLOG_DETAILS_8_EN,
		blog9: BLOG_DETAILS_9_EN,
		blog10: BLOG_DETAILS_10_EN,
		blog11: BLOG_DETAILS_11_EN,
		blog12: BLOG_DETAILS_12_EN,
		blog13: BLOG_DETAILS_13_EN,
		blog14: BLOG_DETAILS_14_EN,
		blog15: BLOG_DETAILS_15_EN,
		contact: CONTACT_EN,
		blogRelated: BLOG_RELATED_EN,
	},

	zh: {
		home: HOME_ZH,
		common: COMMON_ZH,
		about: ABOUT_ZH,
		service: SERVICE_ZH,
		blog: BLOG_ZH,
		serviceDetails: SERVICE_DETAILS_ZH,
		blog1: BLOG_DETAILS_1_ZH,
		blog2: BLOG_DETAILS_2_ZH,
		blog3: BLOG_DETAILS_3_ZH,
		blog4: BLOG_DETAILS_4_ZH,
		blog5: BLOG_DETAILS_5_ZH,
		blog6: BLOG_DETAILS_6_ZH,
		blog7: BLOG_DETAILS_7_ZH,
		blog8: BLOG_DETAILS_8_ZH,
		blog9: BLOG_DETAILS_9_ZH,
		blog10: BLOG_DETAILS_10_ZH,
		blog11: BLOG_DETAILS_11_ZH,
		blog12: BLOG_DETAILS_12_ZH,
		blog13: BLOG_DETAILS_13_ZH,
		blog14: BLOG_DETAILS_14_ZH,
		blog15: BLOG_DETAILS_15_ZH,
		contact: CONTACT_ZH,
		blogRelated: BLOG_RELATED_ZH,
	},

	hi: {
		home: HOME_HI,
		common: COMMON_HI,
		about: ABOUT_HI,
		service: SERVICE_HI,
		blog: BLOG_HI,
		serviceDetails: SERVICE_DETAILS_HI,
		blog1: BLOG_DETAILS_1_HI,
		blog2: BLOG_DETAILS_2_HI,
		blog3: BLOG_DETAILS_3_HI,
		blog4: BLOG_DETAILS_4_HI,
		blog5: BLOG_DETAILS_5_HI,
		blog6: BLOG_DETAILS_6_HI,
		blog7: BLOG_DETAILS_7_HI,
		blog8: BLOG_DETAILS_8_HI,
		blog9: BLOG_DETAILS_9_HI,
		blog10: BLOG_DETAILS_10_HI,
		blog11: BLOG_DETAILS_11_HI,
		blog12: BLOG_DETAILS_12_HI,
		blog13: BLOG_DETAILS_13_HI,
		blog14: BLOG_DETAILS_14_HI,
		blog15: BLOG_DETAILS_15_HI,
		contact: CONTACT_HI,
		blogRelated: BLOG_RELATED_HI,
	},
};
const defaultNS = 'home';
i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	ns: ['common', 'home', 'about', 'service', 'serviceDetails', 'blog', 'blogDetails1', 'blogDetails2', 'blogDetails3', 'blogDetails4', 'blogDetails5', 'blogDetails6', 'blogDetails7', 'blogDetails8', 'blogDetails9', 'blogDetails10', 'blogDetails11', 'blogDetails12', 'blogDetails13', 'blogDetails14', 'blogDetails15', 'blogRelated'],
	defaultNS,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
