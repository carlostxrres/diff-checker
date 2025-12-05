import "./HorizontalRule.css";

type Props = {
  marginBlock?: string;
};

export default function ({ marginBlock = "2rem" }: Props) {
  return <hr className="horizontal-rule" style={{ marginBlock }} />;
}
