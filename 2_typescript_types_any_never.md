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
- We can also make the function parameters optional by using ``?`` after the parameter name.
```typescript
function uploadImage(imagePath:string, imageType?:string){
    return 1;
}

uploadImage("uploads/img/a.jpeg", "JPEG");
uploadImage("uploads/img/a.jpeg"); // this is also valid, as imageType is optional.
```
- We can also use ``union`` type to specify multiple types for a parameter.
```typescript
function uploadImage(imagePath:string[], imageType?:"JPEG" | "PNG" | "GIF"){
    return 1;
}
// ? in imageType means, it is optional, and typescript will see it as JPEG" | "PNG" | "GIF" | undefined

uploadImage(["uploads/img/a.jpeg"], "JPEG);
```
- By default, all functions are ``void`` type, which means they do not return anything.
``` typescript
function add() {
    // default return type is void
    // console.log("");
    // db.query;
    // by default it is return type is void
    // but do return: undefined
    
}

console.log(add()); // undefined
```

### Day 5 - Wednesday, 14th May 2025
#### Custom Types
- we can also create custom types using previous types such as ``boolean``, ``string``, ``number``, ``number[]``, and their ``union`` types.
- Previously, we did created a custom type in ``function doesExist()`` function, which is a union of type of ``true``, ``1``, and ``0``.

```typescript
let doesExist: "1" | true | "0"; // it is our own custom type
```
- we can also create custom type using ``type`` keyword and storing it in a different variable.
```typescript
type HamroType = "1" | true | 1;
let doesExist: HamroType; // it is our own custom type
```

- While writing custom types in a variable, we have to use ``pascal case`` for the variable name, which means the first letter of each word should be capitalized.
```typescript
// Pascal Case : AccountOfStudent
type Gender : "MALE" | "FEMALE" | "OTHER";
let citizenGender : Gender;
citizenGender = "MALE"; // THIS IS VALID
citizenGender = "FEMALE"; // THIS IS ALSO VALID
citizenGender = "OTHER"; // THIS IS ALSO VALID
citizenGender = "male"; // THIS IS INVALID
```

### Day 6 - Monday, 19th May 2025
#### Object Type (Custom Type)
- we can also make object type.
- for instance, when we need data in object format, we can use object type for it.
```typescript
// Object type
type Area = {
    Length: number,
    Breadth: number,
    Height?: number // optional property // number | undefined
}

function calculateArea(area: Area) {
    return area.Length * area.Breadth;
}

console.log(calculateArea({
    Length: 10, 
    Breadth: 20
})); // Output : 200

console.log(calculateArea({
    Length: "ten", 
    Breadth: "twenty"
})); // Type "String" is not assignable to type "number", and it will give error and output will be NaN.
```
- For scenario, where we need to find the format in typescript, like an IP address, or such format, we can do like this:
```typescript
type Area = {
    length?: number,
    breadth?: number,
    dimension: `${number}x${number}`
    // dimension: `${number}/${number}: ${number}`
}

function calculateArea(value: Area) {
    return value.dimension;
}

calculateArea({
    dimension: "10x20";
    // dimension: "12/12: 13"
})
```

```typescript
// Object type

type Developer = {
    name: string,
    age: number,
    hobbies: string[],
    isCertified: boolean,
    description: ()=>string
}

const rishavChaudhary:Developer = {
    name: "Rishav Chaudhary",
    age: 23,
    hobbies: ["Cooking", "Learning new things"],
    isCertified: true,
    description: function() {
        return "This is the description";
    }
}
```

- If we want to add more features or properties to the custom type
```typescript
// Custom types

type Animal = {
    name: string
}

// intersection "&" that helps in inheriting another type + defined type as well
type Bear = Animal & {
    food: "FISH" | "MEAT" | "HONEY"
}

type PolarBear = Bear & {
    name: "Polar Bear",
    food: "FISH"
}
```

- Now, we know of the pascal case in defining types, but sometimes, people also put ``T`` in front of the type name, which is also a convention.
```typescript
type TAnimal = {
    name: string
}
```

### Day 7 - Tuesday, 20th May 2025
#### Interface
- Interface is a way to define how an object should look like.
- It is a way to define the structure of an object.
- It is like a skeleton to a class, methods which is empty. It is outline on how we do.
- We define interface using ``interface`` keyword, and for using it, we use ``extends`` keyword.
- It is also in ``PascalCase`` where the first letter of each word is capitalized.
```typescript
// Interface 

// we have learned interface, abstraction in OOP

// Interface is like a skeleton to a class, methods which is empty. It is outline on how we do.

// Interface is always in (PascalCase)
interface Animal {
    name:string;
}

interface Bear extends Animal {
    food: "FISH" | "GRASS"
}

let PolarBear : Bear = {
    name: "Polar Bear",
    food: "FISH"
}
```
- Difference between ``interface`` and ``type`` via intersections are:
  - ``interface`` uses ``extends`` and ``interface`` keyword, while ``type`` uses ``&`` and ``type`` keyword.
  - Another difference, is that, we can define multiple same name ``interface`` but we cannot define multiple same name ``type``.
```typescript
interface Window {
    title: string;
}

interface Window {
    ts: TypeScriptAPI;
    // this is valid, a we can define multiple same name interface
}
/* what happens here is, the first interface is merged with the second interface, and the final interface will look like this:

interface Window {
    title: string;
    ts: TypeScriptAPI;
}
*/
let win: WindowD = {
    title: "My Window",
    ts: "def";
}
```
- Sometimes, we see interface naming with ``I`` in front of the name, which is also a convention.
```typescript
interface IAnimal {
    name: string;
    age: number;
    isMammal?: boolean;
    isCarnivore?: boolean;
    isHerbivore?: boolean;
    isOmnivore?: boolean;
    isEndangered?: boolean;
    isExtinct?: boolean;
}
```

