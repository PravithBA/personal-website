// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaReact,
  FaGitAlt,
  FaLink,
  FaPython,
  FaAws,
  FaDocker,
  FaAngular,
  FaRust,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "PravithBA";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a driven programmer with a love for problem-solving and taking on challenges. Skilled in multiple programming languages, I am dedicated to delivering high-quality, innovative solutions. I stay current with industry advancements and continuously improve my skills. In my free time, I enjoy experimenting with new tools. I am passionate about technology and its potential to make a positive impact. I thrive in a fast-paced environment and am always eager for new projects.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 13,
    skill: <FaAngular className="display-5" />,
    name: "Angular",
  },
  {
    id: 5,
    skill: <FaReact className="display-5" />,
    name: "React",
  },
  {
    id: 7,
    skill: <SiTypescript className="display-5" />,
    name: "Typescript",
  },
  {
    id: 12,
    skill: <FaNodeJs className="display-5" />,
    name: "NodeJs",
  },
  {
    id: 13,
    skill: <FaRust className="display-5" />,
    name: "Rust",
  },
  {
    id: 10,
    skill: <FaPython className="display-5" />,
    name: "Python",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-5" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <FaAws className="display-5" />,
    name: "AWS",
  },
  {
    id: 12,
    skill: <FaDocker className="display-5" />,
    name: "Docker",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://raw.githubusercontent.com/PravithBA/personal-website/main/public/MyResume.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["beetee-css", "DraggeDro", "Youtube_Shorts_Remover_Browser_Extension"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mpzeqvqz";
