// 링크드 리스트 노드
var ListNode = function (key, value, next = null) {
  // (key, value) 쌍을 저장하므로 key도 노드에 추가
  this.key = key;
  this.value = value;
  this.next = next;
};

var MyHashMap = function () {
  // 해시 맵의 사이즈를 소수로 설정
  //  키와 맵을 매핑 시 충돌 문제 완화
  this.size = 1009;
  this.map = new Array(this.size).fill(null);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const keyIndex = key % this.size;
  const bucket = this.map[keyIndex];

  // 키에 대응하는 버킷이 없으면 새로운 노드 생성
  if (!bucket) {
    this.map[keyIndex] = new ListNode(key, value);
    return;
  }

  let current = bucket;
  while (current) {
    // 키가 중복된다면 값 업데이트
    if (current.key === key) {
      current.value = value;
      return;
    }

    // next 노드가 없으면 next 노드에 새로운 노드 생성 후 할당
    if (!current.next) {
      current.next = new ListNode(key, value);
      return;
    }
    current = current.next;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const keyIndex = key % this.size;
  const bucket = this.map[keyIndex];

  // 키에 대응하는 버킷이 없으면 -1 리턴
  if (!bucket) {
    return -1;
  }

  // 첫 번째 노드의 키와 같다면 value 리턴
  if (bucket.key === key) {
    return bucket.value;
  }

  let current = bucket;
  while (current.next) {
    // next 노드의 키와 같다면 next 노드의 value 리턴
    if (current.next.key === key) {
      return current.next.value;
    }

    current = current.next;
  }

  // 버킷에 존재하는 노드들의 키와 모두 같지 않다면 -1 리턴
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const keyIndex = key % this.size;
  const bucket = this.map[keyIndex];

  // 키에 대응하는 버킷이 없다면 종료
  if (!bucket) {
    return;
  }

  // 첫 번째 노드의 키와 같다면 첫 번째 노드에 다음 노드를 할당하여 첫 번째 노드 제거(링크드 리스트의 참조 관계에서 제외)
  let current = bucket;
  if (current.key === key) {
    this.map[keyIndex] = current.next;
    return;
  }

  while (current.next) {
    // next 노드의 키와 같다면 next 노드 제거(링크드 리스트의 참조 관계에서 제외)
    if (current.next.key === key) {
      current.next = current.next.next;
      return;
    }

    current = current.next;
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hashMap = new MyHashMap();
hashMap.put(0, 10);
hashMap.put(0, 100);
hashMap.put(0, 1000);
hashMap.put(1009, 100);
hashMap.put(1009, 1);
hashMap.put(1009, 10);
hashMap.put(2018, 1000);

hashMap.remove(1009);

console.log(hashMap.map[0]);
