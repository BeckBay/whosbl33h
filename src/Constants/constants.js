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
	calculator,
	cssIcon,
	eslintIcon,
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	memoryGame,
	neoIcon,
	nodeIcon,
	pawsitivePrototype,
	psqlIcon,
	pyIcon,
	reactIcon,
	viteIcon,
	ts,
	jest,
	mocha,
	mysql,
	mongo,
	firebase,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	neoIcon,
	figmaIcon,
	avatar,
	ts,
	jest,
	mocha,
	mysql,
	mongo,
	firebase,
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
		"Welcome",

		`My name is Beck, I have spent this past decade running a successful imports business and managing tech in telecom. Software engineering has long been that new video game playing on a screen that I'd watch through a store window as a kid, thinking, "One day."`,

		"One day, I came to realize that I was too old to keep thinking it. I took a coding bootcamp at Hack Reactor and I have not been able to stop coding since. Do people actually get paid to do this?",

		"I'm posting some of my work here, in this portfolio space. Whenever you are reading this, you can be sure that there is a LOT more to come.",
	],
	textColorClass: "black-text",
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [



	{
		name: "Arasartara's Gallery",
		description:
			"A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.",
		image: memoryGame,
		source_code_link: "https://github.com/bl33h/artMemoryGame",
		demo_link: "https://arasarmemory.netlify.app/",
	},
	{
		name: "PANEDORA",
		description:
			"A unique weather portal that utilizes TensorFlow object recognition to analyze local social media posts and generate an outfit recommendation.",
		image: pawsitivePrototype,
		source_code_link: "https://github.com/bl33h/pawsitive",
		demo_link:
			"https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
	},
	{
		name: "Basic Calculator",
		description:
			"A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
		image: calculator,
		source_code_link: "https://github.com/bl33h/calculator",
		demo_link: "https://bl33hscalculator.netlify.app/",
	},
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
		id: "psql",
		title: "Postgresql",
		icon: psqlIcon,
		description:
			"I regularly work with PostgreSQL, designing and building databases, migrating, optimizing, expanding and achieving seamless connectivity.",
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
			"I am just as comfortable with non-relational databases like MongoDB. I have designed, built, intergated and edited MongoDB for a couple of team projects. I am using it for a project right now.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"Node is normally my environment of choice when building web applications, even though I have worked in others without issues, including Yarn.",
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
