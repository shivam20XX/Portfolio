import { SiPython } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import Project1 from "./assets/Projects_logo/bg1.jpg";

export const SkillsInfo = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: SiPython },
      { name: "SQL", logo: SiSqlite },
      { name: "Jupyter", logo: SiJupyter },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Tableau", logo: SiTableau },
      { name: "Power BI", logo: FaChartLine },
    ],
  },
  {
    title: "Data Libraries",
    skills: [
      { name: "Pandas", logo: SiPandas },
      { name: "NumPy", logo: SiNumpy },
      { name: "MySQL", logo: SiMysql },
    ],
  },
  {
    title: "Tools & Version Control",
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
    position: "Data Analyst",
    company: "Analytics Solutions Inc",
    time: "Jun 2024 - Present",
    desc: "Analyzed large datasets using Python and SQL to identify trends and provide actionable insights. Created interactive Power BI dashboards for executive reporting, improving decision-making efficiency by 35%. Collaborated with cross-functional teams to define KPIs and establish data-driven metrics.",
  },
  {
    id: 1,
    img: Project1,
    position: "Business Intelligence Analyst",
    company: "Tech Ventures",
    time: "Jan 2023 - May 2024",
    desc: "Developed and maintained Tableau dashboards tracking sales performance across 5+ regions. Performed exploratory data analysis on 500K+ customer records, identifying 3 key customer segments. Automated monthly reporting process, reducing manual effort by 20 hours per month.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Sales Performance Dashboard",
    description:
      "Interactive Tableau dashboard analyzing 2 years of sales data across 50+ products and 15+ regions. Features KPI tracking, trend analysis, and predictive forecasting. Identifies top-performing categories and underperforming regions. Enabled management to make data-driven decisions, resulting in 25% revenue growth in underperforming markets.",
    image: Project1,
    tags: ["Tableau", "SQL", "Data Visualization", "Analytics"],
    github: "https://www.github.com",
    live: "https://www.tableau.com",
  },
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description:
      "Python-based analysis using K-means clustering to segment 100K+ customers into 5 distinct personas. Analyzed behavior patterns, lifetime value, and churn risk. Created detailed customer profiles with demographic and behavioral insights. Resulted in targeted marketing campaigns increasing conversion by 18%.",
    image: Project1,
    tags: ["Python", "Pandas", "Clustering", "Data Analysis"],
    github: "https://www.github.com",
    live: "https://www.jupyter.org",
  },
  {
    id: 2,
    title: "Predictive Churn Model",
    description:
      "Developed machine learning model predicting customer churn with 87% accuracy. Analyzed 50+ features to identify key churn indicators. Built interactive Power BI dashboard for monitoring at-risk customers in real-time. Proactive intervention reduced churn by 15% in Q2.",
    image: Project1,
    tags: ["Python", "Machine Learning", "Power BI", "SQL"],
    github: "https://www.github.com",
    live: "https://www.powerbi.com",
  },
];
