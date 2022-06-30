<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "@/store";

export default defineComponent({
  setup() {
    const { setData } = useStore();

    const url = ref("https://run.mocky.io/v3/af2a7984-317b-435c-8d2c-8d5c672d7a55");

    const fetchJSON = () => {
      fetch(url.value)
        .then(res => res.json())
        .then(({ data }) => setData(data));
    };

    return { url, fetchJSON };
  }
});
</script>

<template>
  <div class="field-fetch">
    <input type="text" v-model="url" placeholder="Paste URL" />
    <button :disabled="!url" @click="fetchJSON">
      Fetch
    </button>
  </div>
</template>

<style scoped>
  .field-fetch {
    display: flex;
    width: 100%;
  }

  .field-fetch input {
    flex: 1;
    border-radius: 8px 0 0 8px;
  }

  .field-fetch button {
    border-radius: 0 8px 8px 0;
  }
</style>