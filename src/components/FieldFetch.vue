<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const url = ref('');

    return { url };
  }
});
</script>

<template>
  <div class="field-fetch">
    <input type="text" v-model="url" />
    <button>
      Fetch
    </button>
  </div>
</template>

<style scoped>
  .field-fetch input {}

  .field-fetch button {}
</style>