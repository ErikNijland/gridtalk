<template>
  <div>
    <h1>Al het nieuws</h1>
    <Headlines :articles="articles"></Headlines>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

import { getArticles } from "@/api/api";
import Headlines from "@/components/Headlines.vue";
@Component({
  components: { Headlines },
  data: () => ({
    articles: null
  })
})
export default class Sidebar extends Vue {
  created() {
    getArticles().then(articles => {
      this.$data.articles = articles;
    });
  }
}
</script>
<style type="text/css">
@import "../styles/list.css";
</style>
