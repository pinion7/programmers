function solution(num) {
  // 분석
  // 2로 나눈 나머지가 1이면 홀수 0이면 짝수다.
  
  // 풀이
  // 1은 truthy, 0은 falsy이다.
  if (num % 2) return 'Odd';
  return 'Even';
}