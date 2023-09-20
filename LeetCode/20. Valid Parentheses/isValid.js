// 여는 괄호인지 확인
function isOpeningBraces(char) {
  return ["(", "{", "["].includes(char);
}

// 괄호의 짝이 맞는지 확인
function isMatch(openingBrace, closingBrace) {
  return closingBrace === { "(": ")", "{": "}", "[": "]" }[openingBrace];
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const char of s) {
    // 여는 괄호는 스택에 추가
    if (isOpeningBraces(char)) {
      stack.push(char);
    }
    // 닫는 괄호일 때 괄호 유효성 확인
    else {
      const openingBrace = stack.pop();

      // 닫는 괄호가 있지만 스택에 여는 괄호가 없으면 유효하지 않음
      if (!openingBrace) {
        return false;
      }

      // 괄호의 짝이 맞지 않으면 유효하지 않음
      if (!isMatch(openingBrace, char)) {
        return false;
      }
    }
  }

  // 닫는 괄호에 해당하는 여는 괄호를 제거했는데도 아직 스택에 괄호가 남아 있다면 유효하지 않음
  if (stack.pop()) {
    return false;
  }

  return true;
};
