/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    if (x % 10 === 0) {
        return false;
    }
    let count = 1;
    let arr = [];

    const helper = (val) => {
        let _old = val % 10 ** (count - 1);
        let _new = val % 10 ** count;
        let _num = (_new - _old) / 10 ** (count - 1);

        arr.push(_num);

        if (val % 10 ** count === val) {
            return arr;
        }
        if (val % 10 ** count > 0) {
            count++;
            helper(val);
        }
    };
    helper(x);
    let revArr = [];
    arr.length > 1 ? (revArr = [...arr]).reverse() : true;

    if (arr.length > 1) {
        return arrayEquals(arr, revArr);
    } else {
        return true;
    }

    function arrayEquals(a, b) {
        return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
        );
    }
};
console.log(isPalindrome(0));
console.log(isPalindrome(1));
console.log(isPalindrome(1423456543241));
console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
