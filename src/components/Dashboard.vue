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
    <ul class="counters-list container p-32">
      <li v-for="{ id, title, value } in output" :key="id">
        <vue3-autocounter
          class="value w-1-4"
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
  background: linear-gradient(135deg, steelblue, darkblue);
}

.counters-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 320px;
  color: white
}

.value {
  display: grid;
  place-content: center;
  width: 150px;
  height: 150px;
  margin: 32px auto;
  box-shadow: 
    -4px -4px 8px hsla(15, 50%, 90%, .35),
    4px 4px 8px hsla(0, 0%, 0%, .35);
  border-radius: 50%;
  background-color: white;
  font-size: 40px;
  color: darkblue;
}

.title {
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
</style>