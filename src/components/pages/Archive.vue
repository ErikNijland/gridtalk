<template>
  <div>
    <h1>Archive</h1>
    <LoadingIndicator v-if="isLoading"></LoadingIndicator>

    <Notification v-else-if="hasError">
      Alles naar de klote!
    </Notification>

    <Headlines v-else :articles="articles"></Headlines>

    <Pager :current-page="currentPage" :number-of-pages="numberOfPages"></Pager>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";
import { getArticles } from "@/api/api";
import Headlines from "@/components/Headlines.vue";
import Pager from "@/components/Pager.vue";

@Component({
  components: {
    Pager,
    Headlines,
    LoadingIndicator,
    Notification
  },
  data: () => ({
    articles: null,
    currentPage: null,
    hasError: false,
    isLoading: true,
    numberOfPages: null,
  })
})
export default class Archive extends Vue {
  created() {
    this.loadArchive();
  }

  @Watch("$route.params.page")
  loadArchive() {
    this.$data.currentPage = Number(this.$route.params.page) || 1;
    this.$data.isLoading = true;
    this.$data.numberOfPages = null;

    getArticles(this.$data.currentPage)
      .then(articles => {
        this.$data.articles = articles.data;
        this.$data.numberOfPages = articles.meta.numberOfPages;
      })
      .catch(() => {
        this.$data.hasError = true;
      })
      .finally(() => {
        this.$data.isLoading = false;
      });
  }
}
</script>
