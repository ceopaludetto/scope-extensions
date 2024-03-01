# Scope Extensions for JS

_Note: this repository is entirely based on https://github.com/thedaviddelta/scope-extensions-js. I've just fixed to work in React and also to support modern module resolution from Typescript_

Package for using [Kotlin's Scope Function Extensions](https://kotlinlang.org/docs/reference/scope-functions.html) on JavaScript and TypeScript.

## Installation

Just install the package

```sh
npm i --save scope-extensions
```

and import it directly to any file.

```ts
import "scope-extensions"; // for ESM
require("scope-extensions"); // for CJS
```

## Usage

Now your primitives have access to `let`, `run`, `also`, `apply`, `takeIf` and `takeUnless`, just use normally:

```ts
const obj = { name: "Carlos", age: 22 };
const name = obj
	.let((it) => it.name) // Carlos
	.let((it) => it.toUpperCase()) // CARLOS
	.let((it) => it.split("").reverse().join("")); // SOLRAC
```

Beware that `run` and `apply` should be used with annoymous functions(`function()`) instead of arrow functions(`() =>`) to get the correctly typed `this` in the context, example:

```ts
const obj = { name: "Carlos", age: 22 };

obj.run(function () {
	console.log(this.name);
});
```

## License

Copyright © 2020 [TheDavidDelta](https://github.com/TheDavidDelta).  
This project is [MIT](./LICENSE) licensed.
