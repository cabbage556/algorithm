function solution(n, t, m, p) {
  // n: 진법 (2 ~ 16)
  // t: 미리 구할 숫자의 갯수
  // m: 게임에 참가하는 인원
  // p: 튜브의 순서
  // return: 튜브가 말해야 하는 숫자를 문자열로

  let answer = ""; // 튜브가 말해야 하는 숫자
  let turn = 1;
  let number = 0;

  // m명 중 마지막일 때 나머지 계산을 위해 p에 0 할당
  if (m === p) {
    p = 0;
  }

  // 튜브가 말해야 하는 숫자의 갯수가 t개일 때까지
  while (answer.length < t) {
    let converted = number.toString(n).toUpperCase(); // n진법 변환(10~15는 대문자로)

    // 변환해서 한자리씩 말하기
    for (let i = 0; i < converted.length; i++) {
      if (answer.length === t) {
        break;
      }

      if (turn % m === p) {
        answer += converted[i];
      }
      turn++;
    }

    number++; // 다음 숫자
  }

  return answer;
}