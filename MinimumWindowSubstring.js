// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
// Follow up: Could you find an algorithm that runs in O(m + n) time?

function minimumWindowSubstring(string, t) {
  if (string.length === 0 || t.length === 0) return 0;

  let minLen = Number.MAX_SAFE_INTEGER,
    startIndex = -1;

  let n = string.length,
    m = t.length;

  // Now, let us  work on string given

  for (let i = 0; i < n; i++) {
    let cnt = 0;
    let hash = new Array(256).fill(0);
    // First, fill the characters that is in t to hash table
    for (let k = 0; k < m; k++) hash[t[k].charCodeAt(0)]++;
    for (j = i; j < n; j++) {
      if (hash[string[j].charCodeAt(0)] > 0) cnt = cnt + 1;
      hash[string[j].charCodeAt(0)]--;
      // Check if this cnt is equal to the length of t string given to us
      if (cnt === m) {
        // if equals, calculate maxLen
        if (j - i + 1 < minLen) {
          minLen = j - i + 1;
          startIndex = i;

          break; // No need to check further since we have got our result
        }
      }
    }
  }
  return startIndex === -1
    ? ""
    : string.substring(startIndex, startIndex + minLen);
}

// In this  Algorithms, insertion means negative and
//  deletion means positive
function main() {
  let s = "ADOBECODEBANC",
    t = "ABC";

  let result = minimumWindowSubstring(s, t);
  console.log(result);
}

main();

// Time Complexity is O(n * n)
// space complexity is O(256)

// Below is the Optimized solution

function minimumWindowSubstringOpt(string, t) {
  if (string.length === 0 || t.length === 0) return "";
  let startIndex = -1;
  let hash = new Array(256).fill(0);
  let cnt = 0,
    minLen = Number.MAX_SAFE_INTEGER;
  let n = string.length;
  let m = t.length;
  for (let i = 0; i < m; i++) hash[t[i].charCodeAt(0)]++;

  let right = 0,
    left = 0;

  while (right < n) {
    if (hash[string[right].charCodeAt(0)] > 0) cnt = cnt + 1;
    hash[string[right].charCodeAt(0)]--; // Add Negetive values of that string to reduce the hash table
    right++;
  }
  return startIndex === -1
    ? ""
    : string.substring(startIndex, startIndex + minLen);
}
function mains() {
  let s = "ADOBECODEBANC",
    t = "ABC";

  let result = minimumWindowSubstringOpt(s, t);
  console.log(result);
}

mains();

//
// Time Complexity is O(m + n) 
// space complexity is O(256)
