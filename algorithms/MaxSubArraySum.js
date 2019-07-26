function maxSubarraySum(numbers, numLength){
    let max = 0;
    let aux = 0
    if(numbers.length < numLength){ return null}
    
    for(let i = 0; i < numbers.length; i++){
        if(i < numLength){
           max += numbers[i];
           aux = max;
        }else{
          aux += numbers[i];
          aux -= numbers[i - numLength];
          if(aux > max){
              max = aux;
          }
        }
    }
    return max;
  }