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
  },
  data: () => ({
    articles: null,
    hasError: false,
    isLoading: true
  })
})
export default class FrontPage extends Vue {
  created() {
    getArticles()
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
