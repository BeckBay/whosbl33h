import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
	return (
		<div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
			<a href="https://github.com/BeckBay" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faGithub}
				/>
			</a>
			<a href="zandak@gmail.com" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faEnvelope}
				/>
			</a>
			<a href="https://www.linkedin.com/in/beckbaimouradov/" target="_blank">
				<FontAwesomeIcon
					className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
					icon={icons.faLinkedin}
				/>
			</a>
			<span style={{color: 'white', fontStyle: 'italic', fontWeight: 'lighter', fontSize: 13}}>Design was inspired by the work of Sara Echeverría
</span>
		</div>
	);
};

export default SocialLinks;
