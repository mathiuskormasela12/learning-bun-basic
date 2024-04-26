
// Hasing
// Bun support hashing by default, no need to install external library to hash or verify password
const password = '123';
const hash = await Bun.password.hash(password, {
  algorithm: 'bcrypt', // Define hasing algorithm
  cost: 10 // Define password complexity
});
const isCorrect = await Bun.password.verify(password, hash, 'bcrypt');
console.log(isCorrect);

// File IO
// 1. Read File
const readme = Bun.file('./.editorconfig');
console.info('Bun reead file', await readme.text());

// 2. Write File
await Bun.write('hello.txt', 'Hello Bun File IO');
