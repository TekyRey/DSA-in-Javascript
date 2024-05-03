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
