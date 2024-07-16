import { $router } from "@/lib/router";
import { getProjectById } from "@/lib/store";
import { useStore } from "@nanostores/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@/components/ui/separator";


const ProjectPage = () => {

    const page = useStore($router);

    if (!page || page.route !== "project") {
        return null;
    }
    const project = getProjectById(parseInt(page.params.projectId));

    if (!project) {
        return (
            <>
                Project not found!
            </>
        )
    }

    return (
        <>
            <Card>
                <CardContent>
                    <CardHeader className="flex-row space-x-[100px]">
                        <div>
                        <CardTitle className="text-lg">
                            {project.name}
                        </CardTitle>
                        <CardDescription>
                            {project.description}
                        </CardDescription>
                        <p className="text-xs font-light">
                            {project.dateStarted.toLocaleDateString("en-US", {
                                day: project.dateStarted.getMonth() === project.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: 'short',
                                year: 'numeric',
                            })} - {project.dateEnded.toLocaleDateString("en-US",{
                                day: project.dateStarted.getMonth() === project.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: "short",
                                year: "numeric"
                            })}
                        </p>

                        </div>
                        <div className="w-[200px] rounded-lg">
                            <img
                            className="rounded-[25px]"
                            src={project.images[0].url}>
                            </img>
                            <p className="font-light text-[8pt]">
                                {project.images[0].caption}
                            </p>
                        </div>
                    </CardHeader>

                    <Separator></Separator>
                    <div className="p-10 flex-col space-y-5">
                        {project.sections.map(s => {
                            return (
                                <div key={s.title + s.content}>
                                    <p 
                                        key={s.title}
                                        className="text-left text-md font-medium">
                                        {s.title}
                                    </p>
                                    <p  
                                        className="text-left text-sm font-light"
                                        key={s.content}>
                                        {s.content}
                                    </p>

                                </div>                                
                            );
                        })}

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default ProjectPage;