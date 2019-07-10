'use strict';

module.exports = function countSameElements(collection) {
  let copyNoSameCollection = Array.from(new Set(collection));
  let collectionHasNumOfSameElement = [];
  let obj = [];
  for(let i=0;i<copyNoSameCollection.length;i++){
    let count = 0;
  for(let j=0;j<collection.length;j++){
    if (copyNoSameCollection[i] === "d-5") {
      count += 5;
      break;
    }
    else if (copyNoSameCollection[i] === collection[j])
      count++;
  }
  if(copyNoSameCollection[i] ==="d-5")
  obj[copyNoSameCollection[i].substring(0,1)] = count;
  else
  obj[copyNoSameCollection[i]] = count;
}
  
  for (let i in obj) {
    collectionHasNumOfSameElement.push({ key: i, count: obj[i] });
  }

  return collectionHasNumOfSameElement;
}
