// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits of size N, where fruits[i]  is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow :

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right.
// The picked fruits must fit in one of the baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input:
// N = 3
// fruits [ ] = { 2, 1, 2 }
// Output: 3
// Explanation: We can pick from all three trees.

// Example 2:

// Input:
// N = 6
// fruits [ ] = { 0, 1, 2, 2, 2, 2 }
// Output: 5
// Explanation: It's optimal to pick from trees(0-indexed) [1,2,3,4,5].

// Your Task:
// You don't need to read input or print anything. Your task is to complete function totalFruits() which takes the integer array fruits and its size N as input parameters and returns the maximum number of fruits that you can pick.
// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ N ≤ 105
// 0 ≤ fruitsi < N

function findTotalFruit(array, baskets) {
  if (array.length === 0) return 0;
  let n = array.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let len = 0,
      set = new Set();

    for (let j = i; j < n; j++) {
      set.add(array[j]); // Add it to the set

      if (set.size <= baskets) {
        len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      } else {
        break; // Break out of the loop once the number of fruit we have in the set is greater than what
        // we are  allowed to pick
      }
    }
  }

  return maxLen;
}

function main() {
  let fruits = [0, 1, 2, 2, 2, 2];
  let baskets = 2;

  let result = findTotalFruit(fruits, baskets);
  console.log(result);
}

main();

//Time complexity is O(n * N)
// Space  complexity is O(3)

console.log(" This is another solution ");

function findTotalFruitT(fruits, baskets) {
  if (fruits.length === 0) return 0;
  let n = fruits.length;
  let map = new Map();

  let left = 0,
    right = 0,
    maxLen = 0;

  while (right < n) {
    let len = 0;
    //Removed the if (map.has(fruits[right])) block because map.set(fruits[right],
    //(map.get(fruits[right]) || 0) + 1); already handles the increment.
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
    // if (map.has(fruits[right])) {
    //   map.set(fruits[right], map.get(fruits[right]) + 1);
    // }

    // map.set(fruits[right], 1);

    while (map.size > baskets) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) map.delete(fruits[left]);
      left++;
    }
    if (map.size <= baskets) {
      len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }

    right++;
  }

  return maxLen;
}
function mains() {
  let fruits = [0, 1, 2, 2, 2, 2];
  let baskets = 2;

  let result = findTotalFruitT(fruits, baskets);
  console.log(result);
}

mains();
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(" This is the solution with map Object");

function findTotalFruitObj(fruits, baskets) {
  if (fruits.length === 0) return 0;
  let n = fruits.length;
  let map = {};

  let left = 0,
    right = 0,
    maxLen = 0;

  while (right < n) {
    let len = 0;
    if (map[fruits[right]]) {
      map[fruits[right]]++;
    } else {
      map[fruits[right]] = 1;
    }

    //let size = Object.keys(map).length; // Object.entries(map).length
    //console.log(size);

    while (Object.keys(map).length > baskets) {
      map[fruits[left]]--;
      if (map[fruits[left]] === 0) delete map[fruits[left]];
      left++; // I incremented the value of left
    }

    if (Object.keys(map).length <= baskets) {
      len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }

    right++;
  }

  return maxLen;
}
function maint() {
  let fruits = [0, 1, 2, 2, 2, 2];
  let baskets = 2;

  let result = findTotalFruitObj(fruits, baskets);
  console.log(result);
}

maint();

// Time Complexity: O(n)
// Space Complexity: O(1)
