import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";

//technologies
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import docker from "../assets/tech/docker.png";

//experiences
import ITKey from "../assets/ITKey.png";

//projects
import new_house from "../assets/new_house.jpg";
import megapolis_bukhara from "../assets/megapolis_bukhara.jpg";
import crm from "../assets/realestate_crm.jpg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Creative Designer",
    icon: mobile,
  },
  {
    title: "Good teamplayer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Dynbek outsourcing company",
    icon: "",
    iconBg: "#E6DEDD",

    date: "December 2022 - September 2023",
    points: [
      "I worked as a front-end engineer in this company. Our company aims to make businessmen's work easier with the help of IT technologies. I have gained solid experience and knowledge by participating in various complex projects. My next step is to get a job in a large tech companies.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IT-KEY",
    icon: ITKey,
    iconBg: "#383E56",
    date: "September 2023 - July 2024",
    points: [
      "I worked as a web developer in this company. In our company, we developed a complex CRM for housing sales and several other projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export const projects = [
  {
    name: "New House",
    description:
      "The New House web application helps you to find new properties at affordable prices and sell your properties so fast.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: new_house,
    source_code_link: "https://github.com/mirsaid2004",
    project_link: "http://newhouse.uz/",
  },
  {
    name: "Megapolis Bukhara",
    description:
      "The Megapolis Bukhara web application helps you find new properties and sell your properties quickly only in Bukhara cities and regions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: megapolis_bukhara,
    source_code_link: "https://github.com/mirsaid2004",
    project_link: "http://megapolisbuxoro.uz/",
  },
  {
    name: "Real Estate CRM",
    description:
      "The CRM system provides centralized data storage, process automation, and increased efficiency of interaction with clients, which significantly simplifies sales management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/mirsaid2004",
    project_link: "https://realestatecrm.uz/",
  },
];

// export { services, technologies, experiences, testimonials, projects };
