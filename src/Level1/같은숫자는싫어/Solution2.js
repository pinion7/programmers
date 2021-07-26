function solution(arr) {
  // 풀이2
  // 필터로 한방에 끝낼 수도 있다.
  // 필터에 요소와 인덱스를 주고, 현재 값과 다음 인덱스 값을 계속 체킹하여 트루만 남긴다.
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}