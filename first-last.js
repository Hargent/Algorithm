/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     const lastIndex = nums.lastIndexOf(target);
// 	const firstIndex = nums.indexOf(target);
// 	// let other = [];
// 	let arr = [firstIndex,  lastIndex];
// 	// for (let i = firstIndex; i < lastIndex; i++) other.push(i);
// 	// console.log(firstIndex, lastIndex, arr);
// 	return arr;
// };
var searchRange = function (nums, target) {
	let start = 0,
		end = nums.length - 1,
		firstIndex = -1,
		lastIndex = -1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	if (nums[start] !== target) {
		return [-1, -1];
	}
	firstIndex = start;
	end = nums.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (nums[mid] <= target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	lastIndex = end;
	return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
