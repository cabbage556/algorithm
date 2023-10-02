/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // slow, fast 포인터
  let slow = nums[0];
  let fast = nums[0];

  // nums 배열에서 사이클 확인하기
  //    두 포인터가 사이클에 존재하는 어떤 지점에서 만날 때까지 두 포인터를 이동시킴
  //    중복값이 존재하므로 사이클에 존재하는 어떤 지점에서 두 포인터가 만날 수 있음
  do {
    slow = nums[slow]; // slow 포인터 한 번에 한 단계만 이동
    fast = nums[nums[fast]]; // fast 포인터 한 번에 두 단계 이동
  } while (slow !== fast);

  // slow 포인터 초기화, fast 포인터 유지
  slow = nums[0];
  while (slow !== fast) {
    // 두 포인터가 만날 때까지 한 단계씩 이동
    //    Floyd 사이클 감지 알고리즘에서 두 포인터가 같은 속도로 움직이면 결국 사이클의 같은 지점에서 만나게 됨
    //    두 포인터가 만나는 지점에 중복값이 위치함
    slow = nums[slow];
    fast = nums[fast];
  }

  // 두 포인터가 만나는 곳이 중복값이 되므로 리턴
  return slow;
};
