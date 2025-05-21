# 3 - More of a TypeScript: Enums, Generics, Types, Classes, etc. and TypeScript Installation
### Day 7 - Tuesday, 20th May 2025
#### Enums
- Suppose we need to store some data which kind of constant rated manner like 1-5
- We have a few options to store data in TypeScript:
  - **Arrays**: For storing collections of items.
  - **Objects**: For storing key-value pairs.
  - **Tuples**: For storing fixed-size arrays with different types.
  - **Enums**: For defining a set of named constants.
- But, finding right one for constant rated manner like 1-5 is a bit tricky.
- This is where Enums come in handy.
- Take this as an example:
```typescript
// Enum

// Suppose we need to store some data like marks here: 1-5
// One way to do this is to use variables
let marks1 = 1;
let marks2 = 3;
let marks3 = 5;

// the same code above can be written as this to store marks
let marks = [1, 3, 5]; // for storing in collections
// for storing list of items, arrays and collections came.

// This makes manipulating the data easier but what to do for constant rated manner like 1-5?

// or, if we need string in "HIGH", "LOW", "MEDIUM" manner?
```
- Enums are a way to define a set of named constants in TypeScript. They can be numeric or string-based.
```typescript
// Enum

// THESE ARE INTERRELATED DATA
const error = "ERROR";
const info = "INFO";

// Enums groups these interrelated constants together
enum LogType {
    ERROR = 10, // if we want to assign a specific value to the enum
    INFO,
    WARNING
}

console.log(LogType.ERROR) // 10
console.log(LogType.INFO) // 11
console.log(LogType.WARNING) // 12
```
- Enums are particularly useful in cases where if we need to change the value of the enum, which we can do it in one place and it will be reflected everywhere.
```typescript
// Enum
enum Salary {
  LOW = 1000,
  // MEDIUM = 2000,
  MEDIUM = 2500,
  HIGH = 3000
}

// now we are using salary in our code
let rishavSalary: number = Salary.HIGH;
let greshanSalary: number = Salary.MEDIUM;
let manavSalary: number = Salary.MEDIUM;

// now if i want to change the salary of medium to 2500 then we does not need to change it individually
// we can just change it in one place and it will be reflected everywhere
console.log(`Rishav's Salary: ${rishavSalary}`)
console.log(`Greshan's Salary: ${greshanSalary}`)
console.log(`manavSalary: ${manavSalary}`)
```


