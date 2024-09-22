import { getRoleById } from "@/lib/store";
import Page from "./shared/page";

const RolePage = () => {

    return <Page getById={getRoleById}></Page>
}

export default RolePage;