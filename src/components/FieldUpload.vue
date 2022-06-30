<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "@/store";

export default defineComponent({
  setup() {
    const { setData } = useStore();
    const fileInput = ref(null);
    const fileName = ref("");

    const handlePickFile = () => {
      if (fileInput.value) {
        fileName.value = "";
        const el = fileInput.value as HTMLInputElement;
        el.click();
      }
    };

    const handleFilePicked = (e: Event) => {
      const el = e.target as HTMLInputElement;
      let files = el.files as FileList | null;

      if (files && files[0]?.size) {
        const reader = new FileReader();
        reader.readAsText(files[0], "utf-8");
        reader.onload = (e) => {
          if (e.target?.result) {
            const json = e.target.result as string;
            const { data } = JSON.parse(json);
            setData(data, () => {
              fileName.value = files[0].name;
            });
          }
        };
      }
    };

    return { fileInput, fileName, handlePickFile, handleFilePicked };
  }
})
</script>

<template>
  <div class="field-upload">
    <input 
      v-show="false" 
      type="file" 
      ref="fileInput" 
      accept="application/JSON"
      @change="handleFilePicked"
    />
    <button @click="handlePickFile">
      Upload
    </button>
    <div class="file-name">
      {{ fileName }}
    </div>
  </div>
</template>

<style scoped>
.field-upload {
  width: 100%;
  display: flex;
  align-items: center;
}

.file-name {
  flex: 1;
  padding: 0 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>