/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(' ').reverse() ;
    let ans;

    var id = 0;
    const helper =(val)=>{
    
        if (arr.length === val){
            
            return val
        }
        if (arr[val].length === 0){
            val++
           
            helper(val);
        }
        if(arr[val].length !== 0){
            
            ans = arr[val].length;
            
        }
        
    }
    helper(id)
    return ans;
        }


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy "))