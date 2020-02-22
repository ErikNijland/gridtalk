import VueRouter from "vue-router";
import FrontPage from "@/components/FrontPage.vue";
import Archive from "@/components/Archive.vue";
import Article from "@/components/Article.vue";

export const router = new VueRouter({
  routes: [
    { path: "/", component: FrontPage },
    { path: "/archief", component: Archive },
    { path: "/:slug", component: Article }
  ]
});
