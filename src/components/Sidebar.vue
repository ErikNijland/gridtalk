<template>
  <div>
    <h1>Al het nieuws</h1>
    <ul class="list">
      <li
        class="list__item"
        v-for="article in articles"
        v-bind:key="article.id"
      >
        {{ article.date | Date("time") }}

        <router-link
          :to="'/' + article.slug"
          v-html="article.title.rendered"
        ></router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

import { getArticles } from "@/api/api";
@Component
export default class Sidebar extends Vue {
  articles: WordpressPostSummary[] = [];

  created() {
    getArticles().then(articles => {
      this.articles = articles;
    });
  }
}
</script>
<style type="text/css">
@import "../styles/list.css";
</style>
