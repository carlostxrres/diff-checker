import { type ComponentChildren } from "preact";
import "./Section.css";

type Props = {
  children?: ComponentChildren;
  className?: string;
};

export default function ({ children, className = "" }: Props) {
  return <section className={`section ${className}`}>{children}</section>;
}
