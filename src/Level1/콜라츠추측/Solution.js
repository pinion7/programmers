function solution(num) {
  // 분석
  // 하라는 대로 하면 된다.
  
  // 풀이
  // 카운트 변수를 선언하고 while 문으로 해결한다.
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;
    ++count;
    
    if (count === 500) return -1;
  }
  
  return count;
}