var maximumGap = function(nums) {
  let len = nums.length
  if (len < 2) return 0
  nums = [...nums].sort((a, b) => a - b)
  console.log(nums);
  let result = 0
  for(let i = 1; i < len; i ++) {
    let temp = nums[i] - nums[i - 1]
    result = temp > result ? temp : result
  }

  return result
};

let res = maximumGap([3, 6, 9, 1])

console.log(res);
