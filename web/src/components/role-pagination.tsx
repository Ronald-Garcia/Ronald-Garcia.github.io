import { getAllRoles, getRoleById } from "@/lib/store";
import TemplatePagination from "./shared/pagination";

const RolePagination = () => {
    return <TemplatePagination getAll={getAllRoles} getById={getRoleById} r="role"></TemplatePagination>
}

export default RolePagination;