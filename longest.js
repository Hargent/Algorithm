/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = [];
    let  arr=[]
    for (let i = 0; i < s.length; i++){
        let count
        if (arr.includes(s[i])) {
            console.log(false);
            
        } else {
            arr.push(s[i]);
            count++
        }
    }
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));

