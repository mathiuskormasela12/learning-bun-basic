/**
 * 1. How to use Typescript
 *    Bun supports Typescript by default actually. But when our project is written in Javascript
 *    we can convert it by renamingn all javascript file to the typescrpt file and then rename the jsconfig.json
 *    to tsconfig.json
 * 
 * 2. Watchmode
 *    This is similar with Nodemon in Node js. It can be done by adding a --watch param when we run our code. The parameter should be in second order, after bun keyword and before your file name.
 *    Example :
 *    bun --watch index.ts
 */

console.log("Hello via Bun! with Typescript");