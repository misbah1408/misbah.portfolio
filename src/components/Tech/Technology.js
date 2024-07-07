import BallCanvas from "../Canvas/BallCanvas";
import { motion } from "framer-motion";
import "./Technology.scss";
import { technologies } from "../../utils/TechConstants";

const textVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 3,
    },
  },
};
function Technology() {
  return (
    <>
      <div className="technology">
        <motion.div id="tech" variants={textVariant}>
          <h2
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            Tools & Frameworks
          </h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              style={{ height: "6rem", width: "6rem" }}
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Technology;
