const newArr = [];
export const myFilter = (arr, callBack) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    var element = arr[i];
    if (callBack(element)) newArr.push(element);
  }
  return newArr;
};
