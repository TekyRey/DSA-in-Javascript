const findAvgOfSubarrays = (arr, k) => {
  const results = [];

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    results.push(sum / k);
  }
  return results;
};

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

console.log(findAvgOfSubarrays(arr, k));

/**
 * Time complexity: since for every element we are calculating the sum of k elements,
 * the time complexity is O(N) where n is the number of elements in the input array
 * Space complexity is also O(N) becuse we are creating extra space results = []
 */
