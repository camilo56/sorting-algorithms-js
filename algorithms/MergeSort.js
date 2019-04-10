function MergeSort (data){
    if(data.length < 2){return data}

    const middle = Math.floor(data.length / 2)
    const leftSide = data.slice(0,middle)
    const rightSide = data.slice(middle)

    return merge(MergeSort(leftSide), MergeSort(rightSide))
}

function merge(leftSide, rightSide){
    const newArray = [];

    while(leftSide.length && rightSide.length){
        if(leftSide[0] <= rightSide[0]){
            newArray.push(leftSide.shift())
        }else{
            newArray.push(rightSide.shift())
        }
    }

    return [...newArray, ...leftSide, ...rightSide];
}

module.exports = MergeSort;