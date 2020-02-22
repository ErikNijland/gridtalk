<template>
  <header>
    <router-link to="/" title="Ga naar de homepage">Gridtalk Logo</router-link>

    <nav>
      <ul>
        <li><a href="">F1 kalender</a></li>
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
