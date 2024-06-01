import React, { lazy, Suspense } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Lazy load images
const LazyImage = lazy(() => import('./hooks/LazyImage'));

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[357px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-cream-gradient p-[1px] rounded-[20px] shadow-card flex flex-col h-full"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col items-center h-full"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4"
          />
        </Suspense>
        <h3 className="text-white text-[20px] font-bold text-center mb-4">
          {title}
        </h3>
        <div className="flex-1 flex flex-col justify-start w-full">
          <p className="text-gray-400 text-sm text-justify">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
