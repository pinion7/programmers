function solution(s) {
  // 풀이 2
  // 내장메소드를 아직 배우지 않았거나 익숙치 않다면 이렇게 풀어도 베스트에 가깝다.
  // 풀이 1랑 비교해도 속도의 차이도 없다.
      
  // 1. 카운트할 변수 선언
  let countP = 0;
  let countY = 0;
  
  // 2. 카운트하기
  for (let i = 0; i < str.length; ++i) {
      if (str[i] === 'P' || str[i] === 'p') ++countP;
      else if (str[i] === 'Y' || str[i] === 'y') ++countY;
  }
  
  // 3. 비교 후 반환하기
  if (countP === countY) return true;
  return false;
}