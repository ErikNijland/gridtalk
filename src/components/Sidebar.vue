<template>
  <div>
    <h1>Al het nieuws</h1>
    <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        {{ article.date | Date("time") }}
        <a href="" v-html="article.title.rendered"></a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WordpressPostSummary } from "@/types/wordpress-post-summary";

@Component
export default class Sidebar extends Vue {
  @Prop() articles!: WordpressPostSummary[];
}
</script>
