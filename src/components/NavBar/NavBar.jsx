"use client";

import "./NavBar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { FileText } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Misbah.dev
        </motion.span>
        <div className="socials">
          <a
            href="https://github.com/misbah1408"
            target="_blank"
            aria-label="GitHub"
          >
            {/* <i className="fa-brands fa-github text-[#ffffff]"></i> */}
            <FontAwesomeIcon icon={faGithub} className="text-[#ffffff]" />
            {/* <FontAwesomeIcon icon={byPrefixAndName.fab['github']} /> */}
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-misba-482802259/"
            target="_blank"
            aria-label="LinkedIn"
          >
            {/* <i className="fa-brands fa-linkedin hover:text-[#0077B5]"></i> */}
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-[#0077B5]"
            />
          </a>

          <a
            href="https://x.com/misbah0814"
            target="_blank"
            aria-label="Twitter / X"
          >
            {/* <i className="fa-brands fa-twitter hover:text-[#1DA1F2]"></i> */}
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-[#1DA1F2]"
            />
          </a>

          <a
            href="https://www.instagram.com/misba.hhh_/"
            target="_blank"
            aria-label="Instagram"
          >
            {/* <i className="fa-brands fa-instagram"></i> */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="instagram-hover"
            />
          </a>

          <a
            href="https://drive.google.com/file/d/1wlG8N6CsA7_ZVKcqhs3F8mRGPB8M59lj/view?usp=sharing"
            target="_blank"
            aria-label="Resume / CV"
            className="flex items-center"
          >
            <FileText size={20} className="hover:text-gray-400 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
