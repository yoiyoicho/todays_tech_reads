import { parseDateHash } from '../../../lib/utils';

describe('parseDateHash', () => {
  it('should return today\'s date at 0:00 for undefined dateHash', () => {
    const result = parseDateHash(undefined);
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    expect(result).toEqual(today);
  });

  it('should return today\'s date at 0:00 for invalid dateHash format', () => {
    const result = parseDateHash('1234567'); // 7 digits, invalid format
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    expect(result).toEqual(today);
  });

  it('should return correct date for valid dateHash', () => {
    const result = parseDateHash('20210101');
    const expectedDate = new Date(2021, 0, 1); // January 1, 2021
    expect(result).toEqual(expectedDate);
  });

  it('should return today\'s date at 0:00 for invalid date in dateHash', () => {
    const result = parseDateHash('20210230'); // February 30, invalid date
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    expect(result).toEqual(today);
  });

  it('should return today\'s date at 0:00 for future date in dateHash', () => {
    const futureDateHash = (new Date(new Date().getTime() + 86400000)).toISOString().slice(0, 10).replace(/-/g, '');
    const result = parseDateHash(futureDateHash);
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    expect(result).toEqual(today);
  });
});
