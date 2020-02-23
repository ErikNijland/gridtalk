<template>
  <div>
    <SiteHeader></SiteHeader>

    <div class="site-content">
      <main class="site-content__main">
        <router-view></router-view>
      </main>
      <div v-if="showSidebar" class="site-content__sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>

    <SiteFooter></SiteFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Sidebar from "./components/Sidebar.vue";
import "./styles/reset.css";

@Component({
  components: {
    Sidebar,
    SiteHeader,
    SiteFooter
  },
  computed: {
    showSidebar: {
      get() {
        return this.$route.name !== "archive";
      }
    }
  }
})
export default class App extends Vue {}
</script>
<style scoped type="text/css">
@import "styles/variables/gaps.css";

.site-content {
  display: grid;
  background-color: var(--white);
  max-width: 1200px;
  grid-gap: var(--gap-large);
  grid-template-columns: minmax(0, 1fr) 400px;
  grid-template-areas: "main sidebar";
  padding-right: var(--gap-medium);
  padding-left: var(--gap-medium);
  margin-right: auto;
  margin-left: auto;
}

.site-content__main {
  grid-area: main;
}

.site-content__sidebar {
  grid-area: sidebar;
}
</style>
