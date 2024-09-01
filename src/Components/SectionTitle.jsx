import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-200 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-5xl sm:text-1xl md:text-1xl"
          style={{ fontFamily: "Elianto-Regular", color: '#3b3b41'}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
