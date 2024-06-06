// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
// Example 3:

// Input: s = "abc"
// Output: 1

// Constraints:

// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters

// This is the Solution
function findNumberOfAll3SubStringCharacters(string) {
  let n = string.length;

  if (n === 0) return 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let hash = new Array(3).fill(0);

    for (let j = i; j < n; j++) {
      // There should be a check to ensure that the characters being
      // seen in the hash array are within the bounds ('a', 'b', 'c').
      if (string[j] >= "a" && string[j] <= "c") {
        hash[string[j].charCodeAt(0) - "a".charCodeAt(0)] = 1; //  Just mark it as seen
      }

      if (hash[0] + hash[1] + hash[2] === 3) {
        // cnt = cnt + 1;
        // Or
        // Slight Optimation
        // The moment I have gotten a substring, I can conclude that the rest of the
        // string will be a valid substring from where j stopped
        cnt = cnt + (n - j);
        break;
      }
    }
  }

  return cnt;
}
function main() {
  let string = "abcabc";
  let result = findNumberOfAll3SubStringCharacters(string);

  console.log(result);
}

main();

//Complex Analysis
// Time Complexity is nearly O(N2)
// Space complexity is O(1)
console.log("This is the optimal solution ================");
function findNumberOfAll3SubStringCharactersOpt(string) {
  // Everytime I get a valid substring, I will look for the mimimum Window/length
  // or index. Once I have that, I will then count backward from that index
  // to check if  all the 3 characters are present in the newly formed window

  let n = string.length;
  if (n === 0) return 0;
  let cnt = 0;
  let hash = new Array(3).fill(-1);

  for (let i = 0; i < n; i++) {
    // There should be a check to ensure that the characters being
    // indexed in the hash array are within the bounds ('a', 'b', 'c').
    if (string[i] >= "a" && string[i] <= "c") {
      hash[string[i].charCodeAt(0) - "a".charCodeAt(0)] = i; // Marked it as seen with the current Index
    }
    if (hash[0] !== -1 && hash[1] !== -1 && hash[2] !== -1) {
      cnt = cnt + (1 + Math.min(hash[0], Math.min(hash[1], hash[2])));
    }
  }

  return cnt;
}
function mains() {
  let string = "abcabc";
  let result = findNumberOfAll3SubStringCharactersOpt(string);

  console.log(result);
}

mains();

//Complex Analysis
// Time Complexity is nearly O(N)
// Space complexity is O(1)
