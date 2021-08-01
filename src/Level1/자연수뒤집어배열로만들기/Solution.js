function solution(num) {
  // 분석
  // 일반적인 방법은 unshift를 활용하여 넣어주는 것이다.
  // 내장메소드로 문자열화, 배열화, 리버스, 맵등을 고루 써줘도 된다.
  
  // 풀이 1 - 베이직한 풀이
  let arr = [];
  let str = String(num);
  for (let el of str) {
      arr.unshift(el * 1);
  }
  return arr;
  
  // 풀이 2 - 내장 메소드 활용한 풀이
  // 줄이 길면 아래에 써줘도 된다.
  return num.toString().split('')
      .reverse().map(el => el * 1);
}