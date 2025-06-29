import { useDerived, useSignal, onMount, useEffect } from "@/utils/solid";
import Timer from "./Timer";

export default function Page() {
  //   onMount(init);

  return (
    <section>
      <div class="text-2xl">动画</div>
      <Timer />
    </section>
  );
}
