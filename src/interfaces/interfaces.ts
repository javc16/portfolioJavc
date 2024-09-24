export interface companyLogo{
    name:string;
    url:string
}

export interface project{
    name:string;
    imageUrl:string;
    description:string;
    demoUrl:string;
    githubUrl:string;
    technologies: string[];
}

export interface experience{
    years:string;
    company:string;
    description:string;
}