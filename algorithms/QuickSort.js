function QuickSort (data){
    if(data.length <= 1){return data}

    const leftSide = [];
    const rightSide = [];
    const length = data.length - 1;
    const pivot = data[length];

    for(let i = 0; i < length; i++){
        if(data[i] <= pivot){
            leftSide.push(data[i]);
        }
        else{
            rightSide.push(data[i]);
        }
    }

    return [...QuickSort(leftSide), pivot, ...QuickSort(rightSide)];
}

module.exports = QuickSort;