import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';
import planetPng from "../../assets/planets.png";
import sunPng from "../../assets/sun.png";

function Parallax({ type }) {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "Services"
                        ? "linear-gradient(180deg, #0c0c1d, #111132)"
                        : "linear-gradient(180deg, #0c0c1d, #505064)"
            }}
        >
            <motion.h1 style={{ y: yText, scale: scaleText }}>
                {type === "Services" ? "What We Do?" : "What We Did?"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div 
                style={{ y: yBg, backgroundImage: `url(${type === "Services" ? planetPng : sunPng})` }} 
                className="planets">
            </motion.div>
            <motion.div style={{ x: xStars }} className="stars"></motion.div>
        </div>
    );
}

export default Parallax;
