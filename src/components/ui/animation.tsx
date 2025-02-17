"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            controls.start({
                y: -window.scrollY,
                transition: { type: "tween", ease: "easeOut", duration: 0.8 },
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <motion.div
            animate={controls}
            style={{ position: "relative", width: "100%", willChange: "transform" }}
        >
            {children}
        </motion.div>
    );
}
