import VueRouter from "vue-router";
import FrontPage from "@/components/pages/FrontPage.vue";
import Archive from "@/components/pages/Archive.vue";
import Article from "@/components/pages/Article.vue";

export const router = new VueRouter({
  routes: [
    { path: "/", component: FrontPage },
    { path: "/archief", component: Archive },
    { path: "/:slug", component: Article }
  ],
  scrollBehavior: () => ({ x: 0, y: 0 })
});
