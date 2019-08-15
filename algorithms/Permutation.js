module.exports = function (items){
  otherPermutations(items);

  for (let j = 1; j < items.length; j++){
    let auxItems = [...items];
    auxItems.unshift(auxItems.splice(j, 1));

    otherPermutations(auxItems);
  }
}
  
function otherPermutations(newItems){
  let [first, ...others] = newItems;

  for (let i = 0; i < others.length; i++) {
    others.unshift(others.pop());
    console.log(first + "," + others);
  }
}
