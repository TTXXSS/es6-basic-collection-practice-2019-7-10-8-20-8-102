'use strict';

module.exports = function countSameElements(collection) {
//先将数组转化为Set数据类型，然后再转回数组类型
  let copyNoSameCollection = Array.from(new Set(collection));
  let collectionHasNumOfSameElement=[];
  let obj=[];
  copyNoSameCollection.forEach(i => {
    let count=0;
    collection.forEach(j => {
      if(i===j) 
      count++;
  });
  obj[i]=count;
    
  });
  for(let i in obj){
    collectionHasNumOfSameElement.push({key:i,count:obj[i]});
  }
  
  return collectionHasNumOfSameElement;
}
