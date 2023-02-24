/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    console.log('place'+n+'queens');
    let arr =[];
    for(let i = 0;i <n ;i++){
        let subArr = [];
        for(let j = 0;j <n ;j++){
            subArr.push(j)
        }
        arr.push(subArr)
    }
    console.log(arr)
    
};
console.log(solveNQueens(4))
// console.log(solveNQueens(1))
// console.log(solveNQueens(2))