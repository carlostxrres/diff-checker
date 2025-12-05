import { diffChars, diffLines, diffWords, type ChangeObject } from "diff";

import { diffType } from "../signals/settings";
import { useState } from "preact/hooks";
import "./Diff.css";
import Row from "./Row";
import Textarea from "./ui/Textarea";
import type { Diff } from "../types/diff";
import Button from "./ui/Button";
import { removeDiff } from "../signals/diffs";

// // For patch diffs
// const diffPatch = (textA: string, textB: string): ChangeObject<string>[] => {
//   const patchDiff = createTwoFilesPatch("a.txt", "b.txt", textA, textB);
//   return patchDiff.split("\n").map((entry) => ({
//     value: entry + "\n",
//     chunkHeader: entry.startsWith("@@"),
//     removed: entry.startsWith("-"),
//     added: entry.startsWith("+"),
//     count: 0, // to do
//   }));
// };

export default function ({ defaultA, defaultB, id }: Diff) {
  const [textA, setTextA] = useState<string>(defaultA);
  const [textB, setTextB] = useState<string>(defaultB);

  const processChanges = () => {
    let diff: ChangeObject<string>[];

    if (diffType.value === "char") {
      diff = diffChars(textA, textB);
    } else if (diffType.value === "word") {
      diff = diffWords(textA, textB);
    } else if (diffType.value === "line") {
      diff = diffLines(textA, textB);

      // // For patch diffs
      // } else if (diffType.value === "patch") {
      // diff = diffPatch(textA, textB);
    } else {
      throw new Error("Unknown diff type");
    }

    // Swap adjacent added/removed pairs to match original logic
    for (let i = 0; i < diff.length; i++) {
      if (diff[i].added && diff[i + 1] && diff[i + 1].removed) {
        [diff[i], diff[i + 1]] = [diff[i + 1], diff[i]];
      }
    }

    return diff;
  };

  const renderDiff = () => {
    const diff = processChanges();

    return diff.map((part, index) => {
      if (part.removed) {
        return (
          <del className="del" key={index}>
            {part.value}
          </del>
        );
      }

      if (part.added) {
        return (
          <ins className="ins" key={index}>
            {part.value}
          </ins>
        );
      }

      // // For patch diffs
      // if (part.chunkHeader) {
      //   return (
      //     <span key={index} className="chunk-header">
      //       {part.value}
      //     </span>
      //   );
      // }

      return <span key={index}>{part.value}</span>;
    });
  };

  const setFromTextarea = (setter: typeof setTextA) => {
    return (event: Event) => {
      const target = event.target as HTMLTextAreaElement;
      const newText = target.value;
      setter(newText);
    };
  };

  return (
    <Row>
      <Button onClick={() => removeDiff(id)} style={{ alignSelf: "center" }}>
        &times;
      </Button>

      <Textarea
        value={textA}
        onInput={setFromTextarea(setTextA)}
        placeholder="Enter text"
      />

      <Textarea
        value={textB}
        onInput={setFromTextarea(setTextB)}
        placeholder="Enter text"
      />

      <div>
        <pre className="result">
          {renderDiff() || <span className="no-text">No changes</span>}
        </pre>
      </div>
    </Row>
  );
}
