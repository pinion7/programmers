function solution(num) {
  // 분석
  // 문자열화 시켜서 자르고, 다시 넘버타입화 시켜 더해주면 된다.
  
  // 풀이 1 - 베이직한 풀이
  // 문자열로 만들고 반복문으로 더해주자.
  let str = String(num);
  let result = 0;
  for (let el of str) {
      // +를 제외한 사칙연산을 가미하면 넘버타입화된다.
      result += el * 1
  }
  return result;
  
  // 풀이 2 - 내장메소드 활용한 풀이
  return num.toString().split('')
      .reduce((acc, curr) => acc + curr * 1, 0);
}