// 왼쪽, 오른쪽 키패드에 해당하는 숫자들
const leftNums = [1, 4, 7];
const rightNums = [3, 6, 9];

// 수업 풀이
function solution(numbers, hand) {
  let answer = '';
  const current = { // 두 손가락의 마지막 위치를 저장하는 객체
    "left": 10,  // 1번 키패드 기준으로 '*'은 10번째 위치
    "right": 12, // 1번 키패드 기준으로 '#'은 12번째 위치
  };
  
  for (let i = 0; i < numbers.length; i++) {
    if (leftNums.includes(numbers[i])) { // 키패드가 1, 4, 7 인 경우
      answer += 'L';
      current['left'] = numbers[i]; // 왼쪽 손가락 위치 변경
    } else if (rightNums.includes(numbers[i])) { // 키패드가 3, 6, 9 인 경우
      answer += 'R';
      current['right'] = numbers[i]; // 오른쪽 손가락 위치 변경
    } else { // 키패드가 2, 5, 8, 0 인 경우
      const locationObj = { ...current }; // 왼쪽, 오른쪽 손가락 위치의 거리 가져오기
      
      for (let hand in locationObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i]; // 0번을 눌러야하는 경우 11로 지정하기
        
        // 목표 키패드 기준으로 각 손가락의 거리값을 구하기(음수일 경우 절댓값 처리)
        let location = Math.abs(numbers[i] - locationObj[hand]);
        
        // 거리가 3 이상인 경우 위아래 이동이 가능하다는 의미
        if (location >= 3) {
          location = Math.trunc(location / 3) + location % 3;
        }
        locationObj[hand] = location;
      }
      
      if (locationObj.left === locationObj.right) {
        answer += hand === 'left' ? 'L' : 'R';
        current[hand] = numbers[i];
      } else {
        if (locationObj.left > locationObj.right) {
          answer += 'R';
          current['right'] = numbers[i];
        } else {
          answer += 'L';
          current['left'] = numbers[i];
        }
      }
    }
  }
  
  return answer;
}