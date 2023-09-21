/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const days = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]] // 현재 기온이 스택의 마지막 기온보다 높은 경우만
    ) {
      // 현재 기온 날짜와 스택의 마지막 기온 날짜의 차이 계산
      const poppedIndex = stack.pop();
      days[poppedIndex] = i - poppedIndex;
    }

    stack.push(i);
  }
  return days;
};
