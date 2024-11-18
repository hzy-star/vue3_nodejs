import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(10)
  const doubleCount = computed(() => count.value * 2)
  function increment(num: number) {
    count.value *= num
  }

  return { count, doubleCount, increment }
})
