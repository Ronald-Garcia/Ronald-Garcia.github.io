import { useStore } from "@nanostores/react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { $router } from "@/lib/router";
import { ProjectType, RoleType } from "@/lib/store";
import { openPage } from "@nanostores/router";

const TemplatePagination = ({getAll, getById, r}: {getAll: () => (RoleType | ProjectType)[], getById: (id: number) => RoleType | ProjectType | undefined, r: "project" | "role"}) => {
    const page = useStore($router);

    if (!page || page.route !== r) {
        return null;
    }
    const projectList = getAll();
    const max = projectList.length;
    const project = getById(parseInt(page.params.id));

    const projectIdList = Array.from({length: max}, (_, i) => i + 1);

    const navigateToProject = (id: number) => {
        if (id >= 1 && id <= max) {
            openPage($router, r, { id });
        }
    }
    if (!project) {
        return null;
    }
    return (
        <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            href=""
                            onClick={() => navigateToProject(project.id - 1)}/>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink 
                            href="" 
                            isActive={1 === project.id} 
                            onClick={() => navigateToProject(1)}>
                            1
                        </PaginationLink>
                    </PaginationItem>

                    { project.id > 3 && <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>}

                    {projectIdList.map(i => {
                        if (i !== 1 && i !== max && i >= project.id - 1 && i <= project.id + 1) {
                            return (
                                <PaginationItem
                                    key={i}>
                                    <PaginationLink 
                                        href=""
                                        isActive={i === project.id} 
                                        onClick={() => navigateToProject(i)}>
                                        {i}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        } 
                    })}

                    { (project.id < (max - 2)) && <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>}

                    <PaginationItem>
                        <PaginationLink 
                            href="" 
                            isActive={max === project.id} 
                            onClick={() => navigateToProject(max)}>
                            {max}
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext href="" onClick={()=> navigateToProject(project.id + 1)}/>
                    </PaginationItem>

                    
                </PaginationContent>
            </Pagination>
    );
}

export default TemplatePagination;