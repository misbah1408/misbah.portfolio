import React from "react";
import "./Hero.scss";
import scrollPng from "../../assets/scroll.png";
import { motion } from "framer-motion";
import profile from '../../assets/profile1.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
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
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
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
      duration : 20,
    }
  }
  
}
function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'FrontEnd Developer', 'BackEnd Developer'],
      loop: true,
      delaySpeed: 2000,
      })
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mohammed Misbah</motion.h2>
          <motion.h1 variants={textVariants}>
            I'm a 
            <motion.p >{text}<Cursor/></motion.p>
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Projects" className="btn">
                See my works
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact" className="btn">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            src={scrollPng}
            alt="scrollPngAnimation"
            variants={textVariants}
            animate="scrollPngAnimation"
          />
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
        Frontend Backend UI/UX
      </motion.div>
      <div className="imageContainer">
        <img
          src={profile}
          alt="hero"
        />
      </div>
    </div>
  );
}

export default Hero;
