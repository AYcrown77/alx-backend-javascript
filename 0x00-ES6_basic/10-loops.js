export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (const string of array) {
    myArr.push(appendString + string);
  }

  return myArr;
}
