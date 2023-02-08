/**
 * @param {string} s
 * @return {number}
 */
// WHILE LOOP WILL NOT WORK
var myAtoi = function (s) {
    let ans = 0;
    let sign = 1;
    let i = 0;
    // ignoring leading whiteSpaces
    s.trim();
    // console.log(s[i]);
    for (let i = 0; i < s.length; i++) {
        // while (i < s.length) {
        //    if the element is a sign:
        if (s[i] === "+" || s[i] === "-") {
            // console.log(`Testing sign....`);
            sign = s[i] === "-" ? -1 : 1;
            // test if the following element is a digit
            // if (!/[0-9]/.test(s[i + 1])) {
            //
            if (!isNumeric(s[i + 1])) {
                // console.log(`Testing for digit element after sign....`);
                return (ans = 0);
            }
        }
        //    test if the  element is a digit:
        // if (/[0-9]/.test(s[i])) {
        //
        if (isNumeric(s[i])) {
            // console.log(s[i]);
            // console.log(`Testing for digit element....`);

            // console.log(ans, s[i]);
            ans = ans * 10 + +s[i];

            // if its not a digit, break
            // if (!/[0-9]/.test(s[i + 1])) {
            //
            if (!isNumeric(s[i + 1])) {
                // console.log(
                //     `Testing for digit element after the previous digit`
                // );
                break;
            }
        }
        // i++;
        // test if the element is a letter:
        // if (/[a-zA-Z.]/.test(s[i])) {
        //
        if (isLetter(s[i])) {
            // console.log(`Testing for alphabrtic element `);

            return 0;
        }
        // i++;
        // console.log(`loop ${i} done`);
        // console.log(ans);
    }
    // check for boundary
    // console.log(isNumeric(""));
    return sign === -1
        ? Math.max(-(2 ** 31), -ans)
        : Math.min(2 ** 31 - 1, ans);
};
const isNumeric = (str) => {
    // return /[0-9]/.test(str)
    if (typeof str != "string") return false; // we only process strings!
    return (
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
};
const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-zA-Z.]/i);
};
console.log(myAtoi(".1"));
// console.log(isNumeric("."));
console.log("===========================");
console.log(myAtoi(".1"));
console.log(myAtoi(",1"));
console.log(myAtoi("+1"));
console.log(myAtoi("   -42"));
console.log(myAtoi("42"));
console.log(myAtoi("4193 with word22'8's"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("21474836460"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("00000-42a1234"));
console.log(myAtoi("  0000000000012345678"));
