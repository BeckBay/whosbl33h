import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";
import {useState} from 'react';
import Modal from 'react-modal';


export const staggerContainer = (staggerChildren, delayChildren) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};

export const textVariant = (delay) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

export const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const zoomIn = (delay, duration) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={""}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

const ProjectCard = ({
	index,
	name,
	description,
	image,
	source_code_link,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
		console.log('log', isModalOpen)

		 e.stopPropagation();
    setIsModalOpen(false);
  };

	return (
		<div className="relative cursor-pointer" onClick={openModal}>
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			className="rounded-lg sm:w-[300px] w-[100%] "
		>
			<Tilt
				options={{
					max: 40,
					scale: 1,
					speed: 450,
				}}
			>
				<div className="relative ">
					<img
						src={image}
						alt={name}
						className="w-[full] h-[full] md:h-[250px]  object-cover rounded-lg"
					/>
					<div className="absolute inset-0 flex flex-col justify-end items-end m-3 card-img_hover">
						<div
							onClick={() => {window.open(source_code_link, "_blank")
							setIsModalOpen(false)}}
							className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer mr-5 "
						>
							<img
								src={githubIcon}
								alt="github"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-3">
					<h3 className="text-l">{name}</h3>
					<p className="mt-1 text-secondary text-[12px] leading-snug">
						{description}
					</p>
				</div>
				<div className="mt-2 flex flex-wrap gap-1"></div>
			</Tilt>

			<Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Enlarged Image Modal"
      >

        <button className="modal-close" onClick={closeModal}>
				&#x2718;
        </button>
        <img src={image} alt={name} className="modal-image" />
      </Modal>
		</motion.div>
		</div>
	);
};

const Works = () => {
	return (
		<div className="mt-n1 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-7 w-full justify-items-center place-content-center" style={{fontFamily: 'Kontakt', color: '#48494b'}}>
			{projects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
		</div>
	);
};

export default SectionWrapper(Works, "");
