function solution(progresses, speeds) {
    const dayCounts = new Array(progresses.length);
  const answer = [];
  let completes = [];
  
  for (let i = 0; i < progresses.length; i++) {
    let dayCount = 0;
    
    while (progresses[i] < 100) {
      dayCount++;
      progresses[i] += speeds[i];
    }
    
    dayCounts[i] = dayCount;
  }
  
  for (let i = 0; i < progresses.length; i++) {
    if (i === 0) {
      completes.push(dayCounts[i]);
      continue;
    }
    
    if (completes.at(0) >= dayCounts[i]) {
      completes.push(dayCounts[i]);
    } else {
      answer.push(completes.length);
      completes = [];
      completes.push(dayCounts[i]);
    }
      
      if (i === progresses.length - 1) {
        answer.push(completes.length);
      }
  }
    
    return answer;
}