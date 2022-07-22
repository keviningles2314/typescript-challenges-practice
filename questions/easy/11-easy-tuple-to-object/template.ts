export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [Property in T[number]]: Property
}
