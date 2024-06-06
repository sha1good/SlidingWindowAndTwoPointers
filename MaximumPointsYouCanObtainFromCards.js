// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
// Constraints:

// 1 <= cardPoints.length <= 105
// 1 <= cardPoints[i] <= 104
// 1 <= k <= cardPoints.length

// Sliding Window Approach: Instead of checking all possible subarrays of length k,
// this approach first calculates the sum of the last k elements. Then,
// it uses a sliding window to efficiently find the maximum sum
// by adding elements from the start of the array and removing elements from the end of the array.
// Initialization: The steps variable was removed as it is unnecessary in the optimized approach.

const maximumFromCards = (cardPoints, k) => {
  let n = cardPoints.length;
  let totalSum = 0;

  //Calculate the total sum of the last k cards
  for (i = n - k; i < n; i++) totalSum += cardPoints[i];

  // I assigned the current value of the totalsum to the maxSum
  let maxSum = totalSum;
  console.log(maxSum + "================");

  // Use a sliding window to find the maximum sum of k cards from start
  for (let i = 0; i < k; i++) {
    // Total sum is still 12
    totalSum += cardPoints[i] - cardPoints[n - k + i];
    console.log(totalSum);
    if (totalSum > maxSum) {
      maxSum = totalSum;
    }
  }

  return maxSum;
};
function main() {
  let cardPoints = [1, 2, 3, 4, 5, 6, 1];
  let k = 3;

  let result = maximumFromCards(cardPoints, k);
  console.log(result);
}

main();

// Time Complexity: O(2k)
// Space Complexity: O(1)

console.log(" This is optimal solution ================ ");

function maximumFromCardsOpt(cardPoints, k) {
  let leftSum = 0,
    rightSum = 0,
    maxSum = 0;
  let n = cardPoints.length;
  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }

  maxSum = leftSum;
  let rIndex = n - 1; // This is the index of the last element of the cardPoints
  // Loop throgh from  k -1 till 0 because I will remove one element from the left  and pick one from righ
  // And the trends continue;
  for (let i = k - 1; i >= 0; i--) {
    leftSum = leftSum - cardPoints[i]; // k-1, k -2, k -3
    rightSum = rightSum + cardPoints[rIndex];
    rIndex = rIndex - 1; // another n - 2, n -3...

    maxSum = Math.max(maxSum, leftSum + rightSum);
  }
  return maxSum;
}
function mains() {
  let cardPoints = [1, 2, 3, 4, 5, 6, 1];
  let k = 3;

  let result = maximumFromCardsOpt(cardPoints, k);
  console.log(result);
}

mains();

// Time Complexity: O(2k)
// Space Complexity: O(1)
