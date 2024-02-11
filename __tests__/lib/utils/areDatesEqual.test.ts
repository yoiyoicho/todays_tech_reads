import { areDatesEqual } from '../../../lib/utils';

describe('areDatesEqual', () => {
  it('should return true for equal dates', () => {
    const date1 = new Date(2021, 0, 1);
    const date2 = new Date(2021, 0, 1);
    expect(areDatesEqual(date1, date2)).toBeTruthy();
  });

  it('should return false for dates with different years', () => {
    const date1 = new Date(2021, 0, 1);
    const date2 = new Date(2022, 0, 1);
    expect(areDatesEqual(date1, date2)).toBeFalsy();
  });

  it('should return false for dates with different months', () => {
    const date1 = new Date(2021, 0, 1);
    const date2 = new Date(2021, 1, 1);
    expect(areDatesEqual(date1, date2)).toBeFalsy();
  });

  it('should return false for dates with different days', () => {
    const date1 = new Date(2021, 0, 1);
    const date2 = new Date(2021, 0, 2);
    expect(areDatesEqual(date1, date2)).toBeFalsy();
  });
});
