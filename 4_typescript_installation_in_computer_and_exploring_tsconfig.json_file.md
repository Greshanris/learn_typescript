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
