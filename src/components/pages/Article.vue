<template>
  <div>
    <LoadingIndicator v-if="isLoading"></LoadingIndicator>

    <Notification v-else-if="hasError">
      Alles naar de klote!
    </Notification>

    <template v-else>
      <h1 v-html="article.title.rendered"></h1>
      <div>{{ article.date | Date("full") }}</div>
      <img :src="article.x_featured_media_large" alt="" />
      <div v-html="article.content.rendered"></div>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getArticle } from "@/api/api";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";

@Component({
  components: {
    LoadingIndicator,
    Notification
  },
  data: () => ({
    article: null,
    hasError: false,
    isLoading: true
  })
})
export default class Article extends Vue {
  created() {
    const { slug } = this.$route.params;

    this.loadArticle(slug);
  }

  @Watch("$route.params.slug")
  loadArticle(slug: string) {
    this.$data.isLoading = true;

    getArticle(slug)
      .then(article => {
        this.$data.article = article;
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
