<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Notification extends Vue {}
</script>
