import "./SectionDiffs.css";

import { addDiff, diffs } from "../signals/diffs";

import Button from "./ui/Button";
import Diff from "./Diff";
import HorizontalRule from "./ui/HorizontalRule";
import Section from "./ui/Section";

export default function () {
  const addNewDiff = () => {
    addDiff({ defaultA: "", defaultB: "", id: crypto.randomUUID() });
  };

  return (
    <Section className="diffs">
      {diffs.value.map((d) => (
        <>
          <Diff
            defaultA={d.defaultA}
            defaultB={d.defaultB}
            id={d.id}
            key={d.id}
          />
          <HorizontalRule />
        </>
      ))}
      <Button onClick={addNewDiff}>Add new!</Button>
    </Section>
  );
}
