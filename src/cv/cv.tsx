import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineCode,
  AiOutlineForm,
} from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export const DATA = {
  name: "Gustavo Alfonso",
  initials: "GA",
  url: "",
  location: "Novo Hamburgo, RS, Brazil",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Chemical Engineer turned Developer. I love building things and helping people. Fly its my Hobbie",
  summary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  avatarUrl: "/img/me.jpg",
  skills: ["React", "Typescript", "Python", "Go", "mySQL", "Astro", "Tailwind"],
  navbar: [
    { href: "/", icon: AiOutlineHome, label: "Home" },
    { href: "/blog", icon: AiOutlineFileText, label: "Blog" },
    { href: "#", icon: AiOutlineCode, label: "Projects" },
    { href: "#", icon: AiOutlineForm, label: "Notes" },
  ],
  contact: {
    email: "alfonsgustavo@gmail.com",
    tel: "+543496652150",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: FaGithub,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: FaLinkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: FaTwitter,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: FaYoutube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
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
