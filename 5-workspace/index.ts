/**
 * 
 * Bun is designed as the Node Js Replacement
 * So you can convert your Node Js to Bun easily,
 * But not all Node Js featues are implemeted in Bun.
 * But there's somne of Node Js feature already stable in Bun.
 * But you need to check it from Bun Documentation, to check which Node Js
 * featurees that already implemented or not in Bun.
 * 
 */
// To use os library from node js
import * as os from 'node:os';

console.log(os.freemem());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
