// // Yes, the algorithm can be optimized in the following ways:

// // Instead of creating an array of all integers from 1 to x, you can use binary search to find the square root of x directly.

// // The condition x < arr[middle] ** 2 can be simplified to middle > x / middle.

// // The return value in the final if statement can be simplified to just middle since middle will always be the largest integer that is less than or equal to the square root of x.
// var mySqrt = function (x) {
// 	let start = 0;
// 	let end = x;
// 	let middle = Math.floor((start + end) / 2);

// 	console.log(middle);
// 	while (middle > x / middle) {
// 		end = middle - 1;
// 		middle = Math.floor((start + end) / 2);
// 		console.log(middle);
// 	}

// 	return middle * middle === x ? middle : middle - 1;
// };
// // 	let result = x;
// // 	let precision = 0.00001;

// // const helper = res => {
// // 	if (Math.abs(x - res * res) > precision) {
// // 		result = (res + x / res) / 2;
// // 		helper(result);
// // 	}
// // };
// // helper(result);
// // while (Math.abs(x - result * result) > precision) {
// // 	result = (result + x / result) / 2;
// // }
// // return Math.floor(result);
// // };
// // console.log(mySqrt(4));
// // console.log(mySqrt(8));
// console.log(mySqrt(16));
// // console.log(mySqrt(0));
// // console.log(mySqrt(1));
// // console.log(mySqrt(-2));
// console.log(mySqrt(2147395599));

var mySqrt = function (x) {
	if (x === 0 || x === 1) return x;
	if (x < 0) return undefined;

	let start = 0;
	let end = x;
	let middle = Math.floor((start + end) / 2);

	while (middle !== x / middle) {
		if (start > end) return middle;
		if (middle > x / middle) {
			end = middle - 1;
			middle = Math.floor((start + end) / 2);
		}
		if (middle < x / middle) {
			start = middle + 1;
			middle = Math.floor((start + end) / 2);
		}
	}

	return middle;
};

// console.log(mySqrt(16));
// console.log(mySqrt(1));
console.log(mySqrt(8));
// console.log(mySqrt(0));
// console.log(mySqrt(-4));
