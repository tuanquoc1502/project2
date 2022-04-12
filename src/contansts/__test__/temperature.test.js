import { convertCtoF } from '../contansts';
import { day, toDay, wholeDay } from '../contansts';

// describe('test convertCtoF function', () => {
test('0C must be equal 32F', () => {
  expect(convertCtoF(0)).toBe(32);
});

test('1C must be equal 33.8F', () => {
  expect(convertCtoF(1)).toBe(33.8);
});

test('10C must be equal 50F', () => {
  expect(convertCtoF(10)).toBe(50);
});
// });

describe('weather changes by day', () => {
  it('should return err', () => {
    expect(wholeDay('Mondayys')).toBe('err');
  });
  it('should return 0', () => {
    expect(wholeDay('Monday')).toBe(0);
  });
});
