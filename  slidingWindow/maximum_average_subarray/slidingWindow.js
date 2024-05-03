const findAvgOfSubarrays = (arr, k) => {
    //sliding window approach

    // const results = []
    let maxAvg = []
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        //add the next element
        windowSum += arr[windowEnd]

        //slide the window foward
        //we don't need to slide if we have not hit the required window size of k
        if( windowEnd >= k-1){
            //we are **Automatically** returning the window average once we have hit the window size
            //and pushing to the output array
            let avg = windowSum / k;
            // maxAvg = Math.max(maxAvg, windowSum/k)
            if (maxAvg.length === 0) maxAvg.push(avg);
            if (avg >= maxAvg[0]) {
              maxAvg.pop();
              maxAvg.push(avg);
            }
            // results.push(avg)
        
        //subtract element going out of sliding window
        windowSum -= arr[windowStart]

        //then sliding the window foward
        windowStart++

        //adding the element coming in, in the outer/previous loop
        //and repeating this process untill we ht the end of the array
    }
}
return maxAvg[0];
};

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

console.log(findAvgOfSubarrays(arr, k));
