import { reactive, toRefs, Ref } from "vue";

type Callback = () => void;
type Data = Ref<number[]>;

interface Store {
  state: { data: Data };
  setData: (payload: number[], fn?: Callback) => void;
}
const state = reactive({
  data: [1, 1, 1, 1, 1]
});

export default (): Store => {
  const validate = (payload: number[]): boolean => {
    const match =
      Array.isArray(payload) &&
      payload.every((n: number) => typeof n === "number");
    return match;
  };
  const setData = (payload: number[], callback?: Callback) => {
    const match = validate(payload);
    if (!match) return;
    state.data = payload;
    callback && callback();
  };

  return {
    state: toRefs(state),
    setData
  };
};
