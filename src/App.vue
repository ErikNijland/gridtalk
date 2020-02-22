<template>
  <div>
    <SiteHeader></SiteHeader>
    <main>
      <FrontPage></FrontPage>
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
import FrontPage from '@/components/FrontPage.vue';

@Component({
  components: {
    FrontPage,
    Sidebar,
    SiteHeader,
    SiteFooter
  }
})
export default class App extends Vue {}
</script>
