function twoSum(arr, sum) {
  if (arr === [] && sum === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [i, j];
      } else {
        continue;
      }
    }
  }
}

console.log(twoSum([1, 2, 5, 5, 8], 10));

module.exports = twoSum;
