  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  function quicksort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let leftArr  = [];
  let rightArr = [];
  let pivot = arr[arr.length-1];
  for(let i = 0; i < arr.length-1; i++){
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
}
return [...quicksort(leftArr),pivot,...quicksort(rightArr)];

}

module.exports = [quicksort];


