<script setup lang="ts">
withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Vite + Vue + TSX',
});

</script>

<template>
  <div>Home: {{ msg }}</div>
</template>

<style scoped>
</style>
