import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "PAST";

  return (
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Elianto-Regular" }}
        >
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 shimmer m-20"
                  style={{ fontSize: "1.2em", color: 'white' }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
  );
};

export const HeroTextNow = () => {
  const name = "TODAY";
  const colors = ['gray'];


  return (
    <LazyMotion features={domAnimation} strict>
           <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Elianto-Regular" }}
        >
        <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
          {name.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            const colorIndex = index % colors.length;
            return (
              <span
                key={index}
                className={`text-primary-400 shimmernow m-10`}

                style={{ fontSize: "1.2em", color: colors[colorIndex] }}
              >
                {char}
              </span>
            );
          })}
        </m.div>
      </m.h1>
    </LazyMotion>
  );
};


export const HeroTextNext = () => {
  const name = "FUTURE?";

  return (
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Elianto-Regular" }}
        >
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 shimmernow m-10"
                  style={{ fontSize: "1.2em", color: '#A42A04' }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
  );
};

export default HeroText;
