/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);

    if (arr.length % 2 !== 0) {
        return arr[(arr.length - 1) / 2];
    } else {
        return (
            (arr[(arr.length - 1) / 2 - 0.5] +
                arr[(arr.length - 1) / 2 + 0.5]) /
            2
        );
    }
};
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2]));
