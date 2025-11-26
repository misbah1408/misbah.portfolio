import BallCanvas from "../Canvas/BallCanvas";
import { motion } from "framer-motion";
import "./Technology.scss";
import { technologies } from "../../utils/TechConstants";
import { useState, useEffect } from "react";

// Text variant for animation
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
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Catch any potential errors related to rendering BallCanvas or other issues
    try {
      // Custom logic or API calls could go here.
      setHasError(false);
    } catch (error) {
      console.error("Error loading technologies:", error);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div className="technology-error">
        <h2 className="text-red-500 text-center">
          Oops! Something went wrong while loading the technologies.
        </h2>
        <p className="text-gray-400 text-center">
          Please try refreshing the page or come back later.
        </p>
      </div>
    );
  }

  return (
    <div className="technology py-12">
      <motion.div
        id="tech"
        variants={textVariant}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tools & Frameworks
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div
            className="technology-item"
            style={{ height: "6rem", width: "6rem" }}
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
