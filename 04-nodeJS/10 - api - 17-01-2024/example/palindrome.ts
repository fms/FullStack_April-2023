import { reverseString } from "./reverseString";

export function isPalindrome(word: string) {
    return word.toLowerCase() === reverseString(word).toLowerCase();
}

