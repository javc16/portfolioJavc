export interface companyLogo{
    name:string;
    url:string
}

export interface project{
    name:string;
    imageUrl:string;
    description:string;
    descriptionEs?:string;
    impact?:string;
    impactEs?:string;
    status?:string;
    statusEs?:string;
    primaryAction?:string;
    primaryActionEs?:string;
    demoUrl:string;
    githubUrl:string;
    technologies: string[];
}

export interface experience{
    years:string;
    company:string;
    role:string;
    roleEs?:string;
    description:string;
    descriptionEs?:string;
    highlights:string[];
    highlightsEs?:string[];
}

export interface caseStudy{
    title:string;
    titleEs:string;
    eyebrow:string;
    eyebrowEs:string;
    summary:string;
    summaryEs:string;
    problem:string;
    problemEs:string;
    role:string;
    roleEs:string;
    solution:string;
    solutionEs:string;
    architecture:string[];
    architectureEs:string[];
    outcomes:string[];
    outcomesEs:string[];
    url:string;
    technologies:string[];
}
