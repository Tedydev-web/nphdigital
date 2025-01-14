const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi', 'en', 'zh', 'hi'],
        localeDetection: false
    },
    localePath: path.resolve('./src/locales'),
    ns: ['common', 'home', 'about', 'service', 'serviceDetails', 'blog', 'contact', 'blogRelated'],
    defaultNS: 'common',
    react: { 
        useSuspense: false 
    },
    fallbackLng: 'vi',
    preload: ['vi', 'en'],
    load: 'languageOnly',
    debug: process.env.NODE_ENV === 'development'
}; 