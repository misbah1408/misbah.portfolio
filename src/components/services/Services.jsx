import React from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import servicesImg from "../../assets/services.png";
const cardVariants = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

function Services() {
  return (
    <div className="services">
      <motion.div
        className="textContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          I focus on helping brands grow
          <br /> and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="title">
          <img src={servicesImg} alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {[
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
        ].map((role, index) => (
          <motion.div
            className="card"
            key={index}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
          >
            <h3>{role}</h3>
            <p>
              {role === "Frontend Developer" &&
                "Frontend development involves creating the user interface and user experience of web applications using HTML, CSS, and JavaScript. HTML structures the content, CSS styles it, and JavaScript adds interactivity. React, a popular JavaScript library, enhances development by allowing developers to build reusable components and manage application state efficiently. React's virtual DOM improves performance by minimizing direct updates to the actual DOM. Together, these technologies create dynamic, responsive, and visually appealing web applications, providing users with seamless and engaging experiences."}
              {role === "Backend Developer" &&
                "Backend development with Node.js involves creating server-side logic using JavaScript. Its non-blocking, event-driven architecture allows for highly scalable and efficient applications. Node.js is ideal for real-time applications like chat systems and online gaming due to its asynchronous nature. The extensive npm ecosystem provides numerous libraries, streamlining development. Node.js facilitates seamless integration with frontend JavaScript, fostering a cohesive development experience. This makes Node.js a popular choice for modern backend development."}
              {role === "Full Stack Developer" &&
                "Full stack development with the MERN stack involves using MongoDB, Express.js, React, and Node.js to build comprehensive web applications. MongoDB serves as the NoSQL database, storing data in a flexible, JSON-like format. Express.js is a lightweight framework for building robust server-side applications on Node.js, handling routing and middleware. React is used for creating dynamic, responsive user interfaces with reusable components and efficient state management. Node.js enables scalable backend development with its non-blocking, event-driven architecture."}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
