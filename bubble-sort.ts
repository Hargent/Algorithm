function bubble_sort(arr:Array<number>):Array<number>{
    let n = arr.length;
    // start from the first number
    // iterate through the list and any number larger than the current number
    // swap the numbers
    for(let i = 0; i < n; i++){
        // after every iteration, the largest number will be at the end of the list
        // so we can ignore the last number in the next iteration
        let swapped = false; // For early termination
        for(let j = 0; j < n-i-1; j++){
            // compare the current number with the next number  
            // if the current number is larger than the next number, swap them
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true; // Set swapped to true if a swap occurred
            }
        }
        // If no swaps, array is sorted
        if(!swapped) break;

    }
  
    return arr;
}

const sorted = bubble_sort([5,4,3,10,2,1]);
console.log(sorted);