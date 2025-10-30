// Implementation of binary search
function binarySearch(arr:number[], num:number){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === num){
            return mid
        }
        if(arr[mid] < num){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return -1
}