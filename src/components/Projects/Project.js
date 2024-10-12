import { useRef } from "react";
import { projectList } from "../../utils/Constants";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { title, img, description, link, deployLink } = item || "default";
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="imgContainer"
            style={{ y: y1, height: "40%", width: "100%" }}
          >
            <img src={img} alt={title} />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="w-full flex gap-5">
              <a href={link} rel="noreferrer">
                <button>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[15px]"></i>
                  <i className="fa-brands fa-github text-[20px]"></i>
                </button>
              </a>
              {deployLink && <a href={deployLink} rel="noreferrer">
                <button>
                  <i class="fa-solid fa-link text-[15px]"></i>
                  <span className="text-[15px] font-semibold">Live</span>
                </button>
              </a>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Project() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projectList.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Project;
