module.exports = function (data){
  let swapped = false;
  for(let i = data.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(data[j] > data[j+1]){
        swapped = true;
        let tem = data[j];
        data[j] = data[j + 1];
        data[j+1] = tem;
      }
    }

    if(swapped){
      break;
    }
  }

    return data;
}