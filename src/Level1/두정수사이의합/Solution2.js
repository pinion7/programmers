function solution(a, b) {
  // 풀이 -  Math 함수를 쓴, 좀 더 스마트한 방식.    
  // 변수 선언 및 반복문 한번으로 마무리
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); ++i) {
      sum += i;
  }
  return sum;
}