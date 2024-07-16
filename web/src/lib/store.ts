import { atom } from "nanostores";
import ECG_active_filter from "../components/data/active_filter.jpg"
import ECG_complete from "../components/data/complete_circuit.jpg";
import ECG_start_instrumentation from "../components/data/start_of_instrumentation.jpg";
import ECG_instrumentation from "../components/data/instrumentation_amp.jpg";
import DSF_complete from "../components/data/completed_circuit.jpg";
import ENGINE_complete from "../components/data/completed_engine.jpg";
import CRANE_struct from "../components/data/crane_structural.jpg";
import CRANE_transmission from "../components/data/crane_transmission.jpg";
import CAR_final from "../components/data/final_car (1).jpg";
import CAR_proto1 from "../components/data/prototype_car_1 (1).jpg";
import CAR_proto2 from "../components/data/prototype_car_2 (1).jpg";
import PIANO_final from "../components/data/piano_final.jpg";
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
                url: ENGINE_complete,
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
                url: CRANE_struct,
                caption: "The structure of the crane."
            },
            {
                url: CRANE_transmission,
                caption: "The gear transmission system of the crane with a gain of 18."
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
        description: "WSE Mechanical Engineering competition! A race to see which design places first in the Mechanical Engineering class of 2026.",
        dateStarted: new Date(2022, 8),
        dateEnded: new Date(2022, 12),
        images: [
            {
                url: CAR_proto1,
                caption: "Image lalalala"
            },
            {
                url: CAR_proto2,
                caption: "The prototype for the free wheel mechanism (uses a clutch system allow rotation in one direction, but not the other."
            },
            {
                url: CAR_final,
                caption: "The final car, titled the Joe Biden Car."
            }
        ]
    }),
    createProject({
        name: "Arduino-Powered Piano!",
        description: "WSE Mechanical Engineering exhibition! An exhibit displaying the cultures of different through a series of games... ",
        dateStarted: new Date(2023, 1),
        dateEnded: new Date(2023, 6),
        images: [
            {
                url: PIANO_final,
                caption: "The final piano structure, with arduino circuits on the inside."
            }
        ]
    }),
    createProject({
        name: "Digital Security!",
        description: "A four digit pin that runs on digital logic!",
        dateStarted: new Date(2024, 1),
        dateEnded: new Date(2024, 6),
        images: [
            {
                url: DSF_complete,
                caption: "Thumbnail"
            }
        ]
    }),
    createProject({
        name: "Lightweight ECG.",
        description: "An ECG to read pulses using elementary analog components! This includes an instrumentation amplifer with a gain of 500. Tested and prototyped with LTSpice and Scopy.",
        dateStarted: new Date(2023, 8),
        dateEnded: new Date(2023, 12),
        images: [
            {
                url: ECG_complete,
                caption: "The completed circuit."
            },
            {
                url: ECG_start_instrumentation,
                caption: "The start of the instrumentation amplifier."
            }, 
            {
                url: ECG_instrumentation,
                caption: "The completed instrumentation amplifier."
            }, 
            {
                url: ECG_active_filter,
                caption: "The active filter to remove noise that is outside the range of the usual frequency of heart pulses."
            }
        ]
    })
]);

export const getProjectById = (id: number) => {
    return $projectList.get().find(p => p.id === id);
}

export const getAllProjects = () => {
    return $projectList.get().sort((p1, p2) => p2.dateStarted.getTime() - p1.dateStarted.getTime());
}


