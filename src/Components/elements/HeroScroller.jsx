/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeroScroller.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { m } from "framer-motion";

const HeroScroller = () => {
  return (
    <m.div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
      animate={{
        y: [0, 24, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <a href="#about">
          <span className="text-primary-200 text-4xl" style={{ cursor: 'pointer', color: 'black' }}>
            ▼
          </span>
      </a>
    </m.div>
  );
};

export default HeroScroller;
