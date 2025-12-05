import { type ComponentChildren } from "preact";
import "./Button.css";

import type { JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  children?: ComponentChildren;
  onClick?: () => void;
}

export default function ({ children, onClick, ...props }: Props) {
  return (
    <button className="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}
