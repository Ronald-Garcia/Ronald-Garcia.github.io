import { getAllRoles } from "@/lib/store";
import Experiences from "./shared/experiences";

const Roles = () => {
  return <Experiences getAll={getAllRoles}></Experiences>
}

export default Roles;