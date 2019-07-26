function averagePair(numbers, average){
    // Given a sorted array of integers
    let start = 0;
    let end = numbers.length - 1;
    while(start < end){
        let avg = (numbers[start] + numbers[end]) / 2;
        if( avg == average){ return true}
        if(avg > average){
          end--; 
          }else{
            start++;
        }
    }
    
    return false;
  }