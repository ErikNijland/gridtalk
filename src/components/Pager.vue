<template>
  <nav>
    <ul>
      <li v-if="previousPage">
        <router-link :to="'/archief/' + previousPage"
          >Vorige pagina</router-link
        >
      </li>
      <li v-if="nextPage">
        <router-link :to="'/archief/' + nextPage">Volgende pagina</router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  computed: {
    nextPage: {
      get() {
        return this.$props.currentPage < this.$props.numberOfPages
          ? this.$props.currentPage + 1
          : null;
      }
    },
    previousPage: {
      get() {
        return this.$props.currentPage > 1 ? this.$props.currentPage - 1 : null;
      }
    }
  }
})
export default class Headlines extends Vue {
  @Prop() currentPage!: number;
  @Prop() numberOfPages!: number;
}
</script>
