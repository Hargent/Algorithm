function selection_sort(arr: number[]): number[] {
    // Iterate through the loop and find the minimum, then move it to the front
    // Then start from the next position until the last number
    const n = arr.length;
    for(let i = 0; i < n-1; i++){
        // set the index of the min intial val
        let min_index = i;
        for(let j = i+1; j < n; j++){
        // if a new min is found, update the min_index
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        // if the min_index is not the same as the current index, swap them
        if(min_index !== i){
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
        }
    }
    return arr;
}

// Test algorithm
const sellection_sorted = selection_sort([5,4,3,10,2,1]);
console.log(sellection_sorted);
