import { m, LazyMotion, domAnimation } from "framer-motion";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";
import HeroParticles from "../Components/Particles/HeroParticles";
import HeroText from "../Components/HeroText";


const About = () => {
  return (
    <div id="about" className="relative w-full h-screen min-h-[800px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-12">
        <HeroParticles className="absolute top-0 left-0 w-full h-full z-12" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full xl:w-[80%] flex flex-col items-center pb-16 z-10">

        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-9">
            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="text-grayscale-50 p-2 text-center flex flex-col gap-3"
                >
                <span className="text-primary-400 text-2xl" style={{ color: '#48494b', fontFamily: 'Sketchica' }}>{introduction.text[0]}</span>
                <span className="text-primary-400 text-2xl" style={{ color: '#48494b', fontFamily: 'Sketchica' }}>{introduction.text[1]}</span>
              </m.div>
            </LazyMotion>
          </div>

          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[65%] h-[300px] sm:h-[380px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          <div className="blobm" style={{backgroundColor: 'lightgray', width: 60, height: 60, borderRadius: 30, position: 'absolute', top: 15, right: 20}}></div>
          </div>
        </div>
      </div>

      <HeroText />
    </div>
  );
};

export default About;
