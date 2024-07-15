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
                    <CardHeader>
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
                    </CardHeader>

                    <Separator></Separator>
                    <div className="p-10">
                        {project.sections.map(s => {
                            return (
                                <>
                                    <p className="text-left text-md font-medium">
                                        {s.title}
                                    </p>
                                    <p>
                                        {s.content}
                                    </p>
                                </>
                                
                            );
                        })}

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default ProjectPage;