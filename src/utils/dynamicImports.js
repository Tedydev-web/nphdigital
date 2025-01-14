import dynamic from 'next/dynamic';

// UI Components
export const DynamicParticles = dynamic(() => import('@tsparticles/engine').then(mod => mod.Container), {
    ssr: false,
    loading: () => null
});

// Animation Components
export const DynamicGSAP = dynamic(() => 
    import('gsap').then(mod => {
        // Chỉ import các modules cần thiết
        const { gsap, ScrollTrigger, ScrollToPlugin } = mod;
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        return gsap;
    }),
    { ssr: false }
);

// Utility Components
export const DynamicScheduler = dynamic(() => 
    import('scheduler').then(mod => {
        const { unstable_scheduleCallback, unstable_cancelCallback } = mod;
        return { scheduleCallback: unstable_scheduleCallback, cancelCallback: unstable_cancelCallback };
    }),
    { ssr: false }
);

// Helper function để lazy load components
export const createDynamicComponent = (importFunc, options = {}) => {
    return dynamic(() => importFunc().then(mod => {
        // Thêm optimization hints
        if (typeof window !== 'undefined') {
            window.requestIdleCallback(() => {
                // Preload các dependencies
                const dependencies = mod.dependencies || [];
                dependencies.forEach(dep => {
                    const link = document.createElement('link');
                    link.rel = 'modulepreload';
                    link.href = dep;
                    document.head.appendChild(link);
                });
            });
        }
        return mod;
    }), {
        loading: () => null,
        ssr: false,
        ...options
    });
}; 