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
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
```
