import { reactive, toRefs, Ref } from "vue";

type Data = Ref<number[]>;

interface Store {
  state: { data: Data };
  setData: (payload: number[]) => void;
}
const state = reactive({
  data: [1, 1, 1, 1, 1]
});

export default (): Store => {
  const setData = (payload) => {
    state.data = payload;
  };

  return {
    state: toRefs(state),
    setData
  };
};
