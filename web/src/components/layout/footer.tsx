import { useStore } from "@nanostores/react";
import { ModeToggle } from "../mode-toggle"
import ProjectPagination from "../project-pagination";
import { $router } from "@/lib/router";
import RolePagination from "../role-pagination";

const Footer = () => {

    const page = useStore($router);
    if (!page) {
        return null;
    }
    return (
        <div className="mx-auto w-full p-3">
            {page.route === "project" && <ProjectPagination></ProjectPagination>}
            {page.route === "role" && <RolePagination></RolePagination>}

            <ModeToggle></ModeToggle>
            
        </div>
    );
}

export default Footer;