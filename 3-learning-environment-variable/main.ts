/**
 * When we want to read .env file. 
 * we can read it automatically in Bun and you can read it
 * as same as in Node Js.
 * 
 * But when you want to use diferent env for each environemnt, 
 * like production or development. you have to run 
 * export NODE_ENV=production or export NODE_ENV=development before running the js/ts file.
 * 
 * When you type wrong NODE_ENV Bun will use .env file by default. So there will not an error.
 * 
 * Notes:
 * Curent you only can read .env, .env.development and .env.production
 */
console.info('App Name :', process.env.APP_NAME);