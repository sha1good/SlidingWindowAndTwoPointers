// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// Constraints:

// 1 <= nums.length <= 3 * 104
// nums[i] is either 0 or 1.
// 0 <= goal <= nums.length

function binarySubArraySum(binary, goal) {
  let maxLen = 0;
  let n = binary.length;

  for (let i = 0; i < n; i++) {
    let sum = 0,
      len = 0;

    for (let j = i; j < n; j++) {
      sum += binary[j];
      len = j - i + 1;
      if (sum === goal) {
        maxLen = Math.max(maxLen, len);
      }
    }
  }
  return maxLen;
}

function main() {
  let binary = [1, 0, 1, 0, 1];
  let goal = 2;
  let result = binarySubArraySum(binary, goal);

  console.log(result);
}
main();

//Time complexity is O(n * N)
// Space complexity  is O(1)

console.log("This is  another solution =============");
function binarySubArraySumOpt(binary, goal) {
  let n = binary.length;
  if (n === 0) return 0;

  function binarySubArraySum1(binary, goal) {
    if (goal < 0) return 0;
    let right = 0,
      left = 0,
      sum = 0,
      cnt = 0;

    while (right < n) {
      sum += binary[right];

      while (sum > goal) {
        sum = sum - binary[left];
        left++;
      }
      cnt = cnt + (right - left + 1);

      right++;
    }
    return cnt;
  }
  let sumLethanGoal = binarySubArraySum1(binary, goal);
  console.log(sumLethanGoal);
  let sumLethanGoalMinus1 = binarySubArraySum1(binary, goal - 1);
  console.log(sumLethanGoalMinus1);
  return sumLethanGoal - sumLethanGoalMinus1;
}
function mains() {
  let binary = [1, 0, 1, 0, 1];
  let goal = 2;
  let result = binarySubArraySumOpt(binary, goal);

  console.log(result);
}

mains();

//Time complexity is O( 2 * 2n) Where n is the number of elements in the array. I am using two loop 
 // and I  am calling the binarySubArraySum1 2 times. 
// Space complexity  is O(1). No space was used.