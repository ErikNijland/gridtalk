<template>
  <div>
    <SiteHeader></SiteHeader>

    <main>
      <router-view></router-view>
      <Sidebar></Sidebar>
    </main>

    <SiteFooter></SiteFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Sidebar from "./components/Sidebar.vue";

@Component({
  components: {
    Sidebar,
    SiteHeader,
    SiteFooter
  }
})
export default class App extends Vue {}
</script>
