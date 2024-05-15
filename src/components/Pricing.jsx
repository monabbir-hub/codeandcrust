import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { pricing } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { Link } from "react-scroll";

const PricingCard = ({ index, title, description, price, features }) => (
  <Tilt className="xs:w-[357px] w-full justify-between">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-cream-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >       

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-gray-400 text-xs">{description}</p>

        <h1 className=" text-emerald-500 text-[40px] font-bold text-center mt-2">
          ${price}
        </h1>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {features.map((point, index) => (
          <li
            key={`features-${index}`}
            className='text-white-100 text-[12px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      <Link to="contact" smooth={true} duration={500}>
          <button
            type="button"
            className="bg-emerald-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-5"
          >
            Contact us
          </button>
        </Link>




      </div>
    </motion.div>
  </Tilt>
);

const Pricing = () => {
  return (
    <>
    <motion.div variants={textVariant()}>       
        <h2 className={styles.sectionHeadText}>Pricing</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {pricing.map((pricing, index) => (
          <PricingCard key={pricing.title} index={index} {...pricing} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Pricing, "pricing");
