// Given an array of integers nums and an integer k. 
//A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There is no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

// Constraints:

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length

// The question is the same as Binary subarray with sum

function countNiceSubArray(nums, k) {
  let n = nums.length;

  if (n === 0) return 0;
  function countNiceSubArrayT(nums, k) {
    if (k < 0) return 0;
    let right = 0,
      left = 0,
      cnt = 0,
      sum = 0;

    while (right < n) {
      sum += nums[right] % 2;
      while (sum > k) {
        if (nums[left] % 2 === 1) {
          sum--;
        }
        left++;
      }

      cnt = cnt + (right - left + 1);
      right++;
    }

    return cnt;
  }

  let OddLessthanEQaulK = countNiceSubArrayT(nums, k);
  let OddLessthanKMinus1 = countNiceSubArrayT(nums, k - 1);

  return OddLessthanEQaulK - OddLessthanKMinus1;
}

function mains() {
  let nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
  let k = 2;
  let result = countNiceSubArray(nums, k);

  console.log(result);
}

mains();

//  Complex Analysis

// Time Complexity is  O(2 * 2N)
// Space Complexity is O(1)