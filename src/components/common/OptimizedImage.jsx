import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePerformanceOptimizer } from '@/hooks/usePerformance';
import { PERFORMANCE_CONFIG, getImageSize } from '@/utils/performance';

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    objectFit = 'cover',
    quality = PERFORMANCE_CONFIG.images.defaultQuality,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const { ref, isVisible } = usePerformanceOptimizer();
    const [blur, setBlur] = useState(PERFORMANCE_CONFIG.images.defaultBlur);

    useEffect(() => {
        if (priority) {
            setBlur('');
        }
    }, [priority]);

    const handleLoad = (e) => {
        setLoaded(true);
        setBlur('');
        if (props.onLoad) {
            props.onLoad(e);
        }
    };

    const optimizedWidth = getImageSize(width);

    return (
        <div
            ref={ref}
            className={`optimized-image-container ${className}`}
            style={{
                position: 'relative',
                width: width,
                height: height,
                overflow: 'hidden'
            }}>
            {(isVisible || priority) && (
                <Image
                    src={src}
                    alt={alt}
                    width={optimizedWidth}
                    height={height}
                    quality={quality}
                    priority={priority}
                    placeholder="blur"
                    blurDataURL={blur}
                    onLoad={handleLoad}
                    style={{
                        objectFit,
                        transition: 'opacity 0.3s ease',
                        opacity: loaded ? 1 : 0
                    }}
                    {...props}
                />
            )}
        </div>
    );
};

export default OptimizedImage; 