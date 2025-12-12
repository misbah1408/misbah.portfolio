"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

const LazyTypeWriter = dynamic(() => import("./TypeWriterText"), {
  ssr: false,
  loading: () => "Developer", 
});
const MotionImage = motion.create(Image);

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollPngAnimation: {
    opacity: [0, 1, 0],
    y: [5, 0, 5],
    transition: { duration: 1.3, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-250%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
    },
  },
};
function Hero() {
  const [startTyping, setStartTyping] = React.useState(false);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestIdleCallback(() => setIsReady(true));
  }, []);

  useEffect(() => {
    setTimeout(() => setStartTyping(true), 700);
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate={isReady ? "animate" : false} // animate only after load
        >
          <motion.h2 variants={textVariants}>Mohammed Misbah</motion.h2>
          <motion.h1 variants={textVariants}>
            {`I'm a`}
            {startTyping && (
              <motion.p>
                <LazyTypeWriter/>
                {/* <Cursor /> */}
              </motion.p>
            )}
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Projects" className="btn" variants={textVariants}>
              See my works
            </motion.a>
            <motion.a href="#Contact" className="btn" variants={textVariants}>
              Contact Me
            </motion.a>
          </motion.div>
          {isReady && (
            <MotionImage
              height={40}
              width={40}
              src={"/assets/scroll.webp"}
              alt="scroll"
              variants={textVariants}
              animate="scrollPngAnimation"
              priority
            />
          )}
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate={isReady ? "animate" : false}
      >
        Frontend Backend UI/UX
      </motion.div>
      <div className="imageContainer">
        <Image
          src="/assets/profile1.webp"
          alt="hero"
          width={500}
          height={500}
          priority
          quality={55}
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
        />
      </div>
    </div>
  );
}

export default Hero;
