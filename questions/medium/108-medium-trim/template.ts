export type Whitespace = ' ' | '\n' | '\t'
type Trim<S> = S extends `${Whitespace}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${Whitespace}`
  ? Trim<L>
  : S
