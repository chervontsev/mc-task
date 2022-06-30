<script lang="ts">
import { defineComponent, computed } from "vue";
import { math } from "@/utils/math";
import useStore from "@/store";

interface Counter {
  id: string;
  op: string;
  title: string;
  value?: number;
}

const { setData, state: { data }} = useStore();

export default defineComponent({
  mounted() {
    setData([1,2,3,4,5]);
  },

  setup() {
    const counters = [
      { id: "1", op: "mean", title: "Mean" },
      { id: "2", op: "median", title: "Median" },
      { id: "3", op: "std", title: "Std deviation" },
      { id: "4", op: "mode", title: "Mode" },
    ] as Counter[];

    const output = computed(() => {
      return counters.map((counter: Counter) => {
        const { id, op, title } = counter;
        const fn = math[op];
        const value = fn(data.value);
        return { id, op, title, value };
      });
    });

    return { output };
  },
})
</script>

<template>
  <section class="dashboard">
    <ul class="counters-list">
      <li v-for="{ id, title, value } in output" :key="id">
        <vue3-autocounter
          class="value"
          :ref="`counter-${id}`"
          :startAmount="0"
          :endAmount="value"
          :duration="1"
          separator=","
          decimalSeparator="."
          :decimals="2"
          :autoinit="true"
        />
        <div class="title">
          {{ title }}
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.dashboard {
  background: linear-gradient(135deg, navy, darkblue);
}

.counters-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 800px;
  height: 200px;
  margin: auto;
  color: white
}

.value {
  display: grid;
  place-content: center;
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-color: white;
  color: darkblue;
}

.title {
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>