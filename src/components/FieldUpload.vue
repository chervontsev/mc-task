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
  <div class="field-upload" @click="handlePickFile">
    <input 
      v-show="false" 
      type="file" 
      ref="fileInput" 
      accept="application/JSON"
      @change="handleFilePicked"
    />
    <input 
      :value="fileName" 
      :readonly="true" 
      placeholder="Pick a JSON file..."
    />
    <button>
      Upload
    </button>
  </div>
</template>

<style scoped>
.field-upload {
  width: 100%;
  display: flex;
  align-items: center;
}

.field-upload input {
  flex: 1;
  border-radius: 8px 0 0 8px;
  padding: 0 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.field-upload button {
  border-radius: 0 8px 8px 0;
}
</style>
