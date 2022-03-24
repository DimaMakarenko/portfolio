import { hexToRgb } from '.';

describe('hexToRgb', () => {
  test('should correct convert hex to rgb', () => {
    expect(hexToRgb('#0a192f')).toBe('10, 25, 47');
    expect(hexToRgb('#64ffda')).toBe('100, 255, 218');
  });
});
