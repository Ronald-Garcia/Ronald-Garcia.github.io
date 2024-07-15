import { useStore } from "@nanostores/react";
import ResumeDropdown from "../resume-dropdown";
import { Button } from "../ui/button";
import { $router } from "@/lib/router";
import { openPage } from "@nanostores/router";

const Header = () => {

  const page = useStore($router);

  if (!page) {
    return null;
  }

  const navigateToHome = () => {
    openPage($router, "about");
  }

  const navigateToProjects = () => {
    openPage($router, "projects");
  }

  const navigateToContact = () => {
    openPage($router, "contact");
  }

  return (
    <div className="flex justify-center gap-5 p-1 border-b">
      <Button variant="link" onClick={() => navigateToHome()}>About Me</Button>
      <ResumeDropdown></ResumeDropdown>
      <Button variant="link" onClick={() => navigateToProjects()}>Projects</Button>
      <Button variant="link" onClick={() => navigateToContact()}>Contact Me</Button>
    </div>
  );
}

export default Header;