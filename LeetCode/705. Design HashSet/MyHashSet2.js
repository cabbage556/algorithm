var ListNode = function (key, next = null) {
  this.key = key;
  this.next = next;
};

var MyHashSet = function () {
  // 해시 셋의 사이즈를 소수로 설정
  //  키와 버킷 매핑 시 충돌 문제 완화
  this.size = 1009;

  // 버킷을 저장하는 배열
  this.buckets = new Array(this.size).fill(null);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  // 키를 해시 셋의 사이즈로 나눈 나머지를 인덱스로 사용
  const index = key % this.size;
  const bucket = this.buckets[index];

  // 키와 매핑된 버킷이 없으면 노드 추가
  if (!bucket) {
    this.buckets[index] = new ListNode(key);
    return;
  }

  let current = bucket;
  while (current) {
    // 이미 버킷의 링크드 리스트에 키가 존재한다면 추가하지 않음
    if (current.key === key) {
      return;
    }
    // 마지막 노드까지 순회했을 때 키가 존재하지 않는다면 다음 노드로 키를 추가
    if (!current.next) {
      current.next = new ListNode(key);
      return;
    }

    current = current.next;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  // 키와 매핑된 버킷이 없으면 아무것도 하지 않음
  if (!bucket) {
    return;
  }

  // 링크드 리스트의 첫 번째 노드에 키가 존재한다면 첫 번째 노드 제거
  let current = bucket;
  if (current.key === key) {
    this.buckets[index] = current.next;
    return;
  }

  while (current.next) {
    // 다음 노드에 키가 존재한다면 다음 노드 제거
    if (current.next.key === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  let current = bucket;
  while (current) {
    // 노드에 키가 존재한다면 true 리턴
    if (current.key === key) {
      return true;
    }
    current = current.next;
  }

  // 노드에 키가 존재하지 않으면 false 리턴
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const hashSet = new MyHashSet();
hashSet.add(1009);
hashSet.add(0);
hashSet.add(0);
hashSet.remove(1009);

console.log(hashSet.buckets[0]);
console.log(hashSet.contains(0));
console.log(hashSet.contains(1009));
