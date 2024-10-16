import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/scss/master.scss';
import '@/styles/extra.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
