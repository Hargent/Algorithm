/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function (n, k) {
//     let arr = [];
//     const permutate = (n) => {
//         if (n === 0) return;

//         console.log(n);
//     };
//     for (let i = 0; i < n; i++) {
//         permutate(i + 1);
//     }
//     return arr[k];
// };
function permute(num) {
    num = num.toString();
    let results = [];

    function backtrack(first = 0) {
        if (first === num.length) {
            results.push(num);
            return;
        }

        for (let i = first; i < num.length; i++) {
            // Swap the current element with the first element
            [num[first], num[i]] = [num[i], num[first]];
            backtrack(first + 1);
            // Swap the elements back to their original position
            [num[first], num[i]] = [num[i], num[first]];
        }
    }

    backtrack();
    return results;
}

console.log(permute(123));

/*
123
132
213
231
312
321
*/
// console.log(getPermutation(3, 3));
// console.log(getPermutation(4, 9));
// console.log(getPermutation(3, 1));
