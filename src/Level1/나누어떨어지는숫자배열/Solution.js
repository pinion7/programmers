function solution(arr, divisor) {
  // 분석
  // 그냥 주어진 문제의 설명대로, 나누어 떨어지면 포함시키고, 아니면 제외시키는 방식으로 배열을 리턴하면 된다.
  
  // 풀이
  // 1. 나누어 떨어지면 남기고, 오름차순으로 정렬해준다.
  // 2. 아무것도 없을시 빈배열 반환이 아니라 -1을 반환해야 하기 때문에 변수에 담아주자.
  const result = arr.filter(el => el % divisor === 0).sort((a, b) => a - b)
  
  if (result.length === 0) return [-1]
  return result;
}