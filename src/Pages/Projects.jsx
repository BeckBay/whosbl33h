import ProjectCards from "../Components/ProjectCards";
import { HeroTextNow } from "../Components/HeroText";
import Skills from "./Skills"

const Projects = () => {
	return (
		<div id="projects" className="w-full flex justify-center ">
			<div className="w-full xl:w-[100%] flex flex-col gap-n1">
				<HeroTextNow />
				<span style={{fontFamily: "Elianto-Regular", marginLeft: 50, marginTop: -20, fontSize: 24, color: "#48494b"}}>SOME OF MY WORK</span>
				<div style={{marginTop: -10}}>
					<ProjectCards />
				</div>
				<span style={{fontFamily: "Elianto-Regular", marginLeft: 50, marginTop: 40, fontSize: 24, color: "#48494b"}}>SOME OF MY SKILLS</span>
				<div style={{marginTop: -40}}>
					<Skills />
				</div>
			</div>
		</div>
	);
};

export default Projects;
