/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const nextNum = nums[i + 1];

    if (num < nextNum || nextNum === undefined) {
      nums.splice(insertIndex, 0, num);
      nums.splice(i, 1);
      insertIndex++;
    }
  }
  return insertIndex;
};
