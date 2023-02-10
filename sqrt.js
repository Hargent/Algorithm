/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // create start and end
    let start = 0;
    let end = x - 1;
    let arr = Array.from({ length: x }, (end, start) => start + 1);

    // create a list of  numbers between 0 and x
    // use binary search to check if  squares of the num
    // if non, run helper funcition again using a diff middle
    // if it ends up between two num in the list, return the lowest
    return arr
};
console.log(mySqrt(4));
console.log(mySqrt(8));
