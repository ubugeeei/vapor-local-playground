<script setup lang="ts" vapor>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value++;
}
</script>

<template>
  <button type="button" @click="increment">
    {{ count }}
  </button>
</template>
