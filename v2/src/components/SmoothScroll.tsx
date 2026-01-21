import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            // Infinite scroll or other props can be added here
        });

        // Add to window for global access if needed
        (window as any).lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Optional: Listen for route changes to reset scroll if desired
        // But the browser should handle back-restoration if we don't interfere.

        return () => {
            lenis.destroy();
            (window as any).lenis = null;
        };
    }, []);

    return <>{children}</>;
}
