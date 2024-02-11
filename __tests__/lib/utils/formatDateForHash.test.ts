import { formatDateForHash } from '../../../lib/utils';

describe('formatDateForHash', () => {
  it('should format date correctly', () => {
    const date = new Date(2021, 0, 1); // January 1, 2021
    const formatted = formatDateForHash(date);
    expect(formatted).toBe('20210101');
  });

  it('should pad single digit months and days with zero', () => {
    const date = new Date(2021, 8, 9); // September 9, 2021
    const formatted = formatDateForHash(date);
    expect(formatted).toBe('20210909');
  });
});
