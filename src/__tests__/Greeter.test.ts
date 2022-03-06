import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter({ name: 'Carl' })).toBe('Hello Carl');
});
