/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
 
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (nums[middle] !== target) {
        // console.log(start,end, middle,nums);
        target < nums[middle] ? (end = middle - 1) : (start = middle + 1);
        if (start > end) {
            if(nums[middle]>target) return middle;
            if(nums[middle]<target) return middle+1;
            return;
        };
        middle = Math.floor((end + start) / 2);
    }
    // console.log(middle);
    return middle;

};
console.log(searchInsert([1,2,3,5],4))
console.log(searchInsert([1,2,3,4,5,6],7))
console.log(searchInsert([1,2,3,5],2))
console.log(searchInsert([1,2,3,5],20))