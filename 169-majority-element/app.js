// Given an array nums of size n, return the majority element
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  const keys = Object.keys(obj);
  let max = 0;
  let maxKey = null;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] > max) {
      max = obj[keys[i]];
      maxKey = keys[i];
    }
  }
  return maxKey;
}
