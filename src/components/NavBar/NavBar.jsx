import "./NavBar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { FileText } from "lucide-react";

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
          <a href="https://github.com/misbah1408" target="_blank">
            <i className="fa-brands fa-github text-[#ffffff]"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-misba-482802259/" target="_blank">
            <i className="fa-brands fa-linkedin hover:text-[#0077B5]"></i>
          </a>
          <a href="https://x.com/misbah0814" target="_blank">
            <i className="fa-brands fa-twitter hover:text-[#1DA1F2]"></i>
          </a>
          <a href="https://www.instagram.com/misba.hhh_/" target="_blank">
            <i className="fa-brands fa-instagram "></i>
          </a>
          <a href="https://drive.google.com/file/d/1wlG8N6CsA7_ZVKcqhs3F8mRGPB8M59lj/view?usp=sharing" target="_blank" className="flex items-center">
            <FileText
              size={20}
              className="hover:text-gray-400 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
