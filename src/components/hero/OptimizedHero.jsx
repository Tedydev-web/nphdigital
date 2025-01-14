import { memo, useEffect, useRef } from 'react';
import { DynamicGSAP } from '@/utils/dynamicImports';
import { PERFORMANCE_CONFIG } from '@/utils/performance';

const OptimizedHero = memo(({ title, subtitle, ...props }) => {
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Đánh dấu LCP
        if (titleRef.current) {
            titleRef.current.setAttribute('fetchpriority', 'high');
            // Add loading hint
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.identifier === 'hero-title') {
                        observer.disconnect();
                    }
                });
            });
            observer.observe({ entryTypes: ['element'] });
        }

        // Tối ưu animation
        const loadAnimations = async () => {
            if (typeof window === 'undefined' || !containerRef.current) return;

            try {
                const gsap = await DynamicGSAP;
                gsap.from(titleRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: PERFORMANCE_CONFIG.animation.defaultDuration,
                    ease: PERFORMANCE_CONFIG.animation.defaultEasing,
                    delay: 0.2
                });
            } catch (error) {
                console.error('Failed to load animations:', error);
            }
        };

        // Load animations sau khi LCP hoàn thành
        if (typeof window !== 'undefined') {
            window.requestIdleCallback(() => {
                loadAnimations();
            });
        }
    }, []);

    return (
        <section 
            ref={containerRef}
            className="hero__section"
            style={{
                containIntrinsicSize: '0 500px', // Giảm layout shift
                contentVisibility: 'auto'
            }}
            {...props}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 
                            ref={titleRef}
                            className="hero__title"
                            elementtiming="hero-title" // Đánh dấu cho Performance Observer
                            style={{
                                display: 'block',
                                maxWidth: '100%',
                                height: 'auto',
                                fontDisplay: 'swap'
                            }}
                        >
                            {title}
                        </h1>
                        {subtitle && (
                            <div className="hero__subtitle">
                                {subtitle}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
});

OptimizedHero.displayName = 'OptimizedHero';

export default OptimizedHero; 