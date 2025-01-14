import { useEffect, useRef, useState, useCallback } from 'react';
import { PERFORMANCE_CONFIG } from '@/utils/performance';

export const usePerformanceOptimizer = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef(null);
    
    const onLoadComplete = useCallback(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: PERFORMANCE_CONFIG.resources.lazyLoadThreshold
            }
        );

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    return {
        ref: elementRef,
        isVisible,
        isLoaded,
        onLoadComplete
    };
};

export const useResourcePreload = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Preload fonts
        if (PERFORMANCE_CONFIG.resources.preloadFonts) {
            const fontUrls = [
                '/assets/fonts/your-font.woff2'
                // Thêm các fonts khác nếu cần
            ];
            
            fontUrls.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'font';
                link.href = url;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            });
        }

        // Preload critical images
        if (PERFORMANCE_CONFIG.resources.preloadCriticalImages) {
            const criticalImages = [
                '/assets/images/hero.jpg'
                // Thêm các ảnh quan trọng khác
            ];
            
            criticalImages.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = url;
                document.head.appendChild(link);
            });
        }
    }, []);
};

export const useAnimationControl = (initialState = true) => {
    const [shouldAnimate, setShouldAnimate] = useState(initialState);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = (e) => {
            setShouldAnimate(!e.matches);
        };
        
        mediaQuery.addEventListener('change', handleChange);
        setShouldAnimate(!mediaQuery.matches);
        
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return shouldAnimate;
}; 