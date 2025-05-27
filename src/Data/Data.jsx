import resume from "../assets/MMills_Resume_2025.pdf";
export const experienceCards = [
  {
    id: "exp1",
    title: "Software Development Engineer",
    label: "Navigate to Revvity's Website",
    subTitle: "Revvity Signals",
    date: "May 2024 - Current",
    description:
      "Member of the Signals Data Factory (SDF) UI team, primarily responsible for the creation of SDF-2.0. Working on building out modular components and high visibility features, often used by thousands of clients. Specifically created/maintained on SDF 2.0 Mapping and Relationships among other areas in SDF.",
    stack: ["JavaScript", "TypeScript", "React", "Storybook", "Jest", "RTL"],
    link: "https://revvitysignals.com/",
    type: "exp",
  },
  {
    id: "exp2",
    title: "Software Developer",
    label: "Navigate to CobbleStones's Website",
    subTitle: "CobbleStone Software",
    date: "Aug 2021 - May 2024",
    description: [
      "Worked as a full stack developer on Contract Insight, an enterprise SaaS focused on contract management. Individually created and deployed the CobbleStone Add-In for Word, a React JS plugin which allows users to create/edit Contract Insight files into Microsoft Word. Also used C# to integrate OneDrive files into Contract Insight with the usage of MS Graph. ",
      <strong className="font-medium text-zinc-200">
        Awarded "Developer of the Year 2023"
      </strong>,
      " in December 2023 for my work on the CobbleStone Add-In for Word.",
    ],

    stack: ["JavaScript", "React", "C#", "ASP.NET", "Transact-SQL"],
    link: "https://www.cobblestonesoftware.com/",
    type: "exp",
  },
  {
    id: "exp3",
    title: "Information Technology Student",
    label: "Navigate to University of Scranton's Website",
    subTitle: "University of Scranton",
    date: "Aug 2017 - May 2021",
    description: [
      "Attended the University of Scranton from 2017 to May 2021. ",
      <strong className="font-medium text-white">
        Awarded "Excellence in Information Technology 2021"
      </strong>,
      " for obtaining the highest GPA among peers in the same graduating class and major. Member of Upsilon Pi Epsilon, the Computing Honors Society. Member of the swim team from 2017-2020, and broke 5 school records during my tenure.",
    ],
    stack: [],
    link: "https://www.scranton.edu/",
    type: "exp",
  },
];
export const projectCards = [
  {
    id: "proj1",
    title: "afterglow-ui",
    label: "Navigate to GitHub",
    subTitle: "Component Library",
    date: "Jan 2025 - In Progress",
    description:
      "Numerous components experimenting with CSS keyframes and properties to generate smooth and unique animations. Highly customizable, allowing users to create inset/outset rotational glows and borders. Uses storybook to help with both testing and documentation. Will be available on NPM following completion.",
    link: "https://github.com/Matt-Mills98/afterglow-ui",
    stack: ["React", "TypeScript", "Storybook"],
    type: "proj",
    functionality: "The purpose of this ",
    thoughts:
      "Currently in development, thoughts will be filled out following completion",
    improvements:
      "Currently in development, improvements will be filled out following completion",
  },
  {
    id: "proj2",
    title: "Echoes.fyi",
    label: "Navigate to Echoes Log-In",
    subTitle: "Spotify Analytics and Advanced Song Search",
    date: "Oct 2023 - Apr 2024",
    description:
      "Web Application which consumes Spotify Web APIs and Playback APIs. Allows the user to create customized searches for similar songs based on numerous parameters, including popularity, tempo, duration, acousticness, valence, etc. Gives users the ability to see their recent top songs and artists, split by weekly, monthly, or yearly. Awaiting Spotify approval for general usage.",
    link: "https://echoes.fyi/",
    stack: ["React", "JavaScript", "Material UI", "ChartJS", "Photoshop"],
    type: "proj",
  },
  {
    id: "proj3",
    title: "M-Mills.com",
    label: "Navigate to Echoes M-Mills.com",
    subTitle: "Portfolio Web Site",
    date: "Nov 2022 - In Progress",
    description:
      "Portfolio page consistently being updated with new iterations as I experiment with different technologies. Currently on the 4th version of this website, which uses Tailwind for styling, ThreeJS for 3D renders, and GSAP for smooth animations. Previous iterations can be found on GitHub. As I am constantly learning new technologies and improved coding fundamentals, this site consistently changes.",
    link: "https://m-mills.com/",
    stack: ["React", "JavaScript", "Tailwind", "ThreeJS", "GSAP"],
    type: "proj",
  },
  {
    id: "proj4",
    label: "Navigate to GitHub",
    title: "Speech Language Pathology Web Application",
    subTitle: "Appointment Documentation Facilitator",
    date: "Apr 2021 - May 2021",
    description:
      "Web application targeting improving Speech Language Pathologist (SLP) post-appointment documentation process. During discovery phase, I spoke to a SLP regarding improvements which could facilitate and expedite the process of logging information. Much of an SLPs time is wasted doing this monotonous work, instead of helping clients. Used a React/Material UI frontend with an ExpressJS API and a MySQL DB.",
    stack: ["React", "JavaScript", "ExpressJS", "MySQL"],
    link: "https://github.com/Matt-Mills98/Speech-Language-Pathology-Web-App",
    type: "proj",
  },
];

export const menuOptions = [
  {
    id: "LinkedIn",
    label: "View My LinkedIn",
    child: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        fill="#71717a"
        viewBox="0 0 30 30"
        className="fill-zinc-400 hover:fill-white duration-300"
      >
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
      </svg>
    ),
    link: "https://www.linkedin.com/in/matt-mills-633b00214/",
  },
  {
    id: "Resume",
    label: "View My Resume",
    child: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="#71717a"
        width="30"
        height="30"
        className="fill-zinc-400 hover:fill-white duration-300"
      >
        <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
      </svg>
    ),
    link: resume,
  },
  {
    id: "Email",
    label: "E-Mail Me",
    child: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="#71717a"
        width="30"
        height="30"
        className="fill-zinc-400 hover:fill-white duration-300"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
      </svg>
    ),
    link: "mailto:mattmills32013@gmail.com",
  },
  {
    id: "GitHub",
    label: "View My GitHub Account",
    child: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#71717a"
        x="0"
        y="0"
        width="30"
        height="30"
        viewBox="0 0 25 25"
        className="fill-zinc-400 hover:fill-white duration-300"
      >
        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
      </svg>
    ),
    link: "https://github.com/Matt-Mills98",
  },
];
