import { Signal, signal } from "@preact/signals";

import type { DiffType } from "../types/settings";

export const diffType: Signal<DiffType> = signal("word");
