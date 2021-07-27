function solution(a, b) {
  // 분석
  // 반복문을 돌려서 a, b까지의 숫자를 합해주면 된다.
  
  // 풀이 1 - 기초적 접근 방식
  // 1. a가 크면 서로를 체인지 해준다. 그를 위해 더미변수를 하나 선언해준다.
  if (a > b) {
      let blank = b;
      b = a;
      a = blank;
  }
      
  // 2. 변수 선언 및 반복문으로 마무리
  let sum = 0;
  for (let i = a; i <= b; ++i) {
      sum += i;
  }
  return sum;    
}