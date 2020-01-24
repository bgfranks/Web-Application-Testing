import { addCount, foulCount } from "./Dashboard";

test("adds to the count by 1", () => {
  const currentCount = 1;
  const expected = 2;

  const actual = addCount(currentCount);

  expect(actual).toBe(expected);
});

test("adds to count by one unless count is 2", () => {
  const currentCount = 2;
  const expected = 2;

  const actual = foulCount(currentCount);

  expect(actual).toBe(expected);
});
