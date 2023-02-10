/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let arr = [];
    const permutate = (n) => {
        if (n === 0) return;

        console.log(n);
    };
    for (let i = 0; i < n; i++) {
        permutate(i + 1);
    }
    return arr[k];
};

/*
123
132
213
231
312
321
*/
console.log(getPermutation(3, 3));
// console.log(getPermutation(4, 9));
// console.log(getPermutation(3, 1));
