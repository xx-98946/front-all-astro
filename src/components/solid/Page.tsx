import { createSignal } from "solid-js";

export default function Page() {
  const [getCount, setCount] = createSignal(0);
  return <div onClick={() => setCount(1)}>solid {getCount()}</div>;
}
