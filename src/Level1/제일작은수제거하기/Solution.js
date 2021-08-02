function solution(arr) {
  // 분석
  // 최소값을 찾은 뒤 해당 값을 제거한다
  // 그러고 빈배열이면 -1을 리턴, 아니면 남은 배열 리턴
  
  // 풀이
  // 우선 최소값 인덱스를 받고, splice로 제거
  let minIdx = arr.indexOf(Math.min(...arr));
  arr.splice(minIdx, 1);
  
  // 빈 배열이면 -1, 아니면 배열 반환
  if (arr.length === 0) return -1;
  return arr;
}