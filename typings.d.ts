interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation:string;
    email: string;
    role: string;
    heroImage: Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
}
  
export interface Technology extends SanityBody {
    _type:"skill";
    image:Image;
    progress: number;
    title:string;
}

export interface Skills extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Experience extends SanityBody {
    _type:"experience";
    company:string;
    companyImage:Image;
    dateStarted:Date;
    dateEnded:Date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Technology[];
}

export interface Project extends SanityBody{
    title:string;
    _type:"project";
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies: Technology[];
}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}