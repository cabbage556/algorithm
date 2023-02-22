function solution(id_list, report, k) {
  const reporter = {};     // 신고한 유저가 대상으로 삼은 유저가 누구인지 저장
  const reportedList = {}; // 신고된 유저의 누적 신고 횟수 저장
  const answer = [];
  report = [...new Set(report)];  // Set 객체를 사용하여 중복 신고 제거 후 다시 배열로 만들기
  
  for (let i = 0; i < report.length; i++) {
    const info = report[i].split(' ');
    
    // 객체의 값이 undefined인 경우 처리
    if (!reporter[info[0]]) {
      reporter[info[0]] = [];
    }
    if (!reportedList[info[1]]) {
      reportedList[info[1]] = 0;
    }
    
    // 중복 신고 방지 - 같은 유저에 대한 신고 이력 체크 (Set 객체를 사용하지 않는 경우)
    // if (!reporter[info[0]].includes(info[1])) {
    //   reporter[info[0]].push(info[1]); // 신고한 유저가 대상으로 삼은 유저 저장하기
    //   reportedList[info[1]]++;         // 신고된 유저의 누적 신고 횟수 저장하기
    // }
    
    // 같은 유저에 대한 신고 이력 체크(Set 객체 사용하는 경우)
    reporter[info[0]].push(info[1]); // 신고한 유저가 대상으로 삼은 유저 저장하기
    reportedList[info[1]]++;         // 신고된 유저의 누적 신고 횟수 저장하기
  }
  
  for (let i = 0; i < id_list.length; i++) {
    const arr = reporter[id_list[i]] || []; // 신고한 유저가 없는 경우에는 빈 배열 할당
    answer[i] = 0;
    
    for (let j = 0; j < arr.length; j++) {
      if (reportedList[arr[j]] >= k) {  // 누적 신고 횟수가 k번 이상인 경우 이용 정지 메일을 신고 유저에게 보낸 횟수를 전달한다.
        answer[i]++;
      }
    }
  }
  
  return answer;
    
    
//   const reporter = {};     // 신고한 유저가 대상으로 삼은 유저가 누구인지 저장
//   const reportedList = {}; // 신고된 유저의 누적 신고 횟수 저장

//   report = [...new Set(report)];  // Set 객체를 사용하여 중복 신고 제거 후 다시 배열로 만들기
  
//   report.forEach((info) => {
//     info = info.split(' ');
    
//     if (!reporter[info[0]]) reporter[info[0]] = [];
//     if (!reportedList[info[1]]) reportedList[info[1]] = 0;
    
//     reporter[info[0]].push(info[1]);
//     reportedList[info[1]]++;
//   })
  
//   const answer = id_list.map((id) => {
//     const arr = reporter[id] || [];
//     // console.log(id, arr);
    
//     return arr.reduce((acc, cur) => {
//       // console.log(acc, id, cur);
      
//       return acc + (reportedList[cur] >= k ? 1 : 0);
//     }, 0);
//   });
  
//   return answer;
}