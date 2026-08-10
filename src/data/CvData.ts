import type { caseStudy, companyLogo, experience, project } from "../interfaces/interfaces";

export const companyLogos: companyLogo[] = [
  {
    name: "Caracol Knits",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di88t9w-9cc6684e-b253-4e87-a094-b4686a56018f.jpg/v1/fit/w_401,h_126,q_70,strp/caracolknitslogo_by_pachi3p_di88t9w-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2IiwicGF0aCI6IlwvZlwvYmJlMmYxNTctZTQ2Yy00YjFhLTljYjgtZDczNDk5YjY5YTU4XC9kaTg4dDl3LTljYzY2ODRlLWIyNTMtNGU4Ny1hMDk0LWI0Njg2YTU2MDE4Zi5qcGciLCJ3aWR0aCI6Ijw9NDAxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RSk0-1lPSRoeAuaj4GerYEFSKRTPVXRLihMMOOI8XeM",
  },
  {
    name: "Azucarera La Grecia",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di88t5f-00da9d26-573b-4e67-92bd-8a3fc4a64670.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGk4OHQ1Zi0wMGRhOWQyNi01NzNiLTRlNjctOTJiZC04YTNmYzRhNjQ2NzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8Lsq85Tg2MYVO4YAI2gksCx5ggAp77Zrh5rLwfkeNnI",
  },
  {
    name: "Stepstone",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/StepStone_Logo.svg",
  },
  {
    name: "SportsAddictHN",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di8gfjq-9d7da07a-ee65-4c32-8f64-567e50272b7a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGk4Z2ZqcS05ZDdkYTA3YS1lZTY1LTRjMzItOGY2NC01NjdlNTAyNzJiN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lHhKwUbUwbXn9_dowoY38_ndOVYVcVKniVN430ef6Pk",
  },
  {
    name: "Altiatek",
    url: "https://cdn.prod.website-files.com/65d9e00a55a1800b41017d31/65e5b90ab807bbb4d3d7eb81_Frame%20129.svg",
  },
  {
    name: "Vensure",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di88su2-6af26efe-9449-423b-b592-ce262f3802ef.jpg/v1/fill/w_907,h_285,q_75,strp/vensurelogo_by_pachi3p_di88su2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg1IiwicGF0aCI6IlwvZlwvYmJlMmYxNTctZTQ2Yy00YjFhLTljYjgtZDczNDk5YjY5YTU4XC9kaTg4c3UyLTZhZjI2ZWZlLTk0NDktNDIzYi1iNTkyLWNlMjYyZjM4MDJlZi5qcGciLCJ3aWR0aCI6Ijw9OTA3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CUEiFsFCU_F1iF7B22eqxeOAyzvo7w5uhiuCNzv2qm4",
  },
];

export const stackArea = {
  imageUrl: "/perfil portafolio.jpeg",
  presentationText: `I'm Alexander Villalvir`,
  presentationTextEs: `Soy Alexander Villalvir`,
  experienceText: `Full-stack developer with 7+ years building business applications, internal platforms, APIs, and data-driven workflows for distributed teams.`,
  experienceTextEs: `Desarrollador full-stack con mas de 7 anos construyendo aplicaciones de negocio, plataformas internas, APIs y flujos de datos para equipos distribuidos.`,
  stackText: "My preferred techs",
  stackTextEs: "Mis tecnologias preferidas",
};

export const technologyList: string[] = ["Angular", "Next.js","C#","NestJS", "SQL", "DynamoDB"];

export const projects: project[] = [
  {
    name: "Sports Addicts Website",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di8mfqm-1db2f9bd-8e39-4252-a0f2-06a403629376.png/v1/fill/w_1108,h_721,q_70,strp/screenshot_2024_09_25_183242_by_pachi3p_di8mfqm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODM0IiwicGF0aCI6IlwvZlwvYmJlMmYxNTctZTQ2Yy00YjFhLTljYjgtZDczNDk5YjY5YTU4XC9kaThtZnFtLTFkYjJmOWJkLThlMzktNDI1Mi1hMGYyLTA2YTQwMzYyOTM3Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O0JOfppNITWBGOOsgAGV65-VTVQtvP8E7jFKmLBoPoA",
    description: `SaaS-style platform for managing operational workflows, including invoices, inventory, and supply chain processes across a business dashboard.`,
    descriptionEs: `Plataforma estilo SaaS para gestionar flujos operativos, incluyendo facturacion, inventario, catalogo, servicios y reporteria dentro de un dashboard empresarial.`,
    impact: `Focused on scalable UI flows, backend integration, and data models that keep operational teams moving through high-volume tasks.`,
    impactEs: `Enfocado en flujos de UI escalables, integracion backend y modelos de datos para centralizar tareas operativas de alto volumen.`,
    status: "Public website / private admin",
    statusEs: "Sitio publico / admin privado",
    primaryAction: "View Site",
    primaryActionEs: "Ver sitio",
    demoUrl: "https://www.sportsaddicthn.com/",
    githubUrl: "",
    technologies: ["Next.js", ".NET", "DynamoDB", "React", "Cognito", "AWS Lambda", "Amplify"],
  },
  {
    name: "Gifs App",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di8g2lb-311a5c88-7e4b-4c4b-8cd4-22c666a1e6d8.png/v1/fill/w_1125,h_710,q_70,strp/screenshot_2024_09_24_215620_by_pachi3p_di8g2lb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA4IiwicGF0aCI6IlwvZlwvYmJlMmYxNTctZTQ2Yy00YjFhLTljYjgtZDczNDk5YjY5YTU4XC9kaThnMmxiLTMxMWE1Yzg4LTdlNGItNGM0Yi04Y2Q0LTIyYzY2NmExZTZkOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.25BS2fBXH-dguK4TyidD3gDtNV-o-IW9Ovq6ymIXRHE",
    description: `Angular application for searching and browsing GIFs with a responsive interface, reusable components, and a clean service-based data flow.`,
    descriptionEs: `Aplicacion Angular para buscar y explorar GIFs con interfaz responsiva, componentes reutilizables y flujo de datos basado en servicios.`,
    impact: `Built as a focused frontend exercise around API consumption, stateful search behavior, and polished user interactions.`,
    impactEs: `Construida como ejercicio frontend enfocado en consumo de APIs, busqueda con estado e interacciones pulidas.`,
    status: "Live demo available",
    statusEs: "Demo disponible",
    demoUrl: "https://shimmering-kangaroo-edc1a1.netlify.app/",
    githubUrl: "https://github.com/javc16/03-gifs-app",
    technologies: ["Angular", "TypeScript"],
  },
  {
    name: "Finance Backend",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbe2f157-e46c-4b1a-9cb8-d73499b69a58/di8g52g-b2ef1265-7ddc-4013-a278-99f454aa3134.png/v1/fill/w_855,h_935,q_70,strp/backend_image_by_pachi3p_di8g52g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2JiZTJmMTU3LWU0NmMtNGIxYS05Y2I4LWQ3MzQ5OWI2OWE1OFwvZGk4ZzUyZy1iMmVmMTI2NS03ZGRjLTQwMTMtYTI3OC05OWY0NTRhYTMxMzQucG5nIiwid2lkdGgiOiI8PTExNzEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZE5P-_LePNjNci1Jf7moHAQla5q-Quf_p_FDYEMv6kA",
    description: `Finance backend for managing clients, accounts, transactions, and reporting endpoints with a maintainable service and persistence structure.`,
    descriptionEs: `Backend financiero para gestionar clientes, cuentas, transacciones y reportes con una estructura mantenible de servicios y persistencia.`,
    impact: `Designed around SOLID principles, dependency injection, repository boundaries, and builder patterns to keep business logic testable and extensible.`,
    impactEs: `Disenado con principios SOLID, inyeccion de dependencias, repositorios y patrones builder para mantener la logica extensible y testeable.`,
    status: "Source code available",
    statusEs: "Codigo disponible",
    demoUrl: "",
    githubUrl: "https://github.com/javc16/Financiera",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL"],
  },
];

export const featuredCaseStudy: caseStudy = {
  imageUrl: projects[0].imageUrl,
  title: "Sports Addicts Website",
  titleEs: "Sports Addicts Website",
  eyebrow: "Featured case study",
  eyebrowEs: "Caso de estudio destacado",
  summary:
    "A custom billing and commerce platform for Sports Addict HN, combining a public website with a private authenticated admin for products, inventory, invoices, services, insights, and SAR reporting.",
  summaryEs:
    "Una plataforma personalizada de facturacion y comercio para Sports Addict HN, combinando un sitio publico con un admin privado autenticado para productos, inventario, facturas, servicios, insights y reporteria para el SAR.",
  problem:
    "The company needed more than a standard website: they needed a tailored system to sell products online while centralizing product catalog, services, inventory, billing, business reporting, and tax-oriented reports.",
  problemEs:
    "La empresa necesitaba mas que un sitio web tradicional: necesitaba un sistema a la medida para vender productos en linea y centralizar catalogo, servicios, inventario, facturacion, reporteria de negocio y reportes fiscales.",
  role:
    "I owned the project end to end as the solo full-stack developer: requirements discovery, UX/UI, frontend, backend, database design, AWS architecture, authentication, deployment, and client communication.",
  roleEs:
    "Fui responsable del proyecto de punta a punta como unico desarrollador full-stack: levantamiento de requerimientos, UX/UI, frontend, backend, diseno de base de datos, arquitectura AWS, autenticacion, despliegue y comunicacion con el cliente.",
  solution:
    "The final product uses a public storefront for customers and a private Cognito-protected admin area for business operations. The serverless backend supports billing flows, inventory movement, reporting, and operational data management.",
  solutionEs:
    "El producto final usa una tienda publica para clientes y un area administrativa privada protegida con Cognito. El backend serverless soporta facturacion, movimientos de inventario, reporteria y gestion de datos operativos.",
  architecture: [
    "React and Next.js for the public site and admin experience.",
    ".NET services deployed through AWS Lambda for serverless backend logic.",
    "DynamoDB for flexible operational data storage.",
    "Amazon Cognito for authenticated admin access.",
    "AWS Amplify and CloudFormation for hosting, deployment, and infrastructure management.",
  ],
  architectureEs: [
    "React y Next.js para el sitio publico y la experiencia administrativa.",
    "Servicios .NET desplegados con AWS Lambda para logica backend serverless.",
    "DynamoDB para almacenamiento flexible de datos operativos.",
    "Amazon Cognito para acceso autenticado al admin.",
    "AWS Amplify y CloudFormation para hosting, despliegue e infraestructura.",
  ],
  outcomes: [
    "Centralized catalog, inventory, billing, services, and reporting in one platform.",
    "Enabled the business to present and sell products through its own website.",
    "Improved visibility into operations through reporting and insight-oriented views.",
    "Supported SAR reporting needs without exposing the private admin experience publicly.",
  ],
  outcomesEs: [
    "Centralizo catalogo, inventario, facturacion, servicios y reporteria en una sola plataforma.",
    "Permitio al negocio mostrar y vender productos desde su propio sitio web.",
    "Mejoro la visibilidad operativa mediante reportes y vistas orientadas a insights.",
    "Soporto necesidades de reporteria para el SAR sin exponer publicamente el admin privado.",
  ],
  url: "https://www.sportsaddicthn.com/",
  technologies: ["Next.js", "React", ".NET", "DynamoDB", "Cognito", "AWS Lambda", "Amplify", "CloudFormation"],
};

export const experienceList: experience[] =[
  {
    years:'2024 (PRESENT)',
    company:'VENSURE EMPLOYMENT SOLUTIONS',
    role:'Full Stack Developer',
    roleEs:'Desarrollador Full Stack',
    description:'Building and maintaining enterprise features for distributed business teams across more than 10 countries.',
    descriptionEs:'Construccion y mantenimiento de funcionalidades empresariales para equipos distribuidos en mas de 10 paises.',
    highlights:[
      'Deliver production features in two-week Scrum cycles using Angular, C#, SQL, and Azure DevOps.',
      'Collaborate with multicultural product and engineering teams through CI/CD-driven delivery.',
      'Improve maintainability across frontend flows, API integrations, and database-backed workflows.'
    ],
    highlightsEs:[
      'Entrega de funcionalidades productivas en ciclos Scrum de dos semanas usando Angular, C#, SQL y Azure DevOps.',
      'Colaboracion con equipos multiculturales de producto e ingenieria mediante delivery con CI/CD.',
      'Mejora de mantenibilidad en flujos frontend, integraciones API y procesos respaldados por base de datos.'
    ]
  },
  {
    years:'2023 -2024',
    company:'ALTIATEK',
    role:'Team Leader',
    roleEs:'Lider Tecnico',
    description:'Led delivery for U.S.-based clients in Agile environments with recurring production releases.',
    descriptionEs:'Liderazgo de delivery para clientes de Estados Unidos en entornos Agile con releases productivos recurrentes.',
    highlights:[
      'Coordinated sprint execution, code delivery, and technical alignment across a multicultural team.',
      'Supported CI/CD practices to keep releases predictable and repeatable.',
      'Balanced hands-on development with team guidance, estimates, and stakeholder communication.'
    ],
    highlightsEs:[
      'Coordinacion de sprints, entrega de codigo y alineamiento tecnico en un equipo multicultural.',
      'Soporte a practicas CI/CD para mantener releases predecibles y repetibles.',
      'Balance entre desarrollo hands-on, guia tecnica, estimaciones y comunicacion con stakeholders.'
    ]
  },
  {
    years:'2021-2022',
    company:'STEPSTONE',
    role:'Full Stack Developer',
    roleEs:'Desarrollador Full Stack',
    description:'Delivered product features for international teams using modern frontend and backend technologies.',
    descriptionEs:'Entrega de funcionalidades de producto para equipos internacionales usando tecnologias modernas frontend y backend.',
    highlights:[
      'Built features with React, .NET Framework, .NET Core, Node.js, NestJS, SQL, and PostgreSQL.',
      'Worked inside Scrum ceremonies and CI/CD pipelines with a two-week delivery cadence.',
      'Contributed across UI, API, and data layers to support maintainable product evolution.'
    ],
    highlightsEs:[
      'Construccion de funcionalidades con React, .NET Framework, .NET Core, Node.js, NestJS, SQL y PostgreSQL.',
      'Trabajo dentro de ceremonias Scrum y pipelines CI/CD con cadencia de dos semanas.',
      'Contribucion en capas de UI, API y datos para soportar evolucion mantenible del producto.'
    ]
  },
  {
    years:'2021-2022',
    company:'TECOLOCO',
    role:'Full Stack Developer',
    roleEs:'Desarrollador Full Stack',
    description:'Developed and supported web application features for recruitment and business workflows.',
    descriptionEs:'Desarrollo y soporte de funcionalidades web para flujos de reclutamiento y negocio.',
    highlights:[
      'Implemented frontend and backend changes across React, .NET, Node.js, NestJS, SQL, and PostgreSQL.',
      'Participated in Agile planning, implementation, review, and release activities.',
      'Maintained features across established systems while preserving reliability for active users.'
    ],
    highlightsEs:[
      'Implementacion de cambios frontend y backend con React, .NET, Node.js, NestJS, SQL y PostgreSQL.',
      'Participacion en planeacion Agile, implementacion, revision y actividades de release.',
      'Mantenimiento de funcionalidades en sistemas existentes preservando confiabilidad para usuarios activos.'
    ]
  },
  {
    years:'2019-2021',
    company:'AZUCARERA LA GRECIA',
    role:'Full Stack Developer',
    roleEs:'Desarrollador Full Stack',
    description:'Built internal business applications and workflow improvements for operational teams.',
    descriptionEs:'Construccion de aplicaciones internas de negocio y mejoras de flujo para equipos operativos.',
    highlights:[
      'Delivered features with Angular, .NET Framework, .NET Core, SQL, and Oracle.',
      'Supported CI/CD and Scrum delivery practices in a production business environment.',
      'Worked on systems connected to operational processes where reliability and clarity mattered.'
    ],
    highlightsEs:[
      'Entrega de funcionalidades con Angular, .NET Framework, .NET Core, SQL y Oracle.',
      'Soporte a practicas CI/CD y Scrum en un entorno productivo de negocio.',
      'Trabajo en sistemas conectados a procesos operativos donde la confiabilidad y claridad eran clave.'
    ]
  },
  {
    years:'2018-2019',
    company:'CARACOL KNITS',
    role:'Full Stack Developer',
    roleEs:'Desarrollador Full Stack',
    description:'Developed web features and backend functionality for internal systems.',
    descriptionEs:'Desarrollo de funcionalidades web y backend para sistemas internos.',
    highlights:[
      'Built and maintained features using React, .NET Framework, and SQL.',
      'Collaborated in Scrum delivery cycles with recurring production updates.',
      'Helped modernize internal workflows through maintainable web application development.'
    ],
    highlightsEs:[
      'Construccion y mantenimiento de funcionalidades usando React, .NET Framework y SQL.',
      'Colaboracion en ciclos Scrum con actualizaciones productivas recurrentes.',
      'Apoyo en la modernizacion de flujos internos mediante desarrollo web mantenible.'
    ]
  },
  {
    years:'2014 - 2018',
    company:'STARTEK',
    role:'Customer Service Agent',
    roleEs:'Agente de Servicio al Cliente',
    description:'Supported T-Mobile Prepaid customers and developed strong communication, ownership, and problem-solving habits.',
    descriptionEs:'Soporte a clientes de T-Mobile Prepaid y desarrollo de habilidades fuertes de comunicacion, ownership y resolucion de problemas.',
    highlights:[
      'Handled customer issues with empathy, speed, and attention to detail.',
      'Built a foundation in service quality, accountability, and user-centered communication.',
      'Carried that customer-first perspective into later software product work.'
    ],
    highlightsEs:[
      'Gestion de problemas de clientes con empatia, rapidez y atencion al detalle.',
      'Construccion de una base en calidad de servicio, responsabilidad y comunicacion centrada en el usuario.',
      'Traslado de esa perspectiva customer-first al trabajo posterior en productos de software.'
    ]
  },
]
