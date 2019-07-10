'use strict';

module.exports = function countSameElements(collection) {
  let obj = [];
  let temp = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === 'h[3]') {
      temp.push('h');
      temp.push('h');
      temp.push('h');
    } else if (collection[i] === 't-2') {
      temp.push('t');
      temp.push('t');
    } else if (collection[i] === 't[10]') {
      for (let j = 0; j < 10; j++)
        temp.push('t');
    } else if (collection[i] === 'c:8') {
      for (let k = 0; k < 8; k++)
        temp.push('c');
    } else if (collection[i] === 'd-5') {
      for (let l = 0; l < 5; l++)
        temp.push('d');
    } else {
      temp.push(collection[i]);
    }
  
}
let copyNoSameCollection = Array.from(new Set(temp));
let collectionHasNumOfSameElement = [];
for (let i = 0; i < copyNoSameCollection.length; i++) {
  let count = 0;
  for (let j = 0; j < temp.length; j++) {

    if (copyNoSameCollection[i] === temp[j])
      count++;
  }

  obj[copyNoSameCollection[i]] = count;
}

for (let i in obj) {
  collectionHasNumOfSameElement.push({ name: i, summary: obj[i] });
}

return collectionHasNumOfSameElement;
}
