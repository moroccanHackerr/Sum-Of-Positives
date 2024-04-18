function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((acc,curr) => acc + curr)
  // let initValue = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if(arr[i] > 0){
  //     initValue += arr[i]
  //   }
  // }
  // return initValue;
}

console.log(positiveSum([1,3,5,2,6,-3,2]));
