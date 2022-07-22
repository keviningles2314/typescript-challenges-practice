export type First<
  T extends (string | number | undefined | unknown)[]
> = T extends [] ? never : T[0]
