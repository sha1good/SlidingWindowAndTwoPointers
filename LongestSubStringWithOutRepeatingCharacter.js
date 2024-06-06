// Length of Longest Substring without any Repeating Character

// 45

// 2
// Problem Statement: Given a String, find the length of longest substring without any repeating character.

// Examples:

// Example 1:

// Input: s = ”abcabcbb”

// Output: 3

// Explanation: The answer is abc with length of 3.

// Example 2:

// Input: s = ”bbbbb”

// Output: 1

// Explanation: The answer is b with length of 1 units.
// Solution
// Disclaimer: Don't jump directly to the solution, try it out yourself first.

// Solution 1: Brute force Approach

// Approach: This approach consists of taking the two loops one for traversing the string and another loop - nested loop for finding different substrings and after that, we will check for all substrings one by one and check for each and every element if the element is not found then we will store that element in HashSet otherwise we will break from the loop and count it.

function findLengthOfLongestSubstringWithoutRepatingCharacters(string) {
  if (string.length === 0) return 0;

  let n = string.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // I used Ascii code here
    let hash = new Array(256).fill(0);
    let len = 0;

    for (let j = i; j < n; j++) {
      if (hash[string[j]] === 1) break;
      len = j - i + 1;
      maxLen = Math.max(len, maxLen);
      hash[string[j]] = 1;
    }
  }

  return maxLen;
}

function main() {
  let string = "cadbzabcd";

  let result = findLengthOfLongestSubstringWithoutRepatingCharacters(string);

  console.log(result);
}

main();

// Time Complexity is O(n * n)
// Space Complexity is O(256)

console.log(" This is the optimal solution ");

function findLengthOfLongestSubstringWithoutRepatingCharactersOpt(string) {
  if (string.length === 0) return 0;
  let len = 0,
    maxLen = 0;

  let l = 0,
    r = 0;

  let n = string.length;
  let mpp = new Map();

  while (r < n) {
    // 0 < 10
    if (mpp.has(string[r])) {
      if (mpp.get(string[r]) >= l) l = mpp.get(string[r]) + 1;
    }
    mpp.set(string[r], r);
    len = r - l + 1;

    maxLen = Math.max(len, maxLen);
    r++;
  }

  return maxLen;
}
function Opt() {
  let string = "cadbzabcd";

  let result = findLengthOfLongestSubstringWithoutRepatingCharactersOpt(string);

  console.log(result);
}

Opt();

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log("Another way");
const findLengthOfLongestSubstringWithoutRepatingCharacterAnther = (string) => {
  if (string.length === 0) return 0;

  let l = 0,
    r = 0;

  let len = 0,
    maxLen = 0;

  let n = string.length;

  let hash = new Array(256).fill(-1);

  while (r < n) {
    if (hash[string[r]] !== -1) {
      // this means it has been seen
      console.log(hash[string[r]] + "hello");
      if (hash[string[r]] >= l) l = hash[string[r]] + 1;
    }

    // else
    hash[string[r]] = r;
    len = r - l + 1;
    maxLen = Math.max(maxLen, len);

    r++;
  }

  return maxLen;
};
function mains() {
  let string = "cadbzabcd";

  let result =
    findLengthOfLongestSubstringWithoutRepatingCharacterAnther(string);

  console.log(result);
}
mains();

// Time Complexity: O(n)
// Space Complexity: O(n)
