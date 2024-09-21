import { openPage } from "@nanostores/router";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { $router } from "@/lib/router";


const ExperiencesDropdown = () => {

    const navigateToProjects = () => {
        openPage($router, "projects");
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link">Experiences</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Button variant="link" onClick={() => navigateToProjects()}>Projects</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ExperiencesDropdown;