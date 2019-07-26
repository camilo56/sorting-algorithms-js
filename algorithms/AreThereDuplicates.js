function areThereDuplicates(...items) {
    let auxObj = {};
    for(let item of items){
        auxObj[item] = -~auxObj[item];
        if(auxObj[item] > 1){
            return true
        }
    }
    return false;
}