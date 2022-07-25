export type Last<T extends any[]> = T extends [...infer X, infer L] ? L : never
