/**
 * Bun Utility
 * Bun has tis own utitlity
 */
// It's another way to read .env file
console.info(Bun.env.APP_NAME);
// To see the Bun version
console.info(Bun.version);
console.info(Bun.revision);

/**
 * Semantic Version
 */
const appVersion = '1.2.4';
// This one is used to check if the version that we put is supported or not
console.info(Bun.semver.satisfies(appVersion, '1.3.x'));