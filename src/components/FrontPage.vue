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
import { Component, Vue } from "vue-property-decorator";
import Ankeiler from "@/components/Ankeiler.vue";
import { DummyContent } from "@/api/api";

@Component({
  components: { Ankeiler }
})
export default class FrontPage extends Vue {
  articles = DummyContent;
}
</script>
