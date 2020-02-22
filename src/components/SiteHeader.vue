<template>
  <header class="site-header">
    <router-link to="/" title="Ga naar de homepage">Gridtalk Logo</router-link>

    <nav>
      <ul>
        <li><router-link to="/archief">Nieuwsarchief</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SiteHeader extends Vue {}
</script>
<style scoped type="text/css">
@import "../styles/variables/colors.css";
@import "../styles/variables/gaps.css";

.site-header {
  background-color: var(--black);
  padding: var(--gap-small) var(--gap-medium);
}
</style>
