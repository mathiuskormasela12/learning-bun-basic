import {describe, it, expect} from 'bun:test';

// Access function from submodule/subpackage via workspace
import {helloUser} from 'user';
import {helloAdmin} from 'admin';

describe('Learning Workspace', () => {
  it('should return string', () => {
    expect(helloAdmin()).toBe('Hello Admin');
    expect(helloUser()).toBe('Hello User');
  });
});