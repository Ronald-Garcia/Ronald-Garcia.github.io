import { getAllProjects, getProjectById } from "@/lib/store";
import TemplatePagination from "./shared/pagination";

const ProjectPagination = () => {
    return <TemplatePagination getAll={getAllProjects} getById={getProjectById} r="project"></TemplatePagination>
}

export default ProjectPagination;