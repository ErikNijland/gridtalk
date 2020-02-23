<template>
  <div>
    <h1>Archive</h1>
    <LoadingIndicator v-if="isLoading"></LoadingIndicator>

    <Notification v-else-if="hasError">
      Alles naar de klote!
    </Notification>

    <Headlines v-else :articles="articles"></Headlines>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";
import { getArticles } from "@/api/api";
import Headlines from "@/components/Headlines.vue";

@Component({
  components: {
    Headlines,
    LoadingIndicator,
    Notification
  },
  data: () => ({
    articles: null,
    hasError: false,
    isLoading: true
  })
})
export default class Archive extends Vue {
  created() {
    const page = Number(this.$route.params.page) || 1;

    this.loadArchive(page);
  }

  @Watch("$route.params.page")
  loadArchive(page: number) {
    this.$data.isLoading = true;

    getArticles(page)
      .then(articles => {
        this.$data.articles = articles;
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
