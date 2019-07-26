function SameFrequency(num1, num2){
    num1 = num1.toString(); 
    num2 = num2.toString();
    if(num1.length !== num2.length){
        return false;
    }

    let auxObj = {};
    for(let num of num1.toString()){
        auxObj[num] = -~auxObj[num];
    }
  
    for(let num of num2.toString()){
        if(!auxObj[num]){
            return false
        }
    }
  
  return true;
}
