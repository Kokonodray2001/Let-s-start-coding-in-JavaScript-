export const myReduce = (arr, callBack) => {
  var result = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    var element = arr[i];
    result = callBack(result, element);
  }
  return result;
};
