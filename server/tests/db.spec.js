const product = (a, b) => {
  return a * b;
};

test(`Multiplies 1 * 2 and equals 2`, () => {
  expect(product(1, 2)).toBe(2);
});
