import { myForEach } from "./myForEach.js";
import { myMap } from "./myMap.js";
import { myFilter } from "./myFilter.js";
import { myReduce } from "./myReduce.js";
const arr = [1, 2, 3, 4, 5];

//forEach
const myForEachCB = (element) => {
  console.log(element);
};
myForEach(arr, myForEachCB);

//map
const myMapCB = (element) => {
  return element + 1;
};
var myNewMap = myMap(arr, myMapCB);
console.log(`new array produced afetr adding 1 to each elemrnt ${myNewMap}`);

//filter
const myFilterCB = (element) => {
  if (element % 2 === 0) return element;
};
var myNewFilter = myFilter(arr, myFilterCB);
console.log(
  `new array produced afetr filtering out only even elements ${myNewFilter}`
);

//reduce
const myReduceCB = (accumulator, element) => {
  return accumulator + element;
};

var sum = myReduce(arr, myReduceCB);
console.log(`sum of all the arr element are ${sum}`);
