// 토큰의 연산자 여부 확인
const isOperator = function (token) {
  return ["+", "-", "*", "/"].includes(token);
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // RPN: https://en.wikipedia.org/wiki/Reverse_Polish_notation
  const stack = [];
  for (const token of tokens) {
    // 토큰이 연산자가 아니면 스택에 추가
    if (!isOperator(token)) {
      stack.push(token * 1);
      continue;
    }

    // 토큰이 연산자이면 스택에서 숫자 두 개를 꺼냄
    const firstOperand = stack.pop();
    const secondOperand = stack.pop();
    let result;

    // 토큰에 따라 결과 계산
    if (token === "+") result = secondOperand + firstOperand;
    else if (token === "-") result = secondOperand - firstOperand;
    else if (token === "*") result = secondOperand * firstOperand;
    else result = Math.trunc(secondOperand / firstOperand); // 소수점은 버리고 정수만 계산

    // 결과를 다시 스택에 추가
    stack.push(result);
  }

  return stack[0];
};
