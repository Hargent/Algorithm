/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // let k = 1;
    let arr = nums.splice(n,nums.length-1)
    // console.log(arr);
    let i = 0
    while(i<= (arr.length)|| arr.length !== 0 ){
        // console.log(nums)
        // console.log(arr[i]);
        nums[i] =[nums[i],arr[0]]
        // nums.splice( i, 0, arr[0]); 
        arr.splice(0,1)
        // console.log(arr);
        i++
    }
    return nums.flat()
};
console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2));