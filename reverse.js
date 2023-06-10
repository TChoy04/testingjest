const reverse = (word) => {
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
};
export default reverse;
