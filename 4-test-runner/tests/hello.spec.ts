import {expect, it, describe} from 'bun:test';
import { helloBun } from '../src';
/**
 *  1. Unit Test in Bun
 *     By default Bun already uses Jest as the unit test.
 *     So you don't need to install another package to do
 *     unit test. But the function like expect describe etc
 *     you need to import it from bun:test
 * 
 *     To run the all unit test, we can type bun test on terminal.
 *     To run the unit test from specific file we can type bun test fileName.ts
 * 
 *  2. Package Runner bunx
 *     bunx is similar with npx on Node js to run package in node_modules.
 *     Example to use bunx to check the Typescript version:
 *     bunx tsc --version 
 *     
 */

describe('Bun Test', () => {
  it('should be return "Hello Bun"', () => {
    expect(helloBun('Bun')).toBe('Hello Bun');
  });
});