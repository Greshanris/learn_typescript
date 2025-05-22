# 4 - Typescript Installation in Computer and Exploring tsconfig.json file
### Day 9 - Thursday, 22nd May 2025
#### Typescript Installation in Computer using Package Manager
- Using ``pnpm`` to install Typescript globally on your computer.
- Open your terminal and run the following command:
```zsh
pnpm add typescript -g
```
- For windows users, which i am one, instead of ``pnpm``, i will be using ``npm`` to install Typescript globally on my computer
```powershell
npm add typescript -g
```
![typescript installation](pictures/8_22may2025.png)
- now, to check if typescript is installed successfully, run the following command in our terminal:
```powershell
tsc --version
```
![tsc_version](pictures/9_22may2025.png)
- Now, we created a new file called ``index.ts`` in our project directory and added the following code:
```typescript
function add(a: number, b: number) {
    return a + b;
}
```
- and, now if we try to run the file using the command:
```powershell
node index.ts
```
- We will get an error message. Here is the screenshot of the error message:
![error](pictures/10_22may2025.png)
- The error message may be different from others, because it showed experimentalwarning which means that node added a new feature regarding typescript. And, it may not be present in previous versions of node. i saw entirely different error message in youtube video, I learning from.
- Now, Since, typescript transpiles to javascript, we need to transpile the typescript code to javascript code and ``tsc`` is the command to transpile typescript code to javascript code:
```powershell
tsc index.ts
```
- Now, we can see the ``index.js`` file created in our project directory. Here is the screenshot of the file:
![tsc_transpiling_code_to_javascript](pictures/11_22may2025.png)
- now, we can run the javascript file using the command:
```powershell
node index.js
```
![node_index.js](pictures/12_22may2025.png)
- Since, typescript is just for writing code, in easy, efficient and readable way, at the end of the day, it transpiles to javascript code. It is particulary useful for Large projects, where we need ``Object Oriented Programming`` and ``Static Typing``.
- For instance, ``classes`` was not in javascript at past. Right now, it is in javascript. But, previously, it was not. So, if we define a class in typescript, and even include ``access modifiers`` like ``private`` which is not in javascript, it will transpile the code to javascript code.
- Let's change the ``index.ts`` file to:
```typescript
class Product{
    private getProductList(){}
}
```
- Now if we transpile the code to javascript using ``tsc index.ts``, we can see the following code in the ``index.js`` file:
```javascript
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getProductList = function () { };
    return Product;
}());
```
- Now, again back to the same code in ``index.ts`` file:
```typescript
function add(a: number, b: number): number {
    return a + b;
}

console.log(
    add(1, 2)
);
```
- And, when we transpile the code to javascript, and use the command ``node index.js``, we can see the output:
![node_index.js(2)](pictures/13_22may2025.png)
- So, one thing we need to note is that, on which version of node, we are tranpiling the code to?
- So, By default, typescript transpiles the code to ES3 version of javascript. So, how to find that out?
```powershell
tsc --help
```
- It will show us the help page of typescript. And, various flags and what they do. There is a flag called ``--target``. It is used to specify the version of javascript we want to transpile our code to.
![target](pictures/14_22may2025.png)
- From here, we see that, now, the default version of updated typescript which i am using is ES5. So, whatever code we write in typescript, it will transpiled to ES5 version of JavaScript.
![es5version](pictures/15_22may2025.png)
- From above screenshot, we can know that arrow function is not in ES5 version of javascript. so, if we write an arrow function in typescript and transpile it to ES5 version of javascript:
```typescript
const add = (a: number, b: number) => {
    return a + b;
};
```
- The transpiled code will be:
```javascript
var add = function (a, b) {
    return a + b;
};
```
- To change the version of javascript we want to transpile our code to, we can use the ``--target`` flag:
```powershell
# it is changing version to ES6
tsc index.ts --target es2015
```
- Now, if we see ``index.js`` file, we can see the following code:
```javascript
const add = (a, b) => {
    return a + b;
};
```
- Now, comes the part where we need to specify where in the folder we want to save the transpiled code. By default, it saves in the same folder as the typescript file. But, we can change that using the ``--outDir`` flag:
```powershell
tsc index.ts --target es2015 --outDir dist
```
- Now, we see the folder called ``dist`` created in our project directory. And, inside the folder, we can see ``index.js`` file.

#### Exploring tsconfig.json file
- Now, repeteadly typing the command, setting flags, setting targets, setting outDir, is not a good practice. It is also time consuming. 
- For that part is what ``tsconfig.json`` file is for.
- It is a configuration file for typescript. It is used to specify the options for the typescript compiler. It is a JSON file. And, it is created in the root of our project directory.

- Now, lets's create a new file called ``tsconfig.json`` in our project directory. And, the same thing we mentioned above about setting target, and outDir, we can do that in the ``tsconfig.json`` file:
```json
{
    "compilerOptions": {
        "target": "ES2015",
        "outDir": "dist"
    }
}
```
- Now, save the file. And, run the command only without any flags:
```powershell
tsc
```
- Now, the transpile code will be found in the ``dist`` folder. And, the version of javascript will be ES2015.
- Now, we know the reason, why ``tsconfig.json`` file is called configuration file. Because, it is used to configure the typescript compiler. And, we can set various options in the file.

- Now, if we put the following code to the ``index.ts`` file:
```typescript
let a = "10";
a = true; // this is error, right? 
```
- The code should not have been tranpiled to javascript code. But, if we transpile the code:
```powershell
tsc
```
- We see the error in the terminal like this:
![tsc_transpiling_code](pictures/16_22may2025.png)
- But, the code is transpiled to javascript code.
- So, to prevent that, we can set the ``noEmitOnError`` flag to true in the ``tsconfig.json`` file:
```json
{
    "compilerOptions": {
        "target": "ES2015",
        "outDir": "dist",
        "noEmitOnError": true
    }
}
```
- Now, if we try to transpile the code, we will see the error in the terminal, but the code will not be transpiled to javascript code.

