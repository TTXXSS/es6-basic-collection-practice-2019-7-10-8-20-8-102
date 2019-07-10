'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let getSameElement=[];
  let sameElement=[];
  getSameElement=collectionA.filter((item)=>objectB.value.includes(item.key));
  for(let i=0;i<getSameElement.length;i++)
  sameElement.push(getSameElement[i].key);
  return sameElement;
}
