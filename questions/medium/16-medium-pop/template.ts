export type Pop<T extends any[]> = T extends [...infer H, infer T] ? H : never
