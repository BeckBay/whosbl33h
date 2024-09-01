import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	awsIcon,
	fanplea,
	cssIcon,
	eslintIcon,
	githubIcon,
	htmlIcon,
	jsIcon,
	parking,
	nodeIcon,
	panedora,
	psqlIcon,
	ts,
	jest,
	mocha,
	mysql,
	mongo,
	firebase,
	docker,
	reactIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	nodeIcon,
	avatar,
	ts,
	jest,
	mocha,
	mysql,
	mongo,
	firebase,
	docker,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [

		`Beck',
	],
	textColorClass: "black-text",
};

export const navLinks = [
	{
		id: "about",
		title: "PAST",
	},
	{
		id: "projects",
		title: "THE ONE DAY",
	},
	{
		id: "contact",
		title: "FUTURE",
	},
];

const projects = [
	{
		name: "ParKing Mobile App",
		description:
			"A fully featured mobile app for a valet service that allows making reservations, as well as managing and operating a valet business.",
		image: parking,
		source_code_link: "https://github.com/BeckBay/pkreadme/blob/03659571921c99c7ceb13c3f2b0a3892a68d28f7/README.md",
	},
	{
		name: "PANEDORA WEATHER",
		description:
			"A unique weather portal that utilizes object recognition to analyze local social media and generate outfit recommendations.",
		image: panedora,
		source_code_link: "https://github.com/BeckBay/panedorasample/blob/3263a4de89d86a8d240ff384c6d223ea9ed3000b/Analyzer.jsx",
	},
	{
		name: "FANPLEA",
		description:
			"A reworked FanPlea is launching very soon! It is a platform for fans to launch and sponsor new projects with their favorite artists.",
		image: fanplea,
		source_code_link: "https://fanplea-test.netlify.app",
	}
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I am comfortably proficienct in HTML, with the skills to effectively structure web pages and create meaningful and accessible content.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"My skills encompass leveraging the latest CSS techniques to create visually engaging layouts that elevate the overall user interaction.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"Node is normally my environment of choice when building web applications, even though I have worked in others without issues, including Yarn.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"My first language is JavaScript. It allows me to infuse web apps with  interactivity, achieving dynamic and responsive user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I love React and React Native. My approach is always to greatly compartmentalize my code and achieve maximum reusability of components.",
	},
	{
		id: "TypeScript",
		title: "TypeScript",
		icon: ts,
		description:
			"I am well versed in TypeScript with real work experience collaborating with a team on building mobile apps and online retail platforms.",
	},
	{
		id: "aws",
		title: "Amazon Web Services",
		icon: awsIcon,
		description:
			"I am experienced in utilising EC2 and RDS instances to host web applications and databases, with and without Docker.",
	},
	{
		id: "docker",
		title: "Docker",
		icon: docker,
		description:
			"Docker is another tool I use regularly to host and migrate web sites, apps, and databases.",
	},
	{
		id: "firebase",
		title: "Firebase",
		icon: firebase,
		description:
			"I regularly utilize Firebase for authorization and for full hosting of my projects, as well as storing and handling data."
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"At this point, I am at home on Github, very much used to collaborating with teams, using the best practices to manage healthy projects and resolve any conflicts."
	},
	{
		id: "jest",
		title: "Jest",
		icon: jest,
		description:
			"I often utilize Jest for testing my React applications. I find it to be a very intuitive and elaborate framework.",
	},
	{
		id: "mocha",
		title: "Mocha",
		icon: mocha,
		description:
			"For a quick and easy test runner, I often utilize the Mocha framework. Combining it with the Chai library covers a lot of my needs.",
	},
	{
		id: "psql",
		title: "Postgresql",
		icon: psqlIcon,
		description:
			"I regularly work with PostgreSQL, designing and building databases, migrating, optimizing, expanding and achieving seamless connectivity.",
	},
	{
		id: "mysql",
		title: "MySQL",
		icon: mysql,
		description:
			"Although relational databases work somewhat similarly, I do want to note that I am experienced with the most popular ones, which has to include MySQL.",
	},
	{
		id: "mongo",
		title: "MongoDB",
		icon: mongo,
		description:
			"I am just as comfortable with non-relational databases. I have fully designed, built, intergated and edited MongoDB for several group projects."
	},
	{
		id: "eslint",
		title: "Eslint",
		icon: eslintIcon,
		description:
			"I find that using ESLint enforces consistency so I prefer to always use it in order to keep my code neat and well organized.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
