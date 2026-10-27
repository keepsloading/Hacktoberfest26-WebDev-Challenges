import { expect, it } from 'vitest';
it('demonstrates CI rejection of a failing synthetic assertion', () => {
  expect('intentional failure for SIG-401 evidence').toBe('passing assertion');
});
