function solution(common) {
    const isEmdck = common[1] - common[0] === common[2] - common[1];
  
    return isEmdck
              ? common[common.length - 1] + (common[1] - common[0])
              : common[common.length - 1] * (common[1] / common[0]);
}