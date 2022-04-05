import { listToCommaSeparated } from '.';

describe('listToCommaSeparated', () => {
  test('should change list to comma separated string', () => {
    const list = ['one', 'two', 'three'];
    const expectedString = 'one, two, three';

    expect(listToCommaSeparated(list)).toEqual(expectedString);
  });
});
