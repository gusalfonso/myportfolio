import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineCode,
  AiOutlineForm,
} from "react-icons/ai";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const DATA = {
  name: "Gustavo Alfonso",
  initials: "GA",
  url: "",
  location: "Novo Hamburgo, RS, Brazil",
  locationLink: "https://maps.app.goo.gl/4Sqb5WzVSZ5epdja9",
  description:
    "Chemical Engineer turned into Developer. I love building things and helping people. Love Flying",
  summary:
    "My name is Gustavo Alfonso, but my friends call me Tavi. Driven by a deep curiosity about electronics and programming, I have always sought to innovate and explore new technologies. While pursuing my studies in Chemical Engineering, I actively managed and ideated numerous projects, from designing Arduino circuits to developing dynamic web pages.  My passion for initiating and leading new ventures led me to co-found Hidrovita with colleagues, where we designed and built a hydroponics company focused on producing organic food, promoting sustainability, and advancing a circular economy.  Recently, I achieved a long-held dream by becoming an airplane pilot, further expanding my horizons and embracing new challenges.",
  avatarUrl: "/img/me.jpg",
  skills: ["React", "Typescript", "Python", "Go", "mySQL", "Astro", "Tailwind"],
  navbar: [
    { href: "#hero", icon: AiOutlineHome, label: "Home" },
    { href: "#aboutme", icon: AiOutlineFileText, label: "About Me" },
    { href: "#projects", icon: AiOutlineCode, label: "Projects" },
    { href: "#contact", icon: AiOutlineForm, label: "Contact" },
  ],
  contact: {
    email: "alfonsgustavo@gmail.com",
    tel: "+543496652150",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gusalfonso",
        icon: FaGithub,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gustavoaalfonso/",
        icon: FaLinkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/alfonsgustavo",
        icon: FaXTwitter,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/alfonso.tavi/",
        icon: FaInstagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alfonsgustavo@gmail.com",
        icon: FaEnvelope,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "ChatGPT",
      href: "https://pomodorotimerjs.netlify.app",
      dates: "",
      active: true,
      description:
        "A dynamic Pokémon Pokédex built with React and TypeScript, featuring search functionality, detailed Pokémon info, and custom data visualizations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://pokedex-gusalfonso.netlify.app",
        },
        {
          type: "Github",
          href: "https://pokedex-gusalfonso.netlify.app",
        },
      ],
      image: "../../img/projects/pokedex.png",
      video: "",
    },
    {
      title: "Pomodoro Timer",
      href: "https://pomodorotimerjs.netlify.app",
      dates: "",
      active: true,
      description:
        "A dynamic Pokémon Pokédex built with React and TypeScript, featuring search functionality, detailed Pokémon info, and custom data visualizations.",
      technologies: ["HTML5", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://pokedex-gusalfonso.netlify.app",
        },
      ],
      image: "../../img/projects/pomodoro.png",
      video: "",
    },
    {
      title: "Game of Life",
      href: "https://pomodorotimerjs.netlify.app",
      dates: "",
      active: true,
      description:
        "A dynamic Pokémon Pokédex built with React and TypeScript, featuring search functionality, detailed Pokémon info, and custom data visualizations.",
      technologies: ["HTML5", "CSS", "JavaScript", "Astro"],
      links: [
        {
          type: "Website",
          href: "https://pokedex-gusalfonso.netlify.app",
        },
      ],
      image: "../../img/projects/conwaysgame.png",
      video: "",
    },
    {
      title: "Pokedéx",
      href: "https://pokedex-gusalfonso.netlify.app",
      dates: "",
      active: true,
      description:
        "A dynamic Pokémon Pokédex built with React and TypeScript, featuring search functionality, detailed Pokémon info, and custom data visualizations.",
      technologies: ["HTML", "CSS", "Typescript", "React"],
      links: [
        {
          type: "Website",
          href: "https://pokedex-gusalfonso.netlify.app",
        },
      ],
      image: "../../img/projects/pokedex.png",
      video: "",
    },
  ],
} as const;
