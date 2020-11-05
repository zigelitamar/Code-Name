import Menu from "./pages/menu.vue"

const routes= [
    {
        path: "/",
        name: "menu",
        component: Menu,
    },
    {
        path: "/fullGame",
        name: "fullGame",
        component: () => import("./pages/fullGame.vue"),
    },
];

export default routes;