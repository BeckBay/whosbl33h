import { LazyMotion, domAnimation, m } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import SectionTitle from "../Components/SectionTitle";
import SocialLinks from "../Components/SocialLinks";
import { HeroTextNext } from "../Components/HeroText";


const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full overflow-hidden-web flex flex-col items-center"
		>
			<HeroTextNext />
			<div className="w-full min-h-[800px] flex flex-col xl:w-[70%] mx-auto">
				<div className="w-full flex justify-center items-center">
					<LazyMotion features={domAnimation} strict>
						<m.div
							initial={{ x: 200 }}
							whileInView={{ x: 0 }}
							transition={{ duration: 0.6, type: "spring" }}
							className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
						>
							<div className="w-full flex justify-center mx-auto">
								<ContactForm />
							</div>
						</m.div>
					</LazyMotion>
				</div>
			</div>
			<div className="w-full flex flex-col">
				<SocialLinks />
				<div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-50">
				</div>
			</div>
		</div>
	);
};

export default Contact;
