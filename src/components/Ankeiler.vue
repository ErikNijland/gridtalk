<template>
  <div>
    <h2>
      <router-link
        :to="article.slug"
        v-html="article.title.rendered"
      ></router-link>
    </h2>
    <p>{{ article.date | Date("full") }}</p>
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
