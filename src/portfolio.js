/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adnan Gull",
  title: "Hi all, I'm Adnan",
  subTitle: emoji(
    "A passionate Frontend Software Developer 🚀 having experience in building Web applications with ReactJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14FTvINauF55gu3VzZoc28X_uOwn73YYx/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DaniGull01",
  linkedin: "https://www.linkedin.com/in/rana-muhammad-adnan-gul-732879196",
  gmail: "rana.gul755@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/ranaadnan.gul",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FRONTEND DEVELOPER EXPLORING THE LATEST TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for web applications using React.js"
    ),
    emoji(
      "⚡ Build responsive and scalable UI with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS"
    ),
    emoji(
      "⚡ Implement state management using Redux and Redux Toolkit for scalable applications"
    ),
    emoji(
      "⚡ Work with Material-UI (MUI) to design modern and accessible interfaces"
    ),
    emoji(
      "⚡ Integration of third-party services such as Firebase, AWS, and REST APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "mui",
      fontAwesomeClassname: "fas fa-palette"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PMAS Arid Agricultural University Rawalpindi",
      logo: require("./assets/images/arid.png"),
      subHeader: "Bechlor of Science in Computer Science",
      duration: "October 2017 - August 2021"
      // desc: "Participated in the final year project of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Txlabz",
      companylogo: require("./assets/images/Txlabz.jpg"),
      date: "May 2023 – Present",
      desc: "Developing and optimizing dynamic web applications with a focus on performance, scalability, and user experience.",
      descBullets: [
        "Developed and maintained responsive UI components using React.js, ensuring seamless user interactions.",
        "Implemented state management using Redux Toolkit for efficient data handling across the application.",
        "Integrated third-party APIs, including authentication and payment gateways, to enhance application functionality.",
        "Optimized frontend performance by reducing bundle size and implementing lazy loading techniques.",
        "Worked with Material-UI (MUI) and Tailwind CSS to create modern, visually appealing interfaces.",
        "Collaborated with backend developers and designers to ensure smooth application workflow and user experience.",
        "Participated in Agile development cycles, contributing to sprint planning, code reviews, and deployment processes."
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Contour Software",
      companylogo: require("./assets/images/contour.jpg"),
      date: "Jan 2023 – April 2023",
      desc: "Worked as a MERN Stack Intern, contributing to the development of scalable web applications using modern technologies.",
      descBullets: [
        "Developed and optimized frontend components using React.js, enhancing user experience and performance.",
        "Integrated REST APIs and managed state efficiently using Redux Toolkit.",
        "Collaborated with senior developers to implement backend functionalities using Node.js and Express.js.",
        "Worked with MongoDB for database management and optimized queries for better performance.",
        "Gained hands-on experience in version control, CI/CD, and agile development practices."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Pruta.png"),
      projectName: "Pruta",
      projectDesc:
        "Pruta is a property management platform with three dashboards for customers, agents, and admins. Customers can list properties, receive bids from agents, and select the best offer. Agents can bid on properties and complete the selection process by making a payment through Stripe.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dashboard.trustagent.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/wheeleasy-logo.png"),
      projectName: "Wheeleasy",
      projectDesc:
        "WheelEasy is an accessibility-focused platform designed to help users find wheelchair-friendly locations across Australia. I contributed to this project by designing and implementing various pages based on Figma designs. Additionally, I integrated Google and Facebook authentication to streamline the user login experience, ensuring secure and seamless access to the platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wheeleasy.org/"
        }
      ]
    },
    {
      image: require("./assets/images/maweidi.png"),
      projectName: "maweidi",
      projectDesc:
        "Maweidi is an online platform designed to streamline medical appointment scheduling in Kuwait. It connects patients with healthcare providers, allowing them to easily book consultations, manage appointments, and access medical services. The platform features an intuitive user interface, ensuring a seamless experience for both patients and doctors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dashboard.maweidi.com.kw/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-colour.png"),
      projectName: "Apperci",
      projectDesc:
        "Apperci is a platform designed to enhance user engagement and appreciation through interactive features. It allows individuals and organizations to express gratitude, recognize contributions, and foster meaningful connections. With a user-friendly interface and seamless integrations, Apperci simplifies the process of sending and receiving appreciation, making it easier to build a culture of recognition.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://appreci.io/"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3046619039",
  email_address: "rana.gul755@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
