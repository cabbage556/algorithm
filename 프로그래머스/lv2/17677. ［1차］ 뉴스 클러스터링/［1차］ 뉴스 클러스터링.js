// 자카드 유사도
function solution(str1, str2) {
  // 입력으로 들어온 문자열은 두 글자씩 끊어 다중집합의 원소로 만든다.
  // 영문자로 된 글자 쌍만 유효하다.
  // 기타 공백, 숫자, 특수 문자가 들어 있는 글자 쌍은 버린다.
  // 'ab+'인 경우, 'ab'만 다중집합의 원소로 삼는다. 'b+'는 버린다.

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const set1 = []; // 다중집합1
  const set2 = []; // 다중집합2
  const chars = "abcdefghijklmnopqrstuvwxyz"; // 영문자만 유효

  // 다중집합1 구하기
  for (let i = 0; i < str1.length - 1; i++) {
    const pair = str1[i] + str1[i + 1];
    // 영문자가 아니면 다중집합에서 제외
    if (!chars.includes(pair[0]) || !chars.includes(pair[1])) {
      continue;
    }

    set1.push(pair);
  }

  // 다중집합2 구하기
  for (let i = 0; i < str2.length - 1; i++) {
    const pair = str2[i] + str2[i + 1];
    // 영문자가 아니면 다중집합에서 제외
    if (!chars.includes(pair[0]) || !chars.includes(pair[1])) {
      continue;
    }

    set2.push(pair);
  }

  // 두 다중집합이 모두 공집합인 경우
  if (set1.length === 0 && set2.length === 0) {
    return 65536;
  }
  // 두 다중집합 중 하나라도 공집합인 경우
  else if (set1.length === 0 || set2.length === 0) {
    return 0;
  }

  let intersectionLength = 0; // 교집합 갯수

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        intersectionLength++; // 같으면 교집합 갯수 1 증가
        set2[j] = "@"; // 다중집합2에 있던 요소에 @를 넣어서 다음 번에 계산하지 않도록 함
        break;
      }
    }
  }

  const unionLength = set1.length + set2.length - intersectionLength; // 합집합: 두 집합의 합 - 교집합
  return Math.floor((intersectionLength / unionLength) * 65536);
}