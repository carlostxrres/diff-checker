import "./Row.css";

import { type ComponentChildren } from "preact";

interface Props {
  children?: ComponentChildren; // or preact.ComponentChildren
}

export default function Layout({ children }: Props) {
  return <div className="row">{children}</div>;
}
