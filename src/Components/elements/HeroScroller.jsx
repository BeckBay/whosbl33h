import { m } from "framer-motion";

const HeroScroller = () => {
  return (
    <m.div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
      animate={{
        y: [0, 30, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <a href="#projects">
          <span className="text-primary-200 text-4xl" style={{ cursor: 'pointer', color: 'black' }}>
            ▼
          </span>
      </a>
    </m.div>
  );
};

export default HeroScroller;
