// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// var slowestKey = function(releaseTimes, keysPressed) {
//     let slowest =keysPressed[0];
//     let duration = releaseTimes[0];
//     let prev = 0;
//     let i = 0;
//         console.log(releaseTimes);
//         console.log([...keysPressed]);
        
//         while(i < keysPressed.length ){
//             console.log(" prev value is : "+ prev);
//             console.log(" current value is : "+ releaseTimes[i]);
//             console.log("prev difference : "+duration);
//             let diff = releaseTimes[i] - prev
//             if(!(diff > duration) ) {
//                 // i++
//                 // slowest = [...keysPressed][prev]
//                 console.log(false);
                
//             };
//             if(diff >= duration){
//                 console.log(true);

//                 duration = diff
//                 slowest = [...keysPressed][i]
//             }
//             prev = releaseTimes[i]
//             i++
//         console.log(i);
//         console.log(" current difference is : "+diff);
//         console.log("slowest is : " + slowest);
//         console.log("duration is : "+duration);
//         console.log(diff > duration);
//         console.log("==========================");

        
//     }
    
//     //loop through keypressed
//     //do releasetime[i]-releasetime[i-1]for every keypressed
    
//     return ("The slowest is : " + slowest)
// };
// var slowestKey = function(releaseTimes, keysPressed) {
//     const keys = [...keysPressed]; // unpack keysPressed once
//     let slowest = keys[0];
//     let duration = releaseTimes[0];
//     let prev = 0;
    
//     for (let i = 0; i < keys.length; i++) {
//         const diff = releaseTimes[i] - prev;
//         console.log(diff);
//         if (diff > duration || (diff === duration && keys[i] > slowest)) {
//             slowest = keys[i];
//             duration = diff;
//         }
//         prev = releaseTimes[i];
//     }
    
//     return slowest;
// };
var slowestKey = function(releaseTimes, keysPressed) {
    let slowestIndex = 0,
    duration = -1    ;
    // negative value of duration serves as a lower bound for the lowest possible duration
    
    
    for (let i = 0; i < releaseTimes.length; i++) {
        // Ternary operation accounts for the first iteration when i === 0
        const diff = i > 0 ? releaseTimes[i] - releaseTimes[i - 1] : releaseTimes[i];
        // console.log(diff);
        if (diff > duration || (diff === duration && keysPressed[i] > keysPressed[slowestIndex])) { 
            // the and operator accounts for when there a tqo key press with the sanme duration 
            //and its also accounting for lexicographically 
            slowestIndex = i;
        
            duration = diff;
        }
    }
    
    return keysPressed[slowestIndex];
};

console.log(slowestKey([9,29,49,50], "cbcd"))//c
console.log(slowestKey([12,23,36,46,62], "spuda"))//a
