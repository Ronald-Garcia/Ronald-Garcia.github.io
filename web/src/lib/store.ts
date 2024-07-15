import { atom } from "nanostores";

let id = 1;

type ProjectType = {
    id: number,
    name: string,
    description: string,
    dateStarted: Date,
    dateEnded: Date,
    sections: SectionType[],
    images: ImageType[]
}

type SectionType = {
    title: string,
    content: string
}

type ImageType = {
    url: string,
    caption: string
}
const createSection = (title: string, content: string) => {
    const newSection: SectionType = {
        title,
        content
    }
    return newSection;
}

const createProject = (
    {
        name,
        description,
        dateStarted = new Date(),
        dateEnded = new Date(),
        sections = [],
        images = [{
            url: "",
            caption: ""
        }],
    } : {
        name: string,
        description: string,
        dateStarted?: Date,
        dateEnded?: Date,
        sections?: SectionType[]
        images?: ImageType[]
    }
) => {
    const newProject: ProjectType = {
        id,
        name,
        description,
        dateStarted,
        dateEnded,
        sections,
        images
    }
    id = id + 1;

    return newProject;
}

export const $projectList = atom<ProjectType[]>([

    createProject({
        name: "Stirling Engine",
        description: "Designing and manufacturing a Stirling Engine from scratch!",
        sections: [
            createSection("Design Specifications",
                "Using partially completed engineering drawings, the "
            )
        ],
        dateStarted: new Date(2024, 1),
        dateEnded: new Date(2024, 6),
        images: [
            {
                url: "https://drive.google.com/thumbnail?id=1Lkdnfn2LJYzfo8312YBemDGUekT5iLYM",
                caption: "Image stuff"
            }
        ]
    }),
    createProject({
        name: "Acrylic Crane",
        description: "Designing and manufacturing a crane from scratch with design restrictions!",
        dateStarted: new Date(2024, 1),
        dateEnded: new Date(2024, 6),
        images: [
            {
                url: "https://drive.google.com/thumbnail?id=1TxBs04ym2h9DVW93yYZEqHiMxDgOftBv",
                caption: "Image lalalala"
            }
        ]
    }),
    createProject({
        name: "Gatekeeper Redesign.",
        description: "Identification system for the machine shop redesigned! The previously implemented identification system used a finger print for authorization. ",
        dateStarted: new Date(2023, 8),
        dateEnded: new Date(),
    }),
    createProject({
        name: "This Website!",
        description: "Scaffolded with vite and implemented using the React framework and shadcn-ui components. ",
        dateStarted: new Date(2024, 6),
        dateEnded: new Date(2024, 8)
    }),
    createProject({
        name: "Mechanically Powered Car",
        description: "WSE Mechanical Engineering competition! A race to see which design places first...",
        dateStarted: new Date(2022, 8),
        dateEnded: new Date(2022, 12)
    }),
    createProject({
        name: "Arduino-Powered Piano!",
        description: "WSE Mechanical Engineering exhibition! An exhibit displaying the cultures of different through a series of games... ",
        dateStarted: new Date(2023, 1),
        dateEnded: new Date(2023, 6)
    }),
    createProject({
        name: "Digital Security!",
        description: "A four digit pin that runs on digital logic!",
        dateStarted: new Date(2024, 1),
        dateEnded: new Date(2024, 6)
    }),
]);

export const getProjectById = (id: number) => {
    return $projectList.get().find(p => p.id === id);
}

export const getAllProjects = () => {
    return $projectList.get().sort((p1, p2) => p2.dateStarted.getTime() - p1.dateStarted.getTime());
}


