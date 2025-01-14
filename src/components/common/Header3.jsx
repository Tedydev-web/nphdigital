import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

const Header3 = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // hoặc return một skeleton/placeholder
    }

    return (
        <header>
            <div>
                <div>
                    <p>{t('support.center')}</p>
                </div>
            </div>
        </header>
    );
};

export default Header3; 