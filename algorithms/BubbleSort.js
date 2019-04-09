module.exports = function (data){
    let swapped = false;
    do{
        swapped = false;
        for(let i = 0; i < data.length; i++){
            if(data[i] > data[ i + 1]){
                let aux = data[i];
                data[i] = data[ i + 1]; 
                data[ i + 1] = aux;
                swapped = true;
            }
        }
    }
    while(swapped)

    return data;
}