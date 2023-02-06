/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const arr = {};
    for (const num of nums) {
        arr[num] = (arr[num] || 0) + 1;
    }
    return arr;
};
console.log(removeDuplicates([1, 1, 2]));
