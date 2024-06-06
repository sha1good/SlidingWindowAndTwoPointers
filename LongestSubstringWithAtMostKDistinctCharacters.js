function longestSubStringWithAtMostKDistinctCharacters(string, k) {
  let maxLen = 0;
  let map = new Map();

  let n = string.length;

  for (let i = 0; i < n; i++) {
    // I will clear my map each time I want to begin the next iteration of i
    //In JavaScript, the clear method of a Map object removes all elements from the map.
    //This method effectively empties the map, making its size zero.
    map.clear();
    // Then I will start picking the element of the strings
    for (let j = i; j < n; j++) {
      // set the element to the  map
      map.set(string[j], (map.get(string[j]) || 0) + 1);

      if (map.size <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

function main() {
  let string = "aaabbccd";
  let k = 2;

  let result = longestSubStringWithAtMostKDistinctCharacters(string, k);
  console.log(result);
}

main();

// Time Complexity is nearly O(n  * n) * log(256 characters that was given to us)
// Space complexity is O(256 characters that was given to us)

console.log("This is Better solution");

function longestSubStringWithAtMostKDistinctCharactersBetter(string, k) {
  let n = string.length;
  let map = new Map();

  let right = 0,
    left = 0,
    maxLen = 0;

  while (right < n) {
    map.set(string[right], (map.get(string[right]) || 0) + 1);

    while (map.size > k) {
      map.set(string[left], map.get(string[left]) - 1);
      if (map.get(string[left]) === 0) map.delete(string[left]);
      left++;
    }

    if (map.size <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }

  return maxLen;
}
function mains() {
  let string = "aaabbccd";
  let k = 2;

  let result = longestSubStringWithAtMostKDistinctCharactersBetter(string, k);
  console.log(result);
}

mains();
// Time Complexity is O(2N)
// Space complexity is O(256). Where 256 is the total length  of the  extended ascii characters in english

console.log(" The Optimal solution is got by replacing while loop with if");
function longestSubStringWithAtMostKDistinctCharactersOpt(string, k) {
  let n = string.length;
  let map = new Map();

  let right = 0,
    left = 0,
    maxLen = 0;

  while (right < n) {
    map.set(string[right], (map.get(string[right]) || 0) + 1);

    if (map.size > k) {
      map.set(string[left], map.get(string[left]) - 1);
      if (map.get(string[left]) === 0) map.delete(string[left]);
      left++;
    }

    if (map.size <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }

  return maxLen;
}
function Ola() {
  let string = "aaabbccd";
  let k = 2;

  let result = longestSubStringWithAtMostKDistinctCharactersOpt(string, k);
  console.log(result);
}

Ola();
// Time Complexity is O(N)
// Space complexity is O(256). Where 256 is the total length
// of the  extended ascii characters in english
