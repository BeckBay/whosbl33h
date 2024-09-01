import MarqueeCards from "../Components/MarqueeCards";

import {SkillsCards} from "../Components/SkillsCards";


const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[400px] flex flex-col xl:w-[100%]">
          <div className="relative" >
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
      </div>
    </div>
  );
};

export default Skills;
