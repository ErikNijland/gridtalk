<template>
  <div>
    <LoadingIndicator v-if="isLoading"></LoadingIndicator>

    <Notification v-else-if="hasError">
      Alles naar de klote!
    </Notification>

    <template v-else>
      <Ankeiler
        v-for="article in articles.slice(0, 2)"
        v-bind:key="article.id"
        :article="article"
      ></Ankeiler>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ankeiler from "@/components/Ankeiler.vue";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";
import { getArticles } from "@/api/api";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";

@Component({
  components: {
    Ankeiler,
    LoadingIndicator,
    Notification
  }
})
export default class FrontPage extends Vue {
  articles!: WordpressPostSummary[];
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
