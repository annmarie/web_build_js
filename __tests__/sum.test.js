const sum = (a, b) => a + b;

describe('add two numbers together', () => {
  it('do the math', async () => {
    // assert
    expect(sum(1, 3)).toBe(4);
  });
});
