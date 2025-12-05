import { Signal, signal } from "@preact/signals";

import type { Diff } from "../types/diff";

export const diffs: Signal<Diff[]> = signal([
  {
    defaultA: "Barcelona is a city in Spain.",
    defaultB: "Stockholm is a city in Sweden.",
    id: crypto.randomUUID(),
  },
]);

export const addDiff = (diff: Diff) => {
  diffs.value = [...diffs.value, diff];
};

export const removeDiff = (id: string) => {
  diffs.value = diffs.value.filter((d) => d.id !== id);
};
