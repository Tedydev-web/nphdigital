import { useRef, memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useOptimizedLoad';

const OptimizedComponent = memo(({ children, onVisible, threshold = 0.1 }) => {
    const ref = useRef(null);
    
    useIntersectionObserver(
        ref,
        {
            threshold,
            rootMargin: '50px',
        },
        onVisible
    );

    return (
        <div ref={ref}>
            {children}
        </div>
    );
});

OptimizedComponent.displayName = 'OptimizedComponent';

export default OptimizedComponent; 