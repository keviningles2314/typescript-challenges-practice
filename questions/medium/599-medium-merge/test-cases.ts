import { Merge } from './template'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
      }
    >
  >,
]
