// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

function findLengthOfLongestSubstringWithRepatingCharacterReplacement(
  string,
  k
) {
  let n = string.length;

  if (n === 0) return 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let len = 0,
      maxFrq = 0,
      hash = new Array(26).fill(0);

    for (let j = i; j < n; j++) {
      // Make sure you converted the string to digit
      hash[string[j].charCodeAt(0) - "A".charCodeAt(0)]++;
      maxFrq = Math.max(
        maxFrq,
        hash[string[j].charCodeAt(0) - "A".charCodeAt(0)]
      );
      len = j - i + 1;
      let changes = len - maxFrq;
      if (changes <= k) {
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }

  return maxLen;
}

function mains() {
  let string = "ABAB";
  let k = 2;
  let result = findLengthOfLongestSubstringWithRepatingCharacterReplacement(
    string,
    k
  );

  console.log(result);
}
mains();

//Time Complexity is O(N * N)
// Space Conplexity  is O(26)

console.log("This  is the optimal Solution");
const findLengthOfLongestSubstringWithRepatingCharacterReplacementOpt = (
  string,
  k
) => {
  if (string.length === 0) return 0;
  let n = string.length;
  let right = 0,
    left = 0,
    maxLen = 0;
  maxFrq = 0;
  let hash = new Array(26).fill(0);
  while (right < n) {
    let len = 0;
    hash[string[right].charCodeAt(0) - "A".charCodeAt(0)]++;
    maxFrq = Math.max(
      maxFrq,
      hash[string[right].charCodeAt(0) - "A".charCodeAt(0)]
    );
    len = right - left + 1;
    let changes = len - maxFrq;
    if (changes > k) {
      hash[string[left].charCodeAt(0) - "A".charCodeAt(0)]--;
      left++;
    }

    if (changes <= k) {
      maxLen = Math.max(maxLen, len);
    }

    right++;
  }
  return maxLen;
};
function main() {
  let string = "AABABBA";
  let k = 1;
  let result = findLengthOfLongestSubstringWithRepatingCharacterReplacementOpt(
    string,
    k
  );

  console.log(result);
}
main();

//Time Complexity is O(N)
// Space Conplexity  is O(26)
