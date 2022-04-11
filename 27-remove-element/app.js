/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (nums[i] === val) {
        let placeholder = nums[i];
        nums[i] = nums[j];
        nums[j] = placeholder;
        nums.pop();
      }
    }
  }
};
