import React, { lazy, Suspense } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { about } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Lazy load images
const LazyImage = lazy(() => import("./hooks/LazyImage"));

const AboutCard = ({ index, name, title, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
      >
        <div className="relative w-full h-[350px]">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </Suspense>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <h4 className="text-white font-bold text-[16px]">{title}</h4>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px] text-center"
      >
        At Code & Crust, we specialize in creating stunning websites that help
        all-tier businesses succeed online. Whether you’re in the restaurant
        industry, retail, professional services, or any other sector, our team
        of experts will work with you to develop a web presence that sets you
        apart from the competition without breaking your bank. Our personalized
        approach ensures your website and mobile app are designed to captivate
        your audience and drive business growth. Our post-production services
        and maintenance ensure that your website and app maintain peak
        performance, security, and relevance.
      </motion.p>

      <div className="mt-10">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Meet the Team</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7 justify-between">
          {about.map((about, index) => (
            <AboutCard key={`about-${index}`} index={index} {...about} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
