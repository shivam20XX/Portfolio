import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Project1 from "./assets/Projects_logo/bg1.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: FaHtml5 },
      { name: "CSS", logo: FaCss3 },
      { name: "JavaScript", logo: FaJs },
      { name: "React JS", logo: FaReact },
      { name: "Tailwind CSS", logo: RiTailwindCssFill },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: FaNodeJs },
      { name: "MySQL", logo: SiMysql },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: BiLogoCPlusPlus },
      { name: "JavaScript", logo: FaJs },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: FaGitAlt },
      { name: "GitHub", logo: FaGithub },
      { name: "VS Code", logo: VscVscode },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Project1,
    position: "Software Tester",
    company: "Bowled.io",
    time: "Jan 2023 - march 2023",
    desc: "Conducted comprehensive testing of web3 game to identify and report bugs, ensuring high-quality software delivery. Collaborated with teams to understand features and functionalities, contributing to improved user experience.",
  },
  {
    id: 1,
    img: Project1,
    position: "Software Tester",
    company: "Bowled.io",
    time: "Jan 2023 - march 2023",
    desc: "Conducted comprehensive testing of web3 game to identify and report bugs, ensuring high-quality software delivery. Collaborated with teams to understand features and functionalities, contributing to improved user experience.",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 1,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 2,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://www.google.com",
    live: "https://www.google.com",
  },
];
