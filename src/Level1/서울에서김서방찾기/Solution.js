function solution(seoul) {
  // 풀이
  // for문으로도 가능하지만, indexOf라는 좋은 함수가 있으므로 써주자.
  // 인덱스 탐색해서 바로 반환하면 되는데, 벡틱(리터럴)을 쓰면 더 간단하다.
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}