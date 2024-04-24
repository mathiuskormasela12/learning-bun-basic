/**
 *  1. How to Use Jsx
 *     Bun actually does not support jsx yet. But you're still able to write jsx
 *     on Bun by install React package and then you can run the jsx file as usuall.\
 * 
 *  2. How to Install a Package
 *     a. Install Package (Production and Development package)
 *        bun add package-name
 *     b. Install Development Package
 *        bun add package-name --dev
 *     c. Install Production Package
 *        bun add package-name --prod
 *     d. Install Existing Package from package.json
 *        bun install
 * 
 *  Notes :
 *  Unlike Node Js, Bun has the package manager in the first place.
 *  So you don't need to install another package manager.
 */
const textComponent = (<h1>Hello</h1>);
console.log(textComponent);