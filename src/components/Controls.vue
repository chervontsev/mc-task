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
    <div class="container py-32">
      <div class="params w-2-4 p-32">
        <FieldUpload />
      </div>

      <div class="params w-2-4 p-32">
        <FieldFetch />
      </div>
    </div>
  </section>
</template>

<style scoped>
.controls .container {
  display: flex;
}

.params {
  display: flex;
}

.params:not(:first-child) {
  border-left: 1px solid lightgrey;
}
</style>