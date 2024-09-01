import React from 'react'
import './NavBar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
export default function () {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Misbah.Dev</motion.span>
        <div className="socials">
            <a href="https://github.com/misbah1408" ><i className="fa-brands fa-github text-[#ffffff]"></i></a>
            <a href="https://www.linkedin.com/in/mohammed-misba-482802259/" ><i className="fa-brands fa-linkedin hover:text-[#0077B5]"></i></a>
            <a href="https://x.com/misbah0814/status/1783054225901269281" ><i className="fa-brands fa-twitter hover:text-[#1DA1F2]"></i></a>
            <a href="https://www.instagram.com/___.misbah.____/" ><i className="fa-brands fa-instagram "></i></a>
            <a href="https://drive.google.com/drive/folders/1Q6vMiSwUyqnBP4OxmrWPqrikGSng2Sj_" ><img width="20" height="20" style={{marginTop:"4px"}} src="https://img.icons8.com/office/16/resume.png" alt="resume"/></a>
        </div>
        </div>
    </div>
  )
}
