import { reverseString } from "./reverseString";

describe('reverseString', () => {
  test("reverseString of hello should be olleh", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverseString of Hello should be olleH", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
});
