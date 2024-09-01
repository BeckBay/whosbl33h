import Marquee from "react-fast-marquee";

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
      style={{width: '100%'}}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
