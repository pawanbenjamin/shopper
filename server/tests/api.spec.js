const sum = (a, b) => {
  return a + b;
};

test(`Adds 1 + 2 and equals 3`, () => {
  expect(sum(1, 2)).toBe(3);
});
