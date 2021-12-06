# TypeScript Examples

TypeScript code examples for learning purposes 🎓

## What Is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## TypeScript Advantages

- TypeScript adds additional syntax to JavaScript to support a **tighter integration with your editor**. Catch errors early in your editor
- TypeScript code converts to JavaScript, which **runs anywhere JavaScript runs**: In a browser, on Node.js or Deno and in your apps
- TypeScript understands JavaScript and uses **type inference to give you great tooling** without additional code 

## How To Use TypeScript?

1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Install typescript compiler with npm
```shell
npm i -D typescript
```
3. Compile typescript files
```shell
npx tsc
```
4. Compile typescript files in watch mode
```shell
npx tsc --watch
```
5. Create `tsconfig.json` which configure how typescript will behave and compile the files
```shell
npx tsc --init
```
6. You can also run directly typescript file with [ts-node](https://github.com/TypeStrong/ts-node) package
```shell
npm i -D ts-node
ts-node index.ts
```
7. If you are going to use `importHelpers` option in `tsconfig.json` file you are needing to install [tslib](https://github.com/Microsoft/tslib) package
```shell
npm i tslib
```

## Useful Resources

[TypeScript Documentation](https://www.typescriptlang.org/docs)

[TypeScript Book](https://basarat.gitbook.io/typescript)

[TypeScript Execution](https://typestrong.org/ts-node)

[TSConfig Reference](https://www.typescriptlang.org/tsconfig)

[TSConfig Bases Recommendation](https://github.com/tsconfig/bases)

[JSON to TypeScript](https://transform.tools/json-to-typescript)

# License

[MIT](LICENSE)
