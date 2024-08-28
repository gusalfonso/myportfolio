import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineCode,
  AiOutlineForm,
} from "react-icons/ai";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const resources = {
  en: {
    translation: {
      hello: `Hi, I'm Gustavo 👋`,
      name: "Gustavo Alfonso",
      initials: "GA",
      url: "gusportfolio.netlify.app",
      location: "Novo Hamburgo, RS, Brazil",
      locationLink: "https://maps.app.goo.gl/4Sqb5WzVSZ5epdja9",
      description:
        "Chemical Engineer turned into Developer. I love building things and helping people. Love Flying.",
      summary:
        "My name is Gustavo Alfonso, but my friends call me Tavi. Driven by a deep curiosity about electronics and programming, I have always sought to innovate and explore new technologies. While pursuing my studies in Chemical Engineering, I actively managed and ideated numerous projects, from designing Arduino circuits to developing dynamic web pages.  My passion for initiating and leading new ventures led me to co-found Hidrovita with colleagues, where we designed and built a hydroponics company focused on producing organic food, promoting sustainability, and advancing a circular economy.  Recently, I achieved a long-held dream by becoming an airplane pilot, further expanding my horizons and embracing new challenges",

      avatarUrl: "/img/me.jpg",
      skills: ["React", "Typescript", "Python", "mySQL", "Astro", "Tailwind"],
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
      homesection: "Home",
      aboutsection: "About Me",
      projectssection: "Projects",
      skillssection: "Skills",
      contactsection: "Contact",
      contactp:
        "I'd love to hear from you! Whether you have questions or just want to chat, drop me a message anytime.",
      contactbtn: "Contact Me",
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
          title: "Pilot Quiz",
          href: "https://pilotquiz.netlify.app",
          dates: "",
          active: true,
          description:
            "A quiz app designed to help practice for the ANAC pilot exam. Built with React, TypeScript, and Zustand.",
          technologies: ["HTML", "CSS", "Typescript", "React"],
          links: [
            {
              type: "Website",
              href: "https://pilotquiz.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pilot-quiz",
            },
          ],
          image: "../../img/projects/pilotquiz.jpg",
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
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pokedex-react-typescript",
            },
          ],
          image: "../../img/projects/pokedex.jpg",
          video: "",
        },
        {
          title: "Susurros en Papel",
          href: "https://susurrosenpapel.netlify.app",
          dates: "",
          active: false,
          description:
            "A blog for stories and poetry, built with Strapi and Next.js. Focused on creative expression and seamless reading.",
          technologies: ["HTML", "CSS", "Typescript", "NextJS", "Strapi"],
          links: [
            {
              type: "Website",
              href: "https://susurrosenpapel.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/susurros-en-papel",
            },
          ],
          image: "../../img/projects/susurrosenpapel.jpg",
          video: "",
        },
        {
          title: "Pomodoro Timer",
          href: "https://pomodorotimerjs.netlify.app",
          dates: "",
          active: true,
          description:
            "A timer application built with JavaScript and CSS to manage time efficiently using the Pomodoro technique.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Website",
              href: "https://pomodorotimerjs.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pomodoro-js",
            },
          ],
          image: "../../img/projects/pomodoro.jpg",
          video: "",
        },
        {
          title: "Game of Life",
          href: "https://myconwaysgame.netlify.app",
          dates: "",
          active: true,
          description:
            "A React-based implementation of Conway's Game of Life developed using Astro. This project highlights the use of extensive CSS styling.",
          technologies: ["HTML", "CSS", "JavaScript", "Astro", "React"],
          links: [
            {
              type: "Website",
              href: "https://myconwaysgame.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/conways-game",
            },
          ],
          image: "../../img/projects/conwaysgame.jpg",
          video: "",
        },

        {
          title: "ChatGPT",
          href: "https://gusalfonsoia.netlify.app",
          dates: "",
          active: false,
          description:
            "Utilizes Web-LLM, WebGPU, and Web Workers with HTML, CSS, and JavaScript for a high-performance chat interface in the browser.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Website",
              href: "https://gusalfonsoia.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/localChatGPT",
            },
          ],
          image: "../../img/projects/chatgpt.jpg",
          video: "",
        },
      ],
    },
  },
  es: {
    translation: {
      hello: `Hey, soy Gustavo 👋`,
      name: "Gustavo Alfonso",
      initials: "GA",
      url: "gusportfolio.netlify.app",
      location: "Novo Hamburgo, RS, Brasil",
      locationLink: "https://maps.app.goo.gl/4Sqb5WzVSZ5epdja9",
      description:
        "Ingeniero Químico y ahora también en Desarrollador. Me encanta construir cosas y ayudar a las personas. Amo volar.",
      summary:
        "Mi nombre es Gustavo Alfonso, pero mis amigos me llaman Tavi. Siempre he sentido una profunda curiosidad por la electrónica y la programación, lo que me ha llevado a buscar constantemente la innovación y la exploración de nuevas tecnologías. Durante mis estudios en Ingeniería Química, gestioné y desarrollé numerosos proyectos, desde el diseño de circuitos con Arduino hasta la creación de páginas web dinámicas.  Mi pasión por emprender y liderar nuevas iniciativas me llevó a cofundar Hidrovita junto a colegas, una empresa de hidroponía enfocada en la producción de alimentos orgánicos, promoviendo la sostenibilidad y fomentando una economía circular.  Recientemente, cumplí uno de mis mayores sueños al convertirme en piloto de avión, lo que me ha permitido ampliar mis horizontes y asumir nuevos desafíos.",
      avatarUrl: "/img/me.jpg",
      skills: ["React", "Typescript", "Python", "mySQL", "Astro", "Tailwind"],
      navbar: [
        { href: "#hero", icon: AiOutlineHome, label: "Home" },
        { href: "#aboutme", icon: AiOutlineFileText, label: "Sobre Mí" },
        { href: "#projects", icon: AiOutlineCode, label: "Projectos" },
        { href: "#contact", icon: AiOutlineForm, label: "Contacto" },
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
            name: "Email",
            url: "mailto:alfonsgustavo@gmail.com",
            icon: FaEnvelope,
            navbar: false,
          },
        },
      },
      homesection: "Home",
      aboutsection: "Sobre Mí",
      projectssection: "Projectos",
      skillssection: "Habilidades",
      contactsection: "Hablemos!",
      contactp:
        "¡Me encantaría saber de ti! Envíame un mensaje en cualquier momento.",
      contactbtn: "Contactame",
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
          title: "Pilot Quiz",
          href: "https://pilotquiz.netlify.app",
          dates: "",
          active: true,
          description:
            "Una aplicación de cuestionarios diseñada para ayudar a practicar para el examen de piloto de ANAC. Construida con React, TypeScript y Zustand.",
          technologies: ["HTML", "CSS", "Typescript", "React"],
          links: [
            {
              type: "Sitio web",
              href: "https://pilotquiz.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pilot-quiz",
            },
          ],
          image: "../../img/projects/pilotquiz.jpg",
          video: "",
        },
        {
          title: "Pokédex",
          href: "https://pokedex-gusalfonso.netlify.app",
          dates: "",
          active: true,
          description:
            "Un Pokédex dinámico de Pokémon construido con React y TypeScript, que presenta funcionalidad de búsqueda, información detallada de Pokémon y visualizaciones de datos personalizadas.",
          technologies: ["HTML", "CSS", "Typescript", "React"],
          links: [
            {
              type: "Sitio web",
              href: "https://pokedex-gusalfonso.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pokedex-react-typescript",
            },
          ],
          image: "../../img/projects/pokedex.jpg",
          video: "",
        },
        {
          title: "Susurros en Papel",
          href: "https://susurrosenpapel.netlify.app",
          dates: "",
          active: false,
          description:
            "Blog de cuentos y poesía, creado con Strapi y Next.js. Enfocado en la expresión creativa y una lectura fluida.",
          technologies: ["HTML", "CSS", "Typescript", "NextJS", "Strapi"],
          links: [
            {
              type: "Website",
              href: "https://susurrosenpapel.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/susurros-en-papel",
            },
          ],
          image: "../../img/projects/susurrosenpapel.jpg",
          video: "",
        },
        {
          title: "Temporizador Pomodoro",
          href: "https://pomodorotimerjs.netlify.app",
          dates: "",
          active: true,
          description:
            "Una aplicación de temporizador construida con JavaScript y CSS para gestionar el tiempo de manera eficiente utilizando la técnica Pomodoro.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Sitio web",
              href: "https://pomodorotimerjs.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pomodoro-js",
            },
          ],
          image: "../../img/projects/pomodoro.jpg",
          video: "",
        },
        {
          title: "Juego de la Vida",
          href: "https://myconwaysgame.netlify.app",
          dates: "",
          active: true,
          description:
            "Una implementación en React del Juego de la Vida de Conway desarrollada usando Astro. Este proyecto destaca el uso de una extensa estilización CSS.",
          technologies: ["HTML", "CSS", "JavaScript", "Astro", "React"],
          links: [
            {
              type: "Sitio web",
              href: "https://myconwaysgame.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/conways-game",
            },
          ],
          image: "../../img/projects/conwaysgame.jpg",
          video: "",
        },

        {
          title: "ChatGPT",
          href: "https://gusalfonsoia.netlify.app",
          dates: "",
          active: false,
          description:
            "Utiliza Web-LLM, WebGPU y Web Workers con HTML, CSS y JavaScript para una interfaz de chat de alto rendimiento en el navegador.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Sitio web",
              href: "https://gusalfonsoia.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/localChatGPT",
            },
          ],
          image: "../../img/projects/chatgpt.jpg",
          video: "",
        },
      ],
    },
  },
  br: {
    translation: {
      hello: `Olá, Sou Gustavo 👋`,
      name: "Gustavo Alfonso",
      initials: "GA",
      url: "gusportfolio.netlify.app",
      location: "Novo Hamburgo, RS, Brasil",
      locationLink: "https://maps.app.goo.gl/4Sqb5WzVSZ5epdja9",
      description:
        "Engenheiro Químico e agora também desenvolvedor. Adoro construir coisas e ajudar as pessoas. Amo voar.",
      summary:
        "Meu nome é Gustavo Alfonso, mas meus amigos me chamam de Tavi. Sempre tive uma profunda curiosidade pela eletrônica e pela programação, o que me levou a buscar constantemente a inovação e a exploração de novas tecnologias. Durante meus estudos em Engenharia Química, gerenciei e desenvolvi numerosos projetos, desde o design de circuitos com Arduino até a criação de páginas web dinâmicas.  Minha paixão por empreender e liderar novas iniciativas me levou a cofundar a Hidrovita junto a colegas, uma empresa de hidroponia focada na produção de alimentos orgânicos, promovendo a sustentabilidade e incentivando uma economia circular.  Recentemente, realizei um dos meus maiores sonhos ao me tornar piloto de avião, o que me permitiu ampliar meus horizontes e assumir novos desafios.",
      avatarUrl: "/img/me.jpg",
      skills: ["React", "Typescript", "Python", "mySQL", "Astro", "Tailwind"],
      navbar: [
        { href: "#hero", icon: AiOutlineHome, label: "Home" },
        { href: "#aboutme", icon: AiOutlineFileText, label: "Sobre Mí" },
        { href: "#projects", icon: AiOutlineCode, label: "Projectos" },
        { href: "#contact", icon: AiOutlineForm, label: "Contacto" },
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
            name: "Email",
            url: "mailto:alfonsgustavo@gmail.com",
            icon: FaEnvelope,
            navbar: false,
          },
        },
      },
      homesection: "Home",
      aboutsection: "Sobre Mim",
      projectssection: "Projetos",
      skillssection: "Habilidades",
      contactsection: "Contato",
      contactp:
        "Adoraria ouvir de você! Seja para fazer perguntas ou apenas para bater um papo, me envie uma mensagem a qualquer momento.",
      contactbtn: "Contacte-me",
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
          title: "Quiz de Piloto",
          href: "https://pilotquiz.netlify.app",
          dates: "",
          active: true,
          description:
            "Um aplicativo de questionário projetado para ajudar a praticar para o exame de piloto da ANAC. Construído com React, TypeScript e Zustand.",
          technologies: ["HTML", "CSS", "Typescript", "React"],
          links: [
            {
              type: "Site",
              href: "https://pilotquiz.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pilot-quiz",
            },
          ],
          image: "../../img/projects/pilotquiz.jpg",
          video: "",
        },
        {
          title: "Pokédex",
          href: "https://pokedex-gusalfonso.netlify.app",
          dates: "",
          active: true,
          description:
            "Uma Pokédex dinâmica de Pokémon construída com React e TypeScript, apresentando funcionalidade de busca, informações detalhadas sobre Pokémon e visualizações de dados personalizadas.",
          technologies: ["HTML", "CSS", "Typescript", "React"],
          links: [
            {
              type: "Site",
              href: "https://pokedex-gusalfonso.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pokedex-react-typescript",
            },
          ],
          image: "../../img/projects/pokedex.jpg",
          video: "",
        },
        {
          title: "Susurros en Papel",
          href: "https://susurrosenpapel.netlify.app",
          dates: "",
          active: false,
          description:
            "Blog de contos e poesia, construído com Strapi e Next.js. Focado na expressão criativa e leitura tranquila.",
          technologies: ["HTML", "CSS", "Typescript", "NextJS", "Strapi"],
          links: [
            {
              type: "Website",
              href: "https://susurrosenpapel.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/susurros-en-papel",
            },
          ],
          image: "../../img/projects/susurrosenpapel.jpg",
          video: "",
        },
        {
          title: "Temporizador Pomodoro",
          href: "https://pomodorotimerjs.netlify.app",
          dates: "",
          active: true,
          description:
            "Um aplicativo de temporizador construído com JavaScript e CSS para gerenciar o tempo de forma eficiente usando a técnica Pomodoro.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Site",
              href: "https://pomodorotimerjs.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/pomodoro-js",
            },
          ],
          image: "../../img/projects/pomodoro.jpg",
          video: "",
        },
        {
          title: "Jogo da Vida",
          href: "https://myconwaysgame.netlify.app",
          dates: "",
          active: true,
          description:
            "Uma implementação em React do Jogo da Vida de Conway desenvolvida usando Astro. Este projeto destaca o uso extensivo de estilização CSS.",
          technologies: ["HTML", "CSS", "JavaScript", "Astro", "React"],
          links: [
            {
              type: "Site",
              href: "https://myconwaysgame.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/conways-game",
            },
          ],
          image: "../../img/projects/conwaysgame.jpg",
          video: "",
        },

        {
          title: "ChatGPT",
          href: "https://gusalfonsoia.netlify.app",
          dates: "",
          active: false,
          description:
            "Utiliza Web-LLM, WebGPU e Web Workers com HTML, CSS e JavaScript para uma interface de chat de alto desempenho no navegador.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              type: "Site",
              href: "https://gusalfonsoia.netlify.app",
            },
            {
              type: "Github",
              href: "https://github.com/gusalfonso/localChatGPT",
            },
          ],
          image: "../../img/projects/chatgpt.jpg",
          video: "",
        },
      ],
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto si no se encuentra el deseado
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
