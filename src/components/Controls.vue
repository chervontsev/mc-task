<script lang="ts">
import { defineComponent } from "vue";
import FieldFetch from "./FieldFetch.vue";
import FieldUpload from "./FieldUpload.vue";

export default defineComponent({
  components: {
    FieldFetch,
    FieldUpload,
  }
})
</script>

<template>
  <section class="controls">
    <div class="params">
      <FieldUpload />
    </div>

    <div class="params">
      <FieldFetch />
    </div>
  </section>
</template>

<style scoped>
.controls {}

.params {}
</style>