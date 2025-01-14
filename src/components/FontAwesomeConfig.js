import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FontAwesomeConfig() {
    useEffect(() => {
        config.autoAddCss = false;
    }, []);

    return null;
} 