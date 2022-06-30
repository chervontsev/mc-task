<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const fileInput = ref(null);

    return { fileInput };
  }
})
</script>

<template>
  <div class="field-upload">
    <input v-show="false" type="file" ref="fileInput" />
    <button>
      Upload
    </button>
  </div>
</template>

<style scoped>
.field-upload {}
</style>