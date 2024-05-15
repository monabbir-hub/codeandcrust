import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { questions } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FAQCard = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xs:w-[1000px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" w-full green-cream-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[80px] flex flex-col justify-between items-start">
          <div
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={toggleOpen}
          >
            <h3 className="text-white text-[20px] font-bold">{question}</h3>
            <span className="text-white text-[20px]">{isOpen ? "-" : "+"}</span>
          </div>
          {isOpen && <p className=" text-emerald-400 text-md mt-4" style={{ whiteSpace: 'pre-line' }}>{answer}</p>
          }
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <motion.div variants={textVariant()}>       
        <h2 className={styles.sectionHeadText}>FAQs</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 sm:justify-center">
        {questions.map((faq, index) => (
          <FAQCard key={index} index={index} {...faq} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FAQ, "faq");;
