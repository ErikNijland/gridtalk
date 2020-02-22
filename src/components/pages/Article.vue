<template>
  <div>
    <LoadingIndicator v-if="isLoading"></LoadingIndicator>

    <Notification v-else-if="hasError">
      Alles naar de klote!
    </Notification>

    <template v-else>
      <h1 v-html="article.title.rendered"></h1>
      <img :src="article.x_featured_media_large" alt="" />
      <div v-html="article.content.rendered"></div>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getArticle } from "@/api/api";
import { WordpressPostArticle } from "@/types/wordpress-post-article";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import Notification from "@/components/Notification.vue";

@Component({
  components: {
    LoadingIndicator,
    Notification
  }
})
export default class Article extends Vue {
  article!: WordpressPostArticle;
  hasError = false;
  isLoading = true;

  created() {
    const { slug } = this.$route.params;

    getArticle(slug)
      .then(article => {
        this.article = article;
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
