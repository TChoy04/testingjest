const analyzeArray = (array) => {
  let res = { avg: 0, min: array[0], max: 0, length: 0 };
  array.forEach((num) => {
    if (num < res.min) res.min = num;
    if (num > res.max) res.max = num;
    res.avg += num;
    res.length++;
  });
  res.avg /= res.length;
  return res;
};
export default analyzeArray;
