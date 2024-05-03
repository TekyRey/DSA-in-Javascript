const maximumSumSubarray = (arr, k) =>{
    // const sums = []
    let maxSum = 0
    let windowStart = 0;
    let windowSum = 0

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]

        if(windowEnd >= k-1){
            // if(sums.length === 0) sums.push(windowSum)
            // if(windowSum >= sums[0]){
            //     sums.pop()
            //     sums.push(windowSum)
            // }
            maxSum = Math.max(maxSum, windowSum)

            windowSum -= arr[windowStart]

            windowStart++
        }
    }return maxSum
}

const arr = [1, 3, 2,-1, 6, 4, 1, 8, 2];
const k = 5;

console.log(maximumSumSubarray(arr, k));
