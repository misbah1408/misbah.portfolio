import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Sidebar.scss'
import Links from './Links/Links'
import ToggleButtons from './toggleButtons/ToggleButtons'

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: { 
            clipPath : "circle(30px at 50px 50px)",
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
  return (
    <motion.div className='sidebar' initial="closed"  animate = {open? "open" : "colsed"}>
        <motion.div className="bg"  variants = {variants}>
            <Links setOpen={setOpen} />
        </motion.div>
        <ToggleButtons setOpen={setOpen}/>
    </motion.div>
  )
}
