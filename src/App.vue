<template>
  <div>
    <SiteHeader></SiteHeader>

    <main>
      <LoadingIndicator v-if="isLoading"></LoadingIndicator>

      <Notification v-else-if="hasError">
        Alles naar de klote!
      </Notification>

      <template v-else>
        <FrontPage :articles="articles"></FrontPage>
        <Sidebar :articles="articles"></Sidebar>
      </template>
    </main>

    <SiteFooter></SiteFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FrontPage from "./components/FrontPage.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Sidebar from "./components/Sidebar.vue";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";
import { getArticles } from "@/api/api";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";

@Component({
  components: {
    FrontPage,
    LoadingIndicator,
    Notification,
    Sidebar,
    SiteHeader,
    SiteFooter
  }
})
export default class App extends Vue {
  articles: WordpressPostSummary[] = [];
  hasError = false;
  isLoading = true;

  created() {
    getArticles()
      .then(articles => {
        this.articles = articles;
      })
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>
