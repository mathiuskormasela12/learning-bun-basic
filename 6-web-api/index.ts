/**
 * Bun support a lot of web api, like fetch by default.
 * You can check detail on Bun documentation
 */
let response = await fetch('https://rickandmortyapi.com/api');
response = await response.json();
console.info(response);