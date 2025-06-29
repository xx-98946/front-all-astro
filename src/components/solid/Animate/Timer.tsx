import { useDerived, useSignal, onMount, useEffect } from "@/utils/solid";
import { createTimer, type Timer } from "animejs";

export default function () {
  const miliSeconds = useSignal(0);
  const loopCount = useSignal(0);
  const seconds = useDerived(() => Math.floor(miliSeconds.get() / 1000));

  const timer = useSignal<Timer | null>(null);

  function stopTimer() {
    timer.get()?.cancel();
  }

  function resumeTimer() {
    timer.get()?.play();
  }
  function init() {
    timer.set(
      createTimer({
        delay: 0, // 延迟
        duration: 1000, // 执行多少次
        loop: true, // 是否循环，
        frameRate: 30, // 帧率
        playbackRate: 1, // 播放速率，和毫秒相乘
        onBegin: () => {}, // 开始
        onUpdate: (self) => miliSeconds.set(self.currentTime), // 更新
        onLoop: (self) => {
          loopCount.set(self._currentIteration);
        }, // 重新循环时
        onComplete: () => {}, // 结束时
        onPause: () => {}, // 暂停时
      }),
    );
  }

  //   useEffect(() => {
  //     console.log("count", count.get());
  //   });

  onMount(init);

  return (
    <section>
      <div class="my-2" onMouseOver={stopTimer} onMouseOut={resumeTimer}>
        毫秒计数器：
        <span class="font-[digital] font-bold text-2xl text-orange-500 bg-orange-200 px-4 py-2 rounded-2xl">
          {miliSeconds.get()}
        </span>
      </div>

      <div class="my-2">
        秒计数器：
        <span class="font-[digital] font-bold text-2xl text-orange-500 bg-orange-200 px-4 py-2 rounded-2xl">
          {seconds.get()}
        </span>
      </div>

      <div class="my-2">
        循环次数：
        <span class="font-[digital] font-bold text-2xl text-orange-500 bg-orange-200 px-4 py-2 rounded-2xl">
          {loopCount.get()}
        </span>
      </div>
    </section>
  );
}
