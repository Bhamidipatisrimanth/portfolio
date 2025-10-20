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
  username: "Srimanth Bhamidipati",
  title: "Hi there!, You’re in the right place—let’s connect!",
  subTitle: emoji(
    "A passionate Electrical & Telecom Engineer 🚀 with hands-on experience in developing Automation and ML solutions for smart industry applications using Python, AI frameworks, and advanced telecom technologies.),
  resumeLink:
    "https://drive.google.com/file/d/1oJz-vevAji-CQnGSsRCT17euzQYZ6X6t/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bhamidipatisrimanth",
  linkedin: "https://www.linkedin.com/in/bhamidipati-srimanth/",
  gmail: "srimanthbhamidipati@gmail.com",
  //gitlab: "https://github.com/Bhamidipatisrimanth",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE TELECOM & AUTOMATION ENGINEER BUILDING SECURE, INTELLIGENT SYSTEMS",
  skills: [
    emoji("⚡ Develop automation workflows and cloud infrastructure for telecom, wireless, and IoT networks"),
    emoji("⚡ Design & simulate advanced wireless communication (MIMO, Physical Layer Security, DOA Estimation) in MATLAB"),
    emoji("⚡ Build ML models for battery prediction, network optimization, and smart alert systems using Python"),
    emoji("⚡ Implement high-availability (HA) cloud setups using OpenStack, Ansible, HAProxy, and Keepalived"),
    emoji("⚡ Integrate embedded systems and IoT devices with real-world data acquisition and analytics"),
    emoji("⚡ Monitor, visualize, and troubleshoot complex networks with Prometheus and Grafana dashboards")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-broadcast-tower"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    }
    // Add "Embedded", "IoT", or other stacks as icons or as plain text skillName if FontAwesome is not available
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Blekinge Institute of Technology",
      logo: require("./assets/images/blekingeLogo.png"), // use school logo if available!
      subHeader: "MSc in Electrical Engineering — Telecommunication Systems",
      duration: "August 2023 - June 2025",
      desc: "Advancing wireless/telecom expertise, automation, and cloud infrastructure.",
      descBullets: [
        "Specialized in Wireless Communication Systems, Signal Processing, Modelling & Simulation, Matlab, Optimization Techniques",
        "Master’s thesis: Physical Layer Security & DOA Estimation (MATLAB, MIMO, Artificial Noise)",
        "Hands-on automation with OpenStack, Ansible, Prometheus, and advanced ML for telecom applications"
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University Hyderabad",
      logo: require("./assets/images/jntuhLogo.png"), // use school logo if available!
      subHeader: "BTech in Electronics Communication Engineering",
      duration: "August 2019 - July 2023",
      desc: "Solid foundation in electronics, embedded systems, and applied machine learning.",
      descBullets: [
        "Relevant coursework: Network Analysis, Antenna Design, ML Basics, Embedded Systems, Probability & Statistics",
        "Developed Smart Alert System for Visually Impaired (Python/Raspberry Pi, OCR, IoT)",
        "Organized international workshops and participated in innovative engineering projects"
      ]
    }
  ]
};

// TOP 3 TECH STACKS — updated based on actual proficiency/projects

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Automation & Scripting (Python, Bash, Ansible, Git)",
      progressPercentage: "60%"
    },
    {
      Stack: "Wireless Communication & Simulation (MATLAB, Simulink, Telecom Protocols)",
      progressPercentage: "65%"
    },
    {
      Stack: "Machine Learning & Cloud Platforms (ML frameworks, Azure, GCP, Prometheus, Grafana)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Subject Matter Expert – Mathematics",
      company: "Chegg India Pvt Ltd",
      companylogo: require("./assets/images/cheggLogo.png"), // Use logo if available
      date: "June 2021 – July 2022",
      desc: "Delivered high-quality solutions for advanced mathematics, statistics, and engineering disciplines with top-rated feedback.",
      descBullets: [
        "Solved 100+ complex problems with 90%+ positive student ratings",
        "Demonstrated clarity in step-by-step explanations and academic integrity"
      ]
    },
    {
      role: "Workshop Organizer / Conference Volunteer",
      company: "JNTU Hyderabad",
      companylogo: require("./assets/images/jntuhLogo.png"), // Use logo if available
      date: "Aug 2019 – July 2023",
      desc: "Coordinated events, developed technical content, and managed logistics for international engineering conferences and workshops.",
      descBullets: [
        "Organized sessions on automation, wireless communication, and IoT",
        "Supported logistics for ICET and other academic conferences"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true to show your GitHub pinned projects (add your username in config)
  display: true
};

const bigProjects = {
  title: "Major Projects",
  subtitle: "TECHNICAL INNOVATIONS AND ACADEMIC RESEARCH IMPACT",
  projects: [
    {
      image: require("./assets/images/mimoLogo.png"), // Use representative image for MIMO/Security project
      projectName: "Physical Layer Security & DOA Estimation Under Doppler Shift",
      projectDesc: "Developed advanced frameworks for wireless security, using MATLAB, Kalman filter, MUSIC, and massive MIMO. Achieved 40% BER reduction, 35% DOA accuracy improvement, 25–40% secrecy capacity gain.",
      footerLink: [
        {
          name: "view thesis research",
          url: "https://www.diva-portal.org/smash/record.jsf?pid=diva2:1983838" // add actual link as available
        }
      ]
    },
    {
      image: require("./assets/images/openstackLogo.png"), // Use image for automation/cloud projects
      projectName: "Automated Cloud Infrastructure: OpenStack with Ansible, Prometheus, Grafana",
      projectDesc: "Developed high-availability cloud setup for telecom and network monitoring with automated provisioning, real-time dashboards, and resource optimization.",
      footerLink: [
        {
          name: "View Automation Repo",
          url: "https://github.com/Bhamidipatisrimanth/Network-Automation-and-Performance-Analysis-of-a-Scalable-Cloud-Service-in-OpenStack.git" // add actual link as available
        }
      ]
    },
    {
      image: require("./assets/images/batteryMLLogo.png"), // Add image for battery prediction project
      projectName: "Battery Life Prediction Using ML & Monte Carlo Simulations",
      projectDesc: "Built predictive ML models to estimate battery lifespan. Validated with 100+ simulation scenarios in MATLAB.",
      footerLink: [
        {
          name: "View Project Code",
          url: "https://github.com/Bhamidipatisrimanth/Battery-Life-Prediction-Using-Machine-learning-Model-And-Monte-Carlo-simulation.git" // add link if available
        }
      ]
    },
    {
      image: require("./assets/images/smartAlertLogo.png"), // Custom image for IoT project
      projectName: "Smart Alert System for Visually Impaired (IoT, Python, Raspberry Pi)",
      projectDesc: "Created a real-time obstacle detection and OCR-based audio alert system, achieving over 90% conversion accuracy.",
      //footerLink: [
        {
          // name: "View Project Details",
         // url: "https://github.com/your-github-username/smart-alert-iot" // add link if available
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards, and Recognitions on my technical journey!",

  achievementsCards: [
    {
      title: "IBM Watson AI Certification",
      subtitle:
        "Completed the 'AI Fundamentals' program on IBM Watson via Coursera, building a strong foundation in AI/ML techniques for real-world applications.",
      image: require("./assets/images/ibmWatsonLogo.png"),
      imageAlt: "IBM Watson Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/ccad34b1f59d506432dbe6590db80ed2" // Replace with your actual certificate URL
        }
      ]
    },
    {
      title: "Introduction to Electronics – Coursera",
      subtitle:
        "Certified in electronics basics, circuit analysis, and hands-on implementations through Coursera.",
      image: require("./assets/images/electronicsLogo.png"),
      imageAlt: "Electronics Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/700032875d38a79b3d3c7c1815bbae75" // Replace with your actual certificate URL
        }
      ]
    },
    {
      title: "IoT Wireless and Cloud Computing – Coursera",
      subtitle:
        "Acquired expertise in IoT integration, wireless protocols, and cloud platforms—accelerating automation and smart systems.",
      image: require("./assets/images/iotLogo.png"),
      imageAlt: "IoT Wireless Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/ca1ddcba5ca408f55286bd6399cae58f" // Replace with your actual certificate URL
        }
      ]
    },
    {
      title: "C Programming Fundamentals – Coursera",
      subtitle:
        "Mastered C programming, data structures and logic for embedded and system-level projects.",
      image: require("./assets/images/cProgrammingLogo.png"),
      imageAlt: "C Programming Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/0460b2ed049b13133b3cc40f28a590c5" // Replace with your actual certificate URL
        }
      ]
    },
    {
      title: "Conference Volunteer & Workshop Organizer",
      subtitle:
        "Organized and supported technical sessions at International Conference on Innovations in Engineering and Technology (ICET), contributing to knowledge sharing and collaboration.",
      image: require("./assets/images/conferenceLogo.png"),
      imageAlt: "Conference Logo",
      footerLink: [
        {
          name: "Event certificate",
          url: "https://drive.google.com/file/d/1g0LFbne28fcDI7cwNIsHphMPuJdu4wsV/view?usp=drivesdk" // Official conference link or portfolio evidence
        }
      ]
    }
    // Add more cards for new certificates, awards, or recognitions in the future!
  ],
  display: true
};


// Blogs Section

//const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

//const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

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
  number: "+91 8008822922","+46 0763418655"
  email_address: "srimanthbhamidipati@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
