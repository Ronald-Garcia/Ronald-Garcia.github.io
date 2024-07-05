import { atom } from "nanostores";

const PAGE = {
    ABOUT_ME: "about-me",
    RESUME: "resume",
    PROJECTS: "projects",
    CONTACT: "contact",
}

export const $currentPage = atom<string>(PAGE.ABOUT_ME);

export const setCurrentPage = (page: string) => {
    $currentPage.set(page);
}




