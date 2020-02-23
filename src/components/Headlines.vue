<template>
  <ul class="list">
    <li class="list__item" v-for="article in articles" v-bind:key="article.id">
      {{ article.date | Date("time") }}

      <router-link
        :to="'/' + article.slug"
        v-html="article.title.rendered"
      ></router-link>
    </li>
  </ul>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

@Component
export default class Headlines extends Vue {
  @Prop() articles!: WordpressPostSummary[];
}
</script>
<style type="text/css">
@import "../styles/list.css";
</style>
