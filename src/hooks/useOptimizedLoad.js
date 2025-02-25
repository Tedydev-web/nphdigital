import { useEffect, useState } from 'react';

export function useOptimizedLoad(callback, delay = 0) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
            setIsLoaded(true);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [callback, delay]);

    return isLoaded;
}

export function useIntersectionObserver(ref, options = {}, callback) {
    useEffect(() => {
        if (!ref.current) return;

        const currentRef = ref.current;
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && callback) {
                    callback();
                }
            });
        }, options);

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options, callback]);
} 