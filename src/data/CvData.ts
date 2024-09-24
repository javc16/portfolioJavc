import type { companyLogo, experience, project } from "../interfaces/interfaces";

export const companyLogos: companyLogo[] = [
  {
    name: "Caracol Knits",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkd__f4Kf891dRLvRSMtTyqXHCFJ1fV8WwDQ&s",
  },
  {
    name: "Azucarera La Grecia",
    url: "https://fundahrse.org/wp-content/uploads/2020/05/la-grecia.png",
  },
  {
    name: "Stepstone",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/StepStone_Logo.svg",
  },
  {
    name: "Altiatek",
    url: "https://cdn.prod.website-files.com/65d9e00a55a1800b41017d31/65e5b90ab807bbb4d3d7eb81_Frame%20129.svg",
  },
  {
    name: "Vensure",
    url: "https://media.zenfs.com/en/business-wire.com/aa22e1a298c3765c98c11f088d4435bd",
  },
];

export const stackArea = {
  imageUrl:
    "",
  presentationText: `I'm Alexander Villalvir`,
  experienceText: `I've been a full stack developer for more than 7 years.`,
  stackText: "My preferred stack:👇",
};

export const technologyList: string[] = ["C#", "Angular", "NextJs", "SQL"];

export const projects: project[] = [
  {
    name: "Gifs App",
    imageUrl: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
    description: `Frontend solution to find gifs using a search field using angular and typescript best practices, you can click on view demo to test it yourself.`,
    demoUrl: "https://shimmering-kangaroo-edc1a1.netlify.app/",
    githubUrl: "https://github.com/javc16/03-gifs-app",
    technologies: ["Angular", "Typescript"],
  },
  {
    name: "Finance Backend",
    imageUrl: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
    description: `Finance backend with all CRUD functionalities for clients, accounts and transactions entities with 2 reports as a plus, with all best practices like SOLID, dependency injection, repository and builder patterns and more.`,
    demoUrl: "",
    githubUrl: "https://github.com/javc16/Financiera",
    technologies: ["C#", "Net Core", "Entity Framework", "SQL"],
  },
];

export const experienceList: experience[] =[
  {
    years:'2024 (PRESENT)',
    company:'VENSURE EMPLOYMENT SOLUTIONS',
    description:'Full stack developer working in an Agile environment in a Multi-Cultural SCRUM team working for people in more than 10 countries with CI/CD, delivering functionalities every 2 weeks using Angular, C#, SQL, Azure DevOps.'
  },
  {
    years:'2023 -2024',
    company:'ALTIATEK',
    description:'Team leader working in an Agile environment in a Multi-Cultural Scrum team working for U.S. based Clients with CI/CD delivering functionalities every 2 weeks.'
  },
  {
    years:'2021-2022',
    company:'STEPSTONE',
    description:'Full stack developer working in an Agile environment in a Multi-Cultural SCRUM team working for people in more than 10 countries with CI/CD, delivering functionalities every 2 weeks using React, .Net Framework, Net Core,Nodejs,Nestjs SQL and Postgrade stack.'
  },
  {
    years:'2021-2022',
    company:'TECOLOCO',
    description:'Full stack developer working in an Agile environment in a Multi-Cultural SCRUM team working for people in more than 10 countries with CI/CD, delivering functionalities every 2 weeks using React, .Net Framework, Net Core,Nodejs,Nestjs SQL and Postgrade stack.'
  },
  {
    years:'2019-2021',
    company:'AZUCARERA LA GRECIA',
    description:'Full stack developer working in an Agile environment in a SCRUM team with CI/CD, delivering functionalities every 2 weeks using Angular, .Net Framework, Net Core,SQL and Oracle stack.'
  },
  {
    years:'2018-2019',
    company:'CARACOL KNITS',
    description:'Full stack developer working in an Agile environment in a SCRUM team with CI/CD, delivering functionalities every 2 weeks using React, .Net Framework and SQL stack.'
  },
  {
    years:'2014 - 2018',
    company:'STARTEK',
    description:'Customer Service Agent for T-Mobile Prepaid.'
  },
]
