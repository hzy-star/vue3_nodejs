<template>
  <div class="main">
    main
    {{ counterStore.count }}
    <button @click="changeCoutenr">点击我</button>
    {{ counterStore.doubleCount }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
function changeCoutenr() {
  counterStore.increment(10)
}
</script>

<style scoped>
</style>