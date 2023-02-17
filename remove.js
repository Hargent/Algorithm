/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // filter an subtract original list length from final list length
  //   nums.forEach((num, i, arr) => {
  //     let end = 0;
  //     if(i !== arr.length - 1) end = 1
  //     console.log(end)
  //     if (num === val) nums.splice(nums.indexOf(num), end);
  //   });

  nums.sort((a, b) => {
    if (a === val) return 1;
    if (b === val) return -1;
  });

  // loop through
  //    let i = 0;
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[j] !== val) {
  //       nums[i] = nums[j];
  //       i++;
  //     }
  //   }
  //   nums.length = i;
  //   return i;
  return nums;
};

// var removeElement = function (nums, val) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }
//   nums.length = i;
//   return i;
// };

console.log(removeElement([3, 2, 2, 3], 3)); //[2,2,_,_] = 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //[0,1,3,4,0]=5
