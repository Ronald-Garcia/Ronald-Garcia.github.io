import { useStore } from "@nanostores/react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { $router } from "@/lib/router";
import { $projectList, getProjectById } from "@/lib/store";

const ProjectPagination = () => {
    const page = useStore($router);

    if (!page || page.route !== "project") {
        return null;
    }
    const projectList = useStore($projectList);
    const max = projectList.length;
    const project = getProjectById(parseInt(page.params.projectId));
    if (!project) {
        return null;
    }
    return (
        <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        {<PaginationPrevious href={`${project.id === 1 ? project.id : project.id - 1}`}>
                            {project.id - 1}
                        </PaginationPrevious>}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href={`${project.id === 1 ? project.id : project.id - 1 * (project.id === max ? 2 : 1)}`} 
                            isActive={project.id === 1}>
                            {project.id === 1 ? project.id : project.id - 1 * (project.id === max ? 2 : 1)}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        {project.id === 1 && <PaginationLink 
                            href={`${project.id + 1}`} 
                            isActive={project.id !== 1}>
                            {project.id === 1 ? project.id + 1 : project.id}
                        </PaginationLink>}

                        {project.id === max && <PaginationLink
                        href={`${project.id - 1}`}                        
                        >
                            {project.id - 1}
                            </PaginationLink>}

                        {(project.id !== max && project.id !== 1) && <PaginationLink
                            href={`${project.id}`}
                            isActive
                            >
                            {project.id}
                            </PaginationLink>}

                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink 
                            href={`${project.id === 1 ? project.id + 2 : project.id + 1 * (project.id === max ? 0 : 1)}`} 
                            isActive={project.id === max}>
                            {project.id + (2 * (project.id === 1 ? 1 : 0.5)) * (project.id === max ? 0 : 1) }
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={`${project.id + 1 * (project.id === max ? 0 : 1)}`}>
                        </PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
    );
}

export default ProjectPagination;