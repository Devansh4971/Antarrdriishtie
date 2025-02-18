import { useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

interface SmoothScrollProps {
    children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,          // Controls the weight of the scrolling (lower = lighter)
        stiffness: 100,     // Controls the rigidity (higher = more rigid)
        damping: 20,        // Controls how quickly the movement settles
        restDelta: 0.001    // Controls how close to target value the spring must be to be considered at rest
    });

    const y = useTransform(smoothProgress, [0, 1], [0, -window.innerHeight]);

    useEffect(() => {
        // Set the body height to enable scrolling
        document.body.style.height = `${document.documentElement.scrollHeight}px`;

        // Cleanup function to reset body height when component unmounts
        return () => {
            document.body.style.height = '';
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                y
            }}
        >
            {children}
        </motion.div>
    );
}