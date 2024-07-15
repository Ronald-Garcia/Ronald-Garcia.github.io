import { createRouter } from "@nanostores/router";


export const $router = createRouter({
    about: "/",
    contact: "/contact",
    projects: "/project",
    project: "/project/:projectId",
})