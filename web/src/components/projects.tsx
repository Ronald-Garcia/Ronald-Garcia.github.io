import { getAllProjects } from "@/lib/store";
import Experiences from "./shared/experiences";

const Projects = () => {
  return <Experiences getAll={getAllProjects}></Experiences>
}

export default Projects;