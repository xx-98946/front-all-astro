import type { JSX } from "solid-js";

interface IButtonProps {
  children: JSX.Element;
}

export default function Button(props: IButtonProps) {
  return <button>{props.children}</button>;
}
