<!--info-header-start--><h1>Chainable Options <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><p><a href="https://tsch.js.org/12/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

In this challenge, you need to type an object or a class - whatever you like - to provide two function `option(key, value)` and `get()`. In `option`, you can extend the current config type by the given key and value. We should about to access the final result via `get`.

For example

```ts
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

You don't need to write any js/ts logic to handle the problem - just in type level.

You can assume that `key` only accepts `string` and the `value` can be anything - just leave it as-is. Same `key` won't be passed twice.
