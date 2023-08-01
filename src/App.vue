<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
*{
  /* box-sizing: content-box; */
}
</style>
