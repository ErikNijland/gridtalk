<template>
  <div>
    <Ankeiler
      v-for="article in articles"
      v-bind:key="article.id"
      :article="article"
    ></Ankeiler>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Ankeiler from "@/components/Ankeiler.vue";
import { WordpressPostArticle } from "@/types/wordpress-post-article";

@Component({
  components: { Ankeiler }
})
export default class FrontPage extends Vue {
  @Prop() articles!: WordpressPostArticle[];
}
</script>
