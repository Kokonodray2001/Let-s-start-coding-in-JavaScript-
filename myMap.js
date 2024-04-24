const newArr = [];
export const myMap = (arr, callBack) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    var element = arr[i];
    newArr.push(callBack(element));
  }
  return newArr;
};
