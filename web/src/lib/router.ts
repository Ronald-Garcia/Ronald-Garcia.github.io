import { createRouter } from "@nanostores/router";


export const $router = createRouter({
    about: "/",
    contact: "/contact",
    projects: "/project",
    roles: "/role",
    project: "/project/:id",
    role: "/role/:id",
})