import { useDerived, useSignal } from "@/utils/solid.ts";

export default function Page() {
  const count = useSignal(0);
  const double = useDerived(() => count.get() * 2);

  function addOne() {
    count.set((v) => v + 1);
  }

  function setDouble() {
    double.set(Math.random());
  }
  return (
    <>
      <div onClick={addOne}>solid {count.get()}</div>
      <div onClick={setDouble}>双倍 {double.get()}</div>
    </>
  );
}
