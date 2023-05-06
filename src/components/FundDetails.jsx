import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { catalyst } from "../assets";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { fundInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F8F4EE",
        color: "#702F00",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #F8F4EE" }}
      date={experience.date}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className='flex justify-center items-center w-full h-full' >
          <img
            src={catalyst}
            alt={experience.title}
            className='w-[60%] object-contain'
          />
        </div >
      }
    >
      <div>
        <h3 className='text-darkblue text-[24px] font-bold'>{experience.title}</h3>
        <div className="flex flex-col md:flex-row justify-between ">
          <p
            className='flex flex-col text-tamarin text-[30px]'
            style={{ marginTop: 10, fontSize: '22px', color: '#DF5F3D' }}
          >
            ${experience.budget}
            <span className="text-xs md:text-sm text-brown">Budget</span>
          </p>
          <p
            className='flex flex-col md:text-right'
            style={{ marginTop: 10, fontSize: '22px', color: '#DF5F3D' }}
          >
            {experience.challenges}
            <span className="text-xs md:text-sm text-brown">Challenges</span>
          </p>
        </div>

      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2 text-xl font-medium md:grid md:grid-cols-2 md:space-y-0 md:gap-3'>
        <li>
          {experience.submitted_ideas}
          <span className="text-sm"> Ideas Submitted</span>
        </li>
        <li>
          {experience.funded_ideas}
          <span className="text-sm"> Ideas Funded</span>
        </li>
        <li>
          {experience.completed_ideas}
          <span className="text-sm"> Ideas Completed</span>
        </li>
        <li>
          {experience.vote_cast}
          <span className="text-sm"> Votes cast</span>
        </li>
      </ul>
    </VerticalTimelineElement >
  );
};

const FundDetails = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div> */}

      <div className=' flex flex-col text-left font-poppins'>
        <VerticalTimeline className="custom-line">
          {fundInfo.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(FundDetails, "work");
