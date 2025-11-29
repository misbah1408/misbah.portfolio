import React from 'react'
import {motion} from 'framer-motion'
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    }
  }
};
const variants2 = {
  open: {
    y:0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
};
const Links = ({setOpen}) => {
  const items = ["Home","Services","Projects","Tools","Contact",]
  return (
      <motion.div className="links" variants={variants}>
        {items.map((item, index) => (
          <motion.a href={`#${item}`} key={index} variants={variants2} onClick={() => setOpen(prev => !prev)}>{item}</motion.a>
          ))}
      </motion.div>
  )
}

export default Links
