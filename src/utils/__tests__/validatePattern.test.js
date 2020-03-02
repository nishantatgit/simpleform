import validatePattern from '../validatePattern';

describe('validatePattern', () => {
  const pattern = /^[a-zA-Z\-']+( [a-zA-Z\-']+)*$/;
  it('should validate string against pattern', () => {
    const result = validatePattern(pattern, 'First-Name');
    expect(result).toBe(true);
  });

  it('should return false for pattern mismatch', () => {
    const result = validatePattern(pattern, 'First-1Name');
    expect(result).toBe(false);
  });

  it('should thorw error if pattern is not regex', () => {
    expect(() => validatePattern('pattern', 'First-ntName')).toThrow(Error);
  });
});
