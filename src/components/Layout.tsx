import { type ComponentChildren } from "preact";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ComponentChildren;
};

export default function ({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
