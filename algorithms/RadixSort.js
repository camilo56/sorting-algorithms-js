module.exports = function (array){
  let maxDigit = mostDigits(array);
  for(let i = 0; i < maxDigit; i++){
    let buckets = Array.from({length: 10}, () => []);

    for(let k = 0; k < array.length; k++){
      let digit = getDigit(array[k], i);
      buckets[digit].push(array[k]);
    }

    array = [].concat(...buckets);
  }

  return array;
}

function mostDigits(nums){
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
  if(num === 0){return 1};
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
