'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((item1)=>collectionB.includes(item1));
}
