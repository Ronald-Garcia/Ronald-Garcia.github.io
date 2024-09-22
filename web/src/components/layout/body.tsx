
import { useStore } from "@nanostores/react";
import AboutMe from "../about-me";
import Projects from "../projects";
import { $router } from "@/lib/router";
import ProjectPage from "../project-page";
import { ScrollArea } from "../ui/scroll-area";
import RolePage from "../role-page";
import Roles from "../roles";
const Body = () => {

    const page = useStore($router);

    if (!page) {
        return (
            <div className="flex justify-center items-center h-screen">
                404 Page Not Found
            </div>
        )
    }

    return (
        <ScrollArea className="self-center h-full">
            <div className="w-full max-w-[720px] self-center">
                {page.route === "about" && <AboutMe></AboutMe>}
                {page.route === "projects" && <Projects></Projects>}
                {page.route === "roles" && <Roles></Roles>}
                {page.route === "project" && <ProjectPage></ProjectPage>}
                {page.route === "role" && <RolePage></RolePage>}
            </div>

        </ScrollArea>
    );
}

export default Body;