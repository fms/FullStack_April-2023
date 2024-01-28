import { isPalindrome } from "./palindrome";

test('isPalindrome of abba should be true', () => {
    expect(isPalindrome("abba")).toBe(true);
})

test('isPalindrome of Abba should be true', () => {
    expect(isPalindrome("Abba")).toBe(true);
})

test('Yuval is not a palindrome ', () => {
    expect(isPalindrome("Yuval")).toBe(false);
})

