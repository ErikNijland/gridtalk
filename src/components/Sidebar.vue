<template>
  <div>
    <h1>Al het nieuws</h1>
    <Headlines :articles="articles"></Headlines>
    <router-link to="archief/2">Meer nieuwsartikelen</router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
      this.$data.articles = articles.data;
    });
  }
}
</script>
<style type="text/css">
@import "../styles/list.css";
</style>
