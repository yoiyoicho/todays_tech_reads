import { formatDateForHead } from '../../../lib/utils';

describe('formatDateForHead', () => {
  it('should format date correctly', () => {
    const date = new Date(2021, 0, 1); // January 1, 2021 (Friday)
    const formatted = formatDateForHead(date);
    expect(formatted).toBe('2021/1/1 Fri.');
  });
});
