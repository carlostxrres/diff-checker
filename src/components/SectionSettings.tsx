import "./SectionSettings.css";

import Section from "./ui/Section";
import { diffType } from "../signals/settings";
import { diffTypes } from "../types/settings";

export default function () {
  return (
    <Section className="settings">
      <span>Diff type:</span>
      {diffTypes.map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="diff_type"
            value={type}
            checked={diffType.value === type}
            onChange={() => {
              diffType.value = type;
            }}
          />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
      ))}
    </Section>
  );
}
