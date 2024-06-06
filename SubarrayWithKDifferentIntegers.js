// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// Example 2:

// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

function subArrayWithKDifferentIntegers(nums, k) {
  if (nums.length === 0) return 0;

  let cnt = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let map = {}; // Use object
    console.log(map);
    for (let j = i; j < n; j++) {
      if (map[nums[j]]) {
        map[nums[j]]++;
      } else {
        map[nums[j]] = 1;
      }
      console.log(map);

      if (Object.keys(map).length === k) cnt = cnt + 1; // gotten a subArrray
      // no need to loop to the end of the array since you have gotten subarray that is equal to k
      else if (Object.entries(map).length > k) break;
    }
  }

  return cnt;
}
function main() {
  let nums = [1, 2, 1, 2, 3];
  let k = 2;

  let result = subArrayWithKDifferentIntegers(nums, k);
  console.log(result);
}

main();

// Time complexity is O(n * n * k)
// n * n is  for the two loops
//Checking the length of Object.keys(map) and Object.entries(map) is
//O(k) since it involves creating an array of the keys and entries, respectively.
// Space complexity is O(k)
// Reason: map Object: The space used by the map can be up to O(k) in the worst case,
// where all unique integers are encountered.

console.log(" This is the optimal Solution");

function subArrayWithKDifferentIntegersOpt(nums, k) {
  let n = nums.length;
  function findSubArray(nums, k) {
    let left = 0,
      right = 0,
      cnt = 0,
      mpp = new Map();

    while (right < n) {
      if (mpp.has(nums[right])) {
        mpp.set(nums[right], mpp.get(nums[right]) + 1);
      } else {
        mpp.set(nums[right], 1);
      }

      while (mpp.size > k) {
        mpp.set(nums[left], mpp.get(nums[left]) - 1);
        if (mpp.get(nums[left]) === 0) mpp.delete(nums[left]);
        left++;
      }
      if (mpp.size <= k) {
        cnt = cnt + (right - left + 1);
      }
      right++;
    }

    return cnt;
  }

  let subarrayLessthanEqualK = findSubArray(nums, k);
  let subarrayLessthanEqualKMinus1 = findSubArray(nums, k - 1);

  return subarrayLessthanEqualK - subarrayLessthanEqualKMinus1;
}
function mains() {
  let nums = [1, 2, 1, 2, 3];
  let k = 2;

  let result = subArrayWithKDifferentIntegersOpt(nums, k);
  console.log(result);
}

mains();
