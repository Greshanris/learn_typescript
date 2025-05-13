# Week 1 - Typescript - Day 2 - Saturday, 3rd May 2025 
## Exploring TypeScript Types, Operators, and keywords.
### Types
- ``primitive types``: number, string, boolean, null, undefined
- ``arrays``: number[], string[], boolean[]
- any type, unknown type, never type
- custom types using **type** keyword.
- enums, interfaces, generics, and soon.
- ``Operators``: Union(|), Intersection (&).
- ``Keywords``: as, in, is, type, typeof, instance of.


We can also give types to javascript code using `@ts-check` and `@ts-ignore` comments. 
```javascript
// this is a.js

// @ts-check
/**
 * 
 * @param {string} message 
 * @param {number} logType
 * @returns {number}
 */

// * in @param means, any type of value can be passed
function createLog(message, logType) {
    // return `Log created: ${message}`;
    return 1;
}

createLog("This is a test log.", 123);
// createLog(12);
```
- For array type, we can use ``[]``:
```typescript
// array type
let names: string[] = ["Rishav", "Samaya", "Roshan"];
let ages: number[] = [1, 2, 3, 4, 5];
let isActive: boolean[] = [true, false, true, false];
let mixed: (string | number)[] = ["Rishav", 1, "Samaya", 2, "Roshan", 3, 4, 5];
```

- There is ``Union`` Type, ``Literal`` Type, ``tuple`` type.
```typescript
// union type
const age : string | number;

age = 1;
age = "1";
```

```typescript
// literal type (which is also union type)
let doesExist: true | 1 | "1";

doesExist = 12; // error
doesExist = 1;
doesExist = true;
```

```typescript
// another example
let gender : "MALE" | "FEMALE";

gender = "MALE";
```

```typescript
// Tuple type

let x : [string, number, number, string[]];

x = ["abc", true]; // error
x = ["abc", 12];

x[0] = "asdf";
x[1] = 12;
x[2] = 34;
x[3] = ["rishav", "samaya"];
```

- Difference between ``any`` and ``unknown`` type:
```typescript
// any, unknown (differences)

let a : any;
let b : unknown;

a[0]="12"; // does assign, but we do not know a is list or not.
a.ok = "ok"; // does assign, but there is no ok property in any type.

b[0]=12; // gives error, as unknown type is not assignable to any type.
b.ok = "ok"; // gives error, as unknown type is not assignable to any type.

// it is advisable to use unknown type, as it is more strict than any type.

```
### Day 3 - Monday, 5th May 2025
- ``never`` **type**: It is used wjen we are sure that something is never going to occur. (never going to execute, or never going to return a value). We can use it in functions that never return a value, or in functions that always throw an error. It is also used in exhaustive checks in switch statements or if-else statements.
```typescript
// any, unknown, never

let a : any;
let b : unknown;

// never type is used when we are sure that something is never going to occur.


// fetch(""); // k data aauxa vane thahahudaina
// const response:unknown = async((res) => {
//     res = await fetch("");
// })

// if(typeof response === type) {
//     // we can now do certain Things like map, filter
//     // this is safe way
// }

// Narrowing
if (typeof b === "number") {
    // now we can use b as number
    b.
}
```
- ``never`` type examples:
```typescript
// never type example

// never type can be used in functions that always throw an error
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// or, in functions that never return a value
function keepProcessing(): never {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
```
### Day 4 - Tuesday, 13th May 2025
#### Type Assertions and ``as`` keyword
- Sometimes, we will have information about the type of a value that TypeScript can't know about.
- For example, if we are using ``document.getElementById()``, TypeScript only knows that this will return some kind of ``HTMLElement``, but we might know that our page will always have an ``HTMLCanvasElement``  with a given ID.
- Here, in this situation, we can use a **type assertions** to specify a more specific type using ``as`` keyword.
```typescript
const myCanvas = document.getElementById("mycanvas") as HTMLCanvasElement;
```
- Type assertions are removed by the compiler and won't affect the runtime behaviour of the code.
- We can also use the angle-bracket syntax (except if the code is in a ``.tsx`` file), which is equivalent.
```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```
- TypeScript only allows **type assertions** which convert to a *more specific or less specific version of a type.* This rule prevents "impossible" coercions like:
```typescript
// take a look at this example
const x = "hello" as number;
// this is not allowed, as conversion of type 'string' to type 'number' is not possible.

// typescript sees this as "Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first and then assert it to 'number'."

```
- Sometimes, this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, we can use two assertions, first to ``any`` (or ``unknown``), then to the desired type:
```typescript
const a = expr as any as T;
```

#### Functions parameter type, and return type
- We can also give types to function parameters and return types.
- When, we give type to functio parameters, it will check the type of the arguments passed to the function.
- When we give type to function return type, it will check the type of the value returned by the function.
- If we do not give type to function return type, it will infer the return type automatically and will not check the type of the value returned by the function.

```typescript
// here,we are giving type to function parameters and return type
function uploadImage(imagePath:string, imageType:string):boolean{
    // 
    return true; // will not result in error
    // return 1; will return error
}

// here, we did not specified return type but, we returned a number, and typescript will infer the return type as number
function uploadImage2(imagePath:string, imageType:string) {
    // since, now we did not declared any return type for the function
    return 1; // typescript will infer number as return type automatically
}
```