function getMinute(time) {
  time = time.split(":").map(Number);
  return time[0] * 60 + time[1];
}

function solution(fees, records) {
  // fees: 주차 요금을 나타내는 정수 배열 [기본시간(분), 기본요금(원), 단위시간(분), 단위요금(원)]
  // records: 자동차 입/출차 내역을 나타내는 문자열 배열, 원소: "시각 차량번호 IN/OUT"
  // return: 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 담은 정수 배열

  const [baseTime, baseFee, unitTime, unitFee] = fees; // 기본시간, 기본요금, 단위시간, 단위요금
  const carObj = new Map();
  const totalTime = new Map();
  const fee = [];

  for (const record of records) {
    const [time, carNumber, inOrOut] = record.split(" ");

    if (inOrOut === "OUT") {
      const timeWhenCarIn = carObj.get(carNumber).time;
      const timeWhenCarOut = getMinute(time);
      const existingTotalTime = totalTime.get(carNumber) ?? 0;
      totalTime.set(
        carNumber,
        existingTotalTime + (timeWhenCarOut - timeWhenCarIn)
      );
      carObj.set(carNumber, { time: timeWhenCarIn, isIn: false });
    } else {
      carObj.set(carNumber, { time: getMinute(time), isIn: true });
    }
  }

  for (const [carNumber, value] of carObj) {
    // 00:00 전에 출차한 차량
    if (!carObj.get(carNumber).isIn) {
      continue;
    }

    // 23:59에 출차했다고 가정한 차량
    const timeWhenCarIn = value.time;
    const timeWhenCarOut = getMinute("23:59");
    const existingTotalTime = totalTime.get(carNumber) ?? 0;
    totalTime.set(
      carNumber,
      existingTotalTime + (timeWhenCarOut - timeWhenCarIn)
    );
  }

  totalTime.forEach((total, carNumber) => {
    fee.push([carNumber, total]);
  });

  fee.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < fee.length; i++) {
    const [carNumber, total] = fee[i];

    if (total <= baseTime) {
      fee[i][1] = baseFee;
      continue;
    }

    let totalFee = baseFee;
    if ((total - baseTime) % unitTime !== 0) {
      totalFee += Math.ceil((total - baseTime) / unitTime) * unitFee;
    } else {
      totalFee += ((total - baseTime) / unitTime) * unitFee;
    }
    fee[i][1] = totalFee;
  }

  return fee.map((el) => el[1]);
}