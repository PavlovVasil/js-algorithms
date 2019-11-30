/**
 * Sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and
 * putting it at the beginning. The algorithm maintains two subarrays in a given array.
 *  1) The subarray which is already sorted.
 *  2) Remaining subarray which is unsorted.
 * In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted
 * subarray is picked and moved to the sorted subarray.
 */

let arr = [3, 5, 1, -22, 0, 201, -10, 84]

const sort = (arr) => {
    const sortedArr = [...arr];
    const n = sortedArr.length;
    // One by one move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted part of the array 
        let min_idx = i;
        for (let j = i + 1; j < n; j++)
            if (sortedArr[j] < sortedArr[min_idx])
                min_idx = j;
        // Swap the found minimum element with the current element 
        [sortedArr[i], sortedArr[min_idx]] = [sortedArr[min_idx], sortedArr[i]]
    }
    return sortedArr;
}

console.log(sort(arr));