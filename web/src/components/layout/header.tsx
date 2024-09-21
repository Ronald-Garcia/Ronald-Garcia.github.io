import { useStore } from "@nanostores/react";
import ResumeDropdown from "../resume-dropdown";
import { Button } from "../ui/button";
import { $router } from "@/lib/router";
import { openPage } from "@nanostores/router";
import ContactMe from "../contact-me";
import ExperiencesDropdown from "../experiences-dropdown";

const Header = () => {

  const page = useStore($router);

  if (!page) {
    return null;
  }

  const navigateToHome = () => {
    openPage($router, "about");
  }

  return (
    <div className="flex justify-center gap-5 p-1 border-b">
      <Button variant="link" onClick={() => navigateToHome()}>About Me</Button>
      <ResumeDropdown></ResumeDropdown>
      <ExperiencesDropdown></ExperiencesDropdown>
      <ContactMe></ContactMe>
    </div>
  );
}

export default Header;