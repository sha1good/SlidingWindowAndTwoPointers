function findMaxLengthOfConsecutive1(array, k) {
  let n = array.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let len = 0,
      zeros = 0;

    for (let j = i; j < n; j++) {
      if (array[j] === 0) {
        zeros++;
      }
      if (zeros > k) {
        break;
      }
      len = j - i + 1;
      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
}
function main() {
  let array = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
  let k = 2;

  let result = findMaxLengthOfConsecutive1(array, k);

  console.log(result);
}

main();

// Complex Analysis

// Time Complexity  is O(N * N)
// Space Complexity is O(1)

console.log("This is another solution");

function findMaxLengthOfConsecutiveOpt(array, k) {
  if (array.length === 0) return 0;

  let n = array.length;

  let len = 0,
    left = 0,
    right = 0,
    maxLen = 0,
    zeros = 0;

  while (right < n) {
    if (array[right] === 0) zeros++;

    if (zeros > k) {
      if (array[left] === 0) {
        zeros--;
      }
      left++;
    }

    if (zeros <= k) {
      len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }

    right++;
  }
  return maxLen;
}

function mains() {
  let array = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
  let k = 2;

  let result = findMaxLengthOfConsecutiveOpt(array, k);

  console.log(result);
}

mains();
