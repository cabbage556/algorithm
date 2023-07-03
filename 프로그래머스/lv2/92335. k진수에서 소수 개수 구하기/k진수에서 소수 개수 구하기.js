function isPrimeNumber(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  // 양의 정수 n을 k진수로 바꿨을 때 변환된 수안에 조건에 맞는 소수가 몇 개인지 알아보기

  let answer = 0;
  let temp = n.toString(k); // 양의 정수 n을 k진수로 변환한 문자열
  temp = temp
    .split("0")
    .filter((el) => el !== "")
    .map(Number);

  temp.forEach((el) => {
    // 소수 확인
    if (isPrimeNumber(el)) {
      answer++;
    }
  });

  return answer;
}