const findAvgOfSubarrays = (arr, k) => {
    //sliding window approach
let results = 0;
let windowStart = 0;
let windowSum = 0;

for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  windowSum += arr[windowEnd];

  if (windowEnd >= k - 1) {
    let avg = windowSum / k;
    if (avg >= results) {
      results = avg;
    }

    windowSum -= arr[windowStart];

    windowStart++;
  }
}
return results;
};

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

console.log(findAvgOfSubarrays(arr, k));
