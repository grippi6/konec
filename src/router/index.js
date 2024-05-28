import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AboutSerial from "@/pages/AboutSerial.vue";
import OurActor from "@/pages/OurActor.vue";
import OguzokCitats from "@/pages/OguzokCitats.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component:MainPage,
    },
    {
        path: "/ouractor",
        name: "OurActor",
        component: OurActor,
    },{
        path: "/about",
        name: "About",
        component: AboutSerial,
    },
    {
        path: "/oguzokcitats",
        name: "Oguzok",
        component:OguzokCitats,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;