import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      profileHello: "Hola",
      
    },
  },
  es: {
    translation: {
      navAbout:"",
      navExperience:"",
      navSkills:"",
      navProjects:"",
      navContact:"",
      navLanguaje:"",

      profileHello: "Hello",
      profileIm : "I'm",
      profileDescription: "Full stack developer with a strong background in creating and maintaining web applications and software solutions. My experience ranges from developing intuitive interfaces to implementing complex business logic. I specialize in optimizing systems and processes to improve efficiency and customer satisfaction, with a focus on problem-solving and continuous improvement.",

      btnDownloadResume:"download resume",

      experienceTittle:"Work Experience",
      experienceDescription:"Work Experience",

      experienceTitle1:"Software Developer Analyst - Grupo Prides",
      experienceDate1:"February 2024 - Present",
      experienceDescription1:"Responsible for managing a series of integrated web projects, developing new functionalities, and providing ongoing maintenance and support for these systems. My role includes ensuring the optimal performance of each project, delivering effective solutions, and guaranteeing a high-quality user experience.",

      experienceTitle2:"Junior Software Developer - Grupo Diverscan S.A.",
      experienceDate2:"February 2023 - February 2024",
      experienceDescription2:"As a junior software developer, I focus on developing websites for asset management. I collaborate closely with cross-functional teams to design, build, and maintain websites that enhance user experiences and streamline asset management processes, all while adhering to quality standards and meeting our clients' requirements.",

      experienceTitle3:"Full Stack Developer Freelance - Intel",
      experienceDate3:"September 2022 - October 2022",
      experienceDescription3:"As a developer, worked on implementing the front-end of an internal business application used for CRUD operations on users and products using ReactJS, including the integration with the existing .NET back-end logic that connected with the persistence layer. This was done following the design of the team's tech lead.",

      skillsTitle:"Skills",
      skillsDescription:"",

      projectsTitle:"Projects",
      projectsDescription:"",

      projectTitle1:"DevOps Cars",
      projectDescription1:"",
      projectTitle2:"Dungeon Master",
      projectDescription2:"",
      projectTitle3:"",
      projectDescription3:"",
      projectTitle4:"",
      projectDescription4:"",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma inicial
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React ya escapa los valores
  },
});

export default i18n;
