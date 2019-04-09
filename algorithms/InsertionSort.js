module.exports = function (data){
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < i; j++){
            if(data[i] < data[j]){
                data.splice(j, 0, data.splice(i, 1));
            }
        }

    }

    return data;
}