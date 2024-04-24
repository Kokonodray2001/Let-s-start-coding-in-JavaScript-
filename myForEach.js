export const myForEach = (arr, callBack) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    var element = arr[i];
    callBack(element);
  }
};
