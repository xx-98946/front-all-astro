import {
  createEffect,
  createSignal,
  type Accessor,
  type Setter,
} from "solid-js";

interface ISignal<T> {
  get: Accessor<T>;
  set: Setter<T>;
  __signal: true;
}

/**
 * 生成信号，返回原始信号
 * @param initValue
 */
export function useSignal<T>(initValue: ISignal<T>): ISignal<T>;
/**
 * 生成新的信号
 * @param initValue
 */
export function useSignal<T>(initValue: T): ISignal<T>;
export function useSignal<T>(initValue: any): ISignal<T> {
  if (initValue && initValue.__signal) {
    return initValue;
  }
  const [get, set] = createSignal(initValue);
  return {
    get,
    set,
    __signal: true,
  };
}

/**
 * 生成衍生信号
 * @param calc 信号计算方式
 * @param canUpdate 是否可以更新(默认不能)
 * @returns
 */
export function useDerived<T>(calc: () => T, canUpdate = false): ISignal<T> {
  const derived = useSignal<T>(calc());
  createEffect(() => {
    derived.set(calc() as any);
  });
  if (canUpdate) {
    return derived;
  }
  return {
    ...derived,
    set() {},
  } as ISignal<T>;
}
