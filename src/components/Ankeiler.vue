<template>
  <div>
    <h2>
      <a v-html="article.title.rendered"></a>
    </h2>
    <p>{{ article.date | Date("time") }}</p>
    <img :src="article.x_featured_media_medium" alt="" />
    <p v-html="article.excerpt.rendered"></p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

@Component
export default class Ankeiler extends Vue {
  @Prop() article!: WordpressPostSummary;
}
</script>
