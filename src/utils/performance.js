export const PERFORMANCE_CONFIG = {
    // Cấu hình cho Image Loading
    images: {
        defaultQuality: 75,
        defaultBlur: 'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
        sizes: {
            thumbnail: 150,
            small: 300,
            medium: 600,
            large: 1200
        }
    },
    
    // Cấu hình cho Component Loading
    components: {
        defaultTimeout: 3000,
        minDisplayTime: 1000,
        transitionDuration: 300
    },
    
    // Cấu hình cho Animation
    animation: {
        reducedMotion: false,
        defaultDuration: '0.3s',
        defaultEasing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    // Cấu hình cho Resource Loading
    resources: {
        preloadFonts: true,
        preloadCriticalImages: true,
        lazyLoadThreshold: '50px'
    }
};

export const getImageSize = (width) => {
    const { sizes } = PERFORMANCE_CONFIG.images;
    if (width <= sizes.thumbnail) return sizes.thumbnail;
    if (width <= sizes.small) return sizes.small;
    if (width <= sizes.medium) return sizes.medium;
    return sizes.large;
};

export const shouldReduceMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}; 