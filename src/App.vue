<template>
  <section class="container mx-auto">
    <h1 class="text-3xl font-bold my-2">Vite Template</h1>
    <hr class="mb-4" />
    <div class="space-y-1">
      <p>vue3 vite template with tailwindcss</p>
      <button class="rounded px-2 bg-gray-300 hover:bg-gray-400" @click="countUp">
        count: {{ count }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    const count = ref(0)
    const countUp = () => count.value++

    return {
      count,
      countUp
    }
  }
})
</script>
