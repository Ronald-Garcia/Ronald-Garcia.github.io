import { useStore } from "@nanostores/react";
import { ModeToggle } from "../mode-toggle"
import ProjectPagination from "../project-pagination";
import { $router } from "@/lib/router";

const Footer = () => {

    const page = useStore($router);
    if (!page) {
        return null;
    }
    return (
        <div className="absolute bottom-0 mx-auto w-full p-4">
            {page.route === "project" && <ProjectPagination></ProjectPagination>}

            <ModeToggle></ModeToggle>
            
        </div>
    );
}

export default Footer;