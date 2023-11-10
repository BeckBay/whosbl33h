import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";
import {useState} from 'react'

export const SkillsCards = () => {

  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => {
         const [isHovered, setHovered] = useState(false);
         return (
        <m.div
        initial={{ scale: 0.8}}
        animate={{rotateZ: [0, 360]}}
        whileHover={{ rotateZ: [0, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, backgroundColor: 'gray'}}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center rounded-full border-4 cursor-pointer"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                backgroundColor: 'transparent'
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
)})}
    </LazyMotion>
    </div>
  );
};

export const SkillsCards2 = () => {

  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => {
         const [isHovered, setHovered] = useState(false);
         return (
        <m.div
        initial={{ scale: 0.8}}
        animate={{rotateZ: [0, -360]}}
        whileHover={{ rotateZ: [0, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, backgroundColor: 'gray'}}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center rounded-full border-4 cursor-pointer"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                backgroundColor: 'transparent'
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
)})}
    </LazyMotion>
    </div>
  );
};