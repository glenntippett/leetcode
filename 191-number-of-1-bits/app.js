/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  n = n.toString(2).split("");
  let count = 0;
  n.forEach((num) => {
    if (num === "1") {
      count++;
    }
  });
  return count;
};
