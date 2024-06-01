import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HowWeDoCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const HowWeDo = () => {
  return (
    <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 xs:z-60">
        <motion.div variants={staggerContainer}>
          <motion.h2
            variants={textVariant(0.05)}
            className={`${styles.sectionHeadText} text-center`}
          >
            How We Do
          </motion.h2>
          <motion.p
            variants={textVariant(0.1)}
            className={`${styles.sectionSubText} text-center `}
          >
            Our web design process is comprehensive and client-focused, ensuring that every project is delivered to the highest standards of quality and tailored to meet the unique needs of each client.
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col w-full">
        <VerticalTimeline>
          <Suspense fallback={<div>Loading...</div>}>
            {experiences.map((experience, index) => (
              <HowWeDoCard key={`experience-${index}`} experience={experience} />
            ))}
          </Suspense>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(HowWeDo, "howwedo");
