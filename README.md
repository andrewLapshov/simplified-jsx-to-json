# simplified-jsx-to-ast

![npm](https://img.shields.io/npm/v/simplified-jsx-to-ast)

> Mod of original `simplified-jsx-to-json` package.
> Converts simplified JSX code into a JSON AST representation, which can be used by `React.createElement`
> Supports props values from object argument.

## Install

```
$ npm install simplified-jsx-to-ast
```

## Usage

```js
const jsxToJson = require('simplified-jsx-to-json');

jsxToJson('<Test myProp={true}>My Child</Test>');
//=> {
//     type: "Test",
//     props: { myProp: true },
//     children: [
//       {
//         type: "Fragment",
//         props: {},
//         children: "Test",
//       },
//     ],
//   }
```

## Features

* `<Test />`: Self-closing JSX tags
* `<Test myProp="string">`: String props
* `` <Test myProp={`string`}> ``: Template props
* `<Test myProp>`: True props
* `<Test myProp={false}>`: Boolean props
* `<Test myProp={34}>`: Number props
* `<Test myProp={3 + 3 + 3}>`: Props with arithmetic, comparison or bitwise operators
* `<Test myProp={['Test', true, 34]}>`: Arrays (with strings, numbers or booleans)
* `<Test myProp={{ test: 34 }}>`: Objects with string keys and string, number or boolean value
* `<>Test</>`: Fragments
* HTML/SVG DOM attributes are converted to correct React equivalent (`class` -> `className`)

## License

MIT © [Dennis Morhardt](https://dennismorhardt.de)

Modified by Andrey Lapshov
