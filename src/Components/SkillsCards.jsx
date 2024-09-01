import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";
import {useState} from 'react'

export const SkillsCards = () => {
  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>
      {skills.map((skill, index) => {
        const [isHovered, setIsHovered] = useState(false)
         return (
        <m.div
        initial={{ scale: 0.8}}
        // animate={{rotateZ: [0, 360]}}
        // whileHover={{ rotateZ: [0, 0] }}
        //   transition={{
        //     duration: 0,
        //     repeat: Infinity,
        //     repeatType: "loop",
        //     ease: "linear",
        //   }}
          style={{ zIndex: `${index + 1}`, backgroundColor: 'transparent', borderColor: 'transparent'}}
          key={index}
          className="card w-[242px] h-[242px] flex flex-col items-center rounded-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ?
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col"s>
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-200 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "",
                fontWeight: "bold",
                color: '#3b3b41'
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Kontakt",
                fontWeight: "200",
                backgroundColor: 'transparent',
                color: '#3b3b41'
              }}
            >
              {skill.description}
            </span>
          </div>
          :
           <img
           className="h-[300px] flex justify-center items-center w-[180px]  bg-primary-200 rounded-[5%] p-1 object-contain "
           src={skill.icon}
           alt={skill.title}
         />
      }
            </m.div>
    )})}
        </LazyMotion>
        </div>
      );
};